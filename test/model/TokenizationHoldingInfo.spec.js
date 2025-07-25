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
    instance = new CoboWaas2.TokenizationHoldingInfo();
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

  describe('TokenizationHoldingInfo', function() {
    it('should create an instance of TokenizationHoldingInfo', function() {
      // uncomment below and update the code to test TokenizationHoldingInfo
      //var instance = new CoboWaas2.TokenizationHoldingInfo();
      //expect(instance).to.be.a(CoboWaas2.TokenizationHoldingInfo);
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.TokenizationHoldingInfo();
      //expect(instance).to.be();
    });

    it('should have the property wallet_name (base name: "wallet_name")', function() {
      // uncomment below and update the code to test the property wallet_name
      //var instance = new CoboWaas2.TokenizationHoldingInfo();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2.TokenizationHoldingInfo();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new CoboWaas2.TokenizationHoldingInfo();
      //expect(instance).to.be();
    });

    it('should have the property address_label (base name: "address_label")', function() {
      // uncomment below and update the code to test the property address_label
      //var instance = new CoboWaas2.TokenizationHoldingInfo();
      //expect(instance).to.be();
    });

  });

}));
