'use strict';

/**
 * Module dependencies.
 */

const { ServiceUnavailableError } = require('../../src');
const test = require('../utils/test-http-error');

/**
 * Test "Service Unavailable" error.
 */

describe('ServiceUnavailableError', () => {
  test(ServiceUnavailableError, 503, 'Service Unavailable');
});
