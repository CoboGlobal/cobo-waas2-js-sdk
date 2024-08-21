/**
 * Cobo Wallet as a Service 2.0
 *
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
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.TransferDestination();
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

  describe('TransferDestination', function() {
    it('should create an instance of TransferDestination', function() {
      // uncomment below and update the code to test TransferDestination
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be.a(CoboWaas2.TransferDestination);
    });

    it('should have the property destination_type (base name: "destination_type")', function() {
      // uncomment below and update the code to test the property destination_type
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property account_output (base name: "account_output")', function() {
      // uncomment below and update the code to test the property account_output
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property utxo_outputs (base name: "utxo_outputs")', function() {
      // uncomment below and update the code to test the property utxo_outputs
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property change_address (base name: "change_address")', function() {
      // uncomment below and update the code to test the property change_address
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property force_internal (base name: "force_internal")', function() {
      // uncomment below and update the code to test the property force_internal
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property force_external (base name: "force_external")', function() {
      // uncomment below and update the code to test the property force_external
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property trading_account_type (base name: "trading_account_type")', function() {
      // uncomment below and update the code to test the property trading_account_type
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2.TransferDestination();
      //expect(instance).to.be();
    });

  });

}));
