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
    instance = new CoboWaas2JsApi.EstimateWithdrawFee();
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

  describe('EstimateWithdrawFee', function() {
    it('should create an instance of EstimateWithdrawFee', function() {
      // uncomment below and update the code to test EstimateWithdrawFee
      //var instance = new CoboWaas2JsApi.EstimateWithdrawFee();
      //expect(instance).to.be.a(CoboWaas2JsApi.EstimateWithdrawFee);
    });

    it('should have the property activityType (base name: "activity_type")', function() {
      // uncomment below and update the code to test the property activityType
      //var instance = new CoboWaas2JsApi.EstimateWithdrawFee();
      //expect(instance).to.be();
    });

    it('should have the property stakingId (base name: "staking_id")', function() {
      // uncomment below and update the code to test the property stakingId
      //var instance = new CoboWaas2JsApi.EstimateWithdrawFee();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2JsApi.EstimateWithdrawFee();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2JsApi.EstimateWithdrawFee();
      //expect(instance).to.be();
    });

  });

}));
