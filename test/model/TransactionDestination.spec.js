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
    instance = new CoboWaas2.TransactionDestination();
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

  describe('TransactionDestination', function() {
    it('should create an instance of TransactionDestination', function() {
      // uncomment below and update the code to test TransactionDestination
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be.a(CoboWaas2.TransactionDestination);
    });

    it('should have the property destination_type (base name: "destination_type")', function() {
      // uncomment below and update the code to test the property destination_type
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property account_output (base name: "account_output")', function() {
      // uncomment below and update the code to test the property account_output
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property utxo_outputs (base name: "utxo_outputs")', function() {
      // uncomment below and update the code to test the property utxo_outputs
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property change_address (base name: "change_address")', function() {
      // uncomment below and update the code to test the property change_address
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property force_internal (base name: "force_internal")', function() {
      // uncomment below and update the code to test the property force_internal
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property force_external (base name: "force_external")', function() {
      // uncomment below and update the code to test the property force_external
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property trading_account_type (base name: "trading_account_type")', function() {
      // uncomment below and update the code to test the property trading_account_type
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property exchange_id (base name: "exchange_id")', function() {
      // uncomment below and update the code to test the property exchange_id
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property calldata (base name: "calldata")', function() {
      // uncomment below and update the code to test the property calldata
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property calldata_info (base name: "calldata_info")', function() {
      // uncomment below and update the code to test the property calldata_info
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property cosmos_messages (base name: "cosmos_messages")', function() {
      // uncomment below and update the code to test the property cosmos_messages
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property raw_structured_data (base name: "raw_structured_data")', function() {
      // uncomment below and update the code to test the property raw_structured_data
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property structured_data (base name: "structured_data")', function() {
      // uncomment below and update the code to test the property structured_data
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property safe_tx_extra_data (base name: "safe_tx_extra_data")', function() {
      // uncomment below and update the code to test the property safe_tx_extra_data
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property msg_hash (base name: "msg_hash")', function() {
      // uncomment below and update the code to test the property msg_hash
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property wallet_type (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property wallet_type
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property wallet_subtype (base name: "wallet_subtype")', function() {
      // uncomment below and update the code to test the property wallet_subtype
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property tx_info (base name: "tx_info")', function() {
      // uncomment below and update the code to test the property tx_info
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property message_bip137 (base name: "message_bip137")', function() {
      // uncomment below and update the code to test the property message_bip137
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property message_bip322 (base name: "message_bip322")', function() {
      // uncomment below and update the code to test the property message_bip322
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property message_cosmos_adr36 (base name: "message_cosmos_adr36")', function() {
      // uncomment below and update the code to test the property message_cosmos_adr36
      //var instance = new CoboWaas2.TransactionDestination();
      //expect(instance).to.be();
    });

  });

}));
