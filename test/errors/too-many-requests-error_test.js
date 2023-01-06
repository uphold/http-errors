'use strict';

/**
 * Module dependencies.
 */

const { TooManyRequestsError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "TooManyRequestsError" error.
 */

describe('TooManyRequestsError', () => {
  test(TooManyRequestsError, 429, 'Too Many Requests');
});
