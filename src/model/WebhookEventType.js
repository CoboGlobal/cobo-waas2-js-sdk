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
* Enum class WebhookEventType.
* @enum {}
* @readonly
*/
export default class WebhookEventType {
    
        /**
         * value: "wallets.transaction.created"
         * @const
         */
        "transaction.created" = "wallets.transaction.created";

    
        /**
         * value: "wallets.transaction.updated"
         * @const
         */
        "transaction.updated" = "wallets.transaction.updated";

    
        /**
         * value: "wallets.transaction.failed"
         * @const
         */
        "transaction.failed" = "wallets.transaction.failed";

    
        /**
         * value: "wallets.transaction.succeeded"
         * @const
         */
        "transaction.succeeded" = "wallets.transaction.succeeded";

    
        /**
         * value: "wallets.mpc.tss_request.created"
         * @const
         */
        "mpc.tss_request.created" = "wallets.mpc.tss_request.created";

    
        /**
         * value: "wallets.mpc.tss_request.updated"
         * @const
         */
        "mpc.tss_request.updated" = "wallets.mpc.tss_request.updated";

    
        /**
         * value: "wallets.mpc.tss_request.failed"
         * @const
         */
        "mpc.tss_request.failed" = "wallets.mpc.tss_request.failed";

    
        /**
         * value: "wallets.mpc.tss_request.succeeded"
         * @const
         */
        "mpc.tss_request.succeeded" = "wallets.mpc.tss_request.succeeded";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>WebhookEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WebhookEventType} The enum <code>WebhookEventType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

