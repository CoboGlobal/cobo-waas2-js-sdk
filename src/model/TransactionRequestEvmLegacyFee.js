/**
 * Cobo Wallet as a Service 2.0
 *
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
 * The TransactionRequestEvmLegacyFee model module.
 * @module model/TransactionRequestEvmLegacyFee
 */
class TransactionRequestEvmLegacyFee {
    /**
     * Constructs a new <code>TransactionRequestEvmLegacyFee</code>.
     * In the legacy fee model, the transaction fee is calculated by multiplying the gas price by the gas units used by the transaction. This can be expressed as: Transaction fee &#x3D;  (gas price * gas units used).   You can specify the gas limit to limit the gas units used in the transaction.  Switch between the tabs to display the properties for different transaction fee models. 
     * @alias module:model/TransactionRequestEvmLegacyFee
     * @implements module:model/EvmLegacyFeeBasePrice
     * @param gas_price {String} The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
     * @param fee_type {module:model/FeeType} 
     * @param token_id {String} The token ID of the transaction fee.
     */
    constructor(gas_price, fee_type, token_id) { 
        EvmLegacyFeeBasePrice.initialize(this);
        TransactionRequestEvmLegacyFee.initialize(this, gas_price, fee_type, token_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gas_price, fee_type, token_id) { 
        obj['gas_price'] = gas_price;
        obj['fee_type'] = fee_type;
        obj['token_id'] = token_id;
    }

    /**
     * Constructs a <code>TransactionRequestEvmLegacyFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestEvmLegacyFee} obj Optional instance to populate.
     * @return {module:model/TransactionRequestEvmLegacyFee} The populated <code>TransactionRequestEvmLegacyFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequestEvmLegacyFee();
            EvmLegacyFeeBasePrice.constructFromObject(data, obj);

            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('gas_limit')) {
                obj['gas_limit'] = ApiClient.convertToType(data['gas_limit'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRequestEvmLegacyFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRequestEvmLegacyFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionRequestEvmLegacyFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gas_price'] && !(typeof data['gas_price'] === 'string' || data['gas_price'] instanceof String)) {
            throw new Error("Expected the field `gas_price` to be a primitive type in the JSON string but got " + data['gas_price']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['gas_limit'] && !(typeof data['gas_limit'] === 'string' || data['gas_limit'] instanceof String)) {
            throw new Error("Expected the field `gas_limit` to be a primitive type in the JSON string but got " + data['gas_limit']);
        }

        return true;
    }


}

TransactionRequestEvmLegacyFee.RequiredProperties = ["gas_price", "fee_type", "token_id"];

/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
 * @member {String} gas_price
 */
TransactionRequestEvmLegacyFee.prototype['gas_price'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionRequestEvmLegacyFee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
TransactionRequestEvmLegacyFee.prototype['token_id'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
TransactionRequestEvmLegacyFee.prototype['gas_limit'] = '21000';


// Implement EvmLegacyFeeBasePrice interface:
/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
 * @member {String} gas_price
 */
EvmLegacyFeeBasePrice.prototype['gas_price'] = undefined;




export default TransactionRequestEvmLegacyFee;

