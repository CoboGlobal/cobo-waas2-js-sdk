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
 * The GetExchangeRate200Response model module.
 * @module model/GetExchangeRate200Response
 */
class GetExchangeRate200Response {
    /**
     * Constructs a new <code>GetExchangeRate200Response</code>.
     * @alias module:model/GetExchangeRate200Response
     * @param token_id {String} The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format `{CHAIN}_{TOKEN}`.
     * @param currency {String} The fiat currency.
     * @param rate {String} The current exchange rate between the specified currency pair. Expressed as the amount of fiat currency per one unit of cryptocurrency. For example, if the cryptocurrency is USDT and the fiat currency is USD, a rate of \"0.99\" means 1 USDT = 0.99 USD.
     */
    constructor(token_id, currency, rate) { 
        
        GetExchangeRate200Response.initialize(this, token_id, currency, rate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token_id, currency, rate) { 
        obj['token_id'] = token_id;
        obj['currency'] = currency;
        obj['rate'] = rate;
    }

    /**
     * Constructs a <code>GetExchangeRate200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeRate200Response} obj Optional instance to populate.
     * @return {module:model/GetExchangeRate200Response} The populated <code>GetExchangeRate200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetExchangeRate200Response();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetExchangeRate200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExchangeRate200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetExchangeRate200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['rate'] && !(typeof data['rate'] === 'string' || data['rate'] instanceof String)) {
            throw new Error("Expected the field `rate` to be a primitive type in the JSON string but got " + data['rate']);
        }

        return true;
    }


}

GetExchangeRate200Response.RequiredProperties = ["token_id", "currency", "rate"];

/**
 * The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format `{CHAIN}_{TOKEN}`.
 * @member {String} token_id
 */
GetExchangeRate200Response.prototype['token_id'] = undefined;

/**
 * The fiat currency.
 * @member {String} currency
 */
GetExchangeRate200Response.prototype['currency'] = undefined;

/**
 * The current exchange rate between the specified currency pair. Expressed as the amount of fiat currency per one unit of cryptocurrency. For example, if the cryptocurrency is USDT and the fiat currency is USD, a rate of \"0.99\" means 1 USDT = 0.99 USD.
 * @member {String} rate
 */
GetExchangeRate200Response.prototype['rate'] = undefined;






export default GetExchangeRate200Response;

