## path: "/s/subject"

```js
GET = "https://{{backend.com}}/subjective-books
      ?_type={{any type of book}}
      &_categories=[]
      &_sub_categories=[]
      &_rating=5
      &_price=[min, max]
      &_page=1
      &_limit=8"

    simple_query = {_type, _page, _limit}

    // These query are for filtering: (not always pass through query)
    filter_query = {_categories, _sub_categories, _rating, _price}

```

### Response:

```js
res = { books, totalCount, categories, sub_categories, authors, price };
```

1. `books`: it gives according to the `simple_query`, also are filtered by `filter_query`.
2. `totalCount`: total document size according to `_type` for pagination.
3. `categories`: according to the `_type` and if `authors` are selected.
4. `sub_categories`: according to the selected `categories`.
5. `authors`: according to the `categories` or `sub_categories`
6. `price[min, max]`: according to the `_type` `min` and `max` value.
