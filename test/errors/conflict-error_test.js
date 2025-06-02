'use strict';

/**
 * Module dependencies.
 */

const { ConflictError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Conflict` error.
 */

describe('ConflictError', () => {
  testHttpError(ConflictError, 409, 'Conflict');
});
