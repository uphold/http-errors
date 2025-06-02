'use strict';

/**
 * Module dependencies.
 */

const { NotFoundError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Not Found` error.
 */

describe('NotFoundError', () => {
  testHttpError(NotFoundError, 404, 'Not Found');
});
