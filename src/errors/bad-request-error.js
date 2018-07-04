'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Bad Request" error.
 */

module.exports = class BadRequestError extends HttpError {
  /**
   * Constructor.
   */

  constructor() {
    super(400, ...arguments);
  }
};
