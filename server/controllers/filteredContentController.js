const Book = require("../models/Books");

function getFormattedQuery({
  _authors,
  _categories,
  _sub_categories,
  _rating,
  _price,
  pipeline,
  getExistingCate,
}) {
  const query = {
    $and: [],
  };

  if (_categories) {
    query.$and.push({ catagories: _categories });
    if (_sub_categories) {
      query.$and.push({ subCatagory: _sub_categories });
    }
  }
  if (_authors) {
    query.$and.push({ authors: _authors });
  }

  if (!_authors && !_categories) {
    query.$and.push({ catagories: getExistingCate[0].catagories });
  }

  if (_price) {
    query.$and.push(
      {
        "saleInfo.discountPrice": { $gte: +_price[0] },
      },
      {
        "saleInfo.discountPrice": { $lte: +_price[1] },
      }
    );
  }

  /**
   * 1. average of the reviews.rating for each document.
   * 2. if average of the reviews.rating is greater than equal to _rating than we will get the data.
   */
  if (_rating) {
    pipeline.push({ $unwind: "$reviews" });
    query.$and.push({
      $expr: {
        $gte: [{ $avg: "$reviews.rating" }, +_rating],
      },
    });
  }

  return query;
}

function filteredByContent({
  limit,
  skip,
  _type,
  _categories,
  _sub_categories,
  _rating,
  _authors,
  _price,
  _page,
  getExistingCate,
}) {
  let pipeline = [];
  let counterQuery = {};
  let counterLimit = {};

  /**
   * get the data according to the _type.
   */
  if (_type === "Top 50 Books") {
    const query = getFormattedQuery({
      pipeline,
      _categories,
      _sub_categories,
      _authors,
      _rating,
      _price,
      getExistingCate,
    });

    counterQuery = query;
    counterLimit.limit = 50;
    pipeline.push(
      {
        $sort: { "saleInfo.totalSales": -1 },
      },
      {
        $match: query,
      }
    );
  } else if (_type === "Subject") {
    const formattedQuery = getFormattedQuery({
      pipeline,
      _categories,
      _sub_categories,
      _authors,
      _rating,
      _price,
      getExistingCate,
    });

    let query = {
      $and: [{ _id: { $exists: true } }, ...formattedQuery.$and],
    };

    counterQuery = query;
    counterLimit = {};
    pipeline.push({
      $match: query,
    });
  } else {
    const query = getFormattedQuery({
      pipeline,
      _categories,
      _sub_categories,
      _authors,
      _rating,
      _price,
      getExistingCate,
    });

    counterQuery = query;
    counterLimit = {};
    pipeline.push({
      $match: query,
    });
  }

  if (_page && _limit) {
    pipeline.push({ $skip: skip }, { $limit: limit });
  }

  return { pipeline, counterQuery, counterLimit };
}

async function getCategoriesByType({ _type }) {
  let pipeline = [];

  // get the `categories` according to the `_type`.
  if (_type === "Top 50 Books") {
    pipeline.push({ $sort: { "saleInfo.totalSales": -1 } });
  } else if (_type === "Subject") {
    pipeline.push({
      $match: {
        _id: { $exists: true },
      },
    });
  } else {
    pipeline.push({
      $match: {
        $or: [{ catagories: _type }],
      },
    });
  }

  pipeline.push(
    {
      $group: {
        _id: _type,
        catagories: { $addToSet: "$catagories" },
        subCatagory: { $addToSet: "$subCatagory" },
        authors: { $addToSet: "$authors" },
      },
    },
    {
      $project: {
        catagories: {
          $reduce: {
            input: "$catagories",
            initialValue: [],
            in: { $setUnion: ["$$value", "$$this"] },
          },
        },
        subCatagory: {
          $reduce: {
            input: "$subCatagory",
            initialValue: [],
            in: { $setUnion: ["$$value", "$$this"] },
          },
        },
        authors: {
          $reduce: {
            input: "$authors",
            initialValue: [],
            in: { $setUnion: ["$$value", "$$this"] },
          },
        },
      },
    }
  );

  const getExistingCate = await Book.aggregate(pipeline);

  return getExistingCate;
}

const filteredContent = () => {
  return {
    getFilteredBooks: async (req, res, next) => {
      try {
        const {
          _page,
          _limit,
          _type,
          _categories,
          _sub_categories,
          _authors,
          _rating,
          _price,
        } = req.query;

        // Converting _page and _limit to numbers
        const pageNumber = +_page;
        const limit = +_limit;

        // getting 5 page as maximum;
        const _max5Page = Math.min(pageNumber, 5);
        const skip =
          (_type === "Top 50 Books" ? _max5Page - 1 : _page - 1) * +_limit;

        const getExistingCate = getCategoriesByType({ _type });

        const { pipeline, counterQuery, counterLimit } = filteredByContent({
          limit,
          skip,
          _type,
          _categories,
          _sub_categories,
          _authors,
          _price,
          _rating,
          getExistingCate,
        });

        const [books, totalCount] = await Promise.all([
          await Book.aggregate(pipeline),
          await Book.countDocuments(counterQuery, counterLimit),
        ]);

        res.status(200).json({
          books,
          totalCount,
        });
      } catch (error) {
        next(error);
      }
    },
    getCategoryList: async (req, res, next) => {
      try {
        const { _type, _authors } = req.query;

        let pipeline = [];

        // get the `categories` according to the `_type`.
        if (_type === "Top 50 Books") {
          pipeline.push({ $sort: { "saleInfo.totalSales": -1 } });
          if (_authors) {
            pipeline.push({
              $match: {
                authors: _authors,
              },
            });
          }
        } else if (_type === "Subject") {
          const query = {
            $match: {
              $and: [{ _id: { $exists: true } }],
            },
          };

          if (_authors) {
            query.$match.$and.push({
              authors: _authors,
            });
          }

          pipeline.push(query);
        } else {
          const query = {
            $match: {
              $and: [{ catagories: _type }],
            },
          };

          if (_authors) {
            query.$match.$and.push({
              authors: _authors,
            });
          }

          pipeline.push(query);
        }

        pipeline.push(
          {
            $group: {
              _id: _type,
              categories: { $addToSet: "$catagories" },
            },
          },
          {
            $project: {
              categories: {
                $reduce: {
                  input: "$categories",
                  initialValue: [],
                  in: { $setUnion: ["$$value", "$$this"] },
                },
              },
            },
          }
        );

        const getExistingCate = await Book.aggregate(pipeline);

        res.status(200).json({ categories: getExistingCate });
      } catch (error) {
        next(error);
      }
    },
    getSubCategoryList: async (req, res, next) => {
      try {
        const { _categories } = req.query;

        let pipeline = [];

        const query = {
          $match: {
            $and: [{ catagories: _categories }],
          },
        };

        pipeline.push(query);

        pipeline.push(
          {
            $group: {
              _id: _categories,
              subCategories: { $addToSet: "$subCatagory" },
            },
          },
          {
            $project: {
              subCategories: {
                $reduce: {
                  input: "$subCategories",
                  initialValue: [],
                  in: { $setUnion: ["$$value", "$$this"] },
                },
              },
            },
          }
        );

        const getExistingSubCate = await Book.aggregate(pipeline);

        res.status(200).json({ subCategories: getExistingSubCate });
      } catch (error) {
        next(error);
      }
    },
    getAuthorList: async (req, res, next) => {
      try {
        const { _type, _categories, _sub_categories } = req.query;

        let pipeline = [];

        // get the `categories` according to the `_type`.
        if (_type === "Top 50 Books") {
          pipeline.push({ $sort: { "saleInfo.totalSales": -1 } });

          const query = {
            $and: [],
          };

          if (_categories) {
            query.$and.push({
              catagories: _categories,
            });
          }

          if (_sub_categories) {
            query.$and.push({
              subCatagory: _sub_categories,
            });
          }

          pipeline.push({
            $match: query,
          });
        } else if (_type === "Subject") {
          const query = {
            $and: [{ _id: { $exists: true } }],
          };

          if (_categories) {
            query.$and.push({
              catagories: _categories,
            });
          }

          if (_sub_categories) {
            query.$and.push({
              subCatagory: _sub_categories,
            });
          }

          pipeline.push({
            $match: query,
          });
        } else {
          const query = {
            $and: [{ catagories: _type }],
          };

          if (_categories) {
            query.$and.push({
              catagories: _categories,
            });
          }

          if (_sub_categories) {
            query.$and.push({
              subCatagory: _sub_categories,
            });
          }

          pipeline.push({
            $match: query,
          });
        }

        pipeline.push(
          {
            $group: {
              _id: _type,
              authors: { $addToSet: "$authors" },
            },
          },
          {
            $project: {
              authors: {
                $reduce: {
                  input: "$authors",
                  initialValue: [],
                  in: { $setUnion: ["$$value", "$$this"] },
                },
              },
            },
          }
        );

        const getExistingAuthors = await Book.aggregate(pipeline);

        res.status(200).json({ authors: getExistingAuthors });
      } catch (error) {
        next(error);
      }
    },
  };
};

module.exports = filteredContent;

// const avgRating = await Book.aggregate([
//   { $match: query },
//   {
//     $group: {
//       _id: "avgRating",
//       avgRating: {
//         $accumulator: {
//           init: function () {
//             return { rating: 0, count: 0 };
//           },
//           accumulate: function (state, newRating) {
//             return {
//               count: state.count + 1,
//               rating: state.rating + Number(newRating),
//             };
//           },
//           merge: function (state1, state2) {
//             return {
//               count: state1.count + state2.count,
//               rating: state1.rating + state2.rating,
//             };
//           },
//           accumulateArgs: ["$reviews.rating"],
//           finalize: function (state) {
//             return {
//               rating: +(state.rating / state.count).toFixed(2),
//               count: state.count,
//             };
//           },
//           lang: "js",
//         },
//       },
//     },
//   },
// ]);
