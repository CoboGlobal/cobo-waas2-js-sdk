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
    instance = new CoboWaas2.SwapActivity();
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

  describe('SwapActivity', function() {
    it('should create an instance of SwapActivity', function() {
      // uncomment below and update the code to test SwapActivity
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be.a(CoboWaas2.SwapActivity);
    });

    it('should have the property activity_id (base name: "activity_id")', function() {
      // uncomment below and update the code to test the property activity_id
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property pay_token_id (base name: "pay_token_id")', function() {
      // uncomment below and update the code to test the property pay_token_id
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property receive_token_id (base name: "receive_token_id")', function() {
      // uncomment below and update the code to test the property receive_token_id
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property pay_amount (base name: "pay_amount")', function() {
      // uncomment below and update the code to test the property pay_amount
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property receive_amount (base name: "receive_amount")', function() {
      // uncomment below and update the code to test the property receive_amount
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property fee_amount (base name: "fee_amount")', function() {
      // uncomment below and update the code to test the property fee_amount
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property initiator_type (base name: "initiator_type")', function() {
      // uncomment below and update the code to test the property initiator_type
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property created_timestamp (base name: "created_timestamp")', function() {
      // uncomment below and update the code to test the property created_timestamp
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

    it('should have the property updated_timestamp (base name: "updated_timestamp")', function() {
      // uncomment below and update the code to test the property updated_timestamp
      //var instance = new CoboWaas2.SwapActivity();
      //expect(instance).to.be();
    });

  });

}));
