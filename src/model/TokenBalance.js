/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TokenBalanceBalance from './TokenBalanceBalance';

/**
 * The TokenBalance model module.
 * @module model/TokenBalance
 */
class TokenBalance {
    /**
     * Constructs a new <code>TokenBalance</code>.
     * The balance information.
     * @alias module:model/TokenBalance
     * @param token_id {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param balance {module:model/TokenBalanceBalance} 
     */
    constructor(token_id, balance) { 
        
        TokenBalance.initialize(this, token_id, balance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token_id, balance) { 
        obj['token_id'] = token_id;
        obj['balance'] = balance;
    }

    /**
     * Constructs a <code>TokenBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenBalance} obj Optional instance to populate.
     * @return {module:model/TokenBalance} The populated <code>TokenBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenBalance();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = TokenBalanceBalance.constructFromObject(data['balance']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenBalance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenBalance</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenBalance.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `balance`
        if (data['balance']) { // data not null
          if (!!TokenBalanceBalance.validateJSON) {
            TokenBalanceBalance.validateJSON(data['balance']);
          }
        }

        return true;
    }


}

TokenBalance.RequiredProperties = ["token_id", "balance"];

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
TokenBalance.prototype['token_id'] = undefined;

/**
 * @member {module:model/TokenBalanceBalance} balance
 */
TokenBalance.prototype['balance'] = undefined;






export default TokenBalance;

