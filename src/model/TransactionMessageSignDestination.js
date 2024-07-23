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
import TransactionDestinationType from './TransactionDestinationType';

/**
 * The TransactionMessageSignDestination model module.
 * @module model/TransactionMessageSignDestination
 * @version 0.4.4
 */
class TransactionMessageSignDestination {
    /**
     * Constructs a new <code>TransactionMessageSignDestination</code>.
     * The information about the transaction destination.
     * @alias module:model/TransactionMessageSignDestination
     * @param destinationType {module:model/TransactionDestinationType} 
     */
    constructor(destinationType) { 
        
        TransactionMessageSignDestination.initialize(this, destinationType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destinationType) { 
        obj['destination_type'] = destinationType;
    }

    /**
     * Constructs a <code>TransactionMessageSignDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionMessageSignDestination} obj Optional instance to populate.
     * @return {module:model/TransactionMessageSignDestination} The populated <code>TransactionMessageSignDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionMessageSignDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransactionDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('structured_data')) {
                obj['structured_data'] = ApiClient.convertToType(data['structured_data'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionMessageSignDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionMessageSignDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionMessageSignDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['structured_data'] && !(typeof data['structured_data'] === 'string' || data['structured_data'] instanceof String)) {
            throw new Error("Expected the field `structured_data` to be a primitive type in the JSON string but got " + data['structured_data']);
        }

        return true;
    }


}

TransactionMessageSignDestination.RequiredProperties = ["destination_type"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionMessageSignDestination.prototype['destination_type'] = undefined;

/**
 * The raw data to be signed that are encoded in Base64.
 * @member {String} message
 */
TransactionMessageSignDestination.prototype['message'] = undefined;

/**
 * The structured data to be signed that are encoded in JSON.
 * @member {String} structured_data
 */
TransactionMessageSignDestination.prototype['structured_data'] = undefined;






export default TransactionMessageSignDestination;

