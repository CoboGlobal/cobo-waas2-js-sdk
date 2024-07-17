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
* Enum class ReplaceType.
* @enum {}
* @readonly
*/
export default class ReplaceType {
    
        /**
         * value: "Drop"
         * @const
         */
        "Drop" = "Drop";

    
        /**
         * value: "Resend"
         * @const
         */
        "Resend" = "Resend";

    
        /**
         * value: "SpeedUp"
         * @const
         */
        "SpeedUp" = "SpeedUp";

    

    /**
    * Returns a <code>ReplaceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ReplaceType} The enum <code>ReplaceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

