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
 * The TransactionSelectedUtxo model module.
 * @module model/TransactionSelectedUtxo
 */
class TransactionSelectedUtxo {
    /**
     * Constructs a new <code>TransactionSelectedUtxo</code>.
     * The selected UTXO information.
     * @alias module:model/TransactionSelectedUtxo
     */
    constructor() { 
        
        TransactionSelectedUtxo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionSelectedUtxo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSelectedUtxo} obj Optional instance to populate.
     * @return {module:model/TransactionSelectedUtxo} The populated <code>TransactionSelectedUtxo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSelectedUtxo();

            if (data.hasOwnProperty('tx_hash')) {
                obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
            }
            if (data.hasOwnProperty('vout_n')) {
                obj['vout_n'] = ApiClient.convertToType(data['vout_n'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSelectedUtxo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSelectedUtxo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tx_hash'] && !(typeof data['tx_hash'] === 'string' || data['tx_hash'] instanceof String)) {
            throw new Error("Expected the field `tx_hash` to be a primitive type in the JSON string but got " + data['tx_hash']);
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



/**
 * The transaction hash of the UTXO.
 * @member {String} tx_hash
 */
TransactionSelectedUtxo.prototype['tx_hash'] = undefined;

/**
 * The output index of the UTXO.
 * @member {Number} vout_n
 */
TransactionSelectedUtxo.prototype['vout_n'] = undefined;

/**
 * The address of the UTXO.
 * @member {String} address
 */
TransactionSelectedUtxo.prototype['address'] = undefined;

/**
 * The value of the UTXO.
 * @member {String} value
 */
TransactionSelectedUtxo.prototype['value'] = undefined;






export default TransactionSelectedUtxo;

