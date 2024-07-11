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
    instance = new CoboWaas2JsApi.OAuthApi(apiClient);
  });

  describe('OAuthApi', function() {
    describe('getToken', function() {
      it('should call getToken successfully', function() {
        //uncomment below and update the code to test getToken
        //instance.getToken().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('refreshToken', function() {
      it('should call refreshToken successfully', function() {
        //uncomment below and update the code to test refreshToken
        //instance.refreshToken().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));