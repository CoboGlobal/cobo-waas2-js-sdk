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
    instance = new CoboWaas2.ListAssetBalancesForExchangeWallet200Response();
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

  describe('ListAssetBalancesForExchangeWallet200Response', function() {
    it('should create an instance of ListAssetBalancesForExchangeWallet200Response', function() {
      // uncomment below and update the code to test ListAssetBalancesForExchangeWallet200Response
      //var instance = new CoboWaas2.ListAssetBalancesForExchangeWallet200Response();
      //expect(instance).to.be.a(CoboWaas2.ListAssetBalancesForExchangeWallet200Response);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new CoboWaas2.ListAssetBalancesForExchangeWallet200Response();
      //expect(instance).to.be();
    });

    it('should have the property pagination (base name: "pagination")', function() {
      // uncomment below and update the code to test the property pagination
      //var instance = new CoboWaas2.ListAssetBalancesForExchangeWallet200Response();
      //expect(instance).to.be();
    });

  });

}));
