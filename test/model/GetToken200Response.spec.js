/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoboWaas2JsApi);
  }
}(this, function(expect, CoboWaas2JsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2JsApi.GetToken200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetToken200Response', function() {
    it('should create an instance of GetToken200Response', function() {
      // uncomment below and update the code to test GetToken200Response
      //var instance = new CoboWaas2JsApi.GetToken200Response();
      //expect(instance).to.be.a(CoboWaas2JsApi.GetToken200Response);
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instance = new CoboWaas2JsApi.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property tokenType (base name: "token_type")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instance = new CoboWaas2JsApi.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CoboWaas2JsApi.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instance = new CoboWaas2JsApi.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property refreshToken (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property refreshToken
      //var instance = new CoboWaas2JsApi.GetToken200Response();
      //expect(instance).to.be();
    });

  });

}));