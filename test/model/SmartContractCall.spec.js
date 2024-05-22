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
    instance = new CoboWaas2JsApi.SmartContractCall();
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

  describe('SmartContractCall', function() {
    it('should create an instance of SmartContractCall', function() {
      // uncomment below and update the code to test SmartContractCall
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be.a(CoboWaas2JsApi.SmartContractCall);
    });

    it('should have the property requestId (base name: "request_id")', function() {
      // uncomment below and update the code to test the property requestId
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property requestType (base name: "request_type")', function() {
      // uncomment below and update the code to test the property requestType
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property fromWalletId (base name: "from_wallet_id")', function() {
      // uncomment below and update the code to test the property fromWalletId
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property fromAddressStr (base name: "from_address_str")', function() {
      // uncomment below and update the code to test the property fromAddressStr
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property chainId (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chainId
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property toAddressStr (base name: "to_address_str")', function() {
      // uncomment below and update the code to test the property toAddressStr
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property calldata (base name: "calldata")', function() {
      // uncomment below and update the code to test the property calldata
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property mpcUsedKeyGroup (base name: "mpc_used_key_group")', function() {
      // uncomment below and update the code to test the property mpcUsedKeyGroup
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2JsApi.SmartContractCall();
      //expect(instance).to.be();
    });

  });

}));
