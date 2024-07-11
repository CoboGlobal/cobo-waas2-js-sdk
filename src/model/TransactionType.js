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
/**
* Enum class TransactionType.
* @enum {}
* @readonly
*/
export default class TransactionType {
    
        /**
         * value: "Deposit"
         * @const
         */
        "Deposit" = "Deposit";

    
        /**
         * value: "Withdrawal"
         * @const
         */
        "Withdrawal" = "Withdrawal";

    
        /**
         * value: "TokenApproval"
         * @const
         */
        "TokenApproval" = "TokenApproval";

    
        /**
         * value: "ContractCall"
         * @const
         */
        "ContractCall" = "ContractCall";

    
        /**
         * value: "TransactionFeePayment"
         * @const
         */
        "TransactionFeePayment" = "TransactionFeePayment";

    
        /**
         * value: "RawMessage"
         * @const
         */
        "RawMessage" = "RawMessage";

    

    /**
    * Returns a <code>TransactionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionType} The enum <code>TransactionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

