'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Forbidden" error.
 */

module.exports = class ForbiddenError extends HttpError {

  /**
   * Constructor.
   */

  constructor() {
    super(403, ...arguments);
  }
};
