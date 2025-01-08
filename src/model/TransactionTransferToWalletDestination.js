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
import ExchangeId from './ExchangeId';
import TransactionDestinationType from './TransactionDestinationType';

/**
 * The TransactionTransferToWalletDestination model module.
 * @module model/TransactionTransferToWalletDestination
 */
class TransactionTransferToWalletDestination {
    /**
     * Constructs a new <code>TransactionTransferToWalletDestination</code>.
     * Information about the transaction destination type &#x60;ExchangeWallet&#x60;. Refer to [Transaction sources and destinations](https://www.cobo.com/developers/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.  Switch between the tabs to display the properties for different transaction destinations. 
     * @alias module:model/TransactionTransferToWalletDestination
     * @param destination_type {module:model/TransactionDestinationType} 
     * @param wallet_id {String} The wallet ID.
     * @param amount {String} The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
     */
    constructor(destination_type, wallet_id, amount) { 
        
        TransactionTransferToWalletDestination.initialize(this, destination_type, wallet_id, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, wallet_id, amount) { 
        obj['destination_type'] = destination_type;
        obj['wallet_id'] = wallet_id;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TransactionTransferToWalletDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionTransferToWalletDestination} obj Optional instance to populate.
     * @return {module:model/TransactionTransferToWalletDestination} The populated <code>TransactionTransferToWalletDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionTransferToWalletDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransactionDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('trading_account_type')) {
                obj['trading_account_type'] = ApiClient.convertToType(data['trading_account_type'], 'String');
            }
            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ExchangeId.constructFromObject(data['exchange_id']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionTransferToWalletDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionTransferToWalletDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionTransferToWalletDestination.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

TransactionTransferToWalletDestination.RequiredProperties = ["destination_type", "wallet_id", "amount"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionTransferToWalletDestination.prototype['destination_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionTransferToWalletDestination.prototype['wallet_id'] = undefined;

/**
 * The trading account type.
 * @member {String} trading_account_type
 */
TransactionTransferToWalletDestination.prototype['trading_account_type'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
TransactionTransferToWalletDestination.prototype['exchange_id'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
 * @member {String} amount
 */
TransactionTransferToWalletDestination.prototype['amount'] = undefined;






export default TransactionTransferToWalletDestination;

