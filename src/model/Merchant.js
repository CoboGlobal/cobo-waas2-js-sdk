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

/**
 * The Merchant model module.
 * @module model/Merchant
 */
class Merchant {
    /**
     * Constructs a new <code>Merchant</code>.
     * @alias module:model/Merchant
     * @param merchant_id {String} The merchant ID.
     * @param name {String} The merchant name.
     * @param wallet_id {String} The ID of the linked wallet.
     */
    constructor(merchant_id, name, wallet_id) { 
        
        Merchant.initialize(this, merchant_id, name, wallet_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merchant_id, name, wallet_id) { 
        obj['merchant_id'] = merchant_id;
        obj['name'] = name;
        obj['wallet_id'] = wallet_id;
    }

    /**
     * Constructs a <code>Merchant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Merchant} obj Optional instance to populate.
     * @return {module:model/Merchant} The populated <code>Merchant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Merchant();

            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('developer_fee_rate')) {
                obj['developer_fee_rate'] = ApiClient.convertToType(data['developer_fee_rate'], 'String');
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Merchant</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Merchant</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Merchant.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['merchant_id'] && !(typeof data['merchant_id'] === 'string' || data['merchant_id'] instanceof String)) {
            throw new Error("Expected the field `merchant_id` to be a primitive type in the JSON string but got " + data['merchant_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['developer_fee_rate'] && !(typeof data['developer_fee_rate'] === 'string' || data['developer_fee_rate'] instanceof String)) {
            throw new Error("Expected the field `developer_fee_rate` to be a primitive type in the JSON string but got " + data['developer_fee_rate']);
        }

        return true;
    }


}

Merchant.RequiredProperties = ["merchant_id", "name", "wallet_id"];

/**
 * The merchant ID.
 * @member {String} merchant_id
 */
Merchant.prototype['merchant_id'] = undefined;

/**
 * The merchant name.
 * @member {String} name
 */
Merchant.prototype['name'] = undefined;

/**
 * The ID of the linked wallet.
 * @member {String} wallet_id
 */
Merchant.prototype['wallet_id'] = undefined;

/**
 * The developer fee rate applied to this merchant. Expressed as a string in decimal format where \"0.1\" represents 10%. This fee is deducted from the payment amount and only applies to top-up transactions.
 * @member {String} developer_fee_rate
 */
Merchant.prototype['developer_fee_rate'] = undefined;

/**
 * The creation time of the merchant, represented as a UNIX timestamp in seconds.
 * @member {Number} created_timestamp
 */
Merchant.prototype['created_timestamp'] = undefined;

/**
 * The last update time of the merchant, represented as a UNIX timestamp in seconds.
 * @member {Number} updated_timestamp
 */
Merchant.prototype['updated_timestamp'] = undefined;






export default Merchant;

