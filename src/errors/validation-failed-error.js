'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Validation Failed" error.
 */

module.exports = class ValidationFailedError extends HttpError {

  /**
   * Constructor.
   */

  constructor(errors) {
    super(400, 'Validation Failed', { errors });
  }
};
