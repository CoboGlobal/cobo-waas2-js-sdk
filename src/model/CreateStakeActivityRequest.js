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
import ActivityInitiator from './ActivityInitiator';
import CreateStakeActivity from './CreateStakeActivity';
import CreateStakeActivityExtra from './CreateStakeActivityExtra';
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The CreateStakeActivityRequest model module.
 * @module model/CreateStakeActivityRequest
 * @version 0.1.0
 */
class CreateStakeActivityRequest {
    /**
     * Constructs a new <code>CreateStakeActivityRequest</code>.
     * @alias module:model/CreateStakeActivityRequest
     * @implements module:model/CreateStakeActivity
     * @implements module:model/ActivityInitiator
     * @param walletId {String} The id of the wallet to stake.
     * @param address {String} The staker wallet address.
     * @param poolId {String} The id of the staking pool
     * @param amount {String} The amount to stake
     * @param fee {module:model/TransactionTransferFee} 
     * @param extra {module:model/CreateStakeActivityExtra} 
     */
    constructor(walletId, address, poolId, amount, fee, extra) { 
        CreateStakeActivity.initialize(this, walletId, address, poolId, amount, fee, extra);ActivityInitiator.initialize(this);
        CreateStakeActivityRequest.initialize(this, walletId, address, poolId, amount, fee, extra);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletId, address, poolId, amount, fee, extra) { 
        obj['wallet_id'] = walletId;
        obj['address'] = address;
        obj['pool_id'] = poolId;
        obj['amount'] = amount;
        obj['fee'] = fee;
        obj['extra'] = extra;
    }

    /**
     * Constructs a <code>CreateStakeActivityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateStakeActivityRequest} obj Optional instance to populate.
     * @return {module:model/CreateStakeActivityRequest} The populated <code>CreateStakeActivityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateStakeActivityRequest();
            CreateStakeActivity.constructFromObject(data, obj);
            ActivityInitiator.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = ApiClient.convertToType(data['initiator'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateStakeActivityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateStakeActivityRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateStakeActivityRequest.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['initiator'] && !(typeof data['initiator'] === 'string' || data['initiator'] instanceof String)) {
            throw new Error("Expected the field `initiator` to be a primitive type in the JSON string but got " + data['initiator']);
        }

        return true;
    }


}

CreateStakeActivityRequest.RequiredProperties = ["wallet_id", "address", "pool_id", "amount", "fee", "extra"];

/**
 * The id of the wallet to stake.
 * @member {String} wallet_id
 */
CreateStakeActivityRequest.prototype['wallet_id'] = undefined;

/**
 * The staker wallet address.
 * @member {String} address
 */
CreateStakeActivityRequest.prototype['address'] = undefined;

/**
 * The id of the staking pool
 * @member {String} pool_id
 */
CreateStakeActivityRequest.prototype['pool_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
CreateStakeActivityRequest.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
CreateStakeActivityRequest.prototype['fee'] = undefined;

/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
CreateStakeActivityRequest.prototype['extra'] = undefined;

/**
 * The initiator of the staking activity.
 * @member {String} initiator
 */
CreateStakeActivityRequest.prototype['initiator'] = undefined;


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
// Implement ActivityInitiator interface:
/**
 * The initiator of the staking activity.
 * @member {String} initiator
 */
ActivityInitiator.prototype['initiator'] = undefined;




export default CreateStakeActivityRequest;

