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
import CustodialWalletInfo from './CustodialWalletInfo';
import ExchangeId from './ExchangeId';
import ExchangeWalletInfoAllOfSubAccounts from './ExchangeWalletInfoAllOfSubAccounts';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The ExchangeWalletInfo model module.
 * @module model/ExchangeWalletInfo
 * @version 0.2.7
 */
class ExchangeWalletInfo {
    /**
     * Constructs a new <code>ExchangeWalletInfo</code>.
     * @alias module:model/ExchangeWalletInfo
     * @implements module:model/CustodialWalletInfo
     * @param walletId {String} The wallet ID.
     * @param walletType {module:model/WalletType} 
     * @param walletSubtype {module:model/WalletSubtype} 
     * @param name {String} The wallet name.
     * @param orgId {String} The ID of the owning organization.
     * @param apikey {String} The API key of your exchange account.
     * @param exchangeId {module:model/ExchangeId} 
     */
    constructor(walletId, walletType, walletSubtype, name, orgId, apikey, exchangeId) { 
        CustodialWalletInfo.initialize(this, walletId, walletType, walletSubtype, name, orgId);
        ExchangeWalletInfo.initialize(this, walletId, walletType, walletSubtype, name, orgId, apikey, exchangeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletId, walletType, walletSubtype, name, orgId, apikey, exchangeId) { 
        obj['wallet_id'] = walletId;
        obj['wallet_type'] = walletType;
        obj['wallet_subtype'] = walletSubtype;
        obj['name'] = name;
        obj['org_id'] = orgId;
        obj['apikey'] = apikey;
        obj['exchange_id'] = exchangeId;
    }

    /**
     * Constructs a <code>ExchangeWalletInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExchangeWalletInfo} obj Optional instance to populate.
     * @return {module:model/ExchangeWalletInfo} The populated <code>ExchangeWalletInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangeWalletInfo();
            CustodialWalletInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'String');
            }
            if (data.hasOwnProperty('apikey')) {
                obj['apikey'] = ApiClient.convertToType(data['apikey'], 'String');
            }
            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ExchangeId.constructFromObject(data['exchange_id']);
            }
            if (data.hasOwnProperty('parent_wallet_id')) {
                obj['parent_wallet_id'] = ApiClient.convertToType(data['parent_wallet_id'], 'String');
            }
            if (data.hasOwnProperty('sub_accounts')) {
                obj['sub_accounts'] = ApiClient.convertToType(data['sub_accounts'], [ExchangeWalletInfoAllOfSubAccounts]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExchangeWalletInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExchangeWalletInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExchangeWalletInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['org_id'] && !(typeof data['org_id'] === 'string' || data['org_id'] instanceof String)) {
            throw new Error("Expected the field `org_id` to be a primitive type in the JSON string but got " + data['org_id']);
        }
        // ensure the json data is a string
        if (data['apikey'] && !(typeof data['apikey'] === 'string' || data['apikey'] instanceof String)) {
            throw new Error("Expected the field `apikey` to be a primitive type in the JSON string but got " + data['apikey']);
        }
        // ensure the json data is a string
        if (data['parent_wallet_id'] && !(typeof data['parent_wallet_id'] === 'string' || data['parent_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `parent_wallet_id` to be a primitive type in the JSON string but got " + data['parent_wallet_id']);
        }
        if (data['sub_accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sub_accounts'])) {
                throw new Error("Expected the field `sub_accounts` to be an array in the JSON data but got " + data['sub_accounts']);
            }
            // validate the optional field `sub_accounts` (array)
            for (const item of data['sub_accounts']) {
                ExchangeWalletInfoAllOfSubAccounts.validateJSON(item);
            };
        }

        return true;
    }


}

ExchangeWalletInfo.RequiredProperties = ["wallet_id", "wallet_type", "wallet_subtype", "name", "org_id", "apikey", "exchange_id"];

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
ExchangeWalletInfo.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
ExchangeWalletInfo.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
ExchangeWalletInfo.prototype['wallet_subtype'] = undefined;

/**
 * The wallet name.
 * @member {String} name
 */
ExchangeWalletInfo.prototype['name'] = undefined;

/**
 * The ID of the owning organization.
 * @member {String} org_id
 */
ExchangeWalletInfo.prototype['org_id'] = undefined;

/**
 * The API key of your exchange account.
 * @member {String} apikey
 */
ExchangeWalletInfo.prototype['apikey'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
ExchangeWalletInfo.prototype['exchange_id'] = undefined;

/**
 * The wallet ID of the Main Account associated with the Sub Account. This property is returned only if you are creating or querying an Exchange Wallet (Sub Account).
 * @member {String} parent_wallet_id
 */
ExchangeWalletInfo.prototype['parent_wallet_id'] = undefined;

/**
 * @member {Array.<module:model/ExchangeWalletInfoAllOfSubAccounts>} sub_accounts
 */
ExchangeWalletInfo.prototype['sub_accounts'] = undefined;


// Implement CustodialWalletInfo interface:
/**
 * The wallet ID.
 * @member {String} wallet_id
 */
CustodialWalletInfo.prototype['wallet_id'] = undefined;
/**
 * @member {module:model/WalletType} wallet_type
 */
CustodialWalletInfo.prototype['wallet_type'] = undefined;
/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CustodialWalletInfo.prototype['wallet_subtype'] = undefined;
/**
 * The wallet name.
 * @member {String} name
 */
CustodialWalletInfo.prototype['name'] = undefined;
/**
 * The ID of the owning organization.
 * @member {String} org_id
 */
CustodialWalletInfo.prototype['org_id'] = undefined;




export default ExchangeWalletInfo;

