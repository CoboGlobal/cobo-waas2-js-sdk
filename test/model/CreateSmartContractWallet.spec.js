/**
 * Cobo Wallet as a Service 2.0
 * Cobo WaaS 2.0 enables you to programmatically access Cobo's full suite of crypto wallet technologies with powerful and flexible access controls.  # Wallet technologies - Custodial Wallet - MPC Wallet - Smart Contract Wallet (Based on Safe{Wallet}) - Exchange Wallet  # Risk Control technologies - Workflow - Access Control List (ACL)  # Risk Control targets - Wallet Management   - User/team and their permission management   - Risk control configurations, e.g. whitelist, blacklist, rate-limiting etc. - Blockchain Interaction   - Crypto transfer   - Smart Contract Invocation  # Important HTTPS only. RESTful, resource oriented  # Get Started Set up your APIs or get authorization  # Authentication and Authorization CoboAuth  # Request and Response application/json  # Error Handling  ### Common error codes | Error Code | Description | | -- | -- |  ### API-specific error codes For error codes that are dedicated to a specific API, see the Error codes section in each API specification, for example, /v3/wallets.  # Rate and Usage Limiting  # Idempotent Request  # Pagination # Support [Developer Hub](https://cobo.com/developers) 
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
    factory(root.expect, root.CoboWaas2Api);
  }
}(this, function(expect, CoboWaas2Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2Api.CreateSmartContractWallet();
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

  describe('CreateSmartContractWallet', function() {
    it('should create an instance of CreateSmartContractWallet', function() {
      // uncomment below and update the code to test CreateSmartContractWallet
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be.a(CoboWaas2Api.CreateSmartContractWallet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property walletType (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property walletType
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property walletSubtype (base name: "wallet_subtype")', function() {
      // uncomment below and update the code to test the property walletSubtype
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property chainId (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chainId
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property smartContractWalletType (base name: "smart_contract_wallet_type")', function() {
      // uncomment below and update the code to test the property smartContractWalletType
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property safeAddress (base name: "safe_address")', function() {
      // uncomment below and update the code to test the property safeAddress
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property owners (base name: "owners")', function() {
      // uncomment below and update the code to test the property owners
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property coboSafeAddress (base name: "cobo_safe_address")', function() {
      // uncomment below and update the code to test the property coboSafeAddress
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new CoboWaas2Api.CreateSmartContractWallet();
      //expect(instance).to.be();
    });

  });

}));
