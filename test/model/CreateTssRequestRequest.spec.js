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
    instance = new CoboWaas2JsApi.CreateTssRequestRequest();
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

  describe('CreateTssRequestRequest', function() {
    it('should create an instance of CreateTssRequestRequest', function() {
      // uncomment below and update the code to test CreateTssRequestRequest
      //var instance = new CoboWaas2JsApi.CreateTssRequestRequest();
      //expect(instance).to.be.a(CoboWaas2JsApi.CreateTssRequestRequest);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2JsApi.CreateTssRequestRequest();
      //expect(instance).to.be();
    });

    it('should have the property target_key_share_holder_group_id (base name: "target_key_share_holder_group_id")', function() {
      // uncomment below and update the code to test the property target_key_share_holder_group_id
      //var instance = new CoboWaas2JsApi.CreateTssRequestRequest();
      //expect(instance).to.be();
    });

    it('should have the property source_key_share_holder_group_id (base name: "source_key_share_holder_group_id")', function() {
      // uncomment below and update the code to test the property source_key_share_holder_group_id
      //var instance = new CoboWaas2JsApi.CreateTssRequestRequest();
      //expect(instance).to.be();
    });

    it('should have the property detail_params (base name: "detail_params")', function() {
      // uncomment below and update the code to test the property detail_params
      //var instance = new CoboWaas2JsApi.CreateTssRequestRequest();
      //expect(instance).to.be();
    });

  });

}));
