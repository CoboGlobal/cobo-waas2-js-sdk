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
 * The GetTokens200ResponseDataInner model module.
 * @module model/GetTokens200ResponseDataInner
 * @version 0.1.0
 */
class GetTokens200ResponseDataInner {
    /**
     * Constructs a new <code>GetTokens200ResponseDataInner</code>.
     * @alias module:model/GetTokens200ResponseDataInner
     * @implements module:model/TokenInfo
     * @param tokenId {String} ID of the token. Unique in all chains scope.
     * @param chainId {String} The blockchain on which the token operates.
     */
    constructor(tokenId, chainId) { 
        TokenInfo.initialize(this, tokenId, chainId);
        GetTokens200ResponseDataInner.initialize(this, tokenId, chainId);
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
     * Constructs a <code>GetTokens200ResponseDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokens200ResponseDataInner} obj Optional instance to populate.
     * @return {module:model/GetTokens200ResponseDataInner} The populated <code>GetTokens200ResponseDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokens200ResponseDataInner();
            TokenInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('token_address')) {
                obj['token_address'] = ApiClient.convertToType(data['token_address'], 'String');
            }
            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
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
     * Validates the JSON data with respect to <code>GetTokens200ResponseDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTokens200ResponseDataInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetTokens200ResponseDataInner.RequiredProperties) {
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
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }

        return true;
    }


}

GetTokens200ResponseDataInner.RequiredProperties = ["token_id", "chain_id"];

/**
 * ID of the token. Unique in all chains scope.
 * @member {String} token_id
 */
GetTokens200ResponseDataInner.prototype['token_id'] = undefined;

/**
 * The blockchain on which the token operates.
 * @member {String} chain_id
 */
GetTokens200ResponseDataInner.prototype['chain_id'] = undefined;

/**
 * Symbol for the token.
 * @member {String} symbol
 */
GetTokens200ResponseDataInner.prototype['symbol'] = undefined;

/**
 * The description of the token.
 * @member {String} description
 */
GetTokens200ResponseDataInner.prototype['description'] = undefined;

/**
 * URL of the icon image.
 * @member {String} icon_url
 */
GetTokens200ResponseDataInner.prototype['icon_url'] = undefined;

/**
 * Address for token, if applicable.
 * @member {String} token_address
 */
GetTokens200ResponseDataInner.prototype['token_address'] = undefined;

/**
 * ID of the asset. Used to group token balance when needed.
 * @member {String} asset_id
 */
GetTokens200ResponseDataInner.prototype['asset_id'] = undefined;

/**
 * Ture if the token can be deposited, False otherwise
 * @member {Boolean} can_deposit
 * @default false
 */
GetTokens200ResponseDataInner.prototype['can_deposit'] = false;

/**
 * Ture if the token can be withdrawn, False otherwise
 * @member {Boolean} can_withdraw
 * @default false
 */
GetTokens200ResponseDataInner.prototype['can_withdraw'] = false;


// Implement TokenInfo interface:
/**
 * ID of the token. Unique in all chains scope.
 * @member {String} token_id
 */
TokenInfo.prototype['token_id'] = undefined;
/**
 * The blockchain on which the token operates.
 * @member {String} chain_id
 */
TokenInfo.prototype['chain_id'] = undefined;
/**
 * Symbol for the token.
 * @member {String} symbol
 */
TokenInfo.prototype['symbol'] = undefined;
/**
 * The description of the token.
 * @member {String} description
 */
TokenInfo.prototype['description'] = undefined;
/**
 * URL of the icon image.
 * @member {String} icon_url
 */
TokenInfo.prototype['icon_url'] = undefined;
/**
 * Address for token, if applicable.
 * @member {String} token_address
 */
TokenInfo.prototype['token_address'] = undefined;
/**
 * ID of the asset. Used to group token balance when needed.
 * @member {String} asset_id
 */
TokenInfo.prototype['asset_id'] = undefined;




export default GetTokens200ResponseDataInner;
