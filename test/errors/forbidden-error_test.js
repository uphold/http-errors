'use strict';

/**
 * Module dependencies.
 */

const { ForbiddenError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Forbidden` error.
 */

describe('ForbiddenError', () => {
  testHttpError(ForbiddenError, 403, 'Forbidden');
});
