'use strict';

/**
 * Module dependencies.
 */

const StandardHttpError = require('standard-http-error');

/**
 * Export HTTP error.
 */

module.exports = class HttpError extends StandardHttpError {};
