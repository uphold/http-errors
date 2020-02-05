'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export `AssertionFailedError`.
 */

module.exports = class AssertionFailedError extends HttpError {
  /**
   * Constructor.
   */

  constructor(errors) {
    super(500, 'Assertion Failed', { errors });
  }
};
