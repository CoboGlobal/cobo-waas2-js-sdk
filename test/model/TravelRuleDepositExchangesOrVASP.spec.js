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
    instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
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

  describe('TravelRuleDepositExchangesOrVASP', function() {
    it('should create an instance of TravelRuleDepositExchangesOrVASP', function() {
      // uncomment below and update the code to test TravelRuleDepositExchangesOrVASP
      //var instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
      //expect(instance).to.be.a(CoboWaas2.TravelRuleDepositExchangesOrVASP);
    });

    it('should have the property destination_wallet_type (base name: "destination_wallet_type")', function() {
      // uncomment below and update the code to test the property destination_wallet_type
      //var instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
      //expect(instance).to.be();
    });

    it('should have the property vendor_code (base name: "vendor_code")', function() {
      // uncomment below and update the code to test the property vendor_code
      //var instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
      //expect(instance).to.be();
    });

    it('should have the property vendor_vasp_id (base name: "vendor_vasp_id")', function() {
      // uncomment below and update the code to test the property vendor_vasp_id
      //var instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
      //expect(instance).to.be();
    });

    it('should have the property vendor_vasp_name (base name: "vendor_vasp_name")', function() {
      // uncomment below and update the code to test the property vendor_vasp_name
      //var instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
      //expect(instance).to.be();
    });

    it('should have the property entity_info (base name: "entity_info")', function() {
      // uncomment below and update the code to test the property entity_info
      //var instance = new CoboWaas2.TravelRuleDepositExchangesOrVASP();
      //expect(instance).to.be();
    });

  });

}));
