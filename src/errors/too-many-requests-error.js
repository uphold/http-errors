'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Too Many Requests" error.
 */

module.exports = class TooManyRequestsError extends HttpError {
  /**
   * Constructor.
   */

  constructor() {
    super(429, ...arguments);
  }
};
