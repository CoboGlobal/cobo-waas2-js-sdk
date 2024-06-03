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
import EvmEip1559Fee from './EvmEip1559Fee';
import EvmLegacyFee from './EvmLegacyFee';
import FeeType from './FeeType';
import FixedFee from './FixedFee';
import UtxoFee from './UtxoFee';
import UtxoFeeSlow from './UtxoFeeSlow';

/**
 * The EstimationFee model module.
 * @module model/EstimationFee
 * @version 0.1.0
 */
class EstimationFee {
    /**
     * Constructs a new <code>EstimationFee</code>.
     * @alias module:model/EstimationFee
     * @param {(module:model/EvmEip1559Fee|module:model/EvmLegacyFee|module:model/FixedFee|module:model/UtxoFee)} instance The actual instance to initialize EstimationFee.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "EvmEip1559Fee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EvmEip1559Fee.validateJSON(instance); // throw an exception if no match
                // create EvmEip1559Fee from JS object
                this.actualInstance = EvmEip1559Fee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmEip1559Fee
            errorMessages.push("Failed to construct EvmEip1559Fee: " + err)
        }

        try {
            if (typeof instance === "EvmLegacyFee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EvmLegacyFee.validateJSON(instance); // throw an exception if no match
                // create EvmLegacyFee from JS object
                this.actualInstance = EvmLegacyFee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmLegacyFee
            errorMessages.push("Failed to construct EvmLegacyFee: " + err)
        }

        try {
            if (typeof instance === "UtxoFee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UtxoFee.validateJSON(instance); // throw an exception if no match
                // create UtxoFee from JS object
                this.actualInstance = UtxoFee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UtxoFee
            errorMessages.push("Failed to construct UtxoFee: " + err)
        }

        try {
            if (typeof instance === "FixedFee") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                FixedFee.validateJSON(instance); // throw an exception if no match
                // create FixedFee from JS object
                this.actualInstance = FixedFee.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into FixedFee
            errorMessages.push("Failed to construct FixedFee: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `EstimationFee` with oneOf schemas EvmEip1559Fee, EvmLegacyFee, FixedFee, UtxoFee. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `EstimationFee` with oneOf schemas EvmEip1559Fee, EvmLegacyFee, FixedFee, UtxoFee. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>EstimationFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimationFee} obj Optional instance to populate.
     * @return {module:model/EstimationFee} The populated <code>EstimationFee</code> instance.
     */
    static constructFromObject(data, obj) {
        return new EstimationFee(data);
    }

    /**
     * Gets the actual instance, which can be <code>EvmEip1559Fee</code>, <code>EvmLegacyFee</code>, <code>FixedFee</code>, <code>UtxoFee</code>.
     * @return {(module:model/EvmEip1559Fee|module:model/EvmLegacyFee|module:model/FixedFee|module:model/UtxoFee)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EvmEip1559Fee</code>, <code>EvmLegacyFee</code>, <code>FixedFee</code>, <code>UtxoFee</code>.
     * @param {(module:model/EvmEip1559Fee|module:model/EvmLegacyFee|module:model/FixedFee|module:model/UtxoFee)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = EstimationFee.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of EstimationFee from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/EstimationFee} An instance of EstimationFee.
     */
    static fromJSON = function(json_string){
        return EstimationFee.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/FeeType} fee_type
 */
EstimationFee.prototype['fee_type'] = undefined;

/**
 * @member {module:model/UtxoFeeSlow} slow
 */
EstimationFee.prototype['slow'] = undefined;

/**
 * @member {module:model/UtxoFeeSlow} standard
 */
EstimationFee.prototype['standard'] = undefined;

/**
 * @member {module:model/UtxoFeeSlow} fast
 */
EstimationFee.prototype['fast'] = undefined;

/**
 * The token ID of the transaction fee. Unique in all chains scope.
 * @member {String} fee_token_id
 */
EstimationFee.prototype['fee_token_id'] = undefined;

/**
 * The max fee amount in fee_coin.
 * @member {String} max_fee_amount
 */
EstimationFee.prototype['max_fee_amount'] = undefined;


EstimationFee.OneOf = ["EvmEip1559Fee", "EvmLegacyFee", "FixedFee", "UtxoFee"];

export default EstimationFee;

