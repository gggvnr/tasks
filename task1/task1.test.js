const test = require('ava');

const taskFunc = require('./task1');

test('foo', t => {
	t.notThrows(() => {taskFunc, true});
});
