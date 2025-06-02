'use strict';

/**
 * Module dependencies.
 */

const { HttpError } = require('../../src');
const { describe, it } = require('node:test');
const StandardHttpError = require('standard-http-error');

/**
 * Test `HTTP` error.
 */

describe('HttpError', () => {
  it('should inherit from `StandardHttpError`', ({ assert }) => {
    assert.ok(new HttpError(400) instanceof StandardHttpError);
  });
});
