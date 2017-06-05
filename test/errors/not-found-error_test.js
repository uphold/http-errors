'use strict';

/**
 * Module dependencies.
 */

const { NotFoundError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Not Found" error.
 */

describe('NotFoundError', () => {
  test(NotFoundError, 404, 'Not Found');
});
