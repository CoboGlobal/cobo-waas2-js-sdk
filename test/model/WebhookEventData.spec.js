/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.CoboWaas2JsApi);
  }
}(this, function(expect, CoboWaas2JsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2JsApi.WebhookEventData();
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

  describe('WebhookEventData', function() {
    it('should create an instance of WebhookEventData', function() {
      // uncomment below and update the code to test WebhookEventData
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be.a(CoboWaas2JsApi.WebhookEventData);
    });

    it('should have the property dataType (base name: "data_type")', function() {
      // uncomment below and update the code to test the property dataType
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property coboId (base name: "cobo_id")', function() {
      // uncomment below and update the code to test the property coboId
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "request_id")', function() {
      // uncomment below and update the code to test the property requestId
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property subStatus (base name: "sub_status")', function() {
      // uncomment below and update the code to test the property subStatus
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property failedReason (base name: "failed_reason")', function() {
      // uncomment below and update the code to test the property failedReason
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property chainId (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chainId
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property initiatorType (base name: "initiator_type")', function() {
      // uncomment below and update the code to test the property initiatorType
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property confirmedNum (base name: "confirmed_num")', function() {
      // uncomment below and update the code to test the property confirmedNum
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property confirmingThreshold (base name: "confirming_threshold")', function() {
      // uncomment below and update the code to test the property confirmingThreshold
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property blockNumber (base name: "block_number")', function() {
      // uncomment below and update the code to test the property blockNumber
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property blockTime (base name: "block_time")', function() {
      // uncomment below and update the code to test the property blockTime
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property blockHash (base name: "block_hash")', function() {
      // uncomment below and update the code to test the property blockHash
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property transactionHash (base name: "transaction_hash")', function() {
      // uncomment below and update the code to test the property transactionHash
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property replacement (base name: "replacement")', function() {
      // uncomment below and update the code to test the property replacement
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property forceInternal (base name: "force_internal")', function() {
      // uncomment below and update the code to test the property forceInternal
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property forceExternal (base name: "force_external")', function() {
      // uncomment below and update the code to test the property forceExternal
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property isLoop (base name: "is_loop")', function() {
      // uncomment below and update the code to test the property isLoop
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "created_time")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

    it('should have the property updatedTime (base name: "updated_time")', function() {
      // uncomment below and update the code to test the property updatedTime
      //var instance = new CoboWaas2JsApi.WebhookEventData();
      //expect(instance).to.be();
    });

  });

}));
