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
import Transaction from './Transaction';
import TransactionBlockInfo from './TransactionBlockInfo';
import TransactionDestination from './TransactionDestination';
import TransactionDetailAllOfTimeline from './TransactionDetailAllOfTimeline';
import TransactionFee from './TransactionFee';
import TransactionInitiatorType from './TransactionInitiatorType';
import TransactionReplacement from './TransactionReplacement';
import TransactionResult from './TransactionResult';
import TransactionSource from './TransactionSource';
import TransactionStatus from './TransactionStatus';
import TransactionSubStatus from './TransactionSubStatus';
import TransactionType from './TransactionType';

/**
 * The TransactionDetail model module.
 * @module model/TransactionDetail
 * @version 0.4.5
 */
class TransactionDetail {
    /**
     * Constructs a new <code>TransactionDetail</code>.
     * @alias module:model/TransactionDetail
     * @implements module:model/Transaction
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
        TransactionDetail.initialize(this, transactionId, status, source, destination, initiatorType, createdTime, updatedTime);
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
     * Constructs a <code>TransactionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDetail} obj Optional instance to populate.
     * @return {module:model/TransactionDetail} The populated <code>TransactionDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDetail();
            Transaction.constructFromObject(data, obj);

            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('cobo_id')) {
                obj['cobo_id'] = ApiClient.convertToType(data['cobo_id'], 'String');
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
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
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TransactionSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = TransactionDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = TransactionResult.constructFromObject(data['result']);
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
            if (data.hasOwnProperty('block_info')) {
                obj['block_info'] = TransactionBlockInfo.constructFromObject(data['block_info']);
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
            if (data.hasOwnProperty('is_loop')) {
                obj['is_loop'] = ApiClient.convertToType(data['is_loop'], 'Boolean');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Number');
            }
            if (data.hasOwnProperty('updated_time')) {
                obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Number');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = ApiClient.convertToType(data['timeline'], [TransactionDetailAllOfTimeline]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDetail</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDetail.RequiredProperties) {
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
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['failed_reason'] && !(typeof data['failed_reason'] === 'string' || data['failed_reason'] instanceof String)) {
            throw new Error("Expected the field `failed_reason` to be a primitive type in the JSON string but got " + data['failed_reason']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          TransactionSource.validateJSON(data['source']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          TransactionDestination.validateJSON(data['destination']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          TransactionResult.validateJSON(data['result']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionFee.validateJSON(data['fee']);
        }
        // ensure the json data is a string
        if (data['initiator'] && !(typeof data['initiator'] === 'string' || data['initiator'] instanceof String)) {
            throw new Error("Expected the field `initiator` to be a primitive type in the JSON string but got " + data['initiator']);
        }
        // validate the optional field `block_info`
        if (data['block_info']) { // data not null
          TransactionBlockInfo.validateJSON(data['block_info']);
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
        if (data['timeline']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['timeline'])) {
                throw new Error("Expected the field `timeline` to be an array in the JSON data but got " + data['timeline']);
            }
            // validate the optional field `timeline` (array)
            for (const item of data['timeline']) {
                TransactionDetailAllOfTimeline.validateJSON(item);
            };
        }

        return true;
    }


}

TransactionDetail.RequiredProperties = ["transaction_id", "status", "source", "destination", "initiator_type", "created_time", "updated_time"];

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
TransactionDetail.prototype['transaction_id'] = undefined;

/**
 * The Cobo ID, which can be used to track a transaction.
 * @member {String} cobo_id
 */
TransactionDetail.prototype['cobo_id'] = undefined;

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
TransactionDetail.prototype['request_id'] = undefined;

/**
 * For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source.
 * @member {String} wallet_id
 */
TransactionDetail.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/TransactionType} type
 */
TransactionDetail.prototype['type'] = undefined;

/**
 * @member {module:model/TransactionStatus} status
 */
TransactionDetail.prototype['status'] = undefined;

/**
 * @member {module:model/TransactionSubStatus} sub_status
 */
TransactionDetail.prototype['sub_status'] = undefined;

/**
 * The reason why the transaction failed. This property only applies to approval failures and signature failures.
 * @member {String} failed_reason
 */
TransactionDetail.prototype['failed_reason'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
TransactionDetail.prototype['chain_id'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
TransactionDetail.prototype['token_id'] = undefined;

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT.
 * @member {String} asset_id
 */
TransactionDetail.prototype['asset_id'] = undefined;

/**
 * @member {module:model/TransactionSource} source
 */
TransactionDetail.prototype['source'] = undefined;

/**
 * @member {module:model/TransactionDestination} destination
 */
TransactionDetail.prototype['destination'] = undefined;

/**
 * @member {module:model/TransactionResult} result
 */
TransactionDetail.prototype['result'] = undefined;

/**
 * @member {module:model/TransactionFee} fee
 */
TransactionDetail.prototype['fee'] = undefined;

/**
 * The transaction initiator.
 * @member {String} initiator
 */
TransactionDetail.prototype['initiator'] = undefined;

/**
 * @member {module:model/TransactionInitiatorType} initiator_type
 */
TransactionDetail.prototype['initiator_type'] = undefined;

/**
 * The number of confirmations this transaction has received.
 * @member {Number} confirmed_num
 */
TransactionDetail.prototype['confirmed_num'] = undefined;

/**
 * The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction.
 * @member {Number} confirming_threshold
 */
TransactionDetail.prototype['confirming_threshold'] = undefined;

/**
 * @member {module:model/TransactionBlockInfo} block_info
 */
TransactionDetail.prototype['block_info'] = undefined;

/**
 * The transaction nonce.
 * @member {Number} nonce
 */
TransactionDetail.prototype['nonce'] = undefined;

/**
 * The transaction hash.
 * @member {String} transaction_hash
 */
TransactionDetail.prototype['transaction_hash'] = undefined;

/**
 * @member {module:model/TransactionReplacement} replacement
 */
TransactionDetail.prototype['replacement'] = undefined;

/**
 * A custom transaction category for you to identify your transfers more easily.
 * @member {Array.<String>} category
 */
TransactionDetail.prototype['category'] = undefined;

/**
 * The description for your transaction.
 * @member {String} description
 */
TransactionDetail.prototype['description'] = undefined;

/**
 * Whether the transaction is a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).  - `true`: The transaction is a Loop transfer. - `false`: The transaction is not a Loop transfer. 
 * @member {Boolean} is_loop
 */
TransactionDetail.prototype['is_loop'] = undefined;

/**
 * The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_time
 */
TransactionDetail.prototype['created_time'] = undefined;

/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_time
 */
TransactionDetail.prototype['updated_time'] = undefined;

/**
 * @member {Array.<module:model/TransactionDetailAllOfTimeline>} timeline
 */
TransactionDetail.prototype['timeline'] = undefined;


// Implement Transaction interface:
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
 * For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source.
 * @member {String} wallet_id
 */
Transaction.prototype['wallet_id'] = undefined;
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
 * The reason why the transaction failed. This property only applies to approval failures and signature failures.
 * @member {String} failed_reason
 */
Transaction.prototype['failed_reason'] = undefined;
/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
Transaction.prototype['chain_id'] = undefined;
/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
Transaction.prototype['token_id'] = undefined;
/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT.
 * @member {String} asset_id
 */
Transaction.prototype['asset_id'] = undefined;
/**
 * @member {module:model/TransactionSource} source
 */
Transaction.prototype['source'] = undefined;
/**
 * @member {module:model/TransactionDestination} destination
 */
Transaction.prototype['destination'] = undefined;
/**
 * @member {module:model/TransactionResult} result
 */
Transaction.prototype['result'] = undefined;
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
 * @member {module:model/TransactionBlockInfo} block_info
 */
Transaction.prototype['block_info'] = undefined;
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




export default TransactionDetail;

