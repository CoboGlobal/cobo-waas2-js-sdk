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
import FeeType from './FeeType';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';

/**
 * The TransactionUtxoFee model module.
 * @module model/TransactionUtxoFee
 * @version 0.2.6
 */
class TransactionUtxoFee {
    /**
     * Constructs a new <code>TransactionUtxoFee</code>.
     * TThe transaction fee actually charged by the chain that uses the UTXO fee model, such as Bitcoin. The transaction fee is calculated by multiplying the fee rate by the transaction size. This can be expressed as: Transaction fee &#x3D; fee rate * transaction size. 
     * @alias module:model/TransactionUtxoFee
     * @implements module:model/UtxoFeeBasePrice
     * @implements module:model/FeeAmount
     * @param feeRate {String} The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
     * @param maxFeeAmount {String} The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
     * @param feeType {module:model/FeeType} 
     */
    constructor(feeRate, maxFeeAmount, feeType) { 
        UtxoFeeBasePrice.initialize(this, feeRate);FeeAmount.initialize(this, maxFeeAmount);
        TransactionUtxoFee.initialize(this, feeRate, maxFeeAmount, feeType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeRate, maxFeeAmount, feeType) { 
        obj['fee_rate'] = feeRate;
        obj['max_fee_amount'] = maxFeeAmount;
        obj['fee_type'] = feeType;
    }

    /**
     * Constructs a <code>TransactionUtxoFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionUtxoFee} obj Optional instance to populate.
     * @return {module:model/TransactionUtxoFee} The populated <code>TransactionUtxoFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionUtxoFee();
            UtxoFeeBasePrice.constructFromObject(data, obj);
            FeeAmount.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'String');
            }
            if (data.hasOwnProperty('max_fee_amount')) {
                obj['max_fee_amount'] = ApiClient.convertToType(data['max_fee_amount'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('fee_used')) {
                obj['fee_used'] = ApiClient.convertToType(data['fee_used'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionUtxoFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionUtxoFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionUtxoFee.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['fee_used'] && !(typeof data['fee_used'] === 'string' || data['fee_used'] instanceof String)) {
            throw new Error("Expected the field `fee_used` to be a primitive type in the JSON string but got " + data['fee_used']);
        }

        return true;
    }


}

TransactionUtxoFee.RequiredProperties = ["fee_rate", "max_fee_amount", "fee_type"];

/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
TransactionUtxoFee.prototype['fee_rate'] = undefined;

/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
TransactionUtxoFee.prototype['max_fee_amount'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionUtxoFee.prototype['fee_type'] = undefined;

/**
 * The transaction fee.
 * @member {String} fee_used
 */
TransactionUtxoFee.prototype['fee_used'] = undefined;


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




export default TransactionUtxoFee;

