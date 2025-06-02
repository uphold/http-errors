'use strict';

/**
 * Module dependencies.
 */

const { ServiceUnavailableError } = require('../../src');
const { describe } = require('node:test');
const testHttpError = require('../utils/test-http-error');

/**
 * Test `Service Unavailable` error.
 */

describe('ServiceUnavailableError', () => {
  testHttpError(ServiceUnavailableError, 503, 'Service Unavailable');
});
