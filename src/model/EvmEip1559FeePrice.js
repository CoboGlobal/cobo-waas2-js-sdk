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
     * The transaction fee price based on the EIP-1559 fee model.
     * @alias module:model/EvmEip1559FeePrice
     * @param feeType {module:model/FeeType} 
     * @param recommended {module:model/EvmEip1559FeeBasePrice} 
     */
    constructor(feeType, recommended) { 
        
        EvmEip1559FeePrice.initialize(this, feeType, recommended);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeType, recommended) { 
        obj['fee_type'] = feeType;
        obj['recommended'] = recommended;
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

            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = EvmEip1559FeeBasePrice.constructFromObject(data['slow']);
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = EvmEip1559FeeBasePrice.constructFromObject(data['recommended']);
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = EvmEip1559FeeBasePrice.constructFromObject(data['fast']);
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
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `slow`
        if (data['slow']) { // data not null
          EvmEip1559FeeBasePrice.validateJSON(data['slow']);
        }
        // validate the optional field `recommended`
        if (data['recommended']) { // data not null
          EvmEip1559FeeBasePrice.validateJSON(data['recommended']);
        }
        // validate the optional field `fast`
        if (data['fast']) { // data not null
          EvmEip1559FeeBasePrice.validateJSON(data['fast']);
        }

        return true;
    }


}

EvmEip1559FeePrice.RequiredProperties = ["fee_type", "recommended"];

/**
 * @member {module:model/FeeType} fee_type
 */
EvmEip1559FeePrice.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
EvmEip1559FeePrice.prototype['token_id'] = undefined;

/**
 * @member {module:model/EvmEip1559FeeBasePrice} slow
 */
EvmEip1559FeePrice.prototype['slow'] = undefined;

/**
 * @member {module:model/EvmEip1559FeeBasePrice} recommended
 */
EvmEip1559FeePrice.prototype['recommended'] = undefined;

/**
 * @member {module:model/EvmEip1559FeeBasePrice} fast
 */
EvmEip1559FeePrice.prototype['fast'] = undefined;






export default EvmEip1559FeePrice;

