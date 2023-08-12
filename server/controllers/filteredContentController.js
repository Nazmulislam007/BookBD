const Book = require("../models/Books");

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

        /**
         * @param pipeline
         * defining pipeline of aggregate
         */
        let pipeline = [];

        /**
         * @param counterQuery
         * Total count for that particular query
         */
        let counterQuery = {};

        /**
         * @param counterLimit
         * For _type === "Top 50 Books", fixed 50;
         */
        let counterLimit = {};
        let filteredContent = [];

        // get the `categories` according to the `_type`.
        if (_type === "Top 50 Books") {
          filteredContent = await Book.aggregate([
            { $sort: { "saleInfo.totalSales": -1 } },
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
            },
          ]);
        } else if (_type === "Subject") {
          filteredContent = await Book.aggregate([
            {
              $match: {
                _id: { $exists: true },
              },
            },
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
                    in: { $concatArrays: ["$$value", "$$this"] },
                  },
                },
                subCatagory: {
                  $reduce: {
                    input: "$subCatagory",
                    initialValue: [],
                    in: { $concatArrays: ["$$value", "$$this"] },
                  },
                },
                authors: {
                  $reduce: {
                    input: "$authors",
                    initialValue: [],
                    in: { $concatArrays: ["$$value", "$$this"] },
                  },
                },
              },
            },
          ]);
        } else {
          filteredContent = await Book.aggregate([
            {
              $match: {
                $or: [{ catagories: _type }],
              },
            },
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
                    in: { $concatArrays: ["$$value", "$$this"] },
                  },
                },
                subCatagory: {
                  $reduce: {
                    input: "$subCatagory",
                    initialValue: [],
                    in: { $concatArrays: ["$$value", "$$this"] },
                  },
                },
                authors: {
                  $reduce: {
                    input: "$authors",
                    initialValue: [],
                    in: { $concatArrays: ["$$value", "$$this"] },
                  },
                },
              },
            },
          ]);
        }

        /**
         * get the data according to the _type.
         */
        if (_type === "Top 50 Books") {
          pipeline.push({
            $sort: { "saleInfo.totalSales": -1 },
          });
          counterLimit.limit = 50;
        } else if (_type === "Subject") {
          pipeline.push({
            $match: {
              _id: { $exists: true },
            },
          });
        } else {
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
            query.$and.push({ catagories: filteredContent[0].catagories });
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

          counterQuery = query;
          counterLimit = {};
          pipeline.push({
            $match: query,
          });
        }

        if (_page && _limit) {
          pipeline.push({ $skip: skip }, { $limit: limit });
        }

        console.log(pipeline[0].$match.$and);

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
  };
};

module.exports = filteredContent;
