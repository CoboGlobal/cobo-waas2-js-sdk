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
 * The TransactionAddressDestinationUtxoOutputsOutputsInner model module.
 * @module model/TransactionAddressDestinationUtxoOutputsOutputsInner
 * @version 0.4.4
 */
class TransactionAddressDestinationUtxoOutputsOutputsInner {
    /**
     * Constructs a new <code>TransactionAddressDestinationUtxoOutputsOutputsInner</code>.
     * @alias module:model/TransactionAddressDestinationUtxoOutputsOutputsInner
     */
    constructor() { 
        
        TransactionAddressDestinationUtxoOutputsOutputsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionAddressDestinationUtxoOutputsOutputsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionAddressDestinationUtxoOutputsOutputsInner} obj Optional instance to populate.
     * @return {module:model/TransactionAddressDestinationUtxoOutputsOutputsInner} The populated <code>TransactionAddressDestinationUtxoOutputsOutputsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionAddressDestinationUtxoOutputsOutputsInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('script')) {
                obj['script'] = ApiClient.convertToType(data['script'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionAddressDestinationUtxoOutputsOutputsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionAddressDestinationUtxoOutputsOutputsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['script'] && !(typeof data['script'] === 'string' || data['script'] instanceof String)) {
            throw new Error("Expected the field `script` to be a primitive type in the JSON string but got " + data['script']);
        }

        return true;
    }


}



/**
 * The destination address.
 * @member {String} address
 */
TransactionAddressDestinationUtxoOutputsOutputsInner.prototype['address'] = undefined;

/**
 * The transaction amount. For example, if you trade 1.5 ETH, then the amount is `1.5`. 
 * @member {String} amount
 */
TransactionAddressDestinationUtxoOutputsOutputsInner.prototype['amount'] = undefined;

/**
 * The script of the output. It is a programmable code fragment that defines the conditions under which the UTXO can be spent.
 * @member {String} script
 */
TransactionAddressDestinationUtxoOutputsOutputsInner.prototype['script'] = undefined;






export default TransactionAddressDestinationUtxoOutputsOutputsInner;

