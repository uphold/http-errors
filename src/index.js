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
  NotImplementedError: require('./errors/not-implemented-error'),
  ServiceUnavailableError: require('./errors/service-unavailable-error'),
  TooManyRequestsError: require('./errors/too-many-requests-error'),
  UnauthorizedError: require('./errors/unauthorized-error'),
  ValidationFailedError: require('./errors/validation-failed-error')
};
