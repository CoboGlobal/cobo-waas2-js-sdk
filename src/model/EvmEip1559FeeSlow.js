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

/**
 * The EvmEip1559FeeSlow model module.
 * @module model/EvmEip1559FeeSlow
 * @version 0.4.5
 */
class EvmEip1559FeeSlow {
    /**
     * Constructs a new <code>EvmEip1559FeeSlow</code>.
     * @alias module:model/EvmEip1559FeeSlow
     * @implements module:model/EvmEip1559FeeBasePrice
     * @implements module:model/FeeData
     * @param maxPriorityFee {String} The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
     * @param baseFee {String} The base fee price of the chain, in wei.
     * @param gasLimit {String} The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
     */
    constructor(maxPriorityFee, baseFee, gasLimit) { 
        EvmEip1559FeeBasePrice.initialize(this, maxPriorityFee, baseFee);FeeData.initialize(this, gasLimit);
        EvmEip1559FeeSlow.initialize(this, maxPriorityFee, baseFee, gasLimit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxPriorityFee, baseFee, gasLimit) { 
        obj['max_priority_fee'] = maxPriorityFee;
        obj['base_fee'] = baseFee;
        obj['gas_limit'] = gasLimit || '21000';
    }

    /**
     * Constructs a <code>EvmEip1559FeeSlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEip1559FeeSlow} obj Optional instance to populate.
     * @return {module:model/EvmEip1559FeeSlow} The populated <code>EvmEip1559FeeSlow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEip1559FeeSlow();
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmEip1559FeeSlow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEip1559FeeSlow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmEip1559FeeSlow.RequiredProperties) {
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

        return true;
    }


}

EvmEip1559FeeSlow.RequiredProperties = ["max_priority_fee", "base_fee", "gas_limit"];

/**
 * The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee
 */
EvmEip1559FeeSlow.prototype['max_priority_fee'] = undefined;

/**
 * The base fee price of the chain, in wei.
 * @member {String} base_fee
 */
EvmEip1559FeeSlow.prototype['base_fee'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
EvmEip1559FeeSlow.prototype['gas_limit'] = '21000';


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




export default EvmEip1559FeeSlow;

