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
 * The TransactionEvmContractMethod model module.
 * @module model/TransactionEvmContractMethod
 */
class TransactionEvmContractMethod {
    /**
     * Constructs a new <code>TransactionEvmContractMethod</code>.
     * The information about a method in a smart contract.
     * @alias module:model/TransactionEvmContractMethod
     */
    constructor() { 
        
        TransactionEvmContractMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionEvmContractMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionEvmContractMethod} obj Optional instance to populate.
     * @return {module:model/TransactionEvmContractMethod} The populated <code>TransactionEvmContractMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionEvmContractMethod();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sig')) {
                obj['sig'] = ApiClient.convertToType(data['sig'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('payable')) {
                obj['payable'] = ApiClient.convertToType(data['payable'], 'Boolean');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionEvmContractMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionEvmContractMethod</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['sig'] && !(typeof data['sig'] === 'string' || data['sig'] instanceof String)) {
            throw new Error("Expected the field `sig` to be a primitive type in the JSON string but got " + data['sig']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['selector'] && !(typeof data['selector'] === 'string' || data['selector'] instanceof String)) {
            throw new Error("Expected the field `selector` to be a primitive type in the JSON string but got " + data['selector']);
        }

        return true;
    }


}



/**
 * The method name.
 * @member {String} name
 */
TransactionEvmContractMethod.prototype['name'] = undefined;

/**
 * The signature of the method, which includes the method name and parameter types.
 * @member {String} sig
 */
TransactionEvmContractMethod.prototype['sig'] = undefined;

/**
 * The method type.
 * @member {String} type
 */
TransactionEvmContractMethod.prototype['type'] = undefined;

/**
 * Whether the method is payable, which means it can receive tokens along with the transaction. - `true`: The method is payable. - `false`: The method is not payable. 
 * @member {Boolean} payable
 */
TransactionEvmContractMethod.prototype['payable'] = undefined;

/**
 * The method selector, a four-byte identifier derived from the method's signature, used to invoke the method in a transaction.
 * @member {String} selector
 */
TransactionEvmContractMethod.prototype['selector'] = undefined;






export default TransactionEvmContractMethod;

