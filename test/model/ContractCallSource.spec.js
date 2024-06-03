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
    instance = new CoboWaas2JsApi.ContractCallSource();
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

  describe('ContractCallSource', function() {
    it('should create an instance of ContractCallSource', function() {
      // uncomment below and update the code to test ContractCallSource
      //var instance = new CoboWaas2JsApi.ContractCallSource();
      //expect(instance).to.be.a(CoboWaas2JsApi.ContractCallSource);
    });

    it('should have the property sourceType (base name: "source_type")', function() {
      // uncomment below and update the code to test the property sourceType
      //var instance = new CoboWaas2JsApi.ContractCallSource();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new CoboWaas2JsApi.ContractCallSource();
      //expect(instance).to.be();
    });

    it('should have the property addressStr (base name: "address_str")', function() {
      // uncomment below and update the code to test the property addressStr
      //var instance = new CoboWaas2JsApi.ContractCallSource();
      //expect(instance).to.be();
    });

    it('should have the property mpcUsedKeyGroup (base name: "mpc_used_key_group")', function() {
      // uncomment below and update the code to test the property mpcUsedKeyGroup
      //var instance = new CoboWaas2JsApi.ContractCallSource();
      //expect(instance).to.be();
    });

    it('should have the property delegate (base name: "delegate")', function() {
      // uncomment below and update the code to test the property delegate
      //var instance = new CoboWaas2JsApi.ContractCallSource();
      //expect(instance).to.be();
    });

  });

}));
