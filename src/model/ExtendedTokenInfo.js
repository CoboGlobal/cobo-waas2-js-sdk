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
import TokenInfo from './TokenInfo';

/**
 * The ExtendedTokenInfo model module.
 * @module model/ExtendedTokenInfo
 * @version 0.4.4
 */
class ExtendedTokenInfo {
    /**
     * Constructs a new <code>ExtendedTokenInfo</code>.
     * The token information, including whether the token can be deposited or withdrawn.
     * @alias module:model/ExtendedTokenInfo
     * @implements module:model/TokenInfo
     * @param tokenId {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param chainId {String} The ID of the chain on which the token operates.
     */
    constructor(tokenId, chainId) { 
        TokenInfo.initialize(this, tokenId, chainId);
        ExtendedTokenInfo.initialize(this, tokenId, chainId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenId, chainId) { 
        obj['token_id'] = tokenId;
        obj['chain_id'] = chainId;
    }

    /**
     * Constructs a <code>ExtendedTokenInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendedTokenInfo} obj Optional instance to populate.
     * @return {module:model/ExtendedTokenInfo} The populated <code>ExtendedTokenInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedTokenInfo();
            TokenInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('decimal')) {
                obj['decimal'] = ApiClient.convertToType(data['decimal'], 'Number');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('token_address')) {
                obj['token_address'] = ApiClient.convertToType(data['token_address'], 'String');
            }
            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
            if (data.hasOwnProperty('can_deposit')) {
                obj['can_deposit'] = ApiClient.convertToType(data['can_deposit'], 'Boolean');
            }
            if (data.hasOwnProperty('can_withdraw')) {
                obj['can_withdraw'] = ApiClient.convertToType(data['can_withdraw'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExtendedTokenInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtendedTokenInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExtendedTokenInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['token_address'] && !(typeof data['token_address'] === 'string' || data['token_address'] instanceof String)) {
            throw new Error("Expected the field `token_address` to be a primitive type in the JSON string but got " + data['token_address']);
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }

        return true;
    }


}

ExtendedTokenInfo.RequiredProperties = ["token_id", "chain_id"];

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
ExtendedTokenInfo.prototype['token_id'] = undefined;

/**
 * The ID of the chain on which the token operates.
 * @member {String} chain_id
 */
ExtendedTokenInfo.prototype['chain_id'] = undefined;

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT.
 * @member {String} asset_id
 */
ExtendedTokenInfo.prototype['asset_id'] = undefined;

/**
 * The token symbol, which is the abbreviated name of a token.
 * @member {String} symbol
 */
ExtendedTokenInfo.prototype['symbol'] = undefined;

/**
 * The token name, which is the full name of a token.
 * @member {String} name
 */
ExtendedTokenInfo.prototype['name'] = undefined;

/**
 * The token decimal.
 * @member {Number} decimal
 */
ExtendedTokenInfo.prototype['decimal'] = undefined;

/**
 * The URL of the token icon.
 * @member {String} icon_url
 */
ExtendedTokenInfo.prototype['icon_url'] = undefined;

/**
 * The token address, if applicable.
 * @member {String} token_address
 */
ExtendedTokenInfo.prototype['token_address'] = undefined;

/**
 * The fee token ID. A fee token is the token with which you pay transaction fees.
 * @member {String} fee_token_id
 */
ExtendedTokenInfo.prototype['fee_token_id'] = undefined;

/**
 * Whether the token can be deposited.  - `true`: The token can be deposited.  - `false`: The token cannot be deposited. 
 * @member {Boolean} can_deposit
 * @default false
 */
ExtendedTokenInfo.prototype['can_deposit'] = false;

/**
 * Whether the token can be withdrawn.  - `true`: The token can be withdrawn.  - `false`: The token cannot be withdrawn. 
 * @member {Boolean} can_withdraw
 * @default false
 */
ExtendedTokenInfo.prototype['can_withdraw'] = false;


// Implement TokenInfo interface:
/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
TokenInfo.prototype['token_id'] = undefined;
/**
 * The ID of the chain on which the token operates.
 * @member {String} chain_id
 */
TokenInfo.prototype['chain_id'] = undefined;
/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT.
 * @member {String} asset_id
 */
TokenInfo.prototype['asset_id'] = undefined;
/**
 * The token symbol, which is the abbreviated name of a token.
 * @member {String} symbol
 */
TokenInfo.prototype['symbol'] = undefined;
/**
 * The token name, which is the full name of a token.
 * @member {String} name
 */
TokenInfo.prototype['name'] = undefined;
/**
 * The token decimal.
 * @member {Number} decimal
 */
TokenInfo.prototype['decimal'] = undefined;
/**
 * The URL of the token icon.
 * @member {String} icon_url
 */
TokenInfo.prototype['icon_url'] = undefined;
/**
 * The token address, if applicable.
 * @member {String} token_address
 */
TokenInfo.prototype['token_address'] = undefined;
/**
 * The fee token ID. A fee token is the token with which you pay transaction fees.
 * @member {String} fee_token_id
 */
TokenInfo.prototype['fee_token_id'] = undefined;
/**
 * Whether deposits are enabled for this token.
 * @member {Boolean} can_deposit
 */
TokenInfo.prototype['can_deposit'] = undefined;
/**
 * Whether withdrawals are enabled for this token.
 * @member {Boolean} can_withdraw
 */
TokenInfo.prototype['can_withdraw'] = undefined;




export default ExtendedTokenInfo;

