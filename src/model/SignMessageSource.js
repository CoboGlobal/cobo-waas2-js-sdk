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
import MpcSigningGroup from './MpcSigningGroup';

/**
 * The SignMessageSource model module.
 * @module model/SignMessageSource
 * @version 0.1.0
 */
class SignMessageSource {
    /**
     * Constructs a new <code>SignMessageSource</code>.
     * @alias module:model/SignMessageSource
     */
    constructor() { 
        
        SignMessageSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignMessageSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignMessageSource} obj Optional instance to populate.
     * @return {module:model/SignMessageSource} The populated <code>SignMessageSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignMessageSource();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address_str')) {
                obj['address_str'] = ApiClient.convertToType(data['address_str'], 'String');
            }
            if (data.hasOwnProperty('mpc_used_key_group')) {
                obj['mpc_used_key_group'] = MpcSigningGroup.constructFromObject(data['mpc_used_key_group']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignMessageSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignMessageSource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address_str'] && !(typeof data['address_str'] === 'string' || data['address_str'] instanceof String)) {
            throw new Error("Expected the field `address_str` to be a primitive type in the JSON string but got " + data['address_str']);
        }
        // validate the optional field `mpc_used_key_group`
        if (data['mpc_used_key_group']) { // data not null
          MpcSigningGroup.validateJSON(data['mpc_used_key_group']);
        }

        return true;
    }


}



/**
 * Unique id of the wallet to sign message.
 * @member {String} wallet_id
 */
SignMessageSource.prototype['wallet_id'] = undefined;

/**
 * From address
 * @member {String} address_str
 */
SignMessageSource.prototype['address_str'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_group
 */
SignMessageSource.prototype['mpc_used_key_group'] = undefined;






export default SignMessageSource;

