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
import FeeType from './FeeType';

/**
 * The EvmLegacyFeePrice model module.
 * @module model/EvmLegacyFeePrice
 * @version 0.1.0
 */
class EvmLegacyFeePrice {
    /**
     * Constructs a new <code>EvmLegacyFeePrice</code>.
     * The transaction fee when using the legacy method.
     * @alias module:model/EvmLegacyFeePrice
     * @implements module:model/EvmLegacyFeeBasePrice
     * @param gasPrice {String} The gas price, in gwei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
     * @param feeType {module:model/FeeType} 
     */
    constructor(gasPrice, feeType) { 
        EvmLegacyFeeBasePrice.initialize(this, gasPrice);
        EvmLegacyFeePrice.initialize(this, gasPrice, feeType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasPrice, feeType) { 
        obj['gas_price'] = gasPrice;
        obj['fee_type'] = feeType;
    }

    /**
     * Constructs a <code>EvmLegacyFeePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmLegacyFeePrice} obj Optional instance to populate.
     * @return {module:model/EvmLegacyFeePrice} The populated <code>EvmLegacyFeePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmLegacyFeePrice();
            EvmLegacyFeeBasePrice.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmLegacyFeePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmLegacyFeePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmLegacyFeePrice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }
        // ensure the json data is a string
        if (data['gas_price'] && !(typeof data['gas_price'] === 'string' || data['gas_price'] instanceof String)) {
            throw new Error("Expected the field `gas_price` to be a primitive type in the JSON string but got " + data['gas_price']);
        }

        return true;
    }


}

EvmLegacyFeePrice.RequiredProperties = ["gas_price", "fee_type"];

/**
 * The token ID of the transaction fee.
 * @member {String} fee_token_id
 */
EvmLegacyFeePrice.prototype['fee_token_id'] = undefined;

/**
 * The gas price, in gwei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
 * @member {String} gas_price
 */
EvmLegacyFeePrice.prototype['gas_price'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
EvmLegacyFeePrice.prototype['fee_type'] = undefined;


// Implement EvmLegacyFeeBasePrice interface:
/**
 * The token ID of the transaction fee.
 * @member {String} fee_token_id
 */
EvmLegacyFeeBasePrice.prototype['fee_token_id'] = undefined;
/**
 * The gas price, in gwei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
 * @member {String} gas_price
 */
EvmLegacyFeeBasePrice.prototype['gas_price'] = undefined;




export default EvmLegacyFeePrice;

