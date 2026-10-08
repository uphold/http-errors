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
   *
   * A single argument is the `errors` payload (typically a validator.js violation tree) and is
   * kept for backwards compatibility. Two or more arguments follow the documented
   * `(message, properties)` contract shared by every other error in this package: previously the
   * second argument was silently discarded, so `new ValidationFailedError('my message', { foo:
   * 'bar' })` produced `message === 'Validation Failed'` and lost `foo`, contradicting the README.
   */

  constructor(...args) {
    if (args.length >= 2) {
      super(400, ...args);

      return;
    }

    super(400, 'Validation Failed', { errors: args[0] });
  }
};
