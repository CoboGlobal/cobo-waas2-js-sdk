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
 * The AmountDetailsInner model module.
 * @module model/AmountDetailsInner
 * @version 0.2.7
 */
class AmountDetailsInner {
    /**
     * Constructs a new <code>AmountDetailsInner</code>.
     * @alias module:model/AmountDetailsInner
     * @param status {String} The staking status.
     * @param amount {String} The staking amount.
     */
    constructor(status, amount) { 
        
        AmountDetailsInner.initialize(this, status, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, amount) { 
        obj['status'] = status;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AmountDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AmountDetailsInner} obj Optional instance to populate.
     * @return {module:model/AmountDetailsInner} The populated <code>AmountDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AmountDetailsInner();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('activity_id')) {
                obj['activity_id'] = ApiClient.convertToType(data['activity_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AmountDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AmountDetailsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AmountDetailsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['activity_id'] && !(typeof data['activity_id'] === 'string' || data['activity_id'] instanceof String)) {
            throw new Error("Expected the field `activity_id` to be a primitive type in the JSON string but got " + data['activity_id']);
        }

        return true;
    }


}

AmountDetailsInner.RequiredProperties = ["status", "amount"];

/**
 * The staking status.
 * @member {String} status
 */
AmountDetailsInner.prototype['status'] = undefined;

/**
 * The staking amount.
 * @member {String} amount
 */
AmountDetailsInner.prototype['amount'] = undefined;

/**
 * The related staking activity ID.
 * @member {String} activity_id
 */
AmountDetailsInner.prototype['activity_id'] = undefined;






export default AmountDetailsInner;

