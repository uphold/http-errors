'use strict';

/**
 * Module dependencies.
 */

const { ForbiddenError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Forbidden" error.
 */

describe('ForbiddenError', () => {
  test(ForbiddenError, 403, 'Forbidden');
});
