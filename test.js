var test = require('tape');
var MockExpressRequest = require('mock-express-request');
var MockExpressResponse = require('mock-express-response');
var headerParser = require('./');

test('Parses a header', function (t) {
	t.plan(4);

	var req = new MockExpressRequest({
		headers: {
			'Server': 'My Dope Ass Server',
			'Via': 'Dat Interwebz',
			'X-Custom-Header': 'foo=bar&baz=My%20Val'
		}
	});
	var res = new MockExpressResponse();

	headerParser(req, res, function () {
		t.deepEqual(req.getParsed('X-Custom-Header'), {foo: 'bar', baz: 'My Val'}, '.getParsed() parse value');
		t.deepEqual(req.headerParsed('X-Custom-Header'), {foo: 'bar', baz: 'My Val'}, '.headerParsed() parse value');
		t.equal(req.get('X-Custom-Header'), 'foo=bar&baz=My%20Val', '.get() original value');
		t.equal(req.header('X-Custom-Header'), 'foo=bar&baz=My%20Val', '.header() original value');
		t.end();
	});
});
