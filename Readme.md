## E-commerce website...

## path: "/s/subject"

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

    // // get the `res` of `price` are filtered by `query` value
    res = { price }

```
