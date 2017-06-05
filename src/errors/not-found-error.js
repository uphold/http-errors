'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Not Found" error.
 */

module.exports = class NotFoundError extends HttpError {

  /**
   * Constructor.
   */

  constructor() {
    super(404, ...arguments);
  }
};
