'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add, multiply } = require('../src/index.js');

test('add returns the sum', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('multiply returns the product', () => {
  assert.strictEqual(multiply(2, 3), 6);
});
