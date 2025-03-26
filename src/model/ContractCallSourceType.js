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
* Enum class ContractCallSourceType.
* @enum {}
* @readonly
*/
export default class ContractCallSourceType {
    
        /**
         * value: "Web3"
         * @const
         */
        "Web3" = "Web3";

    
        /**
         * value: "Org-Controlled"
         * @const
         */
        "Org-Controlled" = "Org-Controlled";

    
        /**
         * value: "User-Controlled"
         * @const
         */
        "User-Controlled" = "User-Controlled";

    
        /**
         * value: "Safe{Wallet}"
         * @const
         */
        "Safe{Wallet}" = "Safe{Wallet}";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>ContractCallSourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ContractCallSourceType} The enum <code>ContractCallSourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

