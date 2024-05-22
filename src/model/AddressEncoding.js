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
* Enum class AddressEncoding.
* @enum {}
* @readonly
*/
export default class AddressEncoding {
    
        /**
         * value: "ENCODING_P2PKH"
         * @const
         */
        "P2PKH" = "ENCODING_P2PKH";

    
        /**
         * value: "ENCODING_P2SH_P2WPKH"
         * @const
         */
        "P2SH_P2WPKH" = "ENCODING_P2SH_P2WPKH";

    
        /**
         * value: "ENCODING_BECH32"
         * @const
         */
        "BECH32" = "ENCODING_BECH32";

    
        /**
         * value: "ENCODING_P2PKH_UNCOMPRESSED"
         * @const
         */
        "P2PKH_UNCOMPRESSED" = "ENCODING_P2PKH_UNCOMPRESSED";

    
        /**
         * value: "ENCODING_P2SH_P2MS"
         * @const
         */
        "P2SH_P2MS" = "ENCODING_P2SH_P2MS";

    
        /**
         * value: "ENCODING_P2SH_P2WSH_P2MS"
         * @const
         */
        "P2SH_P2WSH_P2MS" = "ENCODING_P2SH_P2WSH_P2MS";

    
        /**
         * value: "ENCODING_P2TR"
         * @const
         */
        "P2TR" = "ENCODING_P2TR";

    

    /**
    * Returns a <code>AddressEncoding</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AddressEncoding} The enum <code>AddressEncoding</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

