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
import Transaction from './Transaction';
import TransactionApprover from './TransactionApprover';
import TransactionBlockInfo from './TransactionBlockInfo';
import TransactionDestination from './TransactionDestination';
import TransactionFuelingInfo from './TransactionFuelingInfo';
import TransactionInitiatorType from './TransactionInitiatorType';
import TransactionRawTxInfo from './TransactionRawTxInfo';
import TransactionReplacement from './TransactionReplacement';
import TransactionRequestFee from './TransactionRequestFee';
import TransactionResult from './TransactionResult';
import TransactionSigner from './TransactionSigner';
import TransactionSource from './TransactionSource';
import TransactionStatus from './TransactionStatus';
import TransactionSubStatus from './TransactionSubStatus';
import TransactionTimeline from './TransactionTimeline';
import TransactionTokeApproval from './TransactionTokeApproval';
import TransactionType from './TransactionType';

/**
 * The TransactionDetails model module.
 * @module model/TransactionDetails
 */
class TransactionDetails {
    /**
     * Constructs a new <code>TransactionDetails</code>.
     * @alias module:model/TransactionDetails
     * @implements module:model/Transaction
     * @param transaction_id {String} The transaction ID.
     * @param wallet_id {String} For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source.
     * @param status {module:model/TransactionStatus} 
     * @param source {module:model/TransactionSource} 
     * @param destination {module:model/TransactionDestination} 
     * @param initiator_type {module:model/TransactionInitiatorType} 
     * @param created_timestamp {Number} The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
     * @param updated_timestamp {Number} The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
     */
    constructor(transaction_id, wallet_id, status, source, destination, initiator_type, created_timestamp, updated_timestamp) { 
        Transaction.initialize(this, transaction_id, wallet_id, status, source, destination, initiator_type, created_timestamp, updated_timestamp);
        TransactionDetails.initialize(this, transaction_id, wallet_id, status, source, destination, initiator_type, created_timestamp, updated_timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transaction_id, wallet_id, status, source, destination, initiator_type, created_timestamp, updated_timestamp) { 
        obj['transaction_id'] = transaction_id;
        obj['wallet_id'] = wallet_id;
        obj['status'] = status;
        obj['source'] = source;
        obj['destination'] = destination;
        obj['initiator_type'] = initiator_type;
        obj['created_timestamp'] = created_timestamp;
        obj['updated_timestamp'] = updated_timestamp;
    }

    /**
     * Constructs a <code>TransactionDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDetails} obj Optional instance to populate.
     * @return {module:model/TransactionDetails} The populated <code>TransactionDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDetails();
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
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
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
            if (data.hasOwnProperty('transaction_hash')) {
                obj['transaction_hash'] = ApiClient.convertToType(data['transaction_hash'], 'String');
            }
            if (data.hasOwnProperty('block_info')) {
                obj['block_info'] = TransactionBlockInfo.constructFromObject(data['block_info']);
            }
            if (data.hasOwnProperty('raw_tx_info')) {
                obj['raw_tx_info'] = TransactionRawTxInfo.constructFromObject(data['raw_tx_info']);
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
            if (data.hasOwnProperty('cobo_category')) {
                obj['cobo_category'] = ApiClient.convertToType(data['cobo_category'], ['String']);
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], ['String']);
            }
            if (data.hasOwnProperty('fueling_info')) {
                obj['fueling_info'] = TransactionFuelingInfo.constructFromObject(data['fueling_info']);
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('approvers')) {
                obj['approvers'] = ApiClient.convertToType(data['approvers'], [TransactionApprover]);
            }
            if (data.hasOwnProperty('signers')) {
                obj['signers'] = ApiClient.convertToType(data['signers'], [TransactionSigner]);
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('replaced_by')) {
                obj['replaced_by'] = ApiClient.convertToType(data['replaced_by'], 'String');
            }
            if (data.hasOwnProperty('fueled_by')) {
                obj['fueled_by'] = ApiClient.convertToType(data['fueled_by'], 'String');
            }
            if (data.hasOwnProperty('token_approval')) {
                obj['token_approval'] = TransactionTokeApproval.constructFromObject(data['token_approval']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('algorithm')) {
                obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = ApiClient.convertToType(data['timeline'], [TransactionTimeline]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDetails.RequiredProperties) {
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
          if (!!TransactionSource.validateJSON) {
            TransactionSource.validateJSON(data['source']);
          }
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          if (!!TransactionDestination.validateJSON) {
            TransactionDestination.validateJSON(data['destination']);
          }
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          if (!!TransactionResult.validateJSON) {
            TransactionResult.validateJSON(data['result']);
          }
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          if (!!TransactionRequestFee.validateJSON) {
            TransactionRequestFee.validateJSON(data['fee']);
          }
        }
        // ensure the json data is a string
        if (data['initiator'] && !(typeof data['initiator'] === 'string' || data['initiator'] instanceof String)) {
            throw new Error("Expected the field `initiator` to be a primitive type in the JSON string but got " + data['initiator']);
        }
        // ensure the json data is a string
        if (data['transaction_hash'] && !(typeof data['transaction_hash'] === 'string' || data['transaction_hash'] instanceof String)) {
            throw new Error("Expected the field `transaction_hash` to be a primitive type in the JSON string but got " + data['transaction_hash']);
        }
        // validate the optional field `block_info`
        if (data['block_info']) { // data not null
          if (!!TransactionBlockInfo.validateJSON) {
            TransactionBlockInfo.validateJSON(data['block_info']);
          }
        }
        // validate the optional field `raw_tx_info`
        if (data['raw_tx_info']) { // data not null
          if (!!TransactionRawTxInfo.validateJSON) {
            TransactionRawTxInfo.validateJSON(data['raw_tx_info']);
          }
        }
        // validate the optional field `replacement`
        if (data['replacement']) { // data not null
          if (!!TransactionReplacement.validateJSON) {
            TransactionReplacement.validateJSON(data['replacement']);
          }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category'])) {
            throw new Error("Expected the field `category` to be an array in the JSON data but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cobo_category'])) {
            throw new Error("Expected the field `cobo_category` to be an array in the JSON data but got " + data['cobo_category']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extra'])) {
            throw new Error("Expected the field `extra` to be an array in the JSON data but got " + data['extra']);
        }
        // validate the optional field `fueling_info`
        if (data['fueling_info']) { // data not null
          if (!!TransactionFuelingInfo.validateJSON) {
            TransactionFuelingInfo.validateJSON(data['fueling_info']);
          }
        }
        if (data['approvers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['approvers'])) {
                throw new Error("Expected the field `approvers` to be an array in the JSON data but got " + data['approvers']);
            }
            // validate the optional field `approvers` (array)
            for (const item of data['approvers']) {
                TransactionApprover.validateJSON(item);
            };
        }
        if (data['signers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['signers'])) {
                throw new Error("Expected the field `signers` to be an array in the JSON data but got " + data['signers']);
            }
            // validate the optional field `signers` (array)
            for (const item of data['signers']) {
                TransactionSigner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['replaced_by'] && !(typeof data['replaced_by'] === 'string' || data['replaced_by'] instanceof String)) {
            throw new Error("Expected the field `replaced_by` to be a primitive type in the JSON string but got " + data['replaced_by']);
        }
        // ensure the json data is a string
        if (data['fueled_by'] && !(typeof data['fueled_by'] === 'string' || data['fueled_by'] instanceof String)) {
            throw new Error("Expected the field `fueled_by` to be a primitive type in the JSON string but got " + data['fueled_by']);
        }
        // validate the optional field `token_approval`
        if (data['token_approval']) { // data not null
          if (!!TransactionTokeApproval.validateJSON) {
            TransactionTokeApproval.validateJSON(data['token_approval']);
          }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['algorithm'] && !(typeof data['algorithm'] === 'string' || data['algorithm'] instanceof String)) {
            throw new Error("Expected the field `algorithm` to be a primitive type in the JSON string but got " + data['algorithm']);
        }
        if (data['timeline']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['timeline'])) {
                throw new Error("Expected the field `timeline` to be an array in the JSON data but got " + data['timeline']);
            }
            // validate the optional field `timeline` (array)
            for (const item of data['timeline']) {
                TransactionTimeline.validateJSON(item);
            };
        }

        return true;
    }


}

TransactionDetails.RequiredProperties = ["transaction_id", "wallet_id", "status", "source", "destination", "initiator_type", "created_timestamp", "updated_timestamp"];

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
TransactionDetails.prototype['transaction_id'] = undefined;

/**
 * The Cobo ID, which can be used to track a transaction.
 * @member {String} cobo_id
 */
TransactionDetails.prototype['cobo_id'] = undefined;

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
TransactionDetails.prototype['request_id'] = undefined;

/**
 * For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source.
 * @member {String} wallet_id
 */
TransactionDetails.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/TransactionType} type
 */
TransactionDetails.prototype['type'] = undefined;

/**
 * @member {module:model/TransactionStatus} status
 */
TransactionDetails.prototype['status'] = undefined;

/**
 * @member {module:model/TransactionSubStatus} sub_status
 */
TransactionDetails.prototype['sub_status'] = undefined;

/**
 * (This property is applicable to approval failures and signature failures only) The reason why the transaction failed.
 * @member {String} failed_reason
 */
TransactionDetails.prototype['failed_reason'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
TransactionDetails.prototype['chain_id'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
TransactionDetails.prototype['token_id'] = undefined;

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account.
 * @member {String} asset_id
 */
TransactionDetails.prototype['asset_id'] = undefined;

/**
 * @member {module:model/TransactionSource} source
 */
TransactionDetails.prototype['source'] = undefined;

/**
 * @member {module:model/TransactionDestination} destination
 */
TransactionDetails.prototype['destination'] = undefined;

/**
 * @member {module:model/TransactionResult} result
 */
TransactionDetails.prototype['result'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
TransactionDetails.prototype['fee'] = undefined;

/**
 * Transaction initiator
 * @member {String} initiator
 */
TransactionDetails.prototype['initiator'] = undefined;

/**
 * @member {module:model/TransactionInitiatorType} initiator_type
 */
TransactionDetails.prototype['initiator_type'] = undefined;

/**
 * Transaction confirmed number
 * @member {Number} confirmed_num
 */
TransactionDetails.prototype['confirmed_num'] = undefined;

/**
 * Number of confirmations required for a transaction, such as 15 for ETH chain.
 * @member {Number} confirming_threshold
 */
TransactionDetails.prototype['confirming_threshold'] = undefined;

/**
 * The transaction hash.
 * @member {String} transaction_hash
 */
TransactionDetails.prototype['transaction_hash'] = undefined;

/**
 * @member {module:model/TransactionBlockInfo} block_info
 */
TransactionDetails.prototype['block_info'] = undefined;

/**
 * @member {module:model/TransactionRawTxInfo} raw_tx_info
 */
TransactionDetails.prototype['raw_tx_info'] = undefined;

/**
 * @member {module:model/TransactionReplacement} replacement
 */
TransactionDetails.prototype['replacement'] = undefined;

/**
 * A custom transaction category for you to identify your transfers more easily.
 * @member {Array.<String>} category
 */
TransactionDetails.prototype['category'] = undefined;

/**
 * The description for your transaction.
 * @member {String} description
 */
TransactionDetails.prototype['description'] = undefined;

/**
 * Whether the transaction was executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer. - `true`: The transaction was executed as a Cobo Loop transfer. - `false`: The transaction was not executed as a Cobo Loop transfer. 
 * @member {Boolean} is_loop
 */
TransactionDetails.prototype['is_loop'] = undefined;

/**
 * The transaction category defined by Cobo. Possible values include:  - `AutoSweep`: An auto-sweep transaction. - `AutoFueling`: A transaction where Fee Station pays transaction fees to an address within your wallet. - `AutoFuelingRefund`: A refund for an auto-fueling transaction. - `SafeTxMessage`: A message signing transaction to authorize a Smart Contract Wallet (Safe\\{Wallet\\}) transaction. - `BillPayment`: A transaction to pay Cobo bills through Fee Station. - `BillRefund`: A refund for a previously made bill payment. - `CommissionFeeCharge`: A transaction to charge commission fees via Fee Station. - `CommissionFeeRefund`: A refund of previously charged commission fees. 
 * @member {Array.<String>} cobo_category
 */
TransactionDetails.prototype['cobo_category'] = undefined;

/**
 * The transaction extra information.
 * @member {Array.<String>} extra
 */
TransactionDetails.prototype['extra'] = undefined;

/**
 * @member {module:model/TransactionFuelingInfo} fueling_info
 */
TransactionDetails.prototype['fueling_info'] = undefined;

/**
 * The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
TransactionDetails.prototype['created_timestamp'] = undefined;

/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
TransactionDetails.prototype['updated_timestamp'] = undefined;

/**
 * @member {Array.<module:model/TransactionApprover>} approvers
 */
TransactionDetails.prototype['approvers'] = undefined;

/**
 * @member {Array.<module:model/TransactionSigner>} signers
 */
TransactionDetails.prototype['signers'] = undefined;

/**
 * Transaction nonce
 * @member {Number} nonce
 */
TransactionDetails.prototype['nonce'] = undefined;

/**
 * Replace by transaction hash
 * @member {String} replaced_by
 */
TransactionDetails.prototype['replaced_by'] = undefined;

/**
 * Fueled by address
 * @member {String} fueled_by
 */
TransactionDetails.prototype['fueled_by'] = undefined;

/**
 * @member {module:model/TransactionTokeApproval} token_approval
 */
TransactionDetails.prototype['token_approval'] = undefined;

/**
 * Transaction raw message
 * @member {String} message
 */
TransactionDetails.prototype['message'] = undefined;

/**
 * Transaction message signing algorithm
 * @member {String} algorithm
 */
TransactionDetails.prototype['algorithm'] = undefined;

/**
 * @member {Array.<module:model/TransactionTimeline>} timeline
 */
TransactionDetails.prototype['timeline'] = undefined;


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
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
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
 * (This property is applicable to approval failures and signature failures only) The reason why the transaction failed.
 * @member {String} failed_reason
 */
Transaction.prototype['failed_reason'] = undefined;
/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
Transaction.prototype['chain_id'] = undefined;
/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
Transaction.prototype['token_id'] = undefined;
/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account.
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
 * The transaction hash.
 * @member {String} transaction_hash
 */
Transaction.prototype['transaction_hash'] = undefined;
/**
 * @member {module:model/TransactionBlockInfo} block_info
 */
Transaction.prototype['block_info'] = undefined;
/**
 * @member {module:model/TransactionRawTxInfo} raw_tx_info
 */
Transaction.prototype['raw_tx_info'] = undefined;
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
 * Whether the transaction was executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer. - `true`: The transaction was executed as a Cobo Loop transfer. - `false`: The transaction was not executed as a Cobo Loop transfer. 
 * @member {Boolean} is_loop
 */
Transaction.prototype['is_loop'] = undefined;
/**
 * The transaction category defined by Cobo. Possible values include:  - `AutoSweep`: An auto-sweep transaction. - `AutoFueling`: A transaction where Fee Station pays transaction fees to an address within your wallet. - `AutoFuelingRefund`: A refund for an auto-fueling transaction. - `SafeTxMessage`: A message signing transaction to authorize a Smart Contract Wallet (Safe\\{Wallet\\}) transaction. - `BillPayment`: A transaction to pay Cobo bills through Fee Station. - `BillRefund`: A refund for a previously made bill payment. - `CommissionFeeCharge`: A transaction to charge commission fees via Fee Station. - `CommissionFeeRefund`: A refund of previously charged commission fees. 
 * @member {Array.<String>} cobo_category
 */
Transaction.prototype['cobo_category'] = undefined;
/**
 * The transaction extra information.
 * @member {Array.<String>} extra
 */
Transaction.prototype['extra'] = undefined;
/**
 * @member {module:model/TransactionFuelingInfo} fueling_info
 */
Transaction.prototype['fueling_info'] = undefined;
/**
 * The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
Transaction.prototype['created_timestamp'] = undefined;
/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
Transaction.prototype['updated_timestamp'] = undefined;




export default TransactionDetails;

