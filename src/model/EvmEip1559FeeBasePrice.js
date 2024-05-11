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
 * The EvmEip1559FeeBasePrice model module.
 * @module model/EvmEip1559FeeBasePrice
 * @version 0.1.0
 */
class EvmEip1559FeeBasePrice {
    /**
     * Constructs a new <code>EvmEip1559FeeBasePrice</code>.
     * The base eip1559 fee price for estimate fees or transfer.
     * @alias module:model/EvmEip1559FeeBasePrice
     * @param maxFee {String} The highest Gas price paid for the transfer, unit GWei.
     * @param maxPriorityFee {Number} The maximum Gas price paid to miners, the higher it is, the faster it is likely to be packaged into the block, unit GWei.
     * @param baseFee {Number} The Base Fee of chain.
     */
    constructor(maxFee, maxPriorityFee, baseFee) { 
        
        EvmEip1559FeeBasePrice.initialize(this, maxFee, maxPriorityFee, baseFee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxFee, maxPriorityFee, baseFee) { 
        obj['max_fee'] = maxFee;
        obj['max_priority_fee'] = maxPriorityFee;
        obj['base_fee'] = baseFee;
    }

    /**
     * Constructs a <code>EvmEip1559FeeBasePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEip1559FeeBasePrice} obj Optional instance to populate.
     * @return {module:model/EvmEip1559FeeBasePrice} The populated <code>EvmEip1559FeeBasePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEip1559FeeBasePrice();

            if (data.hasOwnProperty('fee_token_id')) {
                obj['fee_token_id'] = ApiClient.convertToType(data['fee_token_id'], 'String');
            }
            if (data.hasOwnProperty('max_fee')) {
                obj['max_fee'] = ApiClient.convertToType(data['max_fee'], 'String');
            }
            if (data.hasOwnProperty('max_priority_fee')) {
                obj['max_priority_fee'] = ApiClient.convertToType(data['max_priority_fee'], 'Number');
            }
            if (data.hasOwnProperty('base_fee')) {
                obj['base_fee'] = ApiClient.convertToType(data['base_fee'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmEip1559FeeBasePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEip1559FeeBasePrice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmEip1559FeeBasePrice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_token_id'] && !(typeof data['fee_token_id'] === 'string' || data['fee_token_id'] instanceof String)) {
            throw new Error("Expected the field `fee_token_id` to be a primitive type in the JSON string but got " + data['fee_token_id']);
        }
        // ensure the json data is a string
        if (data['max_fee'] && !(typeof data['max_fee'] === 'string' || data['max_fee'] instanceof String)) {
            throw new Error("Expected the field `max_fee` to be a primitive type in the JSON string but got " + data['max_fee']);
        }

        return true;
    }


}

EvmEip1559FeeBasePrice.RequiredProperties = ["max_fee", "max_priority_fee", "base_fee"];

/**
 * ID of the fee token. Unique in all chains scope.
 * @member {String} fee_token_id
 */
EvmEip1559FeeBasePrice.prototype['fee_token_id'] = undefined;

/**
 * The highest Gas price paid for the transfer, unit GWei.
 * @member {String} max_fee
 */
EvmEip1559FeeBasePrice.prototype['max_fee'] = undefined;

/**
 * The maximum Gas price paid to miners, the higher it is, the faster it is likely to be packaged into the block, unit GWei.
 * @member {Number} max_priority_fee
 */
EvmEip1559FeeBasePrice.prototype['max_priority_fee'] = undefined;

/**
 * The Base Fee of chain.
 * @member {Number} base_fee
 */
EvmEip1559FeeBasePrice.prototype['base_fee'] = undefined;






export default EvmEip1559FeeBasePrice;

