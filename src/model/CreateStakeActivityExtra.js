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
import BabylonStakeExtra from './BabylonStakeExtra';
import StakingPoolType from './StakingPoolType';

/**
 * The CreateStakeActivityExtra model module.
 * @module model/CreateStakeActivityExtra
 */
class CreateStakeActivityExtra {
    /**
     * Constructs a new <code>CreateStakeActivityExtra</code>.
     * @alias module:model/CreateStakeActivityExtra
     * @param {(module:model/BabylonStakeExtra)} instance The actual instance to initialize CreateStakeActivityExtra.
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
                    this.actualInstance = BabylonStakeExtra.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof BabylonStakeExtra) {
                this.actualInstance = instance;
            } else if(!!BabylonStakeExtra.validateJSON && BabylonStakeExtra.validateJSON(instance)){
                // plain JS object
                // create BabylonStakeExtra from JS object
                this.actualInstance = BabylonStakeExtra.constructFromObject(instance);
            } else {
                if(BabylonStakeExtra.constructFromObject(instance)) {
                    if (!!BabylonStakeExtra.constructFromObject(instance).toJSON) {
                        if (BabylonStakeExtra.constructFromObject(instance).toJSON()) {
                            this.actualInstance = BabylonStakeExtra.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = BabylonStakeExtra.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BabylonStakeExtra
            errorMessages.push("Failed to construct BabylonStakeExtra: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `CreateStakeActivityExtra` with oneOf schemas BabylonStakeExtra. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `CreateStakeActivityExtra` with oneOf schemas BabylonStakeExtra. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CreateStakeActivityExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateStakeActivityExtra} obj Optional instance to populate.
     * @return {module:model/CreateStakeActivityExtra} The populated <code>CreateStakeActivityExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CreateStakeActivityExtra(data);
    }

    /**
     * Gets the actual instance, which can be <code>BabylonStakeExtra</code>.
     * @return {(module:model/BabylonStakeExtra)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BabylonStakeExtra</code>.
     * @param {(module:model/BabylonStakeExtra)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CreateStakeActivityExtra.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CreateStakeActivityExtra from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CreateStakeActivityExtra} An instance of CreateStakeActivityExtra.
     */
    static fromJSON = function(json_string){
        return CreateStakeActivityExtra.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/StakingPoolType} pool_type
 */
CreateStakeActivityExtra.prototype['pool_type'] = undefined;

/**
 * The public key of the finality provider.
 * @member {String} finality_provider_public_key
 */
CreateStakeActivityExtra.prototype['finality_provider_public_key'] = undefined;

/**
 * The number of blocks that need to be processed before the locked tokens are unlocked and become accessible.
 * @member {Number} stake_block_time
 */
CreateStakeActivityExtra.prototype['stake_block_time'] = undefined;

/**
 * Whether to automatically broadcast the transaction. The default value is `true`.  - `true`: Automatically broadcast the transaction. - `false`: The transaction will not be submitted to the blockchain automatically. You can call `Broadcast transactions` to broadcast the transaction to the blockchain, or retrieve the signed raw transaction data `raw_tx` by calling [Get transaction information](/v2/api-references/transactions/get-transaction-information) and broadcast it yourself. 
 * @member {Boolean} auto_broadcast
 */
CreateStakeActivityExtra.prototype['auto_broadcast'] = undefined;


CreateStakeActivityExtra.OneOf = ["BabylonStakeExtra"];

export default CreateStakeActivityExtra;

