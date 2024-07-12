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
import FeeAmount from './FeeAmount';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';

/**
 * The UtxoFeeSlow model module.
 * @module model/UtxoFeeSlow
 * @version 0.2.7
 */
class UtxoFeeSlow {
    /**
     * Constructs a new <code>UtxoFeeSlow</code>.
     * @alias module:model/UtxoFeeSlow
     * @implements module:model/UtxoFeeBasePrice
     * @implements module:model/FeeAmount
     * @param feeRate {String} The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
     * @param maxFeeAmount {String} The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
     */
    constructor(feeRate, maxFeeAmount) { 
        UtxoFeeBasePrice.initialize(this, feeRate);FeeAmount.initialize(this, maxFeeAmount);
        UtxoFeeSlow.initialize(this, feeRate, maxFeeAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeRate, maxFeeAmount) { 
        obj['fee_rate'] = feeRate;
        obj['max_fee_amount'] = maxFeeAmount;
    }

    /**
     * Constructs a <code>UtxoFeeSlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtxoFeeSlow} obj Optional instance to populate.
     * @return {module:model/UtxoFeeSlow} The populated <code>UtxoFeeSlow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtxoFeeSlow();
            UtxoFeeBasePrice.constructFromObject(data, obj);
            FeeAmount.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'String');
            }
            if (data.hasOwnProperty('max_fee_amount')) {
                obj['max_fee_amount'] = ApiClient.convertToType(data['max_fee_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtxoFeeSlow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtxoFeeSlow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UtxoFeeSlow.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_rate'] && !(typeof data['fee_rate'] === 'string' || data['fee_rate'] instanceof String)) {
            throw new Error("Expected the field `fee_rate` to be a primitive type in the JSON string but got " + data['fee_rate']);
        }
        // ensure the json data is a string
        if (data['max_fee_amount'] && !(typeof data['max_fee_amount'] === 'string' || data['max_fee_amount'] instanceof String)) {
            throw new Error("Expected the field `max_fee_amount` to be a primitive type in the JSON string but got " + data['max_fee_amount']);
        }

        return true;
    }


}

UtxoFeeSlow.RequiredProperties = ["fee_rate", "max_fee_amount"];

/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
UtxoFeeSlow.prototype['fee_rate'] = undefined;

/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
UtxoFeeSlow.prototype['max_fee_amount'] = undefined;


// Implement UtxoFeeBasePrice interface:
/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
UtxoFeeBasePrice.prototype['fee_rate'] = undefined;
// Implement FeeAmount interface:
/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
FeeAmount.prototype['max_fee_amount'] = undefined;




export default UtxoFeeSlow;

