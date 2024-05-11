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
import FeeAmount from './FeeAmount';
import FeeType from './FeeType';

/**
 * The FixedFee model module.
 * @module model/FixedFee
 * @version 0.1.0
 */
class FixedFee {
    /**
     * Constructs a new <code>FixedFee</code>.
     * The estimated fee amount in fee_coin.
     * @alias module:model/FixedFee
     * @implements module:model/FeeAmount
     * @param feeType {module:model/FeeType} 
     */
    constructor(feeType) { 
        FeeAmount.initialize(this);
        FixedFee.initialize(this, feeType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeType) { 
        obj['fee_type'] = feeType;
    }

    /**
     * Constructs a <code>FixedFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FixedFee} obj Optional instance to populate.
     * @return {module:model/FixedFee} The populated <code>FixedFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FixedFee();
            FeeAmount.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_amount')) {
                obj['fee_amount'] = ApiClient.convertToType(data['fee_amount'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FixedFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FixedFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FixedFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_amount'] && !(typeof data['fee_amount'] === 'string' || data['fee_amount'] instanceof String)) {
            throw new Error("Expected the field `fee_amount` to be a primitive type in the JSON string but got " + data['fee_amount']);
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }

        return true;
    }


}

FixedFee.RequiredProperties = ["fee_type"];

/**
 * The estimated fee amount in fee_coin.
 * @member {String} fee_amount
 */
FixedFee.prototype['fee_amount'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
FixedFee.prototype['fee_type'] = undefined;

/**
 * ID of the fee token. Unique in all chains scope.
 * @member {String} fee_token_id
 */
FixedFee.prototype['fee_token_id'] = undefined;


// Implement FeeAmount interface:
/**
 * The estimated fee amount in fee_coin.
 * @member {String} fee_amount
 */
FeeAmount.prototype['fee_amount'] = undefined;




export default FixedFee;

