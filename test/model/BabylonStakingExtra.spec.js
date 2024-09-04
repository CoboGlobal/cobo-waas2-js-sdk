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
    instance = new CoboWaas2.BabylonStakingExtra();
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

  describe('BabylonStakingExtra', function() {
    it('should create an instance of BabylonStakingExtra', function() {
      // uncomment below and update the code to test BabylonStakingExtra
      //var instance = new CoboWaas2.BabylonStakingExtra();
      //expect(instance).to.be.a(CoboWaas2.BabylonStakingExtra);
    });

    it('should have the property pool_type (base name: "pool_type")', function() {
      // uncomment below and update the code to test the property pool_type
      //var instance = new CoboWaas2.BabylonStakingExtra();
      //expect(instance).to.be();
    });

    it('should have the property pos_chain (base name: "pos_chain")', function() {
      // uncomment below and update the code to test the property pos_chain
      //var instance = new CoboWaas2.BabylonStakingExtra();
      //expect(instance).to.be();
    });

    it('should have the property unlock_timestamp (base name: "unlock_timestamp")', function() {
      // uncomment below and update the code to test the property unlock_timestamp
      //var instance = new CoboWaas2.BabylonStakingExtra();
      //expect(instance).to.be();
    });

    it('should have the property unlock_block_height (base name: "unlock_block_height")', function() {
      // uncomment below and update the code to test the property unlock_block_height
      //var instance = new CoboWaas2.BabylonStakingExtra();
      //expect(instance).to.be();
    });

  });

}));