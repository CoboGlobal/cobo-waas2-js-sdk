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
import ContractCallDestinationType from './ContractCallDestinationType';

/**
 * The EvmContractCallDestination model module.
 * @module model/EvmContractCallDestination
 * @version 0.4.4
 */
class EvmContractCallDestination {
    /**
     * Constructs a new <code>EvmContractCallDestination</code>.
     * The information about the EVM transaction destination.
     * @alias module:model/EvmContractCallDestination
     * @param destinationType {module:model/ContractCallDestinationType} 
     * @param address {String} The destination address.
     * @param calldata {Blob} The data that is used to invoke a specific function or method within the specified contract at the destination address. 
     */
    constructor(destinationType, address, calldata) { 
        
        EvmContractCallDestination.initialize(this, destinationType, address, calldata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destinationType, address, calldata) { 
        obj['destination_type'] = destinationType;
        obj['address'] = address;
        obj['calldata'] = calldata;
    }

    /**
     * Constructs a <code>EvmContractCallDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmContractCallDestination} obj Optional instance to populate.
     * @return {module:model/EvmContractCallDestination} The populated <code>EvmContractCallDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmContractCallDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = ContractCallDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('calldata')) {
                obj['calldata'] = ApiClient.convertToType(data['calldata'], 'Blob');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmContractCallDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmContractCallDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmContractCallDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

EvmContractCallDestination.RequiredProperties = ["destination_type", "address", "calldata"];

/**
 * @member {module:model/ContractCallDestinationType} destination_type
 */
EvmContractCallDestination.prototype['destination_type'] = undefined;

/**
 * The destination address.
 * @member {String} address
 */
EvmContractCallDestination.prototype['address'] = undefined;

/**
 * The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} value
 */
EvmContractCallDestination.prototype['value'] = undefined;

/**
 * The data that is used to invoke a specific function or method within the specified contract at the destination address. 
 * @member {Blob} calldata
 */
EvmContractCallDestination.prototype['calldata'] = undefined;






export default EvmContractCallDestination;

