# http-errors

This module provides a set of errors based on [standard-http-error](https://www.npmjs.com/package/standard-http-error), reducing the boilerplate of adding error classes for the most common HTTP errors.

## Setup

Add **@uphold/http-errors** to *package.json* dependencies with the latest version:

```json
{
  "dependencies": {
    "@uphold/http-errors": "git+ssh://git@github.com/uphold/http-errors#v1.0.0"
  }
}
```

Install it afterwards:

```sh
$ yarn
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

| Name                  | Code | Default message  |
|:----------------------|:-----|:-----------------|
| BadRequestError       | 400  | Bad Request      |
| ConflictError         | 409  | Conflict         |
| ForbiddenError        | 403  | Forbidden        |
| GoneError             | 410  | Gone             |
| NotFoundError         | 404  | Not Found        |
| UnauthorizedError     | 401  | Unauthorized     |
| ValidationFailedError | 400  | ValidationFailed |

## Usage

Import and throw an HTTP error:

```js
const { ForbiddenError, UnauthorizedError } = require('@uphold/http-errors');

function authorize(user, permission) {
  if (!user.role) {
    throw new UnauthorizedError('User needs to authenticate');
  }

  if (permission === 'admin' && user.role !== 'admin') {
    throw new ForbiddenError('Only admins allowed', { role: 'admin' })
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
$ yarn test
```

To test and check coverage use the `cover` script:

```sh
$ yarn cover
```

A full coverage report will be generated on *test/coverage* folder.

## Contributing

Please create a PR with a description of the changes, its motivation and impacted areas, making sure the build passes.

## Release

```sh
$ yarn release [<version> | major | minor | patch]
```

## License

[Private](/LICENSE)
