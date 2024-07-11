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
* Enum class ActivityStatus.
* @enum {}
* @readonly
*/
export default class ActivityStatus {
    
        /**
         * value: "Success"
         * @const
         */
        "Success" = "Success";

    
        /**
         * value: "Processing"
         * @const
         */
        "Processing" = "Processing";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    

    /**
    * Returns a <code>ActivityStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ActivityStatus} The enum <code>ActivityStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
