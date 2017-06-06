'use strict';

/**
 * Module dependencies.
 */

const { GoneError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Gone" error.
 */

describe('GoneError', () => {
  test(GoneError, 410, 'Gone');
});
