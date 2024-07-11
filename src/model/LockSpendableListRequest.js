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
import LockSpendableListRequestSpendablesInner from './LockSpendableListRequestSpendablesInner';

/**
 * The LockSpendableListRequest model module.
 * @module model/LockSpendableListRequest
 * @version 0.2.5
 */
class LockSpendableListRequest {
    /**
     * Constructs a new <code>LockSpendableListRequest</code>.
     * @alias module:model/LockSpendableListRequest
     * @param spendables {Array.<module:model/LockSpendableListRequestSpendablesInner>} 
     */
    constructor(spendables) { 
        
        LockSpendableListRequest.initialize(this, spendables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, spendables) { 
        obj['spendables'] = spendables;
    }

    /**
     * Constructs a <code>LockSpendableListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LockSpendableListRequest} obj Optional instance to populate.
     * @return {module:model/LockSpendableListRequest} The populated <code>LockSpendableListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LockSpendableListRequest();

            if (data.hasOwnProperty('spendables')) {
                obj['spendables'] = ApiClient.convertToType(data['spendables'], [LockSpendableListRequestSpendablesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LockSpendableListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LockSpendableListRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LockSpendableListRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['spendables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['spendables'])) {
                throw new Error("Expected the field `spendables` to be an array in the JSON data but got " + data['spendables']);
            }
            // validate the optional field `spendables` (array)
            for (const item of data['spendables']) {
                LockSpendableListRequestSpendablesInner.validateJSON(item);
            };
        }

        return true;
    }


}

LockSpendableListRequest.RequiredProperties = ["spendables"];

/**
 * @member {Array.<module:model/LockSpendableListRequestSpendablesInner>} spendables
 */
LockSpendableListRequest.prototype['spendables'] = undefined;






export default LockSpendableListRequest;

