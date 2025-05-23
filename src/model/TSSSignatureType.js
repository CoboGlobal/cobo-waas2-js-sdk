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
* Enum class TSSSignatureType.
* @enum {}
* @readonly
*/
export default class TSSSignatureType {
    
        /**
         * value: 1
         * @const
         */
        "ECDSA" = 1;

    
        /**
         * value: 2
         * @const
         */
        "EdDSA" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Schnorr" = 3;

    
        /**
         * value: 11184809
         * @const
         */
        "unknown_default_open_api" = 11184809;

    

    /**
    * Returns a <code>TSSSignatureType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TSSSignatureType} The enum <code>TSSSignatureType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

