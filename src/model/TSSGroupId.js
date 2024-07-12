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
import CurveType from './CurveType';

/**
 * The TSSGroupId model module.
 * @module model/TSSGroupId
 * @version 0.2.7
 */
class TSSGroupId {
    /**
     * Constructs a new <code>TSSGroupId</code>.
     * The data for the TSS group ID.
     * @alias module:model/TSSGroupId
     */
    constructor() { 
        
        TSSGroupId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TSSGroupId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TSSGroupId} obj Optional instance to populate.
     * @return {module:model/TSSGroupId} The populated <code>TSSGroupId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TSSGroupId();

            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('curve')) {
                obj['curve'] = CurveType.constructFromObject(data['curve']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TSSGroupId</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TSSGroupId</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }

        return true;
    }


}



/**
 * The TSS group ID.
 * @member {String} group_id
 */
TSSGroupId.prototype['group_id'] = undefined;

/**
 * @member {module:model/CurveType} curve
 */
TSSGroupId.prototype['curve'] = undefined;






export default TSSGroupId;

