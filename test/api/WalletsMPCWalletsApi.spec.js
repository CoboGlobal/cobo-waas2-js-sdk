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
    instance = new CoboWaas2JsApi.WalletsMPCWalletsApi(apiClient);
  });

  describe('WalletsMPCWalletsApi', function() {
    describe('cancelTssRequestById', function() {
      it('should call cancelTssRequestById successfully', function() {
        //uncomment below and update the code to test cancelTssRequestById
        //instance.cancelTssRequestById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createKeyShareHolderGroup', function() {
      it('should call createKeyShareHolderGroup successfully', function() {
        //uncomment below and update the code to test createKeyShareHolderGroup
        //instance.createKeyShareHolderGroup().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createMpcProject', function() {
      it('should call createMpcProject successfully', function() {
        //uncomment below and update the code to test createMpcProject
        //instance.createMpcProject().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createMpcVault', function() {
      it('should call createMpcVault successfully', function() {
        //uncomment below and update the code to test createMpcVault
        //instance.createMpcVault().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createTssRequest', function() {
      it('should call createTssRequest successfully', function() {
        //uncomment below and update the code to test createTssRequest
        //instance.createTssRequest().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('deleteKeyShareHolderGroupById', function() {
      it('should call deleteKeyShareHolderGroupById successfully', function() {
        //uncomment below and update the code to test deleteKeyShareHolderGroupById
        //instance.deleteKeyShareHolderGroupById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getKeyShareHolderGroupById', function() {
      it('should call getKeyShareHolderGroupById successfully', function() {
        //uncomment below and update the code to test getKeyShareHolderGroupById
        //instance.getKeyShareHolderGroupById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getMpcProjectById', function() {
      it('should call getMpcProjectById successfully', function() {
        //uncomment below and update the code to test getMpcProjectById
        //instance.getMpcProjectById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getMpcVaultById', function() {
      it('should call getMpcVaultById successfully', function() {
        //uncomment below and update the code to test getMpcVaultById
        //instance.getMpcVaultById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getTssRequestById', function() {
      it('should call getTssRequestById successfully', function() {
        //uncomment below and update the code to test getTssRequestById
        //instance.getTssRequestById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listCoboKeyHolders', function() {
      it('should call listCoboKeyHolders successfully', function() {
        //uncomment below and update the code to test listCoboKeyHolders
        //instance.listCoboKeyHolders().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listKeyShareHolderGroups', function() {
      it('should call listKeyShareHolderGroups successfully', function() {
        //uncomment below and update the code to test listKeyShareHolderGroups
        //instance.listKeyShareHolderGroups().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listMpcProjects', function() {
      it('should call listMpcProjects successfully', function() {
        //uncomment below and update the code to test listMpcProjects
        //instance.listMpcProjects().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listMpcVaults', function() {
      it('should call listMpcVaults successfully', function() {
        //uncomment below and update the code to test listMpcVaults
        //instance.listMpcVaults().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listTssRequests', function() {
      it('should call listTssRequests successfully', function() {
        //uncomment below and update the code to test listTssRequests
        //instance.listTssRequests().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateKeyShareHolderGroupById', function() {
      it('should call updateKeyShareHolderGroupById successfully', function() {
        //uncomment below and update the code to test updateKeyShareHolderGroupById
        //instance.updateKeyShareHolderGroupById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateMpcProjectById', function() {
      it('should call updateMpcProjectById successfully', function() {
        //uncomment below and update the code to test updateMpcProjectById
        //instance.updateMpcProjectById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateMpcVaultById', function() {
      it('should call updateMpcVaultById successfully', function() {
        //uncomment below and update the code to test updateMpcVaultById
        //instance.updateMpcVaultById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));
