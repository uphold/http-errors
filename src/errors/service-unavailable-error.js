'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Service Unavailable" error.
 */

module.exports = class ServiceUnavailableError extends HttpError {
  /**
   * Constructor.
   */

  constructor() {
    super(503, ...arguments);
  }
};
