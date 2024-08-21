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
    instance = new CoboWaas2.TransferSource();
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

  describe('TransferSource', function() {
    it('should create an instance of TransferSource', function() {
      // uncomment below and update the code to test TransferSource
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be.a(CoboWaas2.TransferSource);
    });

    it('should have the property source_type (base name: "source_type")', function() {
      // uncomment below and update the code to test the property source_type
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

    it('should have the property included_utxos (base name: "included_utxos")', function() {
      // uncomment below and update the code to test the property included_utxos
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

    it('should have the property excluded_utxos (base name: "excluded_utxos")', function() {
      // uncomment below and update the code to test the property excluded_utxos
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

    it('should have the property delegate (base name: "delegate")', function() {
      // uncomment below and update the code to test the property delegate
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

    it('should have the property trading_account_type (base name: "trading_account_type")', function() {
      // uncomment below and update the code to test the property trading_account_type
      //var instance = new CoboWaas2.TransferSource();
      //expect(instance).to.be();
    });

  });

}));
