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
import EvmLegacyFeeBasePrice from './EvmLegacyFeeBasePrice';
import FeeData from './FeeData';
import FeeType from './FeeType';

/**
 * The EvmLegacyTransactionFee model module.
 * @module model/EvmLegacyTransactionFee
 * @version 0.4.5
 */
class EvmLegacyTransactionFee {
    /**
     * Constructs a new <code>EvmLegacyTransactionFee</code>.
     * The transaction fee is calculated by multiplying the gas price (fee price) by the gas units used by the transaction. This can be expressed as: Transaction fee &#x3D;  (gas price * gas units used). If the gas units used exceeds the gas limit, the transaction will fail. 
     * @alias module:model/EvmLegacyTransactionFee
     * @implements module:model/EvmLegacyFeeBasePrice
     * @implements module:model/FeeData
     * @param gasPrice {String} The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
     * @param gasLimit {String} The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
     * @param feeType {module:model/FeeType} 
     * @param tokenId {String} The token ID of the transaction fee.
     */
    constructor(gasPrice, gasLimit, feeType, tokenId) { 
        EvmLegacyFeeBasePrice.initialize(this, gasPrice);FeeData.initialize(this, gasLimit);
        EvmLegacyTransactionFee.initialize(this, gasPrice, gasLimit, feeType, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasPrice, gasLimit, feeType, tokenId) { 
        obj['gas_price'] = gasPrice;
        obj['gas_limit'] = gasLimit || '21000';
        obj['fee_type'] = feeType;
        obj['token_id'] = tokenId;
    }

    /**
     * Constructs a <code>EvmLegacyTransactionFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmLegacyTransactionFee} obj Optional instance to populate.
     * @return {module:model/EvmLegacyTransactionFee} The populated <code>EvmLegacyTransactionFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmLegacyTransactionFee();
            EvmLegacyFeeBasePrice.constructFromObject(data, obj);
            FeeData.constructFromObject(data, obj);

            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
            if (data.hasOwnProperty('gas_limit')) {
                obj['gas_limit'] = ApiClient.convertToType(data['gas_limit'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmLegacyTransactionFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmLegacyTransactionFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmLegacyTransactionFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gas_price'] && !(typeof data['gas_price'] === 'string' || data['gas_price'] instanceof String)) {
            throw new Error("Expected the field `gas_price` to be a primitive type in the JSON string but got " + data['gas_price']);
        }
        // ensure the json data is a string
        if (data['gas_limit'] && !(typeof data['gas_limit'] === 'string' || data['gas_limit'] instanceof String)) {
            throw new Error("Expected the field `gas_limit` to be a primitive type in the JSON string but got " + data['gas_limit']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

EvmLegacyTransactionFee.RequiredProperties = ["gas_price", "gas_limit", "fee_type", "token_id"];

/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
 * @member {String} gas_price
 */
EvmLegacyTransactionFee.prototype['gas_price'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
EvmLegacyTransactionFee.prototype['gas_limit'] = '21000';

/**
 * @member {module:model/FeeType} fee_type
 */
EvmLegacyTransactionFee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
EvmLegacyTransactionFee.prototype['token_id'] = undefined;


// Implement EvmLegacyFeeBasePrice interface:
/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
 * @member {String} gas_price
 */
EvmLegacyFeeBasePrice.prototype['gas_price'] = undefined;
// Implement FeeData interface:
/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
FeeData.prototype['gas_limit'] = '21000';




export default EvmLegacyTransactionFee;

