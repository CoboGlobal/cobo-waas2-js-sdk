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
 * The ExchangeWalletInfoAllOfSubAccounts model module.
 * @module model/ExchangeWalletInfoAllOfSubAccounts
 * @version 0.2.5
 */
class ExchangeWalletInfoAllOfSubAccounts {
    /**
     * Constructs a new <code>ExchangeWalletInfoAllOfSubAccounts</code>.
     * @alias module:model/ExchangeWalletInfoAllOfSubAccounts
     * @param walletId {String} The wallet ID of the Sub Account. This property is returned only if you are creating or querying an Exchange Wallet (Main Account).
     * @param accountId {String} The Sub Account ID. It can be an email address, a user name, or a custom account ID. This property is returned only if you are creating or querying an Exchange Wallet (Main Account).
     */
    constructor(walletId, accountId) { 
        
        ExchangeWalletInfoAllOfSubAccounts.initialize(this, walletId, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletId, accountId) { 
        obj['wallet_id'] = walletId;
        obj['account_id'] = accountId;
    }

    /**
     * Constructs a <code>ExchangeWalletInfoAllOfSubAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExchangeWalletInfoAllOfSubAccounts} obj Optional instance to populate.
     * @return {module:model/ExchangeWalletInfoAllOfSubAccounts} The populated <code>ExchangeWalletInfoAllOfSubAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangeWalletInfoAllOfSubAccounts();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExchangeWalletInfoAllOfSubAccounts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExchangeWalletInfoAllOfSubAccounts</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExchangeWalletInfoAllOfSubAccounts.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['account_id'] && !(typeof data['account_id'] === 'string' || data['account_id'] instanceof String)) {
            throw new Error("Expected the field `account_id` to be a primitive type in the JSON string but got " + data['account_id']);
        }

        return true;
    }


}

ExchangeWalletInfoAllOfSubAccounts.RequiredProperties = ["wallet_id", "account_id"];

/**
 * The wallet ID of the Sub Account. This property is returned only if you are creating or querying an Exchange Wallet (Main Account).
 * @member {String} wallet_id
 */
ExchangeWalletInfoAllOfSubAccounts.prototype['wallet_id'] = undefined;

/**
 * The Sub Account ID. It can be an email address, a user name, or a custom account ID. This property is returned only if you are creating or querying an Exchange Wallet (Main Account).
 * @member {String} account_id
 */
ExchangeWalletInfoAllOfSubAccounts.prototype['account_id'] = undefined;






export default ExchangeWalletInfoAllOfSubAccounts;

