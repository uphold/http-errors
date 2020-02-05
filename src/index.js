'use strict';

/**
 * Export errors.
 */

module.exports = {
  AssertionFailedError: require('./errors/assertion-failed-error'),
  BadRequestError: require('./errors/bad-request-error'),
  ConflictError: require('./errors/conflict-error'),
  ForbiddenError: require('./errors/forbidden-error'),
  GoneError: require('./errors/gone-error'),
  HttpError: require('./errors/http-error'),
  NotFoundError: require('./errors/not-found-error'),
  ServiceUnavailableError: require('./errors/service-unavailable-error'),
  UnauthorizedError: require('./errors/unauthorized-error'),
  ValidationFailedError: require('./errors/validation-failed-error')
};
