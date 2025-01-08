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
import MessageSignDestinationType from './MessageSignDestinationType';

/**
 * The EvmEIP191MessageSignDestination model module.
 * @module model/EvmEIP191MessageSignDestination
 */
class EvmEIP191MessageSignDestination {
    /**
     * Constructs a new <code>EvmEIP191MessageSignDestination</code>.
     * The information about the destination &#x60;EVM_EIP_191_Signature&#x60;. Refer to [Transaction sources and destinations](https://www.cobo.com/developers/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.
     * @alias module:model/EvmEIP191MessageSignDestination
     * @param destination_type {module:model/MessageSignDestinationType} 
     * @param message {String} The raw data of the message to be signed, encoded in Base64 format.
     */
    constructor(destination_type, message) { 
        
        EvmEIP191MessageSignDestination.initialize(this, destination_type, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, message) { 
        obj['destination_type'] = destination_type;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>EvmEIP191MessageSignDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEIP191MessageSignDestination} obj Optional instance to populate.
     * @return {module:model/EvmEIP191MessageSignDestination} The populated <code>EvmEIP191MessageSignDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEIP191MessageSignDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = MessageSignDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmEIP191MessageSignDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEIP191MessageSignDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmEIP191MessageSignDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

EvmEIP191MessageSignDestination.RequiredProperties = ["destination_type", "message"];

/**
 * @member {module:model/MessageSignDestinationType} destination_type
 */
EvmEIP191MessageSignDestination.prototype['destination_type'] = undefined;

/**
 * The raw data of the message to be signed, encoded in Base64 format.
 * @member {String} message
 */
EvmEIP191MessageSignDestination.prototype['message'] = undefined;






export default EvmEIP191MessageSignDestination;

