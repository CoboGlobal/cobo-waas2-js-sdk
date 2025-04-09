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
    instance = new CoboWaas2.CreateSettlement();
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

  describe('CreateSettlement', function() {
    it('should create an instance of CreateSettlement', function() {
      // uncomment below and update the code to test CreateSettlement
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be.a(CoboWaas2.CreateSettlement);
    });

    it('should have the property merchant_id (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchant_id
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be();
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be();
    });

    it('should have the property bank_account_id (base name: "bank_account_id")', function() {
      // uncomment below and update the code to test the property bank_account_id
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be();
    });

    it('should have the property settlement_type (base name: "settlement_type")', function() {
      // uncomment below and update the code to test the property settlement_type
      //var instance = new CoboWaas2.CreateSettlement();
      //expect(instance).to.be();
    });

  });

}));
