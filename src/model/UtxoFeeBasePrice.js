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
 * The UtxoFeeBasePrice model module.
 * @module model/UtxoFeeBasePrice
 * @version 0.1.0
 */
class UtxoFeeBasePrice {
    /**
     * Constructs a new <code>UtxoFeeBasePrice</code>.
     * The base transaction fee for UTXO-based chains.
     * @alias module:model/UtxoFeeBasePrice
     * @param feeRate {String} The fee rate, in sats/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
     */
    constructor(feeRate) { 
        
        UtxoFeeBasePrice.initialize(this, feeRate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeRate) { 
        obj['fee_rate'] = feeRate;
    }

    /**
     * Constructs a <code>UtxoFeeBasePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtxoFeeBasePrice} obj Optional instance to populate.
     * @return {module:model/UtxoFeeBasePrice} The populated <code>UtxoFeeBasePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtxoFeeBasePrice();

            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtxoFeeBasePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtxoFeeBasePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UtxoFeeBasePrice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }
        // ensure the json data is a string
        if (data['fee_rate'] && !(typeof data['fee_rate'] === 'string' || data['fee_rate'] instanceof String)) {
            throw new Error("Expected the field `fee_rate` to be a primitive type in the JSON string but got " + data['fee_rate']);
        }

        return true;
    }


}

UtxoFeeBasePrice.RequiredProperties = ["fee_rate"];

/**
 * The token ID of the transaction fee. Unique in all chains scope.
 * @member {String} fee_token_id
 */
UtxoFeeBasePrice.prototype['fee_token_id'] = undefined;

/**
 * The fee rate, in sats/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
UtxoFeeBasePrice.prototype['fee_rate'] = undefined;






export default UtxoFeeBasePrice;

