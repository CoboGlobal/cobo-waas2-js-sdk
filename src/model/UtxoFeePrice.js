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
import FeeType from './FeeType';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';

/**
 * The UtxoFeePrice model module.
 * @module model/UtxoFeePrice
 * @version 0.2.5
 */
class UtxoFeePrice {
    /**
     * Constructs a new <code>UtxoFeePrice</code>.
     * The transaction fee price for UTXO-based chains.
     * @alias module:model/UtxoFeePrice
     * @param feeType {module:model/FeeType} 
     * @param recommended {module:model/UtxoFeeBasePrice} 
     */
    constructor(feeType, recommended) { 
        
        UtxoFeePrice.initialize(this, feeType, recommended);
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
     * Constructs a <code>UtxoFeePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtxoFeePrice} obj Optional instance to populate.
     * @return {module:model/UtxoFeePrice} The populated <code>UtxoFeePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtxoFeePrice();

            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = UtxoFeeBasePrice.constructFromObject(data['slow']);
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = UtxoFeeBasePrice.constructFromObject(data['recommended']);
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = UtxoFeeBasePrice.constructFromObject(data['fast']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtxoFeePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtxoFeePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UtxoFeePrice.RequiredProperties) {
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
          UtxoFeeBasePrice.validateJSON(data['slow']);
        }
        // validate the optional field `recommended`
        if (data['recommended']) { // data not null
          UtxoFeeBasePrice.validateJSON(data['recommended']);
        }
        // validate the optional field `fast`
        if (data['fast']) { // data not null
          UtxoFeeBasePrice.validateJSON(data['fast']);
        }

        return true;
    }


}

UtxoFeePrice.RequiredProperties = ["fee_type", "recommended"];

/**
 * @member {module:model/FeeType} fee_type
 */
UtxoFeePrice.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
UtxoFeePrice.prototype['token_id'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} slow
 */
UtxoFeePrice.prototype['slow'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} recommended
 */
UtxoFeePrice.prototype['recommended'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} fast
 */
UtxoFeePrice.prototype['fast'] = undefined;






export default UtxoFeePrice;

