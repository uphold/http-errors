'use strict';

/**
 * Module dependencies.
 */

const { AssertionFailedError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Assertion Failed" error.
 */

describe('AssertionFailedError', () => {
  test(AssertionFailedError, 500, 'Assertion Failed', false);

  it('should set given `errors`', () => {
    expect(new AssertionFailedError('foo').errors).toBe('foo');
  });
});
