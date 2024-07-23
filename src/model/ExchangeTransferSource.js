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
import BaseTransferSource from './BaseTransferSource';
import WalletSubtype from './WalletSubtype';

/**
 * The ExchangeTransferSource model module.
 * @module model/ExchangeTransferSource
 * @version 0.4.4
 */
class ExchangeTransferSource {
    /**
     * Constructs a new <code>ExchangeTransferSource</code>.
     * The information about the transaction source. An Exchange Wallet (Sub Account) as the transaction source can only transfer tokens to another Exchange Wallet.
     * @alias module:model/ExchangeTransferSource
     * @implements module:model/BaseTransferSource
     * @param sourceType {module:model/WalletSubtype} 
     * @param walletId {String} The wallet ID.
     * @param subWalletId {String} The exchange trading account or the sub-wallet ID.
     */
    constructor(sourceType, walletId, subWalletId) { 
        BaseTransferSource.initialize(this, sourceType, walletId);
        ExchangeTransferSource.initialize(this, sourceType, walletId, subWalletId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, walletId, subWalletId) { 
        obj['source_type'] = sourceType;
        obj['wallet_id'] = walletId;
        obj['sub_wallet_id'] = subWalletId;
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
            BaseTransferSource.constructFromObject(data, obj);

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = WalletSubtype.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('sub_wallet_id')) {
                obj['sub_wallet_id'] = ApiClient.convertToType(data['sub_wallet_id'], 'String');
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
        if (data['sub_wallet_id'] && !(typeof data['sub_wallet_id'] === 'string' || data['sub_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `sub_wallet_id` to be a primitive type in the JSON string but got " + data['sub_wallet_id']);
        }

        return true;
    }


}

ExchangeTransferSource.RequiredProperties = ["source_type", "wallet_id", "sub_wallet_id"];

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
 * The exchange trading account or the sub-wallet ID.
 * @member {String} sub_wallet_id
 */
ExchangeTransferSource.prototype['sub_wallet_id'] = undefined;


// Implement BaseTransferSource interface:
/**
 * @member {module:model/WalletSubtype} source_type
 */
BaseTransferSource.prototype['source_type'] = undefined;
/**
 * The wallet ID.
 * @member {String} wallet_id
 */
BaseTransferSource.prototype['wallet_id'] = undefined;




export default ExchangeTransferSource;

