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
import CreateCustodialWallet from './CreateCustodialWallet';
import ExchangeId from './ExchangeId';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CreateExchangeWallet model module.
 * @module model/CreateExchangeWallet
 * @version 0.4.5
 */
class CreateExchangeWallet {
    /**
     * Constructs a new <code>CreateExchangeWallet</code>.
     * @alias module:model/CreateExchangeWallet
     * @implements module:model/CreateCustodialWallet
     * @param name {String} The wallet name.
     * @param walletType {module:model/WalletType} 
     * @param walletSubtype {module:model/WalletSubtype} 
     * @param exchangeId {module:model/ExchangeId} 
     * @param apikey {String} The API key of your exchange account.
     * @param secret {String} The API secret of your exchange account.
     */
    constructor(name, walletType, walletSubtype, exchangeId, apikey, secret) { 
        CreateCustodialWallet.initialize(this, name, walletType, walletSubtype);
        CreateExchangeWallet.initialize(this, name, walletType, walletSubtype, exchangeId, apikey, secret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, walletType, walletSubtype, exchangeId, apikey, secret) { 
        obj['name'] = name;
        obj['wallet_type'] = walletType;
        obj['wallet_subtype'] = walletSubtype;
        obj['exchange_id'] = exchangeId;
        obj['apikey'] = apikey;
        obj['secret'] = secret;
    }

    /**
     * Constructs a <code>CreateExchangeWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateExchangeWallet} obj Optional instance to populate.
     * @return {module:model/CreateExchangeWallet} The populated <code>CreateExchangeWallet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateExchangeWallet();
            CreateCustodialWallet.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ExchangeId.constructFromObject(data['exchange_id']);
            }
            if (data.hasOwnProperty('apikey')) {
                obj['apikey'] = ApiClient.convertToType(data['apikey'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('account_identify')) {
                obj['account_identify'] = ApiClient.convertToType(data['account_identify'], 'String');
            }
            if (data.hasOwnProperty('ga_code')) {
                obj['ga_code'] = ApiClient.convertToType(data['ga_code'], 'String');
            }
            if (data.hasOwnProperty('main_wallet_id')) {
                obj['main_wallet_id'] = ApiClient.convertToType(data['main_wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateExchangeWallet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateExchangeWallet</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateExchangeWallet.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['apikey'] && !(typeof data['apikey'] === 'string' || data['apikey'] instanceof String)) {
            throw new Error("Expected the field `apikey` to be a primitive type in the JSON string but got " + data['apikey']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['passphrase'] && !(typeof data['passphrase'] === 'string' || data['passphrase'] instanceof String)) {
            throw new Error("Expected the field `passphrase` to be a primitive type in the JSON string but got " + data['passphrase']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['account_identify'] && !(typeof data['account_identify'] === 'string' || data['account_identify'] instanceof String)) {
            throw new Error("Expected the field `account_identify` to be a primitive type in the JSON string but got " + data['account_identify']);
        }
        // ensure the json data is a string
        if (data['ga_code'] && !(typeof data['ga_code'] === 'string' || data['ga_code'] instanceof String)) {
            throw new Error("Expected the field `ga_code` to be a primitive type in the JSON string but got " + data['ga_code']);
        }
        // ensure the json data is a string
        if (data['main_wallet_id'] && !(typeof data['main_wallet_id'] === 'string' || data['main_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `main_wallet_id` to be a primitive type in the JSON string but got " + data['main_wallet_id']);
        }

        return true;
    }


}

CreateExchangeWallet.RequiredProperties = ["name", "wallet_type", "wallet_subtype", "exchange_id", "apikey", "secret"];

/**
 * The wallet name.
 * @member {String} name
 */
CreateExchangeWallet.prototype['name'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CreateExchangeWallet.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateExchangeWallet.prototype['wallet_subtype'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
CreateExchangeWallet.prototype['exchange_id'] = undefined;

/**
 * The API key of your exchange account.
 * @member {String} apikey
 */
CreateExchangeWallet.prototype['apikey'] = undefined;

/**
 * The API secret of your exchange account.
 * @member {String} secret
 */
CreateExchangeWallet.prototype['secret'] = undefined;

/**
 * The passphrase of your exchange account.
 * @member {String} passphrase
 */
CreateExchangeWallet.prototype['passphrase'] = undefined;

/**
 * The memo you use when applying for the API key of your exchange account.
 * @member {String} memo
 */
CreateExchangeWallet.prototype['memo'] = undefined;

/**
 * The identifier of your exchange account. - For Binance, this is email address of your exchange account. - For OKX, this is the user name of your exchange account. 
 * @member {String} account_identify
 */
CreateExchangeWallet.prototype['account_identify'] = undefined;

/**
 * The GA code for the exchange.
 * @member {String} ga_code
 */
CreateExchangeWallet.prototype['ga_code'] = undefined;

/**
 * The ID of the Exchange Wallet (Main Account).
 * @member {String} main_wallet_id
 */
CreateExchangeWallet.prototype['main_wallet_id'] = undefined;


// Implement CreateCustodialWallet interface:
/**
 * The wallet name.
 * @member {String} name
 */
CreateCustodialWallet.prototype['name'] = undefined;
/**
 * @member {module:model/WalletType} wallet_type
 */
CreateCustodialWallet.prototype['wallet_type'] = undefined;
/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateCustodialWallet.prototype['wallet_subtype'] = undefined;




export default CreateExchangeWallet;

