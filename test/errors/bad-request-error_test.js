'use strict';

/**
 * Module dependencies.
 */

const { BadRequestError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Bad Request" error.
 */

describe('BadRequestError', () => {
  test(BadRequestError, 400, 'Bad Request');
});
