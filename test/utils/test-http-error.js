'use strict';

/**
 * Module dependencies.
 */

const { HttpError } = require('../../src');

/**
 * Test HTTP error.
 */

module.exports = (Error, code, message, testArguments = true) => {
  it('should inherit from `HttpError`', () => {
    expect(new Error()).toBeInstanceOf(HttpError);
  });

  it(`should have a ${code} code`, () => {
    expect(new Error().code).toBe(code);
  });

  it(`should have a "${message}" message`, () => {
    expect(new Error().message).toBe(message);
  });

  if (testArguments) {
    it('should override default message', () => {
      expect(new Error('foo').message).toBe('foo');
    });

    it('should add custom properties', () => {
      expect(new Error({ foo: 'bar' }).foo).toBe('bar');
    });
  }
};
