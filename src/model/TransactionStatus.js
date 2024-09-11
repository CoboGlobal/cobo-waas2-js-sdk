/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class TransactionStatus.
* @enum {}
* @readonly
*/
export default class TransactionStatus {
    
        /**
         * value: "Submitted"
         * @const
         */
        "Submitted" = "Submitted";

    
        /**
         * value: "PendingScreening"
         * @const
         */
        "PendingScreening" = "PendingScreening";

    
        /**
         * value: "PendingAuthorization"
         * @const
         */
        "PendingAuthorization" = "PendingAuthorization";

    
        /**
         * value: "Queued"
         * @const
         */
        "Queued" = "Queued";

    
        /**
         * value: "PendingSignature"
         * @const
         */
        "PendingSignature" = "PendingSignature";

    
        /**
         * value: "Broadcasting"
         * @const
         */
        "Broadcasting" = "Broadcasting";

    
        /**
         * value: "Confirming"
         * @const
         */
        "Confirming" = "Confirming";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    
        /**
         * value: "Rejected"
         * @const
         */
        "Rejected" = "Rejected";

    
        /**
         * value: "Pending"
         * @const
         */
        "Pending" = "Pending";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>TransactionStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionStatus} The enum <code>TransactionStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

