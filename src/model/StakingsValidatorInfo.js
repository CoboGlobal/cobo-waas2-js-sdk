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
 * The StakingsValidatorInfo model module.
 * @module model/StakingsValidatorInfo
 * @version 0.4.1
 */
class StakingsValidatorInfo {
    /**
     * Constructs a new <code>StakingsValidatorInfo</code>.
     * The validator info of the stake.
     * @alias module:model/StakingsValidatorInfo
     */
    constructor() { 
        
        StakingsValidatorInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StakingsValidatorInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StakingsValidatorInfo} obj Optional instance to populate.
     * @return {module:model/StakingsValidatorInfo} The populated <code>StakingsValidatorInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StakingsValidatorInfo();

            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('commission_rate')) {
                obj['commission_rate'] = ApiClient.convertToType(data['commission_rate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StakingsValidatorInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StakingsValidatorInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['public_key'] && !(typeof data['public_key'] === 'string' || data['public_key'] instanceof String)) {
            throw new Error("Expected the field `public_key` to be a primitive type in the JSON string but got " + data['public_key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['commission_rate'] && !(typeof data['commission_rate'] === 'string' || data['commission_rate'] instanceof String)) {
            throw new Error("Expected the field `commission_rate` to be a primitive type in the JSON string but got " + data['commission_rate']);
        }

        return true;
    }


}



/**
 * @member {String} icon_url
 */
StakingsValidatorInfo.prototype['icon_url'] = undefined;

/**
 * @member {String} public_key
 */
StakingsValidatorInfo.prototype['public_key'] = undefined;

/**
 * @member {String} name
 */
StakingsValidatorInfo.prototype['name'] = undefined;

/**
 * @member {String} address
 */
StakingsValidatorInfo.prototype['address'] = undefined;

/**
 * @member {String} commission_rate
 */
StakingsValidatorInfo.prototype['commission_rate'] = undefined;






export default StakingsValidatorInfo;

