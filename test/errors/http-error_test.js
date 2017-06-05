'use strict';

/**
 * Module dependencies.
 */

const { HttpError } = require('../../src');
const StandardHttpError = require('standard-http-error');

/**
 * Test HTTP error.
 */

describe('HttpError', () => {
  it('should inherit from `StandardHttpError`', () => {
    expect(new HttpError(400)).toBeInstanceOf(StandardHttpError);
  });
});
