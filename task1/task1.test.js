const test = require('ava');

const taskFunc = require('./task1');

test('test with the correct short string', t => {
	t.true(taskFunc('abc'));
});


test('test with null', t => {
	t.false(taskFunc(null));
});


test('test with undefined', t => {
	t.false(taskFunc(undefined));

});

test('test with wrong line 1', t => {
	t.false(taskFunc('abbc'));
});

test('test with wrong line 2', t => {
	t.false(taskFunc('aabc'));

});

test('test with wrong line 3', t => {
	t.false(taskFunc('abcc'));

});

test('test with big false stroke', t => {
	t.false(taskFunc('abcqwertyc'));
});

test('test with big correct stroke', t => {
	t.true(taskFunc('abcrtyui'));
});
