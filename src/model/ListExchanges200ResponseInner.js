/**
 * Cobo Wallet as a Service 2.0
 *
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
 */
class ListExchanges200ResponseInner {
    /**
     * Constructs a new <code>ListExchanges200ResponseInner</code>.
     * The information about the supported exchange.
     * @alias module:model/ListExchanges200ResponseInner
     * @param exchange_id {module:model/ExchangeId} 
     * @param supported_trading_account_types {Array.<String>} The supported trading account types of this exchange.
     */
    constructor(exchange_id, supported_trading_account_types) { 
        
        ListExchanges200ResponseInner.initialize(this, exchange_id, supported_trading_account_types);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, exchange_id, supported_trading_account_types) { 
        obj['exchange_id'] = exchange_id;
        obj['supported_trading_account_types'] = supported_trading_account_types;
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
            if (data.hasOwnProperty('supported_trading_account_types')) {
                obj['supported_trading_account_types'] = ApiClient.convertToType(data['supported_trading_account_types'], ['String']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['supported_trading_account_types'])) {
            throw new Error("Expected the field `supported_trading_account_types` to be an array in the JSON data but got " + data['supported_trading_account_types']);
        }

        return true;
    }


}

ListExchanges200ResponseInner.RequiredProperties = ["exchange_id", "supported_trading_account_types"];

/**
 * @member {module:model/ExchangeId} exchange_id
 */
ListExchanges200ResponseInner.prototype['exchange_id'] = undefined;

/**
 * The supported trading account types of this exchange.
 * @member {Array.<String>} supported_trading_account_types
 */
ListExchanges200ResponseInner.prototype['supported_trading_account_types'] = undefined;






export default ListExchanges200ResponseInner;

