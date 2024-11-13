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
 * The CheckAddressChainsValidity200ResponseInner model module.
 * @module model/CheckAddressChainsValidity200ResponseInner
 */
class CheckAddressChainsValidity200ResponseInner {
    /**
     * Constructs a new <code>CheckAddressChainsValidity200ResponseInner</code>.
     * @alias module:model/CheckAddressChainsValidity200ResponseInner
     * @param chain_id {String} The chain ID, which is the unique identifier of a blockchain.
     * @param validity {Boolean} Whether the address is valid for the specified chain.  - `true`: The address is valid.  - `false`: The address is invalid. 
     */
    constructor(chain_id, validity) { 
        
        CheckAddressChainsValidity200ResponseInner.initialize(this, chain_id, validity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, chain_id, validity) { 
        obj['chain_id'] = chain_id;
        obj['validity'] = validity;
    }

    /**
     * Constructs a <code>CheckAddressChainsValidity200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckAddressChainsValidity200ResponseInner} obj Optional instance to populate.
     * @return {module:model/CheckAddressChainsValidity200ResponseInner} The populated <code>CheckAddressChainsValidity200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckAddressChainsValidity200ResponseInner();

            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('validity')) {
                obj['validity'] = ApiClient.convertToType(data['validity'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckAddressChainsValidity200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckAddressChainsValidity200ResponseInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CheckAddressChainsValidity200ResponseInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }

        return true;
    }


}

CheckAddressChainsValidity200ResponseInner.RequiredProperties = ["chain_id", "validity"];

/**
 * The chain ID, which is the unique identifier of a blockchain.
 * @member {String} chain_id
 */
CheckAddressChainsValidity200ResponseInner.prototype['chain_id'] = undefined;

/**
 * Whether the address is valid for the specified chain.  - `true`: The address is valid.  - `false`: The address is invalid. 
 * @member {Boolean} validity
 */
CheckAddressChainsValidity200ResponseInner.prototype['validity'] = undefined;






export default CheckAddressChainsValidity200ResponseInner;

