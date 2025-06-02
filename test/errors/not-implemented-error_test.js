'use strict';

/**
 * Module dependencies.
 */

const { NotImplementedError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Not Implemented` error.
 */

describe('NotImplementedError', () => {
  testHttpError(NotImplementedError, 501, 'Not Implemented', false);
});
