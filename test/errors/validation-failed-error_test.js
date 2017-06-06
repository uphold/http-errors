'use strict';

/**
 * Module dependencies.
 */

const { ValidationFailedError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Validation Failed" error.
 */

describe('ValidationFailedError', () => {
  test(ValidationFailedError, 400, 'Validation Failed', false);

  it('should set given `errors`', () => {
    expect(new ValidationFailedError('foo').errors).toBe('foo');
  });
});
