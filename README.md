# Header Parser Middleware

Some headers can be query-string encoded so this middleware makes 2 methods available to access parsed versions of those headers.

### req.getParsed(field)

Returns the specified HTTP request header field (case-insensitive match) that is encoded in query-string format as JSON.

```js
req.get('X-Custom-Header');
// => "foo=bar&baz=My%20Val"

req.getParsed('X-Custom-Header');
/* =>
{
	foo: 'bar',
	baz: 'My Val'
}
*/
```
Aliased for `req.headerParsed(field)`.
