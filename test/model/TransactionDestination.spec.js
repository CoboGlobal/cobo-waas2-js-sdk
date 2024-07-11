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
    instance = new CoboWaas2JsApi.TransactionDestination();
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
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be.a(CoboWaas2JsApi.TransactionDestination);
    });

    it('should have the property destinationType (base name: "destination_type")', function() {
      // uncomment below and update the code to test the property destinationType
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "token_id")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property assetId (base name: "asset_id")', function() {
      // uncomment below and update the code to test the property assetId
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property accountOutput (base name: "account_output")', function() {
      // uncomment below and update the code to test the property accountOutput
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property utxoOutputs (base name: "utxo_outputs")', function() {
      // uncomment below and update the code to test the property utxoOutputs
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property calldata (base name: "calldata")', function() {
      // uncomment below and update the code to test the property calldata
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property structuredData (base name: "structured_data")', function() {
      // uncomment below and update the code to test the property structuredData
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property exchangeId (base name: "exchange_id")', function() {
      // uncomment below and update the code to test the property exchangeId
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

    it('should have the property subWalletId (base name: "sub_wallet_id")', function() {
      // uncomment below and update the code to test the property subWalletId
      //var instance = new CoboWaas2JsApi.TransactionDestination();
      //expect(instance).to.be();
    });

  });

}));
