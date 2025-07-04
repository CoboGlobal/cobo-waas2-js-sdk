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
import Account from './Account';

/**
 * The PayerAccount model module.
 * @module model/PayerAccount
 */
class PayerAccount {
    /**
     * Constructs a new <code>PayerAccount</code>.
     * @alias module:model/PayerAccount
     * @param merchant_id {String} The merchant ID.
     * @param payer_id {String} A unique identifier assigned by Cobo to track and identify individual payers.
     * @param developer_fee_rate {String} The developer fee rate applied to the top-up transactions made by the payer. Expressed as a decimal string where \"0.1\" represents 10%.
     */
    constructor(merchant_id, payer_id, developer_fee_rate) { 
        
        PayerAccount.initialize(this, merchant_id, payer_id, developer_fee_rate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merchant_id, payer_id, developer_fee_rate) { 
        obj['merchant_id'] = merchant_id;
        obj['payer_id'] = payer_id;
        obj['developer_fee_rate'] = developer_fee_rate;
    }

    /**
     * Constructs a <code>PayerAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayerAccount} obj Optional instance to populate.
     * @return {module:model/PayerAccount} The populated <code>PayerAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayerAccount();

            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('payer_id')) {
                obj['payer_id'] = ApiClient.convertToType(data['payer_id'], 'String');
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
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [Account]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayerAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayerAccount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PayerAccount.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['merchant_id'] && !(typeof data['merchant_id'] === 'string' || data['merchant_id'] instanceof String)) {
            throw new Error("Expected the field `merchant_id` to be a primitive type in the JSON string but got " + data['merchant_id']);
        }
        // ensure the json data is a string
        if (data['payer_id'] && !(typeof data['payer_id'] === 'string' || data['payer_id'] instanceof String)) {
            throw new Error("Expected the field `payer_id` to be a primitive type in the JSON string but got " + data['payer_id']);
        }
        // ensure the json data is a string
        if (data['developer_fee_rate'] && !(typeof data['developer_fee_rate'] === 'string' || data['developer_fee_rate'] instanceof String)) {
            throw new Error("Expected the field `developer_fee_rate` to be a primitive type in the JSON string but got " + data['developer_fee_rate']);
        }
        if (data['accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['accounts'])) {
                throw new Error("Expected the field `accounts` to be an array in the JSON data but got " + data['accounts']);
            }
            // validate the optional field `accounts` (array)
            for (const item of data['accounts']) {
                Account.validateJSON(item);
            };
        }

        return true;
    }


}

PayerAccount.RequiredProperties = ["merchant_id", "payer_id", "developer_fee_rate"];

/**
 * The merchant ID.
 * @member {String} merchant_id
 */
PayerAccount.prototype['merchant_id'] = undefined;

/**
 * A unique identifier assigned by Cobo to track and identify individual payers.
 * @member {String} payer_id
 */
PayerAccount.prototype['payer_id'] = undefined;

/**
 * The developer fee rate applied to the top-up transactions made by the payer. Expressed as a decimal string where \"0.1\" represents 10%.
 * @member {String} developer_fee_rate
 */
PayerAccount.prototype['developer_fee_rate'] = undefined;

/**
 * The creation time of the payer, represented as a UNIX timestamp in seconds.
 * @member {Number} created_timestamp
 */
PayerAccount.prototype['created_timestamp'] = undefined;

/**
 * The last update time of the payer, represented as a UNIX timestamp in seconds.
 * @member {Number} updated_timestamp
 */
PayerAccount.prototype['updated_timestamp'] = undefined;

/**
 * An array of accounts associated with this payer.
 * @member {Array.<module:model/Account>} accounts
 */
PayerAccount.prototype['accounts'] = undefined;






export default PayerAccount;

