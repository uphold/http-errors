'use strict';

/**
 * Module dependencies.
 */

const { UnauthorizedError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Unauthorized` error.
 */

describe('UnauthorizedError', () => {
  testHttpError(UnauthorizedError, 401, 'Unauthorized');
});
