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
 * The UTXO model module.
 * @module model/UTXO
 * @version 0.2.7
 */
class UTXO {
    /**
     * Constructs a new <code>UTXO</code>.
     * The UTXO information.
     * @alias module:model/UTXO
     */
    constructor() { 
        
        UTXO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UTXO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UTXO} obj Optional instance to populate.
     * @return {module:model/UTXO} The populated <code>UTXO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UTXO();

            if (data.hasOwnProperty('tx_hash')) {
                obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
            }
            if (data.hasOwnProperty('vout_n')) {
                obj['vout_n'] = ApiClient.convertToType(data['vout_n'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('is_coinbase')) {
                obj['is_coinbase'] = ApiClient.convertToType(data['is_coinbase'], 'Boolean');
            }
            if (data.hasOwnProperty('is_locked')) {
                obj['is_locked'] = ApiClient.convertToType(data['is_locked'], 'Boolean');
            }
            if (data.hasOwnProperty('confirmed_number')) {
                obj['confirmed_number'] = ApiClient.convertToType(data['confirmed_number'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UTXO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UTXO</code>.
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
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
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
UTXO.prototype['tx_hash'] = undefined;

/**
 * The output index of the UTXO.
 * @member {Number} vout_n
 */
UTXO.prototype['vout_n'] = undefined;

/**
 * The address of the UTXO.
 * @member {String} address
 */
UTXO.prototype['address'] = undefined;

/**
 * The token ID, which is the unique identifier of a token.
 * @member {String} token_id
 */
UTXO.prototype['token_id'] = undefined;

/**
 * The value of the UTXO.
 * @member {String} value
 */
UTXO.prototype['value'] = undefined;

/**
 * Whether the UTXO comes from a coinbase transaction.
 * @member {Boolean} is_coinbase
 */
UTXO.prototype['is_coinbase'] = undefined;

/**
 * Whether the UTXO is locked.
 * @member {Boolean} is_locked
 */
UTXO.prototype['is_locked'] = undefined;

/**
 * The number of confirmations for the UTXO.
 * @member {Number} confirmed_number
 */
UTXO.prototype['confirmed_number'] = undefined;






export default UTXO;

