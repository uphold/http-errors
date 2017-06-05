'use strict';

/**
 * Module dependencies.
 */

const { ConflictError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Conflict" error.
 */

describe('ConflictError', () => {
  test(ConflictError, 409, 'Conflict');
});
