'use strict';

/**
 * Module dependencies.
 */

const { ValidationFailedError } = require('../../src');
const { describe, test } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Validation Failed` error.
 */

describe('ValidationFailedError', () => {
  testHttpError(ValidationFailedError, 400, 'Validation Failed', false);

  test('should set given `errors`', ({ assert }) => {
    assert.strictEqual(new ValidationFailedError('foo').errors, 'foo');
  });
});
