'use strict';

/**
 * Module dependencies.
 */

const { BadRequestError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Bad Request` error.
 */

describe('BadRequestError', () => {
  testHttpError(BadRequestError, 400, 'Bad Request');
});
