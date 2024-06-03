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
import FeeType from './FeeType';

/**
 * The EvmEip1559FeePrice model module.
 * @module model/EvmEip1559FeePrice
 * @version 0.1.0
 */
class EvmEip1559FeePrice {
    /**
     * Constructs a new <code>EvmEip1559FeePrice</code>.
     * The transaction fee when using the EIP 1669 method.
     * @alias module:model/EvmEip1559FeePrice
     * @implements module:model/EvmEip1559FeeBasePrice
     * @param maxPriorityFee {String} The max priority fee, in gwei. The max priority fee represents the highest amount of miner tips you are willing to pay for your transaction.
     * @param baseFee {String} The base fee of chain.
     * @param feeType {module:model/FeeType} 
     */
    constructor(maxPriorityFee, baseFee, feeType) { 
        EvmEip1559FeeBasePrice.initialize(this, maxPriorityFee, baseFee);
        EvmEip1559FeePrice.initialize(this, maxPriorityFee, baseFee, feeType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxPriorityFee, baseFee, feeType) { 
        obj['max_priority_fee'] = maxPriorityFee;
        obj['base_fee'] = baseFee;
        obj['fee_type'] = feeType;
    }

    /**
     * Constructs a <code>EvmEip1559FeePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEip1559FeePrice} obj Optional instance to populate.
     * @return {module:model/EvmEip1559FeePrice} The populated <code>EvmEip1559FeePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEip1559FeePrice();
            EvmEip1559FeeBasePrice.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
            if (data.hasOwnProperty('max_priority_fee')) {
                obj['max_priority_fee'] = ApiClient.convertToType(data['max_priority_fee'], 'String');
            }
            if (data.hasOwnProperty('base_fee')) {
                obj['base_fee'] = ApiClient.convertToType(data['base_fee'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmEip1559FeePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEip1559FeePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmEip1559FeePrice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }
        // ensure the json data is a string
        if (data['max_priority_fee'] && !(typeof data['max_priority_fee'] === 'string' || data['max_priority_fee'] instanceof String)) {
            throw new Error("Expected the field `max_priority_fee` to be a primitive type in the JSON string but got " + data['max_priority_fee']);
        }
        // ensure the json data is a string
        if (data['base_fee'] && !(typeof data['base_fee'] === 'string' || data['base_fee'] instanceof String)) {
            throw new Error("Expected the field `base_fee` to be a primitive type in the JSON string but got " + data['base_fee']);
        }

        return true;
    }


}

EvmEip1559FeePrice.RequiredProperties = ["max_priority_fee", "base_fee", "fee_type"];

/**
 * The token ID of the transaction fee. Unique in all chains scope.
 * @member {String} fee_token_id
 */
EvmEip1559FeePrice.prototype['fee_token_id'] = undefined;

/**
 * The max priority fee, in gwei. The max priority fee represents the highest amount of miner tips you are willing to pay for your transaction.
 * @member {String} max_priority_fee
 */
EvmEip1559FeePrice.prototype['max_priority_fee'] = undefined;

/**
 * The base fee of chain.
 * @member {String} base_fee
 */
EvmEip1559FeePrice.prototype['base_fee'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
EvmEip1559FeePrice.prototype['fee_type'] = undefined;


// Implement EvmEip1559FeeBasePrice interface:
/**
 * The token ID of the transaction fee. Unique in all chains scope.
 * @member {String} fee_token_id
 */
EvmEip1559FeeBasePrice.prototype['fee_token_id'] = undefined;
/**
 * The max priority fee, in gwei. The max priority fee represents the highest amount of miner tips you are willing to pay for your transaction.
 * @member {String} max_priority_fee
 */
EvmEip1559FeeBasePrice.prototype['max_priority_fee'] = undefined;
/**
 * The base fee of chain.
 * @member {String} base_fee
 */
EvmEip1559FeeBasePrice.prototype['base_fee'] = undefined;




export default EvmEip1559FeePrice;

