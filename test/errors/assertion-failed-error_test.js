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

  it('should support the documented `(message, properties)` signature', ({ assert }) => {
    // The single-argument form above is reserved for the `errors` payload, so the documented
    // message/properties contract only applies when a second argument is supplied.
    const error = new AssertionFailedError('my message', { foo: 'bar' });

    assert.equal(error.message, 'my message');
    assert.equal(error.foo, 'bar');
    assert.equal(error.code, 500);
  });
});
