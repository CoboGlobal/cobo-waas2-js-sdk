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


import {ApiClient, Env} from "../../src/index.js";

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
    var apiClient = new ApiClient()
    apiClient.setEnv(new Env("https://api.sandbox.cobo.com/v2"));
    apiClient.setPrivateKey("Your private key in hex format without 0x prefix");
    instance = new CoboWaas2JsApi.WalletsApi(apiClient);
  });

  describe('WalletsApi', function() {
    describe('checkAddressValidity', function() {
      it('should call checkAddressValidity successfully', function() {
        //uncomment below and update the code to test checkAddressValidity
        //instance.checkAddressValidity().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createAddress', function() {
      it('should call createAddress successfully', function() {
        //uncomment below and update the code to test createAddress
        //instance.createAddress().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createWallet', function() {
      it('should call createWallet successfully', function() {
        //uncomment below and update the code to test createWallet
        //instance.createWallet().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('deleteWalletById', function() {
      it('should call deleteWalletById successfully', function() {
        //uncomment below and update the code to test deleteWalletById
        //instance.deleteWalletById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getAddress', function() {
      it('should call getAddress successfully', function() {
        //uncomment below and update the code to test getAddress
        //instance.getAddress().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getChainById', function() {
      it('should call getChainById successfully', function() {
        //uncomment below and update the code to test getChainById
        //instance.getChainById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getMaxTransferableValue', function() {
      it('should call getMaxTransferableValue successfully', function() {
        //uncomment below and update the code to test getMaxTransferableValue
        //instance.getMaxTransferableValue().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getTokenById', function() {
      it('should call getTokenById successfully', function() {
        //uncomment below and update the code to test getTokenById
        //instance.getTokenById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getWalletById', function() {
      it('should call getWalletById successfully', function() {
        //uncomment below and update the code to test getWalletById
        //instance.getWalletById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listAddresses', function() {
      it('should call listAddresses successfully', function() {
        //uncomment below and update the code to test listAddresses
        //instance.listAddresses().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listEnabledChains', function() {
      it('should call listEnabledChains successfully', function() {
        //uncomment below and update the code to test listEnabledChains
        //instance.listEnabledChains().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listEnabledTokens', function() {
      it('should call listEnabledTokens successfully', function() {
        //uncomment below and update the code to test listEnabledTokens
        //instance.listEnabledTokens().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listSupportedChains', function() {
      it('should call listSupportedChains successfully', function() {
        //uncomment below and update the code to test listSupportedChains
        //instance.listSupportedChains().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listSupportedTokens', function() {
      it('should call listSupportedTokens successfully', function() {
        //uncomment below and update the code to test listSupportedTokens
        //instance.listSupportedTokens().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listTokenBalancesForAddress', function() {
      it('should call listTokenBalancesForAddress successfully', function() {
        //uncomment below and update the code to test listTokenBalancesForAddress
        //instance.listTokenBalancesForAddress().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listTokenBalancesForWallet', function() {
      it('should call listTokenBalancesForWallet successfully', function() {
        //uncomment below and update the code to test listTokenBalancesForWallet
        //instance.listTokenBalancesForWallet().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listUtxos', function() {
      it('should call listUtxos successfully', function() {
        //uncomment below and update the code to test listUtxos
        //instance.listUtxos().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listWallets', function() {
      it('should call listWallets successfully', function() {
        //uncomment below and update the code to test listWallets
        //instance.listWallets().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('lockUtxos', function() {
      it('should call lockUtxos successfully', function() {
        //uncomment below and update the code to test lockUtxos
        //instance.lockUtxos().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('unlockUtxos', function() {
      it('should call unlockUtxos successfully', function() {
        //uncomment below and update the code to test unlockUtxos
        //instance.unlockUtxos().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateWalletById', function() {
      it('should call updateWalletById successfully', function() {
        //uncomment below and update the code to test updateWalletById
        //instance.updateWalletById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));
