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
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    var apiClient = new ApiClient()
    apiClient.setEnv(new Env("https://api[.xxx].cobo.com/v2"));
    apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
    instance = new CoboWaas2.WalletsSmartContractWalletsApi(apiClient);
  });

  describe('WalletsSmartContractWalletsApi', function() {
    describe('listSafeWalletDelegates', function() {
      it('should call listSafeWalletDelegates successfully', function() {
        //uncomment below and update the code to test listSafeWalletDelegates
        //instance.listSafeWalletDelegates().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));
