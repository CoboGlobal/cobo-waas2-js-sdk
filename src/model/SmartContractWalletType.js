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
* Enum class SmartContractWalletType.
* @enum {}
* @readonly
*/
export default class SmartContractWalletType {
    
        /**
         * value: "SafeWallet"
         * @const
         */
        "SafeWallet" = "SafeWallet";

    

    /**
    * Returns a <code>SmartContractWalletType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SmartContractWalletType} The enum <code>SmartContractWalletType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

