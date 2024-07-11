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
import ActivityStatus from './ActivityStatus';
import ActivityType from './ActivityType';
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The Activity model module.
 * @module model/Activity
 * @version 0.2.5
 */
class Activity {
    /**
     * Constructs a new <code>Activity</code>.
     * The staking activity.
     * @alias module:model/Activity
     * @param poolId {String} The id of the staking pool.
     * @param amount {String} The amount of the activity.
     * @param status {module:model/ActivityStatus} 
     */
    constructor(poolId, amount, status) { 
        
        Activity.initialize(this, poolId, amount, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, poolId, amount, status) { 
        obj['pool_id'] = poolId;
        obj['amount'] = amount;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Activity} obj Optional instance to populate.
     * @return {module:model/Activity} The populated <code>Activity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Activity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = ApiClient.convertToType(data['initiator'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ActivityType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = ApiClient.convertToType(data['pool_id'], 'String');
            }
            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('tx_ids')) {
                obj['tx_ids'] = ApiClient.convertToType(data['tx_ids'], ['String']);
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionTransferFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ActivityStatus.constructFromObject(data['status']);
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
     * Validates the JSON data with respect to <code>Activity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Activity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Activity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['initiator'] && !(typeof data['initiator'] === 'string' || data['initiator'] instanceof String)) {
            throw new Error("Expected the field `initiator` to be a primitive type in the JSON string but got " + data['initiator']);
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['pool_id'] && !(typeof data['pool_id'] === 'string' || data['pool_id'] instanceof String)) {
            throw new Error("Expected the field `pool_id` to be a primitive type in the JSON string but got " + data['pool_id']);
        }
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tx_ids'])) {
            throw new Error("Expected the field `tx_ids` to be an array in the JSON data but got " + data['tx_ids']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionTransferFee.validateJSON(data['fee']);
        }

        return true;
    }


}

Activity.RequiredProperties = ["pool_id", "amount", "status"];

/**
 * The unique id of the activity.
 * @member {String} id
 */
Activity.prototype['id'] = undefined;

/**
 * The initiator of the activity.
 * @member {String} initiator
 */
Activity.prototype['initiator'] = undefined;

/**
 * @member {module:model/ActivityType} type
 */
Activity.prototype['type'] = undefined;

/**
 * The id of the wallet to stake.
 * @member {String} wallet_id
 */
Activity.prototype['wallet_id'] = undefined;

/**
 * The staker wallet address.
 * @member {String} address
 */
Activity.prototype['address'] = undefined;

/**
 * The id of the staking pool.
 * @member {String} pool_id
 */
Activity.prototype['pool_id'] = undefined;

/**
 * The id of the related staking.
 * @member {String} staking_id
 */
Activity.prototype['staking_id'] = undefined;

/**
 * The amount of the activity.
 * @member {String} amount
 */
Activity.prototype['amount'] = undefined;

/**
 * The related txs of the activity.
 * @member {Array.<String>} tx_ids
 */
Activity.prototype['tx_ids'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
Activity.prototype['fee'] = undefined;

/**
 * @member {module:model/ActivityStatus} status
 */
Activity.prototype['status'] = undefined;

/**
 * The time when the activity was created.
 * @member {Number} created_time
 */
Activity.prototype['created_time'] = undefined;

/**
 * The time when the activity was last updated.
 * @member {Number} updated_time
 */
Activity.prototype['updated_time'] = undefined;






export default Activity;

