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
 * The TransactionToken model module.
 * @module model/TransactionToken
 * @version 0.1.0
 */
class TransactionToken {
    /**
     * Constructs a new <code>TransactionToken</code>.
     * The data for transaction asset information.
     * @alias module:model/TransactionToken
     * @param assetId {String} ID of the asset. Used to group token balance when needed.
     * @param amount {Number} Transaction value (Note that this is an absolute value. If you trade 1.5 BTC, then the value is 1.5) 
     */
    constructor(assetId, amount) { 
        
        TransactionToken.initialize(this, assetId, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetId, amount) { 
        obj['asset_id'] = assetId;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TransactionToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionToken} obj Optional instance to populate.
     * @return {module:model/TransactionToken} The populated <code>TransactionToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionToken();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionToken.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

TransactionToken.RequiredProperties = ["asset_id", "amount"];

/**
 * The token ID.
 * @member {String} token_id
 */
TransactionToken.prototype['token_id'] = undefined;

/**
 * ID of the asset. Used to group token balance when needed.
 * @member {String} asset_id
 */
TransactionToken.prototype['asset_id'] = undefined;

/**
 * Transaction value (Note that this is an absolute value. If you trade 1.5 BTC, then the value is 1.5) 
 * @member {Number} amount
 */
TransactionToken.prototype['amount'] = undefined;






export default TransactionToken;

