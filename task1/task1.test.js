const test = require('ava');

const taskFunc = require('./task1');

test('a', t => {
	t.true(taskFunc('abc'));
});


test('b', t => {
	t.false(taskFunc(null));
});


test('c', t => {
	t.false(taskFunc(undefined));

});

test('d', t => {
	t.false(taskFunc('abbc'));
});

test('e', t => {
	t.false(taskFunc('aabc'));

});

test('f', t => {
	t.false(taskFunc('abcc'));

});

test('g', t => {
	t.false(taskFunc('abcqwertyc'));
});

test('h', t => {
	t.true(taskFunc('abcrtyui'));
});
