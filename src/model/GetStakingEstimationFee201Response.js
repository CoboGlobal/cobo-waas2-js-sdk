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
import BabylonStakeEstimatedFee from './BabylonStakeEstimatedFee';
import EstimatedFee from './EstimatedFee';
import EthStakeEstimatedFee from './EthStakeEstimatedFee';
import FeeType from './FeeType';
import StakingPoolType from './StakingPoolType';

/**
 * The GetStakingEstimationFee201Response model module.
 * @module model/GetStakingEstimationFee201Response
 */
class GetStakingEstimationFee201Response {
    /**
     * Constructs a new <code>GetStakingEstimationFee201Response</code>.
     * @alias module:model/GetStakingEstimationFee201Response
     * @param {(module:model/BabylonStakeEstimatedFee|module:model/EthStakeEstimatedFee)} instance The actual instance to initialize GetStakingEstimationFee201Response.
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
                    this.actualInstance = BabylonStakeEstimatedFee.constructFromObject(instance);
                    match++;
                    break;
                case "ETHBeacon":
                    this.actualInstance = EthStakeEstimatedFee.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof EthStakeEstimatedFee) {
                this.actualInstance = instance;
            } else if(!!EthStakeEstimatedFee.validateJSON && EthStakeEstimatedFee.validateJSON(instance)){
                // plain JS object
                // create EthStakeEstimatedFee from JS object
                this.actualInstance = EthStakeEstimatedFee.constructFromObject(instance);
            } else {
                if(EthStakeEstimatedFee.constructFromObject(instance)) {
                    if (!!EthStakeEstimatedFee.constructFromObject(instance).toJSON) {
                        if (EthStakeEstimatedFee.constructFromObject(instance).toJSON()) {
                            this.actualInstance = EthStakeEstimatedFee.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = EthStakeEstimatedFee.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EthStakeEstimatedFee
            errorMessages.push("Failed to construct EthStakeEstimatedFee: " + err)
        }

        try {
            if (instance instanceof BabylonStakeEstimatedFee) {
                this.actualInstance = instance;
            } else if(!!BabylonStakeEstimatedFee.validateJSON && BabylonStakeEstimatedFee.validateJSON(instance)){
                // plain JS object
                // create BabylonStakeEstimatedFee from JS object
                this.actualInstance = BabylonStakeEstimatedFee.constructFromObject(instance);
            } else {
                if(BabylonStakeEstimatedFee.constructFromObject(instance)) {
                    if (!!BabylonStakeEstimatedFee.constructFromObject(instance).toJSON) {
                        if (BabylonStakeEstimatedFee.constructFromObject(instance).toJSON()) {
                            this.actualInstance = BabylonStakeEstimatedFee.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = BabylonStakeEstimatedFee.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BabylonStakeEstimatedFee
            errorMessages.push("Failed to construct BabylonStakeEstimatedFee: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `GetStakingEstimationFee201Response` with oneOf schemas BabylonStakeEstimatedFee, EthStakeEstimatedFee. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `GetStakingEstimationFee201Response` with oneOf schemas BabylonStakeEstimatedFee, EthStakeEstimatedFee. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>GetStakingEstimationFee201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStakingEstimationFee201Response} obj Optional instance to populate.
     * @return {module:model/GetStakingEstimationFee201Response} The populated <code>GetStakingEstimationFee201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        return new GetStakingEstimationFee201Response(data);
    }

    /**
     * Gets the actual instance, which can be <code>BabylonStakeEstimatedFee</code>, <code>EthStakeEstimatedFee</code>.
     * @return {(module:model/BabylonStakeEstimatedFee|module:model/EthStakeEstimatedFee)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BabylonStakeEstimatedFee</code>, <code>EthStakeEstimatedFee</code>.
     * @param {(module:model/BabylonStakeEstimatedFee|module:model/EthStakeEstimatedFee)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = GetStakingEstimationFee201Response.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of GetStakingEstimationFee201Response from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/GetStakingEstimationFee201Response} An instance of GetStakingEstimationFee201Response.
     */
    static fromJSON = function(json_string){
        return GetStakingEstimationFee201Response.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/StakingPoolType} pool_type
 */
GetStakingEstimationFee201Response.prototype['pool_type'] = undefined;

/**
 * @member {module:model/EstimatedFee} fee
 */
GetStakingEstimationFee201Response.prototype['fee'] = undefined;

/**
 * A list of public keys associated with the Ethereum validators for this staking operation.
 * @member {Array.<String>} validator_pubkeys
 */
GetStakingEstimationFee201Response.prototype['validator_pubkeys'] = undefined;

/**
 * The P2WSH address generated for this staking operation (only applicable if the estimated fee is for CORE staking).
 * @member {String} core_btc_staking_address
 */
GetStakingEstimationFee201Response.prototype['core_btc_staking_address'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
GetStakingEstimationFee201Response.prototype['fee_type'] = undefined;

/**
 * The amount of the estimated fee.
 * @member {String} fee_amount
 */
GetStakingEstimationFee201Response.prototype['fee_amount'] = undefined;

/**
 * The token ID of the staking fee.
 * @member {String} token_id
 */
GetStakingEstimationFee201Response.prototype['token_id'] = undefined;


GetStakingEstimationFee201Response.OneOf = ["BabylonStakeEstimatedFee", "EthStakeEstimatedFee"];

export default GetStakingEstimationFee201Response;

