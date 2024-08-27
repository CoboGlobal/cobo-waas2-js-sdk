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
    instance = new CoboWaas2.AddressInfo();
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

  describe('AddressInfo', function() {
    it('should create an instance of AddressInfo', function() {
      // uncomment below and update the code to test AddressInfo
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be.a(CoboWaas2.AddressInfo);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property encoding (base name: "encoding")', function() {
      // uncomment below and update the code to test the property encoding
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property pubkey (base name: "pubkey")', function() {
      // uncomment below and update the code to test the property pubkey
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property x_only_pubkey (base name: "x_only_pubkey")', function() {
      // uncomment below and update the code to test the property x_only_pubkey
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property taproot_script_tree_hash (base name: "taproot_script_tree_hash")', function() {
      // uncomment below and update the code to test the property taproot_script_tree_hash
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

    it('should have the property taproot_internal_address (base name: "taproot_internal_address")', function() {
      // uncomment below and update the code to test the property taproot_internal_address
      //var instance = new CoboWaas2.AddressInfo();
      //expect(instance).to.be();
    });

  });

}));
