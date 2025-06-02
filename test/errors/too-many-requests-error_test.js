'use strict';

/**
 * Module dependencies.
 */

const { TooManyRequestsError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `TooManyRequestsError` error.
 */

describe('TooManyRequestsError', () => {
  testHttpError(TooManyRequestsError, 429, 'Too Many Requests');
});
