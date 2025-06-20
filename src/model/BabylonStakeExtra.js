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
import BaseStakeExtra from './BaseStakeExtra';
import StakingPoolType from './StakingPoolType';
import StakingSource from './StakingSource';

/**
 * The BabylonStakeExtra model module.
 * @module model/BabylonStakeExtra
 */
class BabylonStakeExtra {
    /**
     * Constructs a new <code>BabylonStakeExtra</code>.
     * @alias module:model/BabylonStakeExtra
     * @implements module:model/BaseStakeExtra
     * @param pool_type {module:model/StakingPoolType} 
     * @param finality_provider_public_key {String} The public key of the finality provider.
     * @param stake_block_time {Number} The number of blocks that need to be processed before the locked tokens are unlocked and become accessible.
     */
    constructor(pool_type, finality_provider_public_key, stake_block_time) { 
        BaseStakeExtra.initialize(this, pool_type);
        BabylonStakeExtra.initialize(this, pool_type, finality_provider_public_key, stake_block_time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool_type, finality_provider_public_key, stake_block_time) { 
        obj['pool_type'] = pool_type;
        obj['finality_provider_public_key'] = finality_provider_public_key;
        obj['stake_block_time'] = stake_block_time;
    }

    /**
     * Constructs a <code>BabylonStakeExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BabylonStakeExtra} obj Optional instance to populate.
     * @return {module:model/BabylonStakeExtra} The populated <code>BabylonStakeExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BabylonStakeExtra();
            BaseStakeExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
            if (data.hasOwnProperty('finality_provider_public_key')) {
                obj['finality_provider_public_key'] = ApiClient.convertToType(data['finality_provider_public_key'], 'String');
            }
            if (data.hasOwnProperty('stake_block_time')) {
                obj['stake_block_time'] = ApiClient.convertToType(data['stake_block_time'], 'Number');
            }
            if (data.hasOwnProperty('auto_broadcast')) {
                obj['auto_broadcast'] = ApiClient.convertToType(data['auto_broadcast'], 'Boolean');
            }
            if (data.hasOwnProperty('babylon_address')) {
                obj['babylon_address'] = StakingSource.constructFromObject(data['babylon_address']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BabylonStakeExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BabylonStakeExtra</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BabylonStakeExtra.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['finality_provider_public_key'] && !(typeof data['finality_provider_public_key'] === 'string' || data['finality_provider_public_key'] instanceof String)) {
            throw new Error("Expected the field `finality_provider_public_key` to be a primitive type in the JSON string but got " + data['finality_provider_public_key']);
        }
        // validate the optional field `babylon_address`
        if (data['babylon_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['babylon_address']);
          }
        }

        return true;
    }


}

BabylonStakeExtra.RequiredProperties = ["pool_type", "finality_provider_public_key", "stake_block_time"];

/**
 * @member {module:model/StakingPoolType} pool_type
 */
BabylonStakeExtra.prototype['pool_type'] = undefined;

/**
 * The public key of the finality provider.
 * @member {String} finality_provider_public_key
 */
BabylonStakeExtra.prototype['finality_provider_public_key'] = undefined;

/**
 * The number of blocks that need to be processed before the locked tokens are unlocked and become accessible.
 * @member {Number} stake_block_time
 */
BabylonStakeExtra.prototype['stake_block_time'] = undefined;

/**
 * Whether to automatically broadcast the transaction. The default value is `true`.  - `true`: Automatically broadcast the transaction. - `false`: The transaction will not be submitted to the blockchain automatically. You can call [Broadcast signed transactions](https://www.cobo.com/developers/v2/api-references/transactions/broadcast-signed-transactions) to broadcast the transaction to the blockchain, or retrieve the signed raw transaction data `raw_tx` by calling [Get transaction information](https://www.cobo.com/developers/v2/api-references/transactions/get-transaction-information) and broadcast it yourself. 
 * @member {Boolean} auto_broadcast
 */
BabylonStakeExtra.prototype['auto_broadcast'] = undefined;

/**
 * @member {module:model/StakingSource} babylon_address
 */
BabylonStakeExtra.prototype['babylon_address'] = undefined;


// Implement BaseStakeExtra interface:
/**
 * @member {module:model/StakingPoolType} pool_type
 */
BaseStakeExtra.prototype['pool_type'] = undefined;




export default BabylonStakeExtra;

