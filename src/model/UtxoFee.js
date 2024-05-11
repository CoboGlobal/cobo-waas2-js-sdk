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
import FeeType from './FeeType';
import UtxoFeeSlow from './UtxoFeeSlow';

/**
 * The UtxoFee model module.
 * @module model/UtxoFee
 * @version 0.1.0
 */
class UtxoFee {
    /**
     * Constructs a new <code>UtxoFee</code>.
     * The UTXO fee for transfer.
     * @alias module:model/UtxoFee
     * @param feeType {module:model/FeeType} 
     * @param standard {module:model/UtxoFeeSlow} 
     */
    constructor(feeType, standard) { 
        
        UtxoFee.initialize(this, feeType, standard);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feeType, standard) { 
        obj['fee_type'] = feeType;
        obj['standard'] = standard;
    }

    /**
     * Constructs a <code>UtxoFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtxoFee} obj Optional instance to populate.
     * @return {module:model/UtxoFee} The populated <code>UtxoFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtxoFee();

            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = UtxoFeeSlow.constructFromObject(data['slow']);
            }
            if (data.hasOwnProperty('standard')) {
                obj['standard'] = UtxoFeeSlow.constructFromObject(data['standard']);
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = UtxoFeeSlow.constructFromObject(data['fast']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtxoFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtxoFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UtxoFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `slow`
        if (data['slow']) { // data not null
          UtxoFeeSlow.validateJSON(data['slow']);
        }
        // validate the optional field `standard`
        if (data['standard']) { // data not null
          UtxoFeeSlow.validateJSON(data['standard']);
        }
        // validate the optional field `fast`
        if (data['fast']) { // data not null
          UtxoFeeSlow.validateJSON(data['fast']);
        }

        return true;
    }


}

UtxoFee.RequiredProperties = ["fee_type", "standard"];

/**
 * @member {module:model/FeeType} fee_type
 */
UtxoFee.prototype['fee_type'] = undefined;

/**
 * @member {module:model/UtxoFeeSlow} slow
 */
UtxoFee.prototype['slow'] = undefined;

/**
 * @member {module:model/UtxoFeeSlow} standard
 */
UtxoFee.prototype['standard'] = undefined;

/**
 * @member {module:model/UtxoFeeSlow} fast
 */
UtxoFee.prototype['fast'] = undefined;






export default UtxoFee;

