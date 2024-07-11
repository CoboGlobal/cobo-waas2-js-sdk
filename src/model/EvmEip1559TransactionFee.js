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
import EvmEip1559FeeBasePrice from './EvmEip1559FeeBasePrice';
import FeeData from './FeeData';
import FeeType from './FeeType';

/**
 * The EvmEip1559TransactionFee model module.
 * @module model/EvmEip1559TransactionFee
 * @version 0.2.5
 */
class EvmEip1559TransactionFee {
    /**
     * Constructs a new <code>EvmEip1559TransactionFee</code>.
     * The transaction fee is calculated by multiplying the sum of the base fee price and the maximum priority fee by the gas units used by the transaction. This can be expressed as: Transaction fee &#x3D; (base fee price + maximum priority fee) * gas units used. If the gas units used exceeds the gas limit, the transaction will fail. 
     * @alias module:model/EvmEip1559TransactionFee
     * @implements module:model/EvmEip1559FeeBasePrice
     * @implements module:model/FeeData
     * @param maxPriorityFee {String} The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
     * @param baseFee {String} The base fee price of the chain, in wei.
     * @param gasLimit {String} The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
     * @param feeType {module:model/FeeType} 
     * @param tokenId {String} The token ID of the transaction fee.
     */
    constructor(maxPriorityFee, baseFee, gasLimit, feeType, tokenId) { 
        EvmEip1559FeeBasePrice.initialize(this, maxPriorityFee, baseFee);FeeData.initialize(this, gasLimit);
        EvmEip1559TransactionFee.initialize(this, maxPriorityFee, baseFee, gasLimit, feeType, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxPriorityFee, baseFee, gasLimit, feeType, tokenId) { 
        obj['max_priority_fee'] = maxPriorityFee;
        obj['base_fee'] = baseFee;
        obj['gas_limit'] = gasLimit || '21000';
        obj['fee_type'] = feeType;
        obj['token_id'] = tokenId;
    }

    /**
     * Constructs a <code>EvmEip1559TransactionFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEip1559TransactionFee} obj Optional instance to populate.
     * @return {module:model/EvmEip1559TransactionFee} The populated <code>EvmEip1559TransactionFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEip1559TransactionFee();
            EvmEip1559FeeBasePrice.constructFromObject(data, obj);
            FeeData.constructFromObject(data, obj);

            if (data.hasOwnProperty('max_priority_fee')) {
                obj['max_priority_fee'] = ApiClient.convertToType(data['max_priority_fee'], 'String');
            }
            if (data.hasOwnProperty('base_fee')) {
                obj['base_fee'] = ApiClient.convertToType(data['base_fee'], 'String');
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
     * Validates the JSON data with respect to <code>EvmEip1559TransactionFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEip1559TransactionFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmEip1559TransactionFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['max_priority_fee'] && !(typeof data['max_priority_fee'] === 'string' || data['max_priority_fee'] instanceof String)) {
            throw new Error("Expected the field `max_priority_fee` to be a primitive type in the JSON string but got " + data['max_priority_fee']);
        }
        // ensure the json data is a string
        if (data['base_fee'] && !(typeof data['base_fee'] === 'string' || data['base_fee'] instanceof String)) {
            throw new Error("Expected the field `base_fee` to be a primitive type in the JSON string but got " + data['base_fee']);
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

EvmEip1559TransactionFee.RequiredProperties = ["max_priority_fee", "base_fee", "gas_limit", "fee_type", "token_id"];

/**
 * The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee
 */
EvmEip1559TransactionFee.prototype['max_priority_fee'] = undefined;

/**
 * The base fee price of the chain, in wei.
 * @member {String} base_fee
 */
EvmEip1559TransactionFee.prototype['base_fee'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
EvmEip1559TransactionFee.prototype['gas_limit'] = '21000';

/**
 * @member {module:model/FeeType} fee_type
 */
EvmEip1559TransactionFee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
EvmEip1559TransactionFee.prototype['token_id'] = undefined;


// Implement EvmEip1559FeeBasePrice interface:
/**
 * The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee
 */
EvmEip1559FeeBasePrice.prototype['max_priority_fee'] = undefined;
/**
 * The base fee price of the chain, in wei.
 * @member {String} base_fee
 */
EvmEip1559FeeBasePrice.prototype['base_fee'] = undefined;
// Implement FeeData interface:
/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
FeeData.prototype['gas_limit'] = '21000';




export default EvmEip1559TransactionFee;

