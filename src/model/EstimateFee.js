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
import ContractCallSource from './ContractCallSource';
import EstimateFeeContractCall from './EstimateFeeContractCall';
import EstimateFeeContractCallDestination from './EstimateFeeContractCallDestination';
import EstimateFeeTransfer from './EstimateFeeTransfer';
import FeeType from './FeeType';

/**
 * The EstimateFee model module.
 * @module model/EstimateFee
 * @version 0.4.1
 */
class EstimateFee {
    /**
     * Constructs a new <code>EstimateFee</code>.
     * @alias module:model/EstimateFee
     * @param {(module:model/EstimateFeeContractCall|module:model/EstimateFeeTransfer)} instance The actual instance to initialize EstimateFee.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "EstimateFeeTransfer") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EstimateFeeTransfer.validateJSON(instance); // throw an exception if no match
                // create EstimateFeeTransfer from JS object
                this.actualInstance = EstimateFeeTransfer.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateFeeTransfer
            errorMessages.push("Failed to construct EstimateFeeTransfer: " + err)
        }

        try {
            if (typeof instance === "EstimateFeeContractCall") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EstimateFeeContractCall.validateJSON(instance); // throw an exception if no match
                // create EstimateFeeContractCall from JS object
                this.actualInstance = EstimateFeeContractCall.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateFeeContractCall
            errorMessages.push("Failed to construct EstimateFeeContractCall: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `EstimateFee` with oneOf schemas EstimateFeeContractCall, EstimateFeeTransfer. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `EstimateFee` with oneOf schemas EstimateFeeContractCall, EstimateFeeTransfer. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>EstimateFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateFee} obj Optional instance to populate.
     * @return {module:model/EstimateFee} The populated <code>EstimateFee</code> instance.
     */
    static constructFromObject(data, obj) {
        return new EstimateFee(data);
    }

    /**
     * Gets the actual instance, which can be <code>EstimateFeeContractCall</code>, <code>EstimateFeeTransfer</code>.
     * @return {(module:model/EstimateFeeContractCall|module:model/EstimateFeeTransfer)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EstimateFeeContractCall</code>, <code>EstimateFeeTransfer</code>.
     * @param {(module:model/EstimateFeeContractCall|module:model/EstimateFeeTransfer)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = EstimateFee.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of EstimateFee from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/EstimateFee} An instance of EstimateFee.
     */
    static fromJSON = function(json_string){
        return EstimateFee.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
EstimateFee.prototype['request_id'] = undefined;

/**
 * The request type. Possible values include:   - `Transfer`: A request to transfer tokens.   - `ContractCall`: A request to interact with a smart contract.   - `MessageSign`: A request to sign a message. 
 * @member {module:model/EstimateFee.RequestTypeEnum} request_type
 */
EstimateFee.prototype['request_type'] = undefined;

/**
 * @member {module:model/ContractCallSource} source
 */
EstimateFee.prototype['source'] = undefined;

/**
 * The token ID of the transaction fee. You can retrieve token IDs by using the [Get fee rates](/api-references/v2/transactions/get-fee-rates) operation.
 * @member {String} token_id
 */
EstimateFee.prototype['token_id'] = undefined;

/**
 * @member {module:model/EstimateFeeContractCallDestination} destination
 */
EstimateFee.prototype['destination'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
EstimateFee.prototype['fee_type'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/developers/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
EstimateFee.prototype['chain_id'] = undefined;


EstimateFee.OneOf = ["EstimateFeeContractCall", "EstimateFeeTransfer"];

export default EstimateFee;

