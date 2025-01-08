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
    instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
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

  describe('TravelRuleWithdrawNaturalEntity', function() {
    it('should create an instance of TravelRuleWithdrawNaturalEntity', function() {
      // uncomment below and update the code to test TravelRuleWithdrawNaturalEntity
      //var instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
      //expect(instance).to.be.a(CoboWaas2.TravelRuleWithdrawNaturalEntity);
    });

    it('should have the property selected_entity_type (base name: "selected_entity_type")', function() {
      // uncomment below and update the code to test the property selected_entity_type
      //var instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
      //expect(instance).to.be();
    });

    it('should have the property first_name (base name: "first_name")', function() {
      // uncomment below and update the code to test the property first_name
      //var instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
      //expect(instance).to.be();
    });

    it('should have the property last_name (base name: "last_name")', function() {
      // uncomment below and update the code to test the property last_name
      //var instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
      //expect(instance).to.be();
    });

    it('should have the property date_of_birth (base name: "date_of_birth")', function() {
      // uncomment below and update the code to test the property date_of_birth
      //var instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
      //expect(instance).to.be();
    });

    it('should have the property place_of_birth (base name: "place_of_birth")', function() {
      // uncomment below and update the code to test the property place_of_birth
      //var instance = new CoboWaas2.TravelRuleWithdrawNaturalEntity();
      //expect(instance).to.be();
    });

  });

}));
