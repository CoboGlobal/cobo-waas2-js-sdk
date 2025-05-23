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

import ApiClient from '../ApiClient';

/**
 * The TSSKeyShareSignDetail model module.
 * @module model/TSSKeyShareSignDetail
 */
class TSSKeyShareSignDetail {
    /**
     * Constructs a new <code>TSSKeyShareSignDetail</code>.
     * @alias module:model/TSSKeyShareSignDetail
     */
    constructor() { 
        
        TSSKeyShareSignDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TSSKeyShareSignDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TSSKeyShareSignDetail} obj Optional instance to populate.
     * @return {module:model/TSSKeyShareSignDetail} The populated <code>TSSKeyShareSignDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TSSKeyShareSignDetail();

            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TSSKeyShareSignDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TSSKeyShareSignDetail</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * The TSS key share group ID.
 * @member {String} group_id
 */
TSSKeyShareSignDetail.prototype['group_id'] = undefined;

/**
 * The message to sign by key share.
 * @member {String} message
 */
TSSKeyShareSignDetail.prototype['message'] = undefined;






export default TSSKeyShareSignDetail;

