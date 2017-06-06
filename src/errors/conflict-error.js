'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Conflict" error.
 */

module.exports = class ConflictError extends HttpError {

  /**
   * Constructor.
   */

  constructor() {
    super(409, ...arguments);
  }
};
