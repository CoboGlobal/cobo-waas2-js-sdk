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
import ExchangeId from './ExchangeId';

/**
 * The ListExchanges200ResponseInner model module.
 * @module model/ListExchanges200ResponseInner
 * @version 0.2.7
 */
class ListExchanges200ResponseInner {
    /**
     * Constructs a new <code>ListExchanges200ResponseInner</code>.
     * Settings details for the exchange
     * @alias module:model/ListExchanges200ResponseInner
     * @param exchangeId {module:model/ExchangeId} 
     * @param supportedSubWalletIds {Array.<String>} The trading accounts(sub_wallet_ids) supported for this exchange.
     */
    constructor(exchangeId, supportedSubWalletIds) { 
        
        ListExchanges200ResponseInner.initialize(this, exchangeId, supportedSubWalletIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, exchangeId, supportedSubWalletIds) { 
        obj['exchange_id'] = exchangeId;
        obj['supported_sub_wallet_ids'] = supportedSubWalletIds;
    }

    /**
     * Constructs a <code>ListExchanges200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListExchanges200ResponseInner} obj Optional instance to populate.
     * @return {module:model/ListExchanges200ResponseInner} The populated <code>ListExchanges200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListExchanges200ResponseInner();

            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ExchangeId.constructFromObject(data['exchange_id']);
            }
            if (data.hasOwnProperty('subtitle')) {
                obj['subtitle'] = ApiClient.convertToType(data['subtitle'], 'String');
            }
            if (data.hasOwnProperty('supported_sub_wallet_ids')) {
                obj['supported_sub_wallet_ids'] = ApiClient.convertToType(data['supported_sub_wallet_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListExchanges200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListExchanges200ResponseInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListExchanges200ResponseInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['subtitle'] && !(typeof data['subtitle'] === 'string' || data['subtitle'] instanceof String)) {
            throw new Error("Expected the field `subtitle` to be a primitive type in the JSON string but got " + data['subtitle']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supported_sub_wallet_ids'])) {
            throw new Error("Expected the field `supported_sub_wallet_ids` to be an array in the JSON data but got " + data['supported_sub_wallet_ids']);
        }

        return true;
    }


}

ListExchanges200ResponseInner.RequiredProperties = ["exchange_id", "supported_sub_wallet_ids"];

/**
 * @member {module:model/ExchangeId} exchange_id
 */
ListExchanges200ResponseInner.prototype['exchange_id'] = undefined;

/**
 * Introduction of the supported features of this exchange.
 * @member {String} subtitle
 */
ListExchanges200ResponseInner.prototype['subtitle'] = undefined;

/**
 * The trading accounts(sub_wallet_ids) supported for this exchange.
 * @member {Array.<String>} supported_sub_wallet_ids
 */
ListExchanges200ResponseInner.prototype['supported_sub_wallet_ids'] = undefined;






export default ListExchanges200ResponseInner;

