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
import BaseStakeExtra from './BaseStakeExtra';
import StakingPoolType from './StakingPoolType';

/**
 * The BabylonStakeExtra model module.
 * @module model/BabylonStakeExtra
 * @version 0.4.1
 */
class BabylonStakeExtra {
    /**
     * Constructs a new <code>BabylonStakeExtra</code>.
     * @alias module:model/BabylonStakeExtra
     * @implements module:model/BaseStakeExtra
     * @param poolType {module:model/StakingPoolType} 
     * @param finalityProviderPublicKey {String} The public key of finality provider.
     * @param stakeBlockTime {Number} The stake block time.
     */
    constructor(poolType, finalityProviderPublicKey, stakeBlockTime) { 
        BaseStakeExtra.initialize(this, poolType);
        BabylonStakeExtra.initialize(this, poolType, finalityProviderPublicKey, stakeBlockTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, poolType, finalityProviderPublicKey, stakeBlockTime) { 
        obj['pool_type'] = poolType;
        obj['finality_provider_public_key'] = finalityProviderPublicKey;
        obj['stake_block_time'] = stakeBlockTime;
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

        return true;
    }


}

BabylonStakeExtra.RequiredProperties = ["pool_type", "finality_provider_public_key", "stake_block_time"];

/**
 * @member {module:model/StakingPoolType} pool_type
 */
BabylonStakeExtra.prototype['pool_type'] = undefined;

/**
 * The public key of finality provider.
 * @member {String} finality_provider_public_key
 */
BabylonStakeExtra.prototype['finality_provider_public_key'] = undefined;

/**
 * The stake block time.
 * @member {Number} stake_block_time
 */
BabylonStakeExtra.prototype['stake_block_time'] = undefined;


// Implement BaseStakeExtra interface:
/**
 * @member {module:model/StakingPoolType} pool_type
 */
BaseStakeExtra.prototype['pool_type'] = undefined;




export default BabylonStakeExtra;

