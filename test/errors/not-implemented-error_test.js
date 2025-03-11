'use strict';

/**
 * Module dependencies.
 */

const { NotImplementedError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Not Implemented" error.
 */

describe('NotImplementedError', () => {
  test(NotImplementedError, 501, 'Not Implemented', false);
});
