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
 * @version 0.2.7
 */
class SignMessageSource {
    /**
     * Constructs a new <code>SignMessageSource</code>.
     * The information about the transaction source.
     * @alias module:model/SignMessageSource
     * @param walletId {String} The wallet ID.
     * @param address {String} The wallet address.
     */
    constructor(walletId, address) { 
        
        SignMessageSource.initialize(this, walletId, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletId, address) { 
        obj['wallet_id'] = walletId;
        obj['address'] = address;
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
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('mpc_used_key_share_holder_group')) {
                obj['mpc_used_key_share_holder_group'] = MpcSigningGroup.constructFromObject(data['mpc_used_key_share_holder_group']);
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
        // check to make sure all required properties are present in the JSON string
        for (const property of SignMessageSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `mpc_used_key_share_holder_group`
        if (data['mpc_used_key_share_holder_group']) { // data not null
          MpcSigningGroup.validateJSON(data['mpc_used_key_share_holder_group']);
        }

        return true;
    }


}

SignMessageSource.RequiredProperties = ["wallet_id", "address"];

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
SignMessageSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
SignMessageSource.prototype['address'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_share_holder_group
 */
SignMessageSource.prototype['mpc_used_key_share_holder_group'] = undefined;






export default SignMessageSource;

