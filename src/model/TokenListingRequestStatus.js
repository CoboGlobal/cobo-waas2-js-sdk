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
* Enum class TokenListingRequestStatus.
* @enum {}
* @readonly
*/
export default class TokenListingRequestStatus {
    
        /**
         * value: "Submitted"
         * @const
         */
        "Submitted" = "Submitted";

    
        /**
         * value: "Succeeded"
         * @const
         */
        "Succeeded" = "Succeeded";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>TokenListingRequestStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TokenListingRequestStatus} The enum <code>TokenListingRequestStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

