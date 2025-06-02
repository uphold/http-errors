'use strict';

/**
 * Module dependencies.
 */

const { AssertionFailedError } = require('../../src');
const { describe, it } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Assertion Failed` error.
 */

describe('AssertionFailedError', () => {
  testHttpError(AssertionFailedError, 500, 'Assertion Failed', false);

  it('should set given `errors`', ({ assert }) => {
    assert.equal(new AssertionFailedError('foo').errors, 'foo');
  });
});
