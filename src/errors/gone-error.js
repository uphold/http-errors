'use strict';

/**
 * Module dependencies.
 */

const HttpError = require('./http-error');

/**
 * Export "Gone" error.
 */

module.exports = class GoneError extends HttpError {

  /**
   * Constructor.
   */

  constructor() {
    super(410, ...arguments);
  }
};
