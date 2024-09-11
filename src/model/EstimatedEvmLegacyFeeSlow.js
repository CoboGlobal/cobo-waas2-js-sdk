/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EvmLegacyFeeBasePrice from './EvmLegacyFeeBasePrice';
import FeeGasLimit from './FeeGasLimit';

/**
 * The EstimatedEvmLegacyFeeSlow model module.
 * @module model/EstimatedEvmLegacyFeeSlow
 */
class EstimatedEvmLegacyFeeSlow {
    /**
     * Constructs a new <code>EstimatedEvmLegacyFeeSlow</code>.
     * @alias module:model/EstimatedEvmLegacyFeeSlow
     * @implements module:model/EvmLegacyFeeBasePrice
     * @implements module:model/FeeGasLimit
     * @param gas_price {String} The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
     * @param gas_limit {String} The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
     */
    constructor(gas_price, gas_limit) { 
        EvmLegacyFeeBasePrice.initialize(this);FeeGasLimit.initialize(this);
        EstimatedEvmLegacyFeeSlow.initialize(this, gas_price, gas_limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gas_price, gas_limit) { 
        obj['gas_price'] = gas_price;
        obj['gas_limit'] = gas_limit || '21000';
    }

    /**
     * Constructs a <code>EstimatedEvmLegacyFeeSlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimatedEvmLegacyFeeSlow} obj Optional instance to populate.
     * @return {module:model/EstimatedEvmLegacyFeeSlow} The populated <code>EstimatedEvmLegacyFeeSlow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimatedEvmLegacyFeeSlow();
            EvmLegacyFeeBasePrice.constructFromObject(data, obj);
            FeeGasLimit.constructFromObject(data, obj);

            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
            if (data.hasOwnProperty('gas_limit')) {
                obj['gas_limit'] = ApiClient.convertToType(data['gas_limit'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimatedEvmLegacyFeeSlow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimatedEvmLegacyFeeSlow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimatedEvmLegacyFeeSlow.RequiredProperties) {
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

        return true;
    }


}

EstimatedEvmLegacyFeeSlow.RequiredProperties = ["gas_price", "gas_limit"];

/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
 * @member {String} gas_price
 */
EstimatedEvmLegacyFeeSlow.prototype['gas_price'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
EstimatedEvmLegacyFeeSlow.prototype['gas_limit'] = '21000';


// Implement EvmLegacyFeeBasePrice interface:
/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
 * @member {String} gas_price
 */
EvmLegacyFeeBasePrice.prototype['gas_price'] = undefined;
// Implement FeeGasLimit interface:
/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
FeeGasLimit.prototype['gas_limit'] = '21000';




export default EstimatedEvmLegacyFeeSlow;

