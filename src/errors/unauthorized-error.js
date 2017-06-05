'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Unauthorized" error.
 */

module.exports = class UnauthorizedError extends HttpError {

  /**
   * Constructor.
   */

  constructor() {
    super(401, ...arguments);
  }
};
