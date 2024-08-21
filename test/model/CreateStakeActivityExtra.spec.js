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
    instance = new CoboWaas2.CreateStakeActivityExtra();
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

  describe('CreateStakeActivityExtra', function() {
    it('should create an instance of CreateStakeActivityExtra', function() {
      // uncomment below and update the code to test CreateStakeActivityExtra
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be.a(CoboWaas2.CreateStakeActivityExtra);
    });

    it('should have the property pool_type (base name: "pool_type")', function() {
      // uncomment below and update the code to test the property pool_type
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be();
    });

    it('should have the property finality_provider_public_key (base name: "finality_provider_public_key")', function() {
      // uncomment below and update the code to test the property finality_provider_public_key
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be();
    });

    it('should have the property stake_block_time (base name: "stake_block_time")', function() {
      // uncomment below and update the code to test the property stake_block_time
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be();
    });

    it('should have the property only_sign (base name: "only_sign")', function() {
      // uncomment below and update the code to test the property only_sign
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be();
    });

    it('should have the property fee_recipient (base name: "fee_recipient")', function() {
      // uncomment below and update the code to test the property fee_recipient
      //var instance = new CoboWaas2.CreateStakeActivityExtra();
      //expect(instance).to.be();
    });

  });

}));
