'use strict';

/**
 * Module dependencies.
 */

const { UnauthorizedError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Unauthorized" error.
 */

describe('UnauthorizedError', () => {
  test(UnauthorizedError, 401, 'Unauthorized');
});
