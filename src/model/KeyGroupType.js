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
* Enum class KeyGroupType.
* @enum {}
* @readonly
*/
export default class KeyGroupType {
    
        /**
         * value: "MainKeyGroup"
         * @const
         */
        "MainKeyGroup" = "MainKeyGroup";

    
        /**
         * value: "SigningKeyGroup"
         * @const
         */
        "SigningKeyGroup" = "SigningKeyGroup";

    
        /**
         * value: "RecoveryKeyGroup"
         * @const
         */
        "RecoveryKeyGroup" = "RecoveryKeyGroup";

    

    /**
    * Returns a <code>KeyGroupType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/KeyGroupType} The enum <code>KeyGroupType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

