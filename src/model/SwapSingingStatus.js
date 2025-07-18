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
* Enum class SwapSingingStatus.
* @enum {}
* @readonly
*/
export default class SwapSingingStatus {
    
        /**
         * value: "Pending"
         * @const
         */
        "Pending" = "Pending";

    
        /**
         * value: "Signed"
         * @const
         */
        "Signed" = "Signed";

    
        /**
         * value: "Timeout"
         * @const
         */
        "Timeout" = "Timeout";

    
        /**
         * value: "Rejected"
         * @const
         */
        "Rejected" = "Rejected";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>SwapSingingStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SwapSingingStatus} The enum <code>SwapSingingStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

