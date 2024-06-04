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
    instance = new CoboWaas2JsApi.CreateCustodialWallet();
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

  describe('CreateCustodialWallet', function() {
    it('should create an instance of CreateCustodialWallet', function() {
      // uncomment below and update the code to test CreateCustodialWallet
      //var instance = new CoboWaas2JsApi.CreateCustodialWallet();
      //expect(instance).to.be.a(CoboWaas2JsApi.CreateCustodialWallet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2JsApi.CreateCustodialWallet();
      //expect(instance).to.be();
    });

    it('should have the property walletType (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property walletType
      //var instance = new CoboWaas2JsApi.CreateCustodialWallet();
      //expect(instance).to.be();
    });

    it('should have the property walletSubtype (base name: "wallet_subtype")', function() {
      // uncomment below and update the code to test the property walletSubtype
      //var instance = new CoboWaas2JsApi.CreateCustodialWallet();
      //expect(instance).to.be();
    });

  });

}));
