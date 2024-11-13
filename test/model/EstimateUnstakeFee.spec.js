/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
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
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.EstimateUnstakeFee();
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

  describe('EstimateUnstakeFee', function() {
    it('should create an instance of EstimateUnstakeFee', function() {
      // uncomment below and update the code to test EstimateUnstakeFee
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be.a(CoboWaas2.EstimateUnstakeFee);
    });

    it('should have the property activity_type (base name: "activity_type")', function() {
      // uncomment below and update the code to test the property activity_type
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be();
    });

    it('should have the property request_id (base name: "request_id")', function() {
      // uncomment below and update the code to test the property request_id
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be();
    });

    it('should have the property staking_id (base name: "staking_id")', function() {
      // uncomment below and update the code to test the property staking_id
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new CoboWaas2.EstimateUnstakeFee();
      //expect(instance).to.be();
    });

  });

}));
