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
/**
* Enum class TransactionSubStatus.
* @enum {}
* @readonly
*/
export default class TransactionSubStatus {
    
        /**
         * value: "RejectedKYT"
         * @const
         */
        "RejectedKYT" = "RejectedKYT";

    
        /**
         * value: "RejectedTravelRule"
         * @const
         */
        "RejectedTravelRule" = "RejectedTravelRule";

    
        /**
         * value: "PendingDoubleCheck"
         * @const
         */
        "PendingDoubleCheck" = "PendingDoubleCheck";

    
        /**
         * value: "PendingSpenderCheck"
         * @const
         */
        "PendingSpenderCheck" = "PendingSpenderCheck";

    
        /**
         * value: "PendingRiskControlCheck"
         * @const
         */
        "PendingRiskControlCheck" = "PendingRiskControlCheck";

    
        /**
         * value: "PendingApproverCheck"
         * @const
         */
        "PendingApproverCheck" = "PendingApproverCheck";

    
        /**
         * value: "RejectedCoboCheck"
         * @const
         */
        "RejectedCoboCheck" = "RejectedCoboCheck";

    
        /**
         * value: "RejectedWhiteList"
         * @const
         */
        "RejectedWhiteList" = "RejectedWhiteList";

    
        /**
         * value: "RejectedDoubleCheck"
         * @const
         */
        "RejectedDoubleCheck" = "RejectedDoubleCheck";

    
        /**
         * value: "RejectedSpenderAuth"
         * @const
         */
        "RejectedSpenderAuth" = "RejectedSpenderAuth";

    
        /**
         * value: "RejectedRiskControlCheck"
         * @const
         */
        "RejectedRiskControlCheck" = "RejectedRiskControlCheck";

    
        /**
         * value: "RejectedApproverAuth"
         * @const
         */
        "RejectedApproverAuth" = "RejectedApproverAuth";

    
        /**
         * value: "RejectedbyMobileCosigner"
         * @const
         */
        "RejectedbyMobileCosigner" = "RejectedbyMobileCosigner";

    
        /**
         * value: "PendingWaitSigner"
         * @const
         */
        "PendingWaitSigner" = "PendingWaitSigner";

    
        /**
         * value: "PendingApprovalStart"
         * @const
         */
        "PendingApprovalStart" = "PendingApprovalStart";

    
        /**
         * value: "FailedBySigner"
         * @const
         */
        "FailedBySigner" = "FailedBySigner";

    
        /**
         * value: "FailedBroadcasting"
         * @const
         */
        "FailedBroadcasting" = "FailedBroadcasting";

    
        /**
         * value: "FailedOnChain"
         * @const
         */
        "FailedOnChain" = "FailedOnChain";

    
        /**
         * value: "Queue"
         * @const
         */
        "Queue" = "Queue";

    
        /**
         * value: "PendingBlockConfirmations"
         * @const
         */
        "PendingBlockConfirmations" = "PendingBlockConfirmations";

    
        /**
         * value: "ReplacedByNewTransaction"
         * @const
         */
        "ReplacedByNewTransaction" = "ReplacedByNewTransaction";

    
        /**
         * value: "CanceledBySpender"
         * @const
         */
        "CanceledBySpender" = "CanceledBySpender";

    
        /**
         * value: "CanceledByAPI"
         * @const
         */
        "CanceledByAPI" = "CanceledByAPI";

    
        /**
         * value: "OnchainRejection"
         * @const
         */
        "OnchainRejection" = "OnchainRejection";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>TransactionSubStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionSubStatus} The enum <code>TransactionSubStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

