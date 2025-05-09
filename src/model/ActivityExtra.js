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
import BabylonStakingActivityDetailExtra from './BabylonStakingActivityDetailExtra';
import CoreStakingActivityDetailExtra from './CoreStakingActivityDetailExtra';
import EthStakingActivityDetailExtra from './EthStakingActivityDetailExtra';
import StakingPoolType from './StakingPoolType';

/**
 * The ActivityExtra model module.
 * @module model/ActivityExtra
 */
class ActivityExtra {
    /**
     * Constructs a new <code>ActivityExtra</code>.
     * @alias module:model/ActivityExtra
     * @param {(module:model/BabylonStakingActivityDetailExtra|module:model/CoreStakingActivityDetailExtra|module:model/EthStakingActivityDetailExtra)} instance The actual instance to initialize ActivityExtra.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["pool_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Babylon":
                    this.actualInstance = BabylonStakingActivityDetailExtra.constructFromObject(instance);
                    match++;
                    break;
                case "CoreBTC":
                    this.actualInstance = CoreStakingActivityDetailExtra.constructFromObject(instance);
                    match++;
                    break;
                case "ETHBeacon":
                    this.actualInstance = EthStakingActivityDetailExtra.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof BabylonStakingActivityDetailExtra) {
                this.actualInstance = instance;
            } else if(!!BabylonStakingActivityDetailExtra.validateJSON && BabylonStakingActivityDetailExtra.validateJSON(instance)){
                // plain JS object
                // create BabylonStakingActivityDetailExtra from JS object
                this.actualInstance = BabylonStakingActivityDetailExtra.constructFromObject(instance);
            } else {
                if(BabylonStakingActivityDetailExtra.constructFromObject(instance)) {
                    if (!!BabylonStakingActivityDetailExtra.constructFromObject(instance).toJSON) {
                        if (BabylonStakingActivityDetailExtra.constructFromObject(instance).toJSON()) {
                            this.actualInstance = BabylonStakingActivityDetailExtra.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = BabylonStakingActivityDetailExtra.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BabylonStakingActivityDetailExtra
            errorMessages.push("Failed to construct BabylonStakingActivityDetailExtra: " + err)
        }

        try {
            if (instance instanceof EthStakingActivityDetailExtra) {
                this.actualInstance = instance;
            } else if(!!EthStakingActivityDetailExtra.validateJSON && EthStakingActivityDetailExtra.validateJSON(instance)){
                // plain JS object
                // create EthStakingActivityDetailExtra from JS object
                this.actualInstance = EthStakingActivityDetailExtra.constructFromObject(instance);
            } else {
                if(EthStakingActivityDetailExtra.constructFromObject(instance)) {
                    if (!!EthStakingActivityDetailExtra.constructFromObject(instance).toJSON) {
                        if (EthStakingActivityDetailExtra.constructFromObject(instance).toJSON()) {
                            this.actualInstance = EthStakingActivityDetailExtra.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = EthStakingActivityDetailExtra.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EthStakingActivityDetailExtra
            errorMessages.push("Failed to construct EthStakingActivityDetailExtra: " + err)
        }

        try {
            if (instance instanceof CoreStakingActivityDetailExtra) {
                this.actualInstance = instance;
            } else if(!!CoreStakingActivityDetailExtra.validateJSON && CoreStakingActivityDetailExtra.validateJSON(instance)){
                // plain JS object
                // create CoreStakingActivityDetailExtra from JS object
                this.actualInstance = CoreStakingActivityDetailExtra.constructFromObject(instance);
            } else {
                if(CoreStakingActivityDetailExtra.constructFromObject(instance)) {
                    if (!!CoreStakingActivityDetailExtra.constructFromObject(instance).toJSON) {
                        if (CoreStakingActivityDetailExtra.constructFromObject(instance).toJSON()) {
                            this.actualInstance = CoreStakingActivityDetailExtra.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = CoreStakingActivityDetailExtra.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CoreStakingActivityDetailExtra
            errorMessages.push("Failed to construct CoreStakingActivityDetailExtra: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `ActivityExtra` with oneOf schemas BabylonStakingActivityDetailExtra, CoreStakingActivityDetailExtra, EthStakingActivityDetailExtra. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `ActivityExtra` with oneOf schemas BabylonStakingActivityDetailExtra, CoreStakingActivityDetailExtra, EthStakingActivityDetailExtra. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ActivityExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityExtra} obj Optional instance to populate.
     * @return {module:model/ActivityExtra} The populated <code>ActivityExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ActivityExtra(data);
    }

    /**
     * Gets the actual instance, which can be <code>BabylonStakingActivityDetailExtra</code>, <code>CoreStakingActivityDetailExtra</code>, <code>EthStakingActivityDetailExtra</code>.
     * @return {(module:model/BabylonStakingActivityDetailExtra|module:model/CoreStakingActivityDetailExtra|module:model/EthStakingActivityDetailExtra)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BabylonStakingActivityDetailExtra</code>, <code>CoreStakingActivityDetailExtra</code>, <code>EthStakingActivityDetailExtra</code>.
     * @param {(module:model/BabylonStakingActivityDetailExtra|module:model/CoreStakingActivityDetailExtra|module:model/EthStakingActivityDetailExtra)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ActivityExtra.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ActivityExtra from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ActivityExtra} An instance of ActivityExtra.
     */
    static fromJSON = function(json_string){
        return ActivityExtra.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/StakingPoolType} pool_type
 */
ActivityExtra.prototype['pool_type'] = undefined;

/**
 * The public key of the finality provider.
 * @member {String} finality_provider_public_key
 */
ActivityExtra.prototype['finality_provider_public_key'] = undefined;

/**
 * The number of blocks that need to be processed before the locked tokens are unlocked and become accessible.
 * @member {Number} stake_block_time
 */
ActivityExtra.prototype['stake_block_time'] = undefined;

/**
 * Whether to automatically broadcast the transaction.  - `true`: Automatically broadcast the transaction. - `false`: The transaction will not be submitted to the blockchain automatically. You can call [Broadcast signed transactions](https://www.cobo.com/developers/v2/api-references/transactions/broadcast-signed-transactions) to broadcast the transaction to the blockchain, or retrieve the signed raw transaction data `raw_tx` by calling [Get transaction information](https://www.cobo.com/developers/v2/api-references/transactions/get-transaction-information) and broadcast it yourself. 
 * @member {Boolean} auto_broadcast
 */
ActivityExtra.prototype['auto_broadcast'] = undefined;

/**
 * The name of the provider.
 * @member {String} provider_name
 */
ActivityExtra.prototype['provider_name'] = undefined;

/**
 * A list of public keys associated with the Ethereum validators for this unstaking operation.
 * @member {Array.<String>} validator_pubkeys
 */
ActivityExtra.prototype['validator_pubkeys'] = undefined;

/**
 * The Unix timestamp (in seconds) when the staking position will be unlocked and available for withdrawal.
 * @member {Number} timelock
 */
ActivityExtra.prototype['timelock'] = undefined;

/**
 * The change address on the Bitcoin chain. If not provided, the source wallet's address will be used as the change address.
 * @member {String} change_address
 */
ActivityExtra.prototype['change_address'] = undefined;

/**
 * The validator's EVM address.
 * @member {String} validator_address
 */
ActivityExtra.prototype['validator_address'] = undefined;

/**
 * The EVM address to receive staking rewards.
 * @member {String} reward_address
 */
ActivityExtra.prototype['reward_address'] = undefined;


ActivityExtra.OneOf = ["BabylonStakingActivityDetailExtra", "CoreStakingActivityDetailExtra", "EthStakingActivityDetailExtra"];

export default ActivityExtra;

