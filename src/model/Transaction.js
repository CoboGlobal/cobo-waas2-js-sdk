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
import TransactionDestination from './TransactionDestination';
import TransactionFee from './TransactionFee';
import TransactionInitiatorType from './TransactionInitiatorType';
import TransactionReplacement from './TransactionReplacement';
import TransactionSource from './TransactionSource';
import TransactionStatus from './TransactionStatus';
import TransactionSubStatus from './TransactionSubStatus';
import TransactionType from './TransactionType';

/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 0.2.6
 */
class Transaction {
    /**
     * Constructs a new <code>Transaction</code>.
     * The information about a transaction.
     * @alias module:model/Transaction
     * @param transactionId {String} The transaction ID.
     * @param status {module:model/TransactionStatus} 
     * @param source {module:model/TransactionSource} 
     * @param destination {module:model/TransactionDestination} 
     * @param initiatorType {module:model/TransactionInitiatorType} 
     * @param createdTime {Number} The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
     * @param updatedTime {Number} The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
     */
    constructor(transactionId, status, source, destination, initiatorType, createdTime, updatedTime) { 
        
        Transaction.initialize(this, transactionId, status, source, destination, initiatorType, createdTime, updatedTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionId, status, source, destination, initiatorType, createdTime, updatedTime) { 
        obj['transaction_id'] = transactionId;
        obj['status'] = status;
        obj['source'] = source;
        obj['destination'] = destination;
        obj['initiator_type'] = initiatorType;
        obj['created_time'] = createdTime;
        obj['updated_time'] = updatedTime;
    }

    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transaction} obj Optional instance to populate.
     * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transaction();

            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('cobo_id')) {
                obj['cobo_id'] = ApiClient.convertToType(data['cobo_id'], 'String');
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TransactionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TransactionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('sub_status')) {
                obj['sub_status'] = TransactionSubStatus.constructFromObject(data['sub_status']);
            }
            if (data.hasOwnProperty('failed_reason')) {
                obj['failed_reason'] = ApiClient.convertToType(data['failed_reason'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TransactionSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = TransactionDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = ApiClient.convertToType(data['initiator'], 'String');
            }
            if (data.hasOwnProperty('initiator_type')) {
                obj['initiator_type'] = TransactionInitiatorType.constructFromObject(data['initiator_type']);
            }
            if (data.hasOwnProperty('confirmed_num')) {
                obj['confirmed_num'] = ApiClient.convertToType(data['confirmed_num'], 'Number');
            }
            if (data.hasOwnProperty('confirming_threshold')) {
                obj['confirming_threshold'] = ApiClient.convertToType(data['confirming_threshold'], 'Number');
            }
            if (data.hasOwnProperty('block_number')) {
                obj['block_number'] = ApiClient.convertToType(data['block_number'], 'Number');
            }
            if (data.hasOwnProperty('block_time')) {
                obj['block_time'] = ApiClient.convertToType(data['block_time'], 'Number');
            }
            if (data.hasOwnProperty('block_hash')) {
                obj['block_hash'] = ApiClient.convertToType(data['block_hash'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transaction_hash')) {
                obj['transaction_hash'] = ApiClient.convertToType(data['transaction_hash'], 'String');
            }
            if (data.hasOwnProperty('replacement')) {
                obj['replacement'] = TransactionReplacement.constructFromObject(data['replacement']);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('force_internal')) {
                obj['force_internal'] = ApiClient.convertToType(data['force_internal'], 'Boolean');
            }
            if (data.hasOwnProperty('force_external')) {
                obj['force_external'] = ApiClient.convertToType(data['force_external'], 'Boolean');
            }
            if (data.hasOwnProperty('is_loop')) {
                obj['is_loop'] = ApiClient.convertToType(data['is_loop'], 'Boolean');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Number');
            }
            if (data.hasOwnProperty('updated_time')) {
                obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Transaction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['transaction_id'] && !(typeof data['transaction_id'] === 'string' || data['transaction_id'] instanceof String)) {
            throw new Error("Expected the field `transaction_id` to be a primitive type in the JSON string but got " + data['transaction_id']);
        }
        // ensure the json data is a string
        if (data['cobo_id'] && !(typeof data['cobo_id'] === 'string' || data['cobo_id'] instanceof String)) {
            throw new Error("Expected the field `cobo_id` to be a primitive type in the JSON string but got " + data['cobo_id']);
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['failed_reason'] && !(typeof data['failed_reason'] === 'string' || data['failed_reason'] instanceof String)) {
            throw new Error("Expected the field `failed_reason` to be a primitive type in the JSON string but got " + data['failed_reason']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          TransactionSource.validateJSON(data['source']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          TransactionDestination.validateJSON(data['destination']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionFee.validateJSON(data['fee']);
        }
        // ensure the json data is a string
        if (data['initiator'] && !(typeof data['initiator'] === 'string' || data['initiator'] instanceof String)) {
            throw new Error("Expected the field `initiator` to be a primitive type in the JSON string but got " + data['initiator']);
        }
        // ensure the json data is a string
        if (data['block_hash'] && !(typeof data['block_hash'] === 'string' || data['block_hash'] instanceof String)) {
            throw new Error("Expected the field `block_hash` to be a primitive type in the JSON string but got " + data['block_hash']);
        }
        // ensure the json data is a string
        if (data['transaction_hash'] && !(typeof data['transaction_hash'] === 'string' || data['transaction_hash'] instanceof String)) {
            throw new Error("Expected the field `transaction_hash` to be a primitive type in the JSON string but got " + data['transaction_hash']);
        }
        // validate the optional field `replacement`
        if (data['replacement']) { // data not null
          TransactionReplacement.validateJSON(data['replacement']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category'])) {
            throw new Error("Expected the field `category` to be an array in the JSON data but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

Transaction.RequiredProperties = ["transaction_id", "status", "source", "destination", "initiator_type", "created_time", "updated_time"];

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
Transaction.prototype['transaction_id'] = undefined;

/**
 * The Cobo ID, which can be used to track a transaction.
 * @member {String} cobo_id
 */
Transaction.prototype['cobo_id'] = undefined;

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
Transaction.prototype['request_id'] = undefined;

/**
 * @member {module:model/TransactionType} type
 */
Transaction.prototype['type'] = undefined;

/**
 * @member {module:model/TransactionStatus} status
 */
Transaction.prototype['status'] = undefined;

/**
 * @member {module:model/TransactionSubStatus} sub_status
 */
Transaction.prototype['sub_status'] = undefined;

/**
 * The reason why the transaction failed.
 * @member {String} failed_reason
 */
Transaction.prototype['failed_reason'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
Transaction.prototype['chain_id'] = undefined;

/**
 * @member {module:model/TransactionSource} source
 */
Transaction.prototype['source'] = undefined;

/**
 * @member {module:model/TransactionDestination} destination
 */
Transaction.prototype['destination'] = undefined;

/**
 * @member {module:model/TransactionFee} fee
 */
Transaction.prototype['fee'] = undefined;

/**
 * The transaction initiator.
 * @member {String} initiator
 */
Transaction.prototype['initiator'] = undefined;

/**
 * @member {module:model/TransactionInitiatorType} initiator_type
 */
Transaction.prototype['initiator_type'] = undefined;

/**
 * The number of confirmations this transaction has received.
 * @member {Number} confirmed_num
 */
Transaction.prototype['confirmed_num'] = undefined;

/**
 * The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction.
 * @member {Number} confirming_threshold
 */
Transaction.prototype['confirming_threshold'] = undefined;

/**
 * The block number.
 * @member {Number} block_number
 */
Transaction.prototype['block_number'] = undefined;

/**
 * The time when the block was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} block_time
 */
Transaction.prototype['block_time'] = undefined;

/**
 * The block hash.
 * @member {String} block_hash
 */
Transaction.prototype['block_hash'] = undefined;

/**
 * The transaction nonce.
 * @member {Number} nonce
 */
Transaction.prototype['nonce'] = undefined;

/**
 * The transaction hash.
 * @member {String} transaction_hash
 */
Transaction.prototype['transaction_hash'] = undefined;

/**
 * @member {module:model/TransactionReplacement} replacement
 */
Transaction.prototype['replacement'] = undefined;

/**
 * A custom transaction category for you to identify your transfers more easily.
 * @member {Array.<String>} category
 */
Transaction.prototype['category'] = undefined;

/**
 * The description for your transaction.
 * @member {String} description
 */
Transaction.prototype['description'] = undefined;

/**
 * Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must be executed as a Loop transfer.   - `false`: The transaction request may not be executed as a Loop transfer. 
 * @member {Boolean} force_internal
 */
Transaction.prototype['force_internal'] = undefined;

/**
 * Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must not be executed as a Loop transfer.   - `false`: The transaction request can be executed as a Loop transfer. 
 * @member {Boolean} force_external
 */
Transaction.prototype['force_external'] = undefined;

/**
 * Whether the transaction is a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).  - `true`: The transaction is a Loop transfer. - `false`: The transaction is not a Loop transfer. 
 * @member {Boolean} is_loop
 */
Transaction.prototype['is_loop'] = undefined;

/**
 * The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_time
 */
Transaction.prototype['created_time'] = undefined;

/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_time
 */
Transaction.prototype['updated_time'] = undefined;






export default Transaction;

