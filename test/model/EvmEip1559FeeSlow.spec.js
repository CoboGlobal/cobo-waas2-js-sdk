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
    instance = new CoboWaas2JsApi.EvmEip1559FeeSlow();
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

  describe('EvmEip1559FeeSlow', function() {
    it('should create an instance of EvmEip1559FeeSlow', function() {
      // uncomment below and update the code to test EvmEip1559FeeSlow
      //var instance = new CoboWaas2JsApi.EvmEip1559FeeSlow();
      //expect(instance).to.be.a(CoboWaas2JsApi.EvmEip1559FeeSlow);
    });

    it('should have the property feeTokenId (base name: "fee_token_id")', function() {
      // uncomment below and update the code to test the property feeTokenId
      //var instance = new CoboWaas2JsApi.EvmEip1559FeeSlow();
      //expect(instance).to.be();
    });

    it('should have the property maxPriorityFee (base name: "max_priority_fee")', function() {
      // uncomment below and update the code to test the property maxPriorityFee
      //var instance = new CoboWaas2JsApi.EvmEip1559FeeSlow();
      //expect(instance).to.be();
    });

    it('should have the property baseFee (base name: "base_fee")', function() {
      // uncomment below and update the code to test the property baseFee
      //var instance = new CoboWaas2JsApi.EvmEip1559FeeSlow();
      //expect(instance).to.be();
    });

    it('should have the property gasLimit (base name: "gas_limit")', function() {
      // uncomment below and update the code to test the property gasLimit
      //var instance = new CoboWaas2JsApi.EvmEip1559FeeSlow();
      //expect(instance).to.be();
    });

  });

}));
