const test = require('ava');

const taskFunc = require('./task2');

test('letters in order', t => {
	t.is(taskFunc('aabccccdeeeeffgggggg'), 'a2bc4de4f2g6');
});

test('letters scatter', t => {
	t.is(taskFunc('aavvbguhggtlern'), 'a2beg3hlnrtuv2');
});

test('only big letters', t => {
	t.is(taskFunc('AABBRRYJLEERPL'), 'A2B2E2JL2PR3Y');
});

test('letters with different case', t => {
	t.is(taskFunc('avbnAuiBbBBldfop'), 'aAb2B3dfilnopuv');
});
