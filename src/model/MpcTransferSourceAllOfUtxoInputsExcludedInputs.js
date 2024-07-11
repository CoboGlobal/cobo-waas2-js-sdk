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
 * The MpcTransferSourceAllOfUtxoInputsExcludedInputs model module.
 * @module model/MpcTransferSourceAllOfUtxoInputsExcludedInputs
 * @version 0.2.5
 */
class MpcTransferSourceAllOfUtxoInputsExcludedInputs {
    /**
     * Constructs a new <code>MpcTransferSourceAllOfUtxoInputsExcludedInputs</code>.
     * @alias module:model/MpcTransferSourceAllOfUtxoInputsExcludedInputs
     */
    constructor() { 
        
        MpcTransferSourceAllOfUtxoInputsExcludedInputs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MpcTransferSourceAllOfUtxoInputsExcludedInputs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MpcTransferSourceAllOfUtxoInputsExcludedInputs} obj Optional instance to populate.
     * @return {module:model/MpcTransferSourceAllOfUtxoInputsExcludedInputs} The populated <code>MpcTransferSourceAllOfUtxoInputsExcludedInputs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MpcTransferSourceAllOfUtxoInputsExcludedInputs();

            if (data.hasOwnProperty('tx_hash')) {
                obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
            }
            if (data.hasOwnProperty('vout_n')) {
                obj['vout_n'] = ApiClient.convertToType(data['vout_n'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MpcTransferSourceAllOfUtxoInputsExcludedInputs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MpcTransferSourceAllOfUtxoInputsExcludedInputs</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tx_hash'] && !(typeof data['tx_hash'] === 'string' || data['tx_hash'] instanceof String)) {
            throw new Error("Expected the field `tx_hash` to be a primitive type in the JSON string but got " + data['tx_hash']);
        }

        return true;
    }


}



/**
 * The transaction hash of UTXO not to be consumed in the transaction.
 * @member {String} tx_hash
 */
MpcTransferSourceAllOfUtxoInputsExcludedInputs.prototype['tx_hash'] = undefined;

/**
 * The output index of the UTXO.
 * @member {Number} vout_n
 */
MpcTransferSourceAllOfUtxoInputsExcludedInputs.prototype['vout_n'] = undefined;






export default MpcTransferSourceAllOfUtxoInputsExcludedInputs;

