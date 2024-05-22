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

import ApiClient from '../ApiClient';

/**
 * The AssetInfo model module.
 * @module model/AssetInfo
 * @version 0.1.0
 */
class AssetInfo {
    /**
     * Constructs a new <code>AssetInfo</code>.
     * The data for asset information.
     * @alias module:model/AssetInfo
     * @param assetId {String} ID of the asset. Unique in all assets scope.
     */
    constructor(assetId) { 
        
        AssetInfo.initialize(this, assetId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetId) { 
        obj['asset_id'] = assetId;
    }

    /**
     * Constructs a <code>AssetInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetInfo} obj Optional instance to populate.
     * @return {module:model/AssetInfo} The populated <code>AssetInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetInfo();

            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
            }
            if (data.hasOwnProperty('display_code')) {
                obj['display_code'] = ApiClient.convertToType(data['display_code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssetInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }
        // ensure the json data is a string
        if (data['display_code'] && !(typeof data['display_code'] === 'string' || data['display_code'] instanceof String)) {
            throw new Error("Expected the field `display_code` to be a primitive type in the JSON string but got " + data['display_code']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }

        return true;
    }


}

AssetInfo.RequiredProperties = ["asset_id"];

/**
 * ID of the asset. Unique in all assets scope.
 * @member {String} asset_id
 */
AssetInfo.prototype['asset_id'] = undefined;

/**
 * Display code for the asset.
 * @member {String} display_code
 */
AssetInfo.prototype['display_code'] = undefined;

/**
 * The description of the asset.
 * @member {String} description
 */
AssetInfo.prototype['description'] = undefined;

/**
 * URL of the asset
 * @member {String} icon_url
 */
AssetInfo.prototype['icon_url'] = undefined;






export default AssetInfo;

