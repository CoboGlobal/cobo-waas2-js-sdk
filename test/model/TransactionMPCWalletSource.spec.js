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
    instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
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

  describe('TransactionMPCWalletSource', function() {
    it('should create an instance of TransactionMPCWalletSource', function() {
      // uncomment below and update the code to test TransactionMPCWalletSource
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be.a(CoboWaas2JsApi.TransactionMPCWalletSource);
    });

    it('should have the property sourceType (base name: "source_type")', function() {
      // uncomment below and update the code to test the property sourceType
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be();
    });

    it('should have the property includedUtxos (base name: "included_utxos")', function() {
      // uncomment below and update the code to test the property includedUtxos
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be();
    });

    it('should have the property excludedUtxos (base name: "excluded_utxos")', function() {
      // uncomment below and update the code to test the property excludedUtxos
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be();
    });

    it('should have the property mpcUsedKeyShareHolderGroup (base name: "mpc_used_key_share_holder_group")', function() {
      // uncomment below and update the code to test the property mpcUsedKeyShareHolderGroup
      //var instance = new CoboWaas2JsApi.TransactionMPCWalletSource();
      //expect(instance).to.be();
    });

  });

}));
