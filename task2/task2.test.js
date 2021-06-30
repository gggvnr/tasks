const test = require('ava');

const taskFunc = require('./task2');

test('only small letters', t => {
	t.is(taskFunc('aabccccdeeeeffgggggg'), 'a2bc4de4f2g6');
});

test('no order', t => {
	t.is(taskFunc('fffsdfasfasfseqrw'), 'f3sdfasfasfseqrw');
});

test('only big letters', t => {
	t.is(taskFunc('AABBRRYJLEERPL'), 'A2B2R2YJLE2RPL');
});
