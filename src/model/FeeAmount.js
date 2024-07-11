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
 * The FeeAmount model module.
 * @module model/FeeAmount
 * @version 0.1.0
 */
class FeeAmount {
    /**
     * Constructs a new <code>FeeAmount</code>.
     * The maximum transaction fee.
     * @alias module:model/FeeAmount
     * @param maxFeeAmount {String} The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
     */
    constructor(maxFeeAmount) { 
        
        FeeAmount.initialize(this, maxFeeAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxFeeAmount) { 
        obj['max_fee_amount'] = maxFeeAmount;
    }

    /**
     * Constructs a <code>FeeAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeeAmount} obj Optional instance to populate.
     * @return {module:model/FeeAmount} The populated <code>FeeAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeeAmount();

            if (data.hasOwnProperty('max_fee_amount')) {
                obj['max_fee_amount'] = ApiClient.convertToType(data['max_fee_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FeeAmount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FeeAmount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FeeAmount.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['max_fee_amount'] && !(typeof data['max_fee_amount'] === 'string' || data['max_fee_amount'] instanceof String)) {
            throw new Error("Expected the field `max_fee_amount` to be a primitive type in the JSON string but got " + data['max_fee_amount']);
        }

        return true;
    }


}

FeeAmount.RequiredProperties = ["max_fee_amount"];

/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
FeeAmount.prototype['max_fee_amount'] = undefined;






export default FeeAmount;

