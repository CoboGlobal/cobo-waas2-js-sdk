/**
 * Cobo Wallet as a Service 2.0
 * Cobo WaaS 2.0 enables you to programmatically access Cobo's full suite of crypto wallet technologies with powerful and flexible access controls.  # Wallet technologies - Custodial Wallet - MPC Wallet - Smart Contract Wallet (Based on Safe{Wallet}) - Exchange Wallet  # Risk Control technologies - Workflow - Access Control List (ACL)  # Risk Control targets - Wallet Management   - User/team and their permission management   - Risk control configurations, e.g. whitelist, blacklist, rate-limiting etc. - Blockchain Interaction   - Crypto transfer   - Smart Contract Invocation  # Important HTTPS only. RESTful, resource oriented  # Get Started Set up your APIs or get authorization  # Authentication and Authorization CoboAuth  # Request and Response application/json  # Error Handling  ### Common error codes | Error Code | Description | | -- | -- |  ### API-specific error codes For error codes that are dedicated to a specific API, see the Error codes section in each API specification, for example, /v3/wallets.  # Rate and Usage Limiting  # Idempotent Request  # Pagination # Support [Developer Hub](https://cobo.com/developers) 
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
 * @version 0.1.0
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
