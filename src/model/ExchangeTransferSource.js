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
import WalletSubtype from './WalletSubtype';

/**
 * The ExchangeTransferSource model module.
 * @module model/ExchangeTransferSource
 */
class ExchangeTransferSource {
    /**
     * Constructs a new <code>ExchangeTransferSource</code>.
     * The information about the transaction source types &#x60;Main&#x60; and &#x60;Sub&#x60;.   Assets in an Exchange Wallet (Sub Account) can only be transferred to another Exchange Wallet. 
     * @alias module:model/ExchangeTransferSource
     * @param source_type {module:model/WalletSubtype} 
     * @param wallet_id {String} The wallet ID.
     * @param trading_account_type {String} The trading account type.
     */
    constructor(source_type, wallet_id, trading_account_type) { 
        
        ExchangeTransferSource.initialize(this, source_type, wallet_id, trading_account_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, wallet_id, trading_account_type) { 
        obj['source_type'] = source_type;
        obj['wallet_id'] = wallet_id;
        obj['trading_account_type'] = trading_account_type;
    }

    /**
     * Constructs a <code>ExchangeTransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExchangeTransferSource} obj Optional instance to populate.
     * @return {module:model/ExchangeTransferSource} The populated <code>ExchangeTransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangeTransferSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = WalletSubtype.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('trading_account_type')) {
                obj['trading_account_type'] = ApiClient.convertToType(data['trading_account_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExchangeTransferSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExchangeTransferSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExchangeTransferSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['trading_account_type'] && !(typeof data['trading_account_type'] === 'string' || data['trading_account_type'] instanceof String)) {
            throw new Error("Expected the field `trading_account_type` to be a primitive type in the JSON string but got " + data['trading_account_type']);
        }

        return true;
    }


}

ExchangeTransferSource.RequiredProperties = ["source_type", "wallet_id", "trading_account_type"];

/**
 * @member {module:model/WalletSubtype} source_type
 */
ExchangeTransferSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
ExchangeTransferSource.prototype['wallet_id'] = undefined;

/**
 * The trading account type.
 * @member {String} trading_account_type
 */
ExchangeTransferSource.prototype['trading_account_type'] = undefined;






export default ExchangeTransferSource;

