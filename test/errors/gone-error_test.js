'use strict';

/**
 * Module dependencies.
 */

const { GoneError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Gone` error.
 */

describe('GoneError', () => {
  testHttpError(GoneError, 410, 'Gone');
});
