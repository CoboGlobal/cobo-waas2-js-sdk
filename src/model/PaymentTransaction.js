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
import TransactionStatus from './TransactionStatus';

/**
 * The PaymentTransaction model module.
 * @module model/PaymentTransaction
 */
class PaymentTransaction {
    /**
     * Constructs a new <code>PaymentTransaction</code>.
     * @alias module:model/PaymentTransaction
     * @param tx_id {String} The transaction ID.
     * @param from_address {String} The source address of the transaction.
     * @param to_address {String} The destination address of the transaction.
     * @param amount {String} The amount of cryptocurrency transferred, as a decimal string.
     * @param status {module:model/TransactionStatus} 
     * @param created_timestamp {Number} The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
     * @param updated_timestamp {Number} The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
     */
    constructor(tx_id, from_address, to_address, amount, status, created_timestamp, updated_timestamp) { 
        
        PaymentTransaction.initialize(this, tx_id, from_address, to_address, amount, status, created_timestamp, updated_timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tx_id, from_address, to_address, amount, status, created_timestamp, updated_timestamp) { 
        obj['tx_id'] = tx_id;
        obj['from_address'] = from_address;
        obj['to_address'] = to_address;
        obj['amount'] = amount;
        obj['status'] = status;
        obj['created_timestamp'] = created_timestamp;
        obj['updated_timestamp'] = updated_timestamp;
    }

    /**
     * Constructs a <code>PaymentTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentTransaction} obj Optional instance to populate.
     * @return {module:model/PaymentTransaction} The populated <code>PaymentTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransaction();

            if (data.hasOwnProperty('tx_id')) {
                obj['tx_id'] = ApiClient.convertToType(data['tx_id'], 'String');
            }
            if (data.hasOwnProperty('tx_hash')) {
                obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('from_address')) {
                obj['from_address'] = ApiClient.convertToType(data['from_address'], 'String');
            }
            if (data.hasOwnProperty('to_address')) {
                obj['to_address'] = ApiClient.convertToType(data['to_address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TransactionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentTransaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentTransaction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tx_id'] && !(typeof data['tx_id'] === 'string' || data['tx_id'] instanceof String)) {
            throw new Error("Expected the field `tx_id` to be a primitive type in the JSON string but got " + data['tx_id']);
        }
        // ensure the json data is a string
        if (data['tx_hash'] && !(typeof data['tx_hash'] === 'string' || data['tx_hash'] instanceof String)) {
            throw new Error("Expected the field `tx_hash` to be a primitive type in the JSON string but got " + data['tx_hash']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
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
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

PaymentTransaction.RequiredProperties = ["tx_id", "from_address", "to_address", "amount", "status", "created_timestamp", "updated_timestamp"];

/**
 * The transaction ID.
 * @member {String} tx_id
 */
PaymentTransaction.prototype['tx_id'] = undefined;

/**
 * The transaction hash.
 * @member {String} tx_hash
 */
PaymentTransaction.prototype['tx_hash'] = undefined;

/**
 * The ID of the cryptocurrency.
 * @member {String} token_id
 */
PaymentTransaction.prototype['token_id'] = undefined;

/**
 * The source address of the transaction.
 * @member {String} from_address
 */
PaymentTransaction.prototype['from_address'] = undefined;

/**
 * The destination address of the transaction.
 * @member {String} to_address
 */
PaymentTransaction.prototype['to_address'] = undefined;

/**
 * The amount of cryptocurrency transferred, as a decimal string.
 * @member {String} amount
 */
PaymentTransaction.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionStatus} status
 */
PaymentTransaction.prototype['status'] = undefined;

/**
 * The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
PaymentTransaction.prototype['created_timestamp'] = undefined;

/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
PaymentTransaction.prototype['updated_timestamp'] = undefined;






export default PaymentTransaction;

