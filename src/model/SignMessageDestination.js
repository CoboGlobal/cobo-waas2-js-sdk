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
 * The SignMessageDestination model module.
 * @module model/SignMessageDestination
 * @version 0.4.1
 */
class SignMessageDestination {
    /**
     * Constructs a new <code>SignMessageDestination</code>.
     * The information about the transaction destination.
     * @alias module:model/SignMessageDestination
     */
    constructor() { 
        
        SignMessageDestination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignMessageDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignMessageDestination} obj Optional instance to populate.
     * @return {module:model/SignMessageDestination} The populated <code>SignMessageDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignMessageDestination();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('structured_data')) {
                obj['structured_data'] = ApiClient.convertToType(data['structured_data'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignMessageDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignMessageDestination</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * The raw data of the message to be signed, encoded in Base64 format.
 * @member {String} message
 */
SignMessageDestination.prototype['message'] = undefined;

/**
 * The structured data of the message to be signed, encoded in JSON format.
 * @member {Object.<String, Object>} structured_data
 */
SignMessageDestination.prototype['structured_data'] = undefined;






export default SignMessageDestination;

