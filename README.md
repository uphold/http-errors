# http-errors

This module provides a set of errors based on [standard-http-error](https://www.npmjs.com/package/standard-http-error), reducing the boilerplate of adding error classes for the most common HTTP errors.

## Status

[![npm version][npm-image]][npm-url]
[![build status][tests-image]][tests-url]

## Setup

Install **@uphold/http-errors** with yarn:

```sh
yarn add @uphold/http-errors
```

Alternatively, with npm:

```sh
npm i @uphold/http-errors
```

## Errors

The `HttpError` serves as base error since all other errors extend it, use it to handle errors provided from this library.

```js
const { BadRequestError, HttpError } = require('@uphold/http-errors');

try {
  throw new BadRequestError();
} catch (e) {
  console.log(e instanceof HttpError);
  // true
}
```

Below is the list of all available errors:

| Name                    | Code | Default message       |
| :---------------------- | :--- | :-------------------- |
| AssertionFailedError    | 500  | Internal Server Error |
| BadRequestError         | 400  | Bad Request           |
| ConflictError           | 409  | Conflict              |
| ForbiddenError          | 403  | Forbidden             |
| GoneError               | 410  | Gone                  |
| NotFoundError           | 404  | Not Found             |
| NotImplementedError     | 501  | Not Implemented       |
| ServiceUnavailableError | 503  | Service Unavailable   |
| TooManyRequestsError    | 429  | Too Many Requests     |
| UnauthorizedError       | 401  | Unauthorized          |
| ValidationFailedError   | 400  | Validation Failed     |

## Usage

Import and throw an HTTP error:

```js
const { ForbiddenError, UnauthorizedError } = require('@uphold/http-errors');

function authorize(user, permission) {
  if (!user.role) {
    throw new UnauthorizedError('User needs to authenticate');
  }

  if (permission === 'admin' && user.role !== 'admin') {
    throw new ForbiddenError('Only admins allowed', { role: 'admin' });
  }

  return true;
}
```

All errors accept a message and a set of properties as arguments, or both:

```js
const { BadRequestError } = require('@uphold/http-errors');

try {
  throw new BadRequestError();
} catch (e) {
  console.log(e);
  // { BadRequestError: Bad Request
  //   at ...
  //   message: 'Bad Request', name: 'BadRequestError', code: 400 }
}

try {
  throw new BadRequestError('foo');
} catch (e) {
  // { BadRequestError: Bad Request
  //   at ...
  //   message: 'foo', name: 'BadRequestError', code: 400 }
}

try {
  throw new BadRequestError({ foo: 'bar' });
} catch (e) {
  console.log(e);
  // { BadRequestError: Bad Request
  //   at ...
  //   message: 'Bad Request', foo: 'bar', name: 'BadRequestError', code: 400 }
}

try {
  throw new BadRequestError('foo', { bar: 'biz' });
} catch (e) {
  console.log(e);
  // { BadRequestError: Bad Request
  //   at ...
  //   message: 'foo', bar: 'biz', name: 'BadRequestError', code: 400 }
}
```

## Test suite

Use the `test` script to run the test suite:

```sh
yarn test
```

To run the tests on watch mode, use the `test:watch` script:

```sh
yarn test:watch
```

To test and check coverage use the `test:coverage` script:

```sh
yarn test:coverage
```

A full coverage report will be generated on `/coverage` folder.

## Contributing

Please create a PR with a description of the changes, its motivation and impacted areas, making sure the build passes.

## Release process

The release of a version is automated via the [release](https://github.com/uphold/http-errors/.github/workflows/release.yml) GitHub workflow.
Run it by clicking the "Run workflow" button.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@uphold/http-errors.svg
[npm-url]: https://www.npmjs.com/package/@uphold/http-errors
[tests-image]: https://github.com/uphold/http-errors/actions/workflows/tests.yaml/badge.svg?branch=master
[tests-url]: https://github.com/uphold/http-errors/actions/workflows/tests.yaml
