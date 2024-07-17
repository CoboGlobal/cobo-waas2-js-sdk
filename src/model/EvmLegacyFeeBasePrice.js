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
 * The EvmLegacyFeeBasePrice model module.
 * @module model/EvmLegacyFeeBasePrice
 * @version 0.4.1
 */
class EvmLegacyFeeBasePrice {
    /**
     * Constructs a new <code>EvmLegacyFeeBasePrice</code>.
     * The transaction fee price based on the legacy fee model, which equals the gas price.
     * @alias module:model/EvmLegacyFeeBasePrice
     * @param gasPrice {String} The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
     */
    constructor(gasPrice) { 
        
        EvmLegacyFeeBasePrice.initialize(this, gasPrice);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasPrice) { 
        obj['gas_price'] = gasPrice;
    }

    /**
     * Constructs a <code>EvmLegacyFeeBasePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmLegacyFeeBasePrice} obj Optional instance to populate.
     * @return {module:model/EvmLegacyFeeBasePrice} The populated <code>EvmLegacyFeeBasePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmLegacyFeeBasePrice();

            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmLegacyFeeBasePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmLegacyFeeBasePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmLegacyFeeBasePrice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gas_price'] && !(typeof data['gas_price'] === 'string' || data['gas_price'] instanceof String)) {
            throw new Error("Expected the field `gas_price` to be a primitive type in the JSON string but got " + data['gas_price']);
        }

        return true;
    }


}

EvmLegacyFeeBasePrice.RequiredProperties = ["gas_price"];

/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
 * @member {String} gas_price
 */
EvmLegacyFeeBasePrice.prototype['gas_price'] = undefined;






export default EvmLegacyFeeBasePrice;

