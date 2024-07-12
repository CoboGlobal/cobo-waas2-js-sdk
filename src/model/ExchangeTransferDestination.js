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
import TransferDestinationType from './TransferDestinationType';

/**
 * The ExchangeTransferDestination model module.
 * @module model/ExchangeTransferDestination
 * @version 0.2.7
 */
class ExchangeTransferDestination {
    /**
     * Constructs a new <code>ExchangeTransferDestination</code>.
     * The information about the transaction destination. An Exchange Wallet (Sub Account) as the transaction destination can only receives token transfers from another Exchange Wallet.
     * @alias module:model/ExchangeTransferDestination
     * @param destinationType {module:model/TransferDestinationType} 
     * @param walletId {String} The wallet ID.
     * @param subWalletId {String} The exchange trading account or the sub-wallet ID.
     */
    constructor(destinationType, walletId, subWalletId) { 
        
        ExchangeTransferDestination.initialize(this, destinationType, walletId, subWalletId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destinationType, walletId, subWalletId) { 
        obj['destination_type'] = destinationType;
        obj['wallet_id'] = walletId;
        obj['sub_wallet_id'] = subWalletId;
    }

    /**
     * Constructs a <code>ExchangeTransferDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExchangeTransferDestination} obj Optional instance to populate.
     * @return {module:model/ExchangeTransferDestination} The populated <code>ExchangeTransferDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangeTransferDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransferDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('sub_wallet_id')) {
                obj['sub_wallet_id'] = ApiClient.convertToType(data['sub_wallet_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExchangeTransferDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExchangeTransferDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExchangeTransferDestination.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

ExchangeTransferDestination.RequiredProperties = ["destination_type", "wallet_id", "sub_wallet_id"];

/**
 * @member {module:model/TransferDestinationType} destination_type
 */
ExchangeTransferDestination.prototype['destination_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
ExchangeTransferDestination.prototype['wallet_id'] = undefined;

/**
 * The exchange trading account or the sub-wallet ID.
 * @member {String} sub_wallet_id
 */
ExchangeTransferDestination.prototype['sub_wallet_id'] = undefined;

/**
 * The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} amount
 */
ExchangeTransferDestination.prototype['amount'] = undefined;






export default ExchangeTransferDestination;

