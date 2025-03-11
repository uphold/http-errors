'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Not Implemented" error.
 */

module.exports = class NotImplementedError extends HttpError {
  /**
   * Constructor.
   */

  constructor() {
    super(501, ...arguments);
  }
};
