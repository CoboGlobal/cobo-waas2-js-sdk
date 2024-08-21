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
    instance = new CoboWaas2.TSSRequestWebhookEventData();
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

  describe('TSSRequestWebhookEventData', function() {
    it('should create an instance of TSSRequestWebhookEventData', function() {
      // uncomment below and update the code to test TSSRequestWebhookEventData
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be.a(CoboWaas2.TSSRequestWebhookEventData);
    });

    it('should have the property data_type (base name: "data_type")', function() {
      // uncomment below and update the code to test the property data_type
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property tss_request_id (base name: "tss_request_id")', function() {
      // uncomment below and update the code to test the property tss_request_id
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property source_key_share_holder_group (base name: "source_key_share_holder_group")', function() {
      // uncomment below and update the code to test the property source_key_share_holder_group
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property target_key_share_holder_group_id (base name: "target_key_share_holder_group_id")', function() {
      // uncomment below and update the code to test the property target_key_share_holder_group_id
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property created_timestamp (base name: "created_timestamp")', function() {
      // uncomment below and update the code to test the property created_timestamp
      //var instance = new CoboWaas2.TSSRequestWebhookEventData();
      //expect(instance).to.be();
    });

  });

}));
