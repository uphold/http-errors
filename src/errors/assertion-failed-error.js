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
   *
   * A single argument is the `errors` payload (typically a validator.js violation tree) and is
   * kept for backwards compatibility. Two or more arguments follow the documented
   * `(message, properties)` contract shared by every other error in this package: previously the
   * second argument was silently discarded, so `new AssertionFailedError('my message', { foo:
   * 'bar' })` produced `message === 'Assertion Failed'` and lost `foo`, contradicting the README.
   */

  constructor(...args) {
    if (args.length >= 2) {
      super(500, ...args);

      return;
    }

    super(500, 'Assertion Failed', { errors: args[0] });
  }
};
