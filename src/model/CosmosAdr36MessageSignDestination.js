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
 * The CosmosAdr36MessageSignDestination model module.
 * @module model/CosmosAdr36MessageSignDestination
 */
class CosmosAdr36MessageSignDestination {
    /**
     * Constructs a new <code>CosmosAdr36MessageSignDestination</code>.
     * The information about the destination &#x60;COSMOS_ADR_36&#x60;. Refer to [Transaction sources and destinations](https://www.cobo.com/developers/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.
     * @alias module:model/CosmosAdr36MessageSignDestination
     * @param destination_type {module:model/MessageSignDestinationType} 
     * @param message_cosmos_adr36 {String} Message to be signed, in hexadecimal format.
     */
    constructor(destination_type, message_cosmos_adr36) { 
        
        CosmosAdr36MessageSignDestination.initialize(this, destination_type, message_cosmos_adr36);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, message_cosmos_adr36) { 
        obj['destination_type'] = destination_type;
        obj['message_cosmos_adr36'] = message_cosmos_adr36;
    }

    /**
     * Constructs a <code>CosmosAdr36MessageSignDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CosmosAdr36MessageSignDestination} obj Optional instance to populate.
     * @return {module:model/CosmosAdr36MessageSignDestination} The populated <code>CosmosAdr36MessageSignDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CosmosAdr36MessageSignDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = MessageSignDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('message_cosmos_adr36')) {
                obj['message_cosmos_adr36'] = ApiClient.convertToType(data['message_cosmos_adr36'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CosmosAdr36MessageSignDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CosmosAdr36MessageSignDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CosmosAdr36MessageSignDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message_cosmos_adr36'] && !(typeof data['message_cosmos_adr36'] === 'string' || data['message_cosmos_adr36'] instanceof String)) {
            throw new Error("Expected the field `message_cosmos_adr36` to be a primitive type in the JSON string but got " + data['message_cosmos_adr36']);
        }

        return true;
    }


}

CosmosAdr36MessageSignDestination.RequiredProperties = ["destination_type", "message_cosmos_adr36"];

/**
 * @member {module:model/MessageSignDestinationType} destination_type
 */
CosmosAdr36MessageSignDestination.prototype['destination_type'] = undefined;

/**
 * Message to be signed, in hexadecimal format.
 * @member {String} message_cosmos_adr36
 */
CosmosAdr36MessageSignDestination.prototype['message_cosmos_adr36'] = undefined;






export default CosmosAdr36MessageSignDestination;

