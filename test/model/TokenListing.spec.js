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
    instance = new CoboWaas2.TokenListing();
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

  describe('TokenListing', function() {
    it('should create an instance of TokenListing', function() {
      // uncomment below and update the code to test TokenListing
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be.a(CoboWaas2.TokenListing);
    });

    it('should have the property request_id (base name: "request_id")', function() {
      // uncomment below and update the code to test the property request_id
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property contract_address (base name: "contract_address")', function() {
      // uncomment below and update the code to test the property contract_address
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property wallet_type (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property wallet_type
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property wallet_subtype (base name: "wallet_subtype")', function() {
      // uncomment below and update the code to test the property wallet_subtype
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property feedback (base name: "feedback")', function() {
      // uncomment below and update the code to test the property feedback
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property created_timestamp (base name: "created_timestamp")', function() {
      // uncomment below and update the code to test the property created_timestamp
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

    it('should have the property updated_timestamp (base name: "updated_timestamp")', function() {
      // uncomment below and update the code to test the property updated_timestamp
      //var instance = new CoboWaas2.TokenListing();
      //expect(instance).to.be();
    });

  });

}));
