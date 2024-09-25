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
    instance = new CoboWaas2.AddressBook();
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

  describe('AddressBook', function() {
    it('should create an instance of AddressBook', function() {
      // uncomment below and update the code to test AddressBook
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be.a(CoboWaas2.AddressBook);
    });

    it('should have the property org_id (base name: "org_id")', function() {
      // uncomment below and update the code to test the property org_id
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property entry_id (base name: "entry_id")', function() {
      // uncomment below and update the code to test the property entry_id
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property wallet_name (base name: "wallet_name")', function() {
      // uncomment below and update the code to test the property wallet_name
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property wallet_type (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property wallet_type
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new CoboWaas2.AddressBook();
      //expect(instance).to.be();
    });

  });

}));
