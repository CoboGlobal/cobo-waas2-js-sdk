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
    instance = new CoboWaas2.TransactionApprovalDetail();
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

  describe('TransactionApprovalDetail', function() {
    it('should create an instance of TransactionApprovalDetail', function() {
      // uncomment below and update the code to test TransactionApprovalDetail
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be.a(CoboWaas2.TransactionApprovalDetail);
    });

    it('should have the property transaction_id (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transaction_id
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be();
    });

    it('should have the property cobo_id (base name: "cobo_id")', function() {
      // uncomment below and update the code to test the property cobo_id
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be();
    });

    it('should have the property request_id (base name: "request_id")', function() {
      // uncomment below and update the code to test the property request_id
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be();
    });

    it('should have the property spender (base name: "spender")', function() {
      // uncomment below and update the code to test the property spender
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be();
    });

    it('should have the property approver (base name: "approver")', function() {
      // uncomment below and update the code to test the property approver
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be();
    });

    it('should have the property address_owner (base name: "address_owner")', function() {
      // uncomment below and update the code to test the property address_owner
      //var instance = new CoboWaas2.TransactionApprovalDetail();
      //expect(instance).to.be();
    });

  });

}));
