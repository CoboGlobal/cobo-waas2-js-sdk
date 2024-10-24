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
import EstimateFeeRequestType from './EstimateFeeRequestType';

/**
 * The SafeWalletDelegatesContractCall model module.
 * @module model/SafeWalletDelegatesContractCall
 */
class SafeWalletDelegatesContractCall {
    /**
     * Constructs a new <code>SafeWalletDelegatesContractCall</code>.
     * @alias module:model/SafeWalletDelegatesContractCall
     * @param request_type {module:model/EstimateFeeRequestType} 
     */
    constructor(request_type) { 
        
        SafeWalletDelegatesContractCall.initialize(this, request_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_type) { 
        obj['request_type'] = request_type;
    }

    /**
     * Constructs a <code>SafeWalletDelegatesContractCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SafeWalletDelegatesContractCall} obj Optional instance to populate.
     * @return {module:model/SafeWalletDelegatesContractCall} The populated <code>SafeWalletDelegatesContractCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SafeWalletDelegatesContractCall();

            if (data.hasOwnProperty('request_type')) {
                obj['request_type'] = EstimateFeeRequestType.constructFromObject(data['request_type']);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('calldata')) {
                obj['calldata'] = ApiClient.convertToType(data['calldata'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SafeWalletDelegatesContractCall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SafeWalletDelegatesContractCall</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SafeWalletDelegatesContractCall.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['calldata'] && !(typeof data['calldata'] === 'string' || data['calldata'] instanceof String)) {
            throw new Error("Expected the field `calldata` to be a primitive type in the JSON string but got " + data['calldata']);
        }

        return true;
    }


}

SafeWalletDelegatesContractCall.RequiredProperties = ["request_type"];

/**
 * @member {module:model/EstimateFeeRequestType} request_type
 */
SafeWalletDelegatesContractCall.prototype['request_type'] = undefined;

/**
 * The destination address.
 * @member {String} address
 */
SafeWalletDelegatesContractCall.prototype['address'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} value
 */
SafeWalletDelegatesContractCall.prototype['value'] = undefined;

/**
 * The data that is used to invoke a specific function or method within the specified contract at the destination address. 
 * @member {String} calldata
 */
SafeWalletDelegatesContractCall.prototype['calldata'] = undefined;






export default SafeWalletDelegatesContractCall;

