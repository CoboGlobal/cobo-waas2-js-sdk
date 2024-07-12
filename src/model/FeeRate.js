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
import EvmEip1559FeePrice from './EvmEip1559FeePrice';
import EvmLegacyFeePrice from './EvmLegacyFeePrice';
import FeeType from './FeeType';
import FixedFee from './FixedFee';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';
import UtxoFeePrice from './UtxoFeePrice';

/**
 * The FeeRate model module.
 * @module model/FeeRate
 * @version 0.2.7
 */
class FeeRate {
    /**
     * Constructs a new <code>FeeRate</code>.
     * @alias module:model/FeeRate
     * @param {(module:model/EvmEip1559FeePrice|module:model/EvmLegacyFeePrice|module:model/FixedFee|module:model/UtxoFeePrice)} instance The actual instance to initialize FeeRate.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "EvmEip1559FeePrice") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EvmEip1559FeePrice.validateJSON(instance); // throw an exception if no match
                // create EvmEip1559FeePrice from JS object
                this.actualInstance = EvmEip1559FeePrice.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmEip1559FeePrice
            errorMessages.push("Failed to construct EvmEip1559FeePrice: " + err)
        }

        try {
            if (typeof instance === "EvmLegacyFeePrice") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EvmLegacyFeePrice.validateJSON(instance); // throw an exception if no match
                // create EvmLegacyFeePrice from JS object
                this.actualInstance = EvmLegacyFeePrice.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmLegacyFeePrice
            errorMessages.push("Failed to construct EvmLegacyFeePrice: " + err)
        }

        try {
            if (typeof instance === "UtxoFeePrice") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UtxoFeePrice.validateJSON(instance); // throw an exception if no match
                // create UtxoFeePrice from JS object
                this.actualInstance = UtxoFeePrice.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UtxoFeePrice
            errorMessages.push("Failed to construct UtxoFeePrice: " + err)
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
            throw new Error("Multiple matches found constructing `FeeRate` with oneOf schemas EvmEip1559FeePrice, EvmLegacyFeePrice, FixedFee, UtxoFeePrice. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `FeeRate` with oneOf schemas EvmEip1559FeePrice, EvmLegacyFeePrice, FixedFee, UtxoFeePrice. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>FeeRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeeRate} obj Optional instance to populate.
     * @return {module:model/FeeRate} The populated <code>FeeRate</code> instance.
     */
    static constructFromObject(data, obj) {
        return new FeeRate(data);
    }

    /**
     * Gets the actual instance, which can be <code>EvmEip1559FeePrice</code>, <code>EvmLegacyFeePrice</code>, <code>FixedFee</code>, <code>UtxoFeePrice</code>.
     * @return {(module:model/EvmEip1559FeePrice|module:model/EvmLegacyFeePrice|module:model/FixedFee|module:model/UtxoFeePrice)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EvmEip1559FeePrice</code>, <code>EvmLegacyFeePrice</code>, <code>FixedFee</code>, <code>UtxoFeePrice</code>.
     * @param {(module:model/EvmEip1559FeePrice|module:model/EvmLegacyFeePrice|module:model/FixedFee|module:model/UtxoFeePrice)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = FeeRate.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of FeeRate from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/FeeRate} An instance of FeeRate.
     */
    static fromJSON = function(json_string){
        return FeeRate.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/FeeType} fee_type
 */
FeeRate.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
FeeRate.prototype['token_id'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} slow
 */
FeeRate.prototype['slow'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} recommended
 */
FeeRate.prototype['recommended'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} fast
 */
FeeRate.prototype['fast'] = undefined;

/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
FeeRate.prototype['max_fee_amount'] = undefined;


FeeRate.OneOf = ["EvmEip1559FeePrice", "EvmLegacyFeePrice", "FixedFee", "UtxoFeePrice"];

export default FeeRate;

