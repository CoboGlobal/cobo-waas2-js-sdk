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
    instance = new CoboWaas2.TSSKeyShareSignSignatures();
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

  describe('TSSKeyShareSignSignatures', function() {
    it('should create an instance of TSSKeyShareSignSignatures', function() {
      // uncomment below and update the code to test TSSKeyShareSignSignatures
      //var instance = new CoboWaas2.TSSKeyShareSignSignatures();
      //expect(instance).to.be.a(CoboWaas2.TSSKeyShareSignSignatures);
    });

    it('should have the property signatures (base name: "signatures")', function() {
      // uncomment below and update the code to test the property signatures
      //var instance = new CoboWaas2.TSSKeyShareSignSignatures();
      //expect(instance).to.be();
    });

  });

}));
