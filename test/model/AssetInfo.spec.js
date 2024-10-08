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
    instance = new CoboWaas2.AssetInfo();
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

  describe('AssetInfo', function() {
    it('should create an instance of AssetInfo', function() {
      // uncomment below and update the code to test AssetInfo
      //var instance = new CoboWaas2.AssetInfo();
      //expect(instance).to.be.a(CoboWaas2.AssetInfo);
    });

    it('should have the property asset_id (base name: "asset_id")', function() {
      // uncomment below and update the code to test the property asset_id
      //var instance = new CoboWaas2.AssetInfo();
      //expect(instance).to.be();
    });

    it('should have the property display_code (base name: "display_code")', function() {
      // uncomment below and update the code to test the property display_code
      //var instance = new CoboWaas2.AssetInfo();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CoboWaas2.AssetInfo();
      //expect(instance).to.be();
    });

    it('should have the property icon_url (base name: "icon_url")', function() {
      // uncomment below and update the code to test the property icon_url
      //var instance = new CoboWaas2.AssetInfo();
      //expect(instance).to.be();
    });

  });

}));
