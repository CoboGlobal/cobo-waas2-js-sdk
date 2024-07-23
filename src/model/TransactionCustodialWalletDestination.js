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
import TransactionDestinationType from './TransactionDestinationType';

/**
 * The TransactionCustodialWalletDestination model module.
 * @module model/TransactionCustodialWalletDestination
 * @version 0.4.4
 */
class TransactionCustodialWalletDestination {
    /**
     * Constructs a new <code>TransactionCustodialWalletDestination</code>.
     * The information about the transaction destination.
     * @alias module:model/TransactionCustodialWalletDestination
     * @param destinationType {module:model/TransactionDestinationType} 
     * @param walletId {String} The wallet ID.
     * @param tokenId {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param address {String} The destination address.
     * @param amount {String} The transaction amount. For exmaole, if you trade 1.5 ETH, then the amount is `1.5`. 
     */
    constructor(destinationType, walletId, tokenId, address, amount) { 
        
        TransactionCustodialWalletDestination.initialize(this, destinationType, walletId, tokenId, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destinationType, walletId, tokenId, address, amount) { 
        obj['destination_type'] = destinationType;
        obj['wallet_id'] = walletId;
        obj['token_id'] = tokenId;
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TransactionCustodialWalletDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionCustodialWalletDestination} obj Optional instance to populate.
     * @return {module:model/TransactionCustodialWalletDestination} The populated <code>TransactionCustodialWalletDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionCustodialWalletDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransactionDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionCustodialWalletDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionCustodialWalletDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionCustodialWalletDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

TransactionCustodialWalletDestination.RequiredProperties = ["destination_type", "wallet_id", "token_id", "address", "amount"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionCustodialWalletDestination.prototype['destination_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionCustodialWalletDestination.prototype['wallet_id'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
TransactionCustodialWalletDestination.prototype['token_id'] = undefined;

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT.
 * @member {String} asset_id
 */
TransactionCustodialWalletDestination.prototype['asset_id'] = undefined;

/**
 * The destination address.
 * @member {String} address
 */
TransactionCustodialWalletDestination.prototype['address'] = undefined;

/**
 * The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON.
 * @member {String} memo
 */
TransactionCustodialWalletDestination.prototype['memo'] = undefined;

/**
 * The transaction amount. For exmaole, if you trade 1.5 ETH, then the amount is `1.5`. 
 * @member {String} amount
 */
TransactionCustodialWalletDestination.prototype['amount'] = undefined;






export default TransactionCustodialWalletDestination;

