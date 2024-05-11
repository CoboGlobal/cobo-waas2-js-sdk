/**
 * Cobo Wallet as a Service 2.0
 * Cobo WaaS 2.0 enables you to programmatically access Cobo's full suite of crypto wallet technologies with powerful and flexible access controls.  # Wallet technologies - Custodial Wallet - MPC Wallet - Smart Contract Wallet (Based on Safe{Wallet}) - Exchange Wallet  # Risk Control technologies - Workflow - Access Control List (ACL)  # Risk Control targets - Wallet Management   - User/team and their permission management   - Risk control configurations, e.g. whitelist, blacklist, rate-limiting etc. - Blockchain Interaction   - Crypto transfer   - Smart Contract Invocation  # Important HTTPS only. RESTful, resource oriented  # Get Started Set up your APIs or get authorization  # Authentication and Authorization CoboAuth  # Request and Response application/json  # Error Handling  ### Common error codes | Error Code | Description | | -- | -- |  ### API-specific error codes For error codes that are dedicated to a specific API, see the Error codes section in each API specification, for example, /v3/wallets.  # Rate and Usage Limiting  # Idempotent Request  # Pagination # Support [Developer Hub](https://cobo.com/developers) 
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
import UtxoFeePrice from './UtxoFeePrice';

/**
 * The ChainFeePrice model module.
 * @module model/ChainFeePrice
 * @version 0.1.0
 */
class ChainFeePrice {
    /**
     * Constructs a new <code>ChainFeePrice</code>.
     * @alias module:model/ChainFeePrice
     * @param {(module:model/EvmEip1559FeePrice|module:model/EvmLegacyFeePrice|module:model/FixedFee|module:model/UtxoFeePrice)} instance The actual instance to initialize ChainFeePrice.
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
            throw new Error("Multiple matches found constructing `ChainFeePrice` with oneOf schemas EvmEip1559FeePrice, EvmLegacyFeePrice, FixedFee, UtxoFeePrice. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ChainFeePrice` with oneOf schemas EvmEip1559FeePrice, EvmLegacyFeePrice, FixedFee, UtxoFeePrice. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ChainFeePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChainFeePrice} obj Optional instance to populate.
     * @return {module:model/ChainFeePrice} The populated <code>ChainFeePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ChainFeePrice(data);
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
       this.actualInstance = ChainFeePrice.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ChainFeePrice from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ChainFeePrice} An instance of ChainFeePrice.
     */
    static fromJSON = function(json_string){
        return ChainFeePrice.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/FeeType} fee_type
 */
ChainFeePrice.prototype['fee_type'] = undefined;

/**
 * ID of the fee token. Unique in all chains scope.
 * @member {String} fee_token_id
 */
ChainFeePrice.prototype['fee_token_id'] = undefined;

/**
 * The highest Gas price paid for the transfer, unit GWei.
 * @member {String} max_fee
 */
ChainFeePrice.prototype['max_fee'] = undefined;

/**
 * The maximum Gas price paid to miners, the higher it is, the faster it is likely to be packaged into the block, unit GWei.
 * @member {Number} max_priority_fee
 */
ChainFeePrice.prototype['max_priority_fee'] = undefined;

/**
 * The Base Fee of chain.
 * @member {Number} base_fee
 */
ChainFeePrice.prototype['base_fee'] = undefined;

/**
 * The Price of Gas, unit GWei.
 * @member {String} gas_price
 */
ChainFeePrice.prototype['gas_price'] = undefined;

/**
 * The fee rate, unit sat/vB.
 * @member {String} fee_rate
 */
ChainFeePrice.prototype['fee_rate'] = undefined;

/**
 * The estimated fee amount in fee_coin.
 * @member {String} fee_amount
 */
ChainFeePrice.prototype['fee_amount'] = undefined;


ChainFeePrice.OneOf = ["EvmEip1559FeePrice", "EvmLegacyFeePrice", "FixedFee", "UtxoFeePrice"];

export default ChainFeePrice;
