## E-commerce website...

## Path: "/s/subject"

```js
// get the books
GET = "https://{{backend.com}}/subjective-books
      ?_type={{any type of book}}
      &_categories=[]
      &_sub_categories=[]
      &_authors=[]
      &_rating=5
      &_price=[min, max]
      &_page=1
      &_limit=8"

    // These `query` are for filtering: (not always pass through query)
    query = {_type, _page, _limit, _categories, _sub_categories, _rating, _price}

   // get the `res` according the `query`
   // `totalCount` is the total document size according to `_type` for pagination.
    res = { books, totalCount };

```

```js
// get the filtering content (categories)
GET = "https://{{backend.com}}/filter-by-categories
      ?_type={{any type of book}}
      &_authors=[]"

    // These `query` are for filtering: (not always pass through query)
    query = { _type, _authors }

    // get the `res` of `categories` are filtered by `_author` and `_type`
    res = { categories }

```

```js
// get the filtering content (sub_categories)
GET = "https://{{backend.com}}/filter-by-subCategories
      ?_categories=[]"

    // These `query` are for filtering: (not always pass through query)
    query = { _categories }

    // get the `res` of `sub_categories` are filtered by `_categories`
    res = { sub_categories }

```

```js
// get the filtering content (authors)
GET = "https://{{backend.com}}/filter-by-authors
      ?_type={{any type of book}}
      &_categories[]
      &_sub_categories[]"

    // These `query` are for filtering: (not always pass through query)
    query = { _type, _categories, _sub_categories }

    // // get the `res` of `price` are filtered by `query` value
    res = { authors }

```

```js
// get the max and min price (price)
GET = "https://{{backend.com}}/filter-by-price
      ?_type={{any type of book}}
      &_authors=[]
      &_categories[]
      &_sub_categories[]"

    // These `query` are for filtering: (not always pass through query)
    query = { _type, _authors, _categories, _sub_categories }

    // get the `res` of `price` are filtered by `query` value
    res = { price }

```

## Path: "/b/:book"

```js
// get book by it's id
GET = "https://{{backend.com}}/books/b/:book";

// get the response
// total total rating count
res = { book, avgRating };
```

```js
// get related books
GET = "https://{{backend.com}}/books/related-books";

// get `relatedBooks` and `youMayAlsoLike` by `categories` and `subCategories`
// but ignore `_id` book that is already existed.
query = { _id, _categories, _sub_categories, _limit };

// get the response
// in `relatedBooks`, existing `_id` book will disappear
// in `youMayAlsoLike`, existing `_id` book and `relatedBooks` are ignored
res = { relatedBooks, youMayAlsoLike };
```

```js
// create a review
PATCH = "https://{{backend.com}}/books/create-review";

// body
body = { _id, userId, username, rating, review };
```

```js
// remove a review
DETELE = "https://{{backend.com}}/books/delete-review";

// body
body = { _id, userId };
```

```js
// add votes (YES or NO)
POST = "https://{{backend.com}}/books/is-use-full";

// `_id` that gets the review.
// `isUseFul` is that comment useful or not.
// `userId` is the comment of the user that will be gotten a usefull vote.
// `participant` who gives the review.

// body
body = { _id, isUseFull, userId, participant };
```
