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
    instance = new CoboWaas2JsApi.ChainInfo();
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

  describe('ChainInfo', function() {
    it('should create an instance of ChainInfo', function() {
      // uncomment below and update the code to test ChainInfo
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be.a(CoboWaas2JsApi.ChainInfo);
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property icon_url (base name: "icon_url")', function() {
      // uncomment below and update the code to test the property icon_url
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property explorer_tx_url (base name: "explorer_tx_url")', function() {
      // uncomment below and update the code to test the property explorer_tx_url
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property explorer_address_url (base name: "explorer_address_url")', function() {
      // uncomment below and update the code to test the property explorer_address_url
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property require_memo (base name: "require_memo")', function() {
      // uncomment below and update the code to test the property require_memo
      //var instance = new CoboWaas2JsApi.ChainInfo();
      //expect(instance).to.be();
    });

  });

}));
