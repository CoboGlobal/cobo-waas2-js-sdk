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
import CreateStakeActivityExtra from './CreateStakeActivityExtra';
import EstimateStakeFee from './EstimateStakeFee';
import EstimateUnstakeFee from './EstimateUnstakeFee';
import EstimateWithdrawFee from './EstimateWithdrawFee';
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The GetStakingEstimationFeeRequest model module.
 * @module model/GetStakingEstimationFeeRequest
 * @version 0.2.5
 */
class GetStakingEstimationFeeRequest {
    /**
     * Constructs a new <code>GetStakingEstimationFeeRequest</code>.
     * @alias module:model/GetStakingEstimationFeeRequest
     * @param {(module:model/EstimateStakeFee|module:model/EstimateUnstakeFee|module:model/EstimateWithdrawFee)} instance The actual instance to initialize GetStakingEstimationFeeRequest.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "EstimateStakeFee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EstimateStakeFee.validateJSON(instance); // throw an exception if no match
                // create EstimateStakeFee from JS object
                this.actualInstance = EstimateStakeFee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateStakeFee
            errorMessages.push("Failed to construct EstimateStakeFee: " + err)
        }

        try {
            if (typeof instance === "EstimateUnstakeFee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EstimateUnstakeFee.validateJSON(instance); // throw an exception if no match
                // create EstimateUnstakeFee from JS object
                this.actualInstance = EstimateUnstakeFee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateUnstakeFee
            errorMessages.push("Failed to construct EstimateUnstakeFee: " + err)
        }

        try {
            if (typeof instance === "EstimateWithdrawFee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EstimateWithdrawFee.validateJSON(instance); // throw an exception if no match
                // create EstimateWithdrawFee from JS object
                this.actualInstance = EstimateWithdrawFee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateWithdrawFee
            errorMessages.push("Failed to construct EstimateWithdrawFee: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `GetStakingEstimationFeeRequest` with oneOf schemas EstimateStakeFee, EstimateUnstakeFee, EstimateWithdrawFee. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `GetStakingEstimationFeeRequest` with oneOf schemas EstimateStakeFee, EstimateUnstakeFee, EstimateWithdrawFee. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>GetStakingEstimationFeeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStakingEstimationFeeRequest} obj Optional instance to populate.
     * @return {module:model/GetStakingEstimationFeeRequest} The populated <code>GetStakingEstimationFeeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        return new GetStakingEstimationFeeRequest(data);
    }

    /**
     * Gets the actual instance, which can be <code>EstimateStakeFee</code>, <code>EstimateUnstakeFee</code>, <code>EstimateWithdrawFee</code>.
     * @return {(module:model/EstimateStakeFee|module:model/EstimateUnstakeFee|module:model/EstimateWithdrawFee)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EstimateStakeFee</code>, <code>EstimateUnstakeFee</code>, <code>EstimateWithdrawFee</code>.
     * @param {(module:model/EstimateStakeFee|module:model/EstimateUnstakeFee|module:model/EstimateWithdrawFee)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = GetStakingEstimationFeeRequest.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of GetStakingEstimationFeeRequest from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/GetStakingEstimationFeeRequest} An instance of GetStakingEstimationFeeRequest.
     */
    static fromJSON = function(json_string){
        return GetStakingEstimationFeeRequest.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/ActivityType} activity_type
 */
GetStakingEstimationFeeRequest.prototype['activity_type'] = undefined;

/**
 * The id of the wallet to stake.
 * @member {String} wallet_id
 */
GetStakingEstimationFeeRequest.prototype['wallet_id'] = undefined;

/**
 * The staker wallet address.
 * @member {String} address
 */
GetStakingEstimationFeeRequest.prototype['address'] = undefined;

/**
 * The id of the staking pool
 * @member {String} pool_id
 */
GetStakingEstimationFeeRequest.prototype['pool_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
GetStakingEstimationFeeRequest.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
GetStakingEstimationFeeRequest.prototype['fee'] = undefined;

/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
GetStakingEstimationFeeRequest.prototype['extra'] = undefined;

/**
 * The id of the related staking.
 * @member {String} staking_id
 */
GetStakingEstimationFeeRequest.prototype['staking_id'] = undefined;


GetStakingEstimationFeeRequest.OneOf = ["EstimateStakeFee", "EstimateUnstakeFee", "EstimateWithdrawFee"];

export default GetStakingEstimationFeeRequest;

