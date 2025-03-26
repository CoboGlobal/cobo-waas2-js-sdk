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
    instance = new CoboWaas2.TransactionMessageSignEIP712Destination();
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

  describe('TransactionMessageSignEIP712Destination', function() {
    it('should create an instance of TransactionMessageSignEIP712Destination', function() {
      // uncomment below and update the code to test TransactionMessageSignEIP712Destination
      //var instance = new CoboWaas2.TransactionMessageSignEIP712Destination();
      //expect(instance).to.be.a(CoboWaas2.TransactionMessageSignEIP712Destination);
    });

    it('should have the property destination_type (base name: "destination_type")', function() {
      // uncomment below and update the code to test the property destination_type
      //var instance = new CoboWaas2.TransactionMessageSignEIP712Destination();
      //expect(instance).to.be();
    });

    it('should have the property raw_structured_data (base name: "raw_structured_data")', function() {
      // uncomment below and update the code to test the property raw_structured_data
      //var instance = new CoboWaas2.TransactionMessageSignEIP712Destination();
      //expect(instance).to.be();
    });

    it('should have the property structured_data (base name: "structured_data")', function() {
      // uncomment below and update the code to test the property structured_data
      //var instance = new CoboWaas2.TransactionMessageSignEIP712Destination();
      //expect(instance).to.be();
    });

    it('should have the property safe_tx_extra_data (base name: "safe_tx_extra_data")', function() {
      // uncomment below and update the code to test the property safe_tx_extra_data
      //var instance = new CoboWaas2.TransactionMessageSignEIP712Destination();
      //expect(instance).to.be();
    });

  });

}));
