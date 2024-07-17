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
 * The EstimateFeeContractCallDestination model module.
 * @module model/EstimateFeeContractCallDestination
 * @version 0.4.1
 */
class EstimateFeeContractCallDestination {
    /**
     * Constructs a new <code>EstimateFeeContractCallDestination</code>.
     * The information about the transaction destination.
     * @alias module:model/EstimateFeeContractCallDestination
     */
    constructor() { 
        
        EstimateFeeContractCallDestination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EstimateFeeContractCallDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateFeeContractCallDestination} obj Optional instance to populate.
     * @return {module:model/EstimateFeeContractCallDestination} The populated <code>EstimateFeeContractCallDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateFeeContractCallDestination();

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
     * Validates the JSON data with respect to <code>EstimateFeeContractCallDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateFeeContractCallDestination</code>.
     */
    static validateJSON(data) {
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



/**
 * The destination address.
 * @member {String} address
 */
EstimateFeeContractCallDestination.prototype['address'] = undefined;

/**
 * The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} value
 */
EstimateFeeContractCallDestination.prototype['value'] = undefined;

/**
 * The data that is used to invoke a specific function or method within the specified contract at the destination address. 
 * @member {Blob} calldata
 */
EstimateFeeContractCallDestination.prototype['calldata'] = undefined;






export default EstimateFeeContractCallDestination;

