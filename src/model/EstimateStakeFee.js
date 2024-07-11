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
import ActivityType from './ActivityType';
import BaseEstimateStakingFee from './BaseEstimateStakingFee';
import CreateStakeActivity from './CreateStakeActivity';
import CreateStakeActivityExtra from './CreateStakeActivityExtra';
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The EstimateStakeFee model module.
 * @module model/EstimateStakeFee
 * @version 0.1.0
 */
class EstimateStakeFee {
    /**
     * Constructs a new <code>EstimateStakeFee</code>.
     * @alias module:model/EstimateStakeFee
     * @implements module:model/BaseEstimateStakingFee
     * @implements module:model/CreateStakeActivity
     * @param activityType {module:model/ActivityType} 
     * @param walletId {String} The id of the wallet to stake.
     * @param address {String} The staker wallet address.
     * @param poolId {String} The id of the staking pool
     * @param amount {String} The amount to stake
     * @param fee {module:model/TransactionTransferFee} 
     * @param extra {module:model/CreateStakeActivityExtra} 
     */
    constructor(activityType, walletId, address, poolId, amount, fee, extra) { 
        BaseEstimateStakingFee.initialize(this, activityType);CreateStakeActivity.initialize(this, walletId, address, poolId, amount, fee, extra);
        EstimateStakeFee.initialize(this, activityType, walletId, address, poolId, amount, fee, extra);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activityType, walletId, address, poolId, amount, fee, extra) { 
        obj['activity_type'] = activityType;
        obj['wallet_id'] = walletId;
        obj['address'] = address;
        obj['pool_id'] = poolId;
        obj['amount'] = amount;
        obj['fee'] = fee;
        obj['extra'] = extra;
    }

    /**
     * Constructs a <code>EstimateStakeFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateStakeFee} obj Optional instance to populate.
     * @return {module:model/EstimateStakeFee} The populated <code>EstimateStakeFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateStakeFee();
            BaseEstimateStakingFee.constructFromObject(data, obj);
            CreateStakeActivity.constructFromObject(data, obj);

            if (data.hasOwnProperty('activity_type')) {
                obj['activity_type'] = ActivityType.constructFromObject(data['activity_type']);
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
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionTransferFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = CreateStakeActivityExtra.constructFromObject(data['extra']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimateStakeFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateStakeFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimateStakeFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionTransferFee.validateJSON(data['fee']);
        }
        // validate the optional field `extra`
        if (data['extra']) { // data not null
          CreateStakeActivityExtra.validateJSON(data['extra']);
        }

        return true;
    }


}

EstimateStakeFee.RequiredProperties = ["activity_type", "wallet_id", "address", "pool_id", "amount", "fee", "extra"];

/**
 * @member {module:model/ActivityType} activity_type
 */
EstimateStakeFee.prototype['activity_type'] = undefined;

/**
 * The id of the wallet to stake.
 * @member {String} wallet_id
 */
EstimateStakeFee.prototype['wallet_id'] = undefined;

/**
 * The staker wallet address.
 * @member {String} address
 */
EstimateStakeFee.prototype['address'] = undefined;

/**
 * The id of the staking pool
 * @member {String} pool_id
 */
EstimateStakeFee.prototype['pool_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
EstimateStakeFee.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
EstimateStakeFee.prototype['fee'] = undefined;

/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
EstimateStakeFee.prototype['extra'] = undefined;


// Implement BaseEstimateStakingFee interface:
/**
 * @member {module:model/ActivityType} activity_type
 */
BaseEstimateStakingFee.prototype['activity_type'] = undefined;
// Implement CreateStakeActivity interface:
/**
 * The id of the wallet to stake.
 * @member {String} wallet_id
 */
CreateStakeActivity.prototype['wallet_id'] = undefined;
/**
 * The staker wallet address.
 * @member {String} address
 */
CreateStakeActivity.prototype['address'] = undefined;
/**
 * The id of the staking pool
 * @member {String} pool_id
 */
CreateStakeActivity.prototype['pool_id'] = undefined;
/**
 * The amount to stake
 * @member {String} amount
 */
CreateStakeActivity.prototype['amount'] = undefined;
/**
 * @member {module:model/TransactionTransferFee} fee
 */
CreateStakeActivity.prototype['fee'] = undefined;
/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
CreateStakeActivity.prototype['extra'] = undefined;




export default EstimateStakeFee;
