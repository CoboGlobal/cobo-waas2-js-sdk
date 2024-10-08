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
import WalletType from './WalletType';

/**
 * The BookkeepingRecord model module.
 * @module model/BookkeepingRecord
 */
class BookkeepingRecord {
    /**
     * Constructs a new <code>BookkeepingRecord</code>.
     * The bookkeeping item information.
     * @alias module:model/BookkeepingRecord
     * @param wallet_id {String} The wallet ID.
     * @param transaction_timestamp {Number} The time when the bookkeeping was created, in Unix timestamp format, measured in milliseconds.
     * @param token_id {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param type {String} The bookkeeping type.
     * @param amount {String} The amount of the bookkeeping.
     * @param balance {String} The post-balance of the tx.
     */
    constructor(wallet_id, transaction_timestamp, token_id, type, amount, balance) { 
        
        BookkeepingRecord.initialize(this, wallet_id, transaction_timestamp, token_id, type, amount, balance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, wallet_id, transaction_timestamp, token_id, type, amount, balance) { 
        obj['wallet_id'] = wallet_id;
        obj['transaction_timestamp'] = transaction_timestamp;
        obj['token_id'] = token_id;
        obj['type'] = type;
        obj['amount'] = amount;
        obj['balance'] = balance;
    }

    /**
     * Constructs a <code>BookkeepingRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BookkeepingRecord} obj Optional instance to populate.
     * @return {module:model/BookkeepingRecord} The populated <code>BookkeepingRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BookkeepingRecord();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_name')) {
                obj['wallet_name'] = ApiClient.convertToType(data['wallet_name'], 'String');
            }
            if (data.hasOwnProperty('transaction_timestamp')) {
                obj['transaction_timestamp'] = ApiClient.convertToType(data['transaction_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
            }
            if (data.hasOwnProperty('from_address')) {
                obj['from_address'] = ApiClient.convertToType(data['from_address'], 'String');
            }
            if (data.hasOwnProperty('to_address')) {
                obj['to_address'] = ApiClient.convertToType(data['to_address'], 'String');
            }
            if (data.hasOwnProperty('transaction_hash')) {
                obj['transaction_hash'] = ApiClient.convertToType(data['transaction_hash'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BookkeepingRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BookkeepingRecord</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BookkeepingRecord.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['wallet_name'] && !(typeof data['wallet_name'] === 'string' || data['wallet_name'] instanceof String)) {
            throw new Error("Expected the field `wallet_name` to be a primitive type in the JSON string but got " + data['wallet_name']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['balance'] && !(typeof data['balance'] === 'string' || data['balance'] instanceof String)) {
            throw new Error("Expected the field `balance` to be a primitive type in the JSON string but got " + data['balance']);
        }
        // ensure the json data is a string
        if (data['from_address'] && !(typeof data['from_address'] === 'string' || data['from_address'] instanceof String)) {
            throw new Error("Expected the field `from_address` to be a primitive type in the JSON string but got " + data['from_address']);
        }
        // ensure the json data is a string
        if (data['to_address'] && !(typeof data['to_address'] === 'string' || data['to_address'] instanceof String)) {
            throw new Error("Expected the field `to_address` to be a primitive type in the JSON string but got " + data['to_address']);
        }
        // ensure the json data is a string
        if (data['transaction_hash'] && !(typeof data['transaction_hash'] === 'string' || data['transaction_hash'] instanceof String)) {
            throw new Error("Expected the field `transaction_hash` to be a primitive type in the JSON string but got " + data['transaction_hash']);
        }

        return true;
    }


}

BookkeepingRecord.RequiredProperties = ["wallet_id", "transaction_timestamp", "token_id", "type", "amount", "balance"];

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
BookkeepingRecord.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
BookkeepingRecord.prototype['wallet_type'] = undefined;

/**
 * The wallet name.
 * @member {String} wallet_name
 */
BookkeepingRecord.prototype['wallet_name'] = undefined;

/**
 * The time when the bookkeeping was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} transaction_timestamp
 */
BookkeepingRecord.prototype['transaction_timestamp'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
BookkeepingRecord.prototype['token_id'] = undefined;

/**
 * The bookkeeping type.
 * @member {String} type
 */
BookkeepingRecord.prototype['type'] = undefined;

/**
 * The amount of the bookkeeping.
 * @member {String} amount
 */
BookkeepingRecord.prototype['amount'] = undefined;

/**
 * The post-balance of the tx.
 * @member {String} balance
 */
BookkeepingRecord.prototype['balance'] = undefined;

/**
 * The from address.
 * @member {String} from_address
 */
BookkeepingRecord.prototype['from_address'] = undefined;

/**
 * The to address.
 * @member {String} to_address
 */
BookkeepingRecord.prototype['to_address'] = undefined;

/**
 * The transaction hash.
 * @member {String} transaction_hash
 */
BookkeepingRecord.prototype['transaction_hash'] = undefined;






export default BookkeepingRecord;

