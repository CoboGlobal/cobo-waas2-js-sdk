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
    instance = new CoboWaas2.TransactionRawTxInfo();
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

  describe('TransactionRawTxInfo', function() {
    it('should create an instance of TransactionRawTxInfo', function() {
      // uncomment below and update the code to test TransactionRawTxInfo
      //var instance = new CoboWaas2.TransactionRawTxInfo();
      //expect(instance).to.be.a(CoboWaas2.TransactionRawTxInfo);
    });

    it('should have the property used_nonce (base name: "used_nonce")', function() {
      // uncomment below and update the code to test the property used_nonce
      //var instance = new CoboWaas2.TransactionRawTxInfo();
      //expect(instance).to.be();
    });

    it('should have the property selected_utxos (base name: "selected_utxos")', function() {
      // uncomment below and update the code to test the property selected_utxos
      //var instance = new CoboWaas2.TransactionRawTxInfo();
      //expect(instance).to.be();
    });

    it('should have the property raw_tx (base name: "raw_tx")', function() {
      // uncomment below and update the code to test the property raw_tx
      //var instance = new CoboWaas2.TransactionRawTxInfo();
      //expect(instance).to.be();
    });

  });

}));