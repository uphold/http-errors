'use strict';

/**
 * Module dependencies.
 */

const { HttpError } = require('../../src');
const { it } = require('node:test');

/**
 * Test `HTTP` error.
 */

module.exports = (Error, code, message, testArguments = true) => {
  it('should inherit from `HttpError`', ({ assert }) => {
    assert.ok(new Error() instanceof HttpError);
  });

  it(`should have a ${code} code`, ({ assert }) => {
    assert.equal(new Error().code, code);
  });

  it(`should have a "${message}" message`, ({ assert }) => {
    assert.equal(new Error().message, message);
  });

  if (testArguments) {
    it('should override default message', ({ assert }) => {
      assert.equal(new Error('foo').message, 'foo');
    });

    it('should add custom properties', ({ assert }) => {
      assert.equal(new Error({ foo: 'bar' }).foo, 'bar');
    });
  }
};
