const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sum of other', () => {
  it('sum of other #1', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('sum of other #2', () => {
    assert.deepEqual(sumOfOther([5, 10, 15, 20]), [45, 40, 35, 30]);
  });

  it('sum of other #3', () => {
    assert.deepEqual(sumOfOther([20, 15, 10, 5]), [30, 35, 40, 45]);
  });

  it('sum of other #4', () => {
    assert.deepEqual(sumOfOther([2, 4, 6, 8, 10]), [28, 26, 24, 22, 20]);
  });

  it('sum of other #5', () => {
    assert.deepEqual(sumOfOther([1, 1, 2, 2, 3, 3]), [11, 11, 10, 10, 9, 9]);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  it('make #1 add', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('make #2 subtract', () => {
    assert.deepEqual(make(40)(2)(8, 5)(subtract), 25);
  });

  it('make #3 multiply', () => {
    assert.deepEqual(make(5, 2)(10)(-2)(multiply), -200);
  });

  it('make #4 divide', () => {
    assert.deepEqual(make(500)(1, 1, 1, 1)(250)(2)(divide), 1);
  });

  it('make #5 divide by zero', () => {
    assert.deepEqual(make(500)(0)(divide), Infinity);
  });
});

describe('recursion', () => {
  const tree1 = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
  const tree2 = { value: 10, left: { value: 8, left: { value: 7 }, right: { value: 9 } }, right: { value: 12, left: { value: 11 }, right: { value: 13 } } };
  const tree3 = { value: 5, left: { value: 4 }, right: { value: 6 } };
  const tree4 = { value: 'eeny', left: { value: 'meeny', left: { value: 'moe', left: { value: 'by' }, right: { value: 'the' } }, right: { value: 'catch', left: { value: 'toe' }, right: { value: 'if' } } }, right: { value: 'miny', left: { value: 'a', left: { value: 'he' }, right: { value: 'holsters' } }, right: { value: 'tiger', left: { value: 'let' }, right: { value: 'him go' } } } };
  const tree5 = { value: 5 };

  it('recursion #1', () => {
    assert.deepEqual(recursion(tree1), [
      [100],
      [90, 120],
      [70, 99, 110, 130],
    ]);
  });

  it('recursion #2', () => {
    assert.deepEqual(recursion(tree2), [
      [10],
      [8, 12],
      [7, 9, 11, 13],
    ]);
  });

  it('recursion #3', () => {
    assert.deepEqual(recursion(tree3), [
      [5],
      [4, 6],
    ]);
  });

  it('recursion #4', () => {
    assert.deepEqual(recursion(tree4), [
      ['eeny'],
      ['meeny', 'miny'],
      ['moe', 'catch', 'a', 'tiger'],
      ['by', 'the', 'toe', 'if', 'he', 'holsters', 'let', 'him go'],
    ]);
  });

  it('recursion #5', () => {
    assert.deepEqual(recursion(tree5), [
      [5],
    ]);
  });
});