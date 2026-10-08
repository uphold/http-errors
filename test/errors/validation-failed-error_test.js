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

  test('should support the documented `(message, properties)` signature', ({ assert }) => {
    // The single-argument form above is reserved for the `errors` payload, so the documented
    // message/properties contract only applies when a second argument is supplied.
    const error = new ValidationFailedError('my message', { foo: 'bar' });

    assert.equal(error.message, 'my message');
    assert.equal(error.foo, 'bar');
    assert.equal(error.code, 400);
  });
});
