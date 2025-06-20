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
 * The SupportedToken model module.
 * @module model/SupportedToken
 */
class SupportedToken {
    /**
     * Constructs a new <code>SupportedToken</code>.
     * @alias module:model/SupportedToken
     * @param token_id {String} Unique identifier of the token
     * @param name {String} Full name of the token
     * @param symbol {String} Symbol representation of the token
     * @param decimal {Number} Number of decimal places for the token
     * @param token_address {String} Contract address of the token (may be null for native coins)
     * @param chain_id {String} Identifier of the blockchain where the token exists
     * @param chain_symbol {String} Symbol of the underlying blockchain
     */
    constructor(token_id, name, symbol, decimal, token_address, chain_id, chain_symbol) { 
        
        SupportedToken.initialize(this, token_id, name, symbol, decimal, token_address, chain_id, chain_symbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token_id, name, symbol, decimal, token_address, chain_id, chain_symbol) { 
        obj['token_id'] = token_id;
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['decimal'] = decimal;
        obj['token_address'] = token_address;
        obj['chain_id'] = chain_id;
        obj['chain_symbol'] = chain_symbol;
    }

    /**
     * Constructs a <code>SupportedToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedToken} obj Optional instance to populate.
     * @return {module:model/SupportedToken} The populated <code>SupportedToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SupportedToken();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('decimal')) {
                obj['decimal'] = ApiClient.convertToType(data['decimal'], 'Number');
            }
            if (data.hasOwnProperty('token_address')) {
                obj['token_address'] = ApiClient.convertToType(data['token_address'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('chain_symbol')) {
                obj['chain_symbol'] = ApiClient.convertToType(data['chain_symbol'], 'String');
            }
            if (data.hasOwnProperty('chain_icon_url')) {
                obj['chain_icon_url'] = ApiClient.convertToType(data['chain_icon_url'], 'String');
            }
            if (data.hasOwnProperty('token_icon_url')) {
                obj['token_icon_url'] = ApiClient.convertToType(data['token_icon_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SupportedToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SupportedToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SupportedToken.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['token_address'] && !(typeof data['token_address'] === 'string' || data['token_address'] instanceof String)) {
            throw new Error("Expected the field `token_address` to be a primitive type in the JSON string but got " + data['token_address']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['chain_symbol'] && !(typeof data['chain_symbol'] === 'string' || data['chain_symbol'] instanceof String)) {
            throw new Error("Expected the field `chain_symbol` to be a primitive type in the JSON string but got " + data['chain_symbol']);
        }
        // ensure the json data is a string
        if (data['chain_icon_url'] && !(typeof data['chain_icon_url'] === 'string' || data['chain_icon_url'] instanceof String)) {
            throw new Error("Expected the field `chain_icon_url` to be a primitive type in the JSON string but got " + data['chain_icon_url']);
        }
        // ensure the json data is a string
        if (data['token_icon_url'] && !(typeof data['token_icon_url'] === 'string' || data['token_icon_url'] instanceof String)) {
            throw new Error("Expected the field `token_icon_url` to be a primitive type in the JSON string but got " + data['token_icon_url']);
        }

        return true;
    }


}

SupportedToken.RequiredProperties = ["token_id", "name", "symbol", "decimal", "token_address", "chain_id", "chain_symbol"];

/**
 * Unique identifier of the token
 * @member {String} token_id
 */
SupportedToken.prototype['token_id'] = undefined;

/**
 * Full name of the token
 * @member {String} name
 */
SupportedToken.prototype['name'] = undefined;

/**
 * Symbol representation of the token
 * @member {String} symbol
 */
SupportedToken.prototype['symbol'] = undefined;

/**
 * Number of decimal places for the token
 * @member {Number} decimal
 */
SupportedToken.prototype['decimal'] = undefined;

/**
 * Contract address of the token (may be null for native coins)
 * @member {String} token_address
 */
SupportedToken.prototype['token_address'] = undefined;

/**
 * Identifier of the blockchain where the token exists
 * @member {String} chain_id
 */
SupportedToken.prototype['chain_id'] = undefined;

/**
 * Symbol of the underlying blockchain
 * @member {String} chain_symbol
 */
SupportedToken.prototype['chain_symbol'] = undefined;

/**
 * URL to the blockchain's icon image
 * @member {String} chain_icon_url
 */
SupportedToken.prototype['chain_icon_url'] = undefined;

/**
 * URL to the token's icon image
 * @member {String} token_icon_url
 */
SupportedToken.prototype['token_icon_url'] = undefined;






export default SupportedToken;

