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

/**
 * The UtxoFeeBasePrice model module.
 * @module model/UtxoFeeBasePrice
 * @version 0.1.0
 */
class UtxoFeeBasePrice {
    /**
     * Constructs a new <code>UtxoFeeBasePrice</code>.
     * The legacy fee price for estimate fees or transfer.
     * @alias module:model/UtxoFeeBasePrice
     * @param feeRate {String} The fee rate, unit sat/vB.
     */
    constructor(feeRate) { 
        
        UtxoFeeBasePrice.initialize(this, feeRate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeRate) { 
        obj['fee_rate'] = feeRate;
    }

    /**
     * Constructs a <code>UtxoFeeBasePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtxoFeeBasePrice} obj Optional instance to populate.
     * @return {module:model/UtxoFeeBasePrice} The populated <code>UtxoFeeBasePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtxoFeeBasePrice();

            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtxoFeeBasePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtxoFeeBasePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UtxoFeeBasePrice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }
        // ensure the json data is a string
        if (data['fee_rate'] && !(typeof data['fee_rate'] === 'string' || data['fee_rate'] instanceof String)) {
            throw new Error("Expected the field `fee_rate` to be a primitive type in the JSON string but got " + data['fee_rate']);
        }

        return true;
    }


}

UtxoFeeBasePrice.RequiredProperties = ["fee_rate"];

/**
 * ID of the fee token. Unique in all chains scope.
 * @member {String} fee_token_id
 */
UtxoFeeBasePrice.prototype['fee_token_id'] = undefined;

/**
 * The fee rate, unit sat/vB.
 * @member {String} fee_rate
 */
UtxoFeeBasePrice.prototype['fee_rate'] = undefined;






export default UtxoFeeBasePrice;

