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
 * The SafeContractCallSourceAllOfDelegate model module.
 * @module model/SafeContractCallSourceAllOfDelegate
 * @version 0.2.5
 */
class SafeContractCallSourceAllOfDelegate {
    /**
     * Constructs a new <code>SafeContractCallSourceAllOfDelegate</code>.
     * @alias module:model/SafeContractCallSourceAllOfDelegate
     */
    constructor() { 
        
        SafeContractCallSourceAllOfDelegate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SafeContractCallSourceAllOfDelegate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SafeContractCallSourceAllOfDelegate} obj Optional instance to populate.
     * @return {module:model/SafeContractCallSourceAllOfDelegate} The populated <code>SafeContractCallSourceAllOfDelegate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SafeContractCallSourceAllOfDelegate();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = ApiClient.convertToType(data['wallet_type'], 'String');
            }
            if (data.hasOwnProperty('wallet_address')) {
                obj['wallet_address'] = ApiClient.convertToType(data['wallet_address'], 'String');
            }
            if (data.hasOwnProperty('mpc_used_key_group')) {
                obj['mpc_used_key_group'] = MpcSigningGroup.constructFromObject(data['mpc_used_key_group']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SafeContractCallSourceAllOfDelegate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SafeContractCallSourceAllOfDelegate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['wallet_type'] && !(typeof data['wallet_type'] === 'string' || data['wallet_type'] instanceof String)) {
            throw new Error("Expected the field `wallet_type` to be a primitive type in the JSON string but got " + data['wallet_type']);
        }
        // ensure the json data is a string
        if (data['wallet_address'] && !(typeof data['wallet_address'] === 'string' || data['wallet_address'] instanceof String)) {
            throw new Error("Expected the field `wallet_address` to be a primitive type in the JSON string but got " + data['wallet_address']);
        }
        // validate the optional field `mpc_used_key_group`
        if (data['mpc_used_key_group']) { // data not null
          MpcSigningGroup.validateJSON(data['mpc_used_key_group']);
        }

        return true;
    }


}



/**
 * The wallet ID of the Delegate. This is required for initiating a transfer from a Smart Contract Wallet (Safe{Wallet}).
 * @member {String} wallet_id
 */
SafeContractCallSourceAllOfDelegate.prototype['wallet_id'] = undefined;

/**
 * The wallet type of the Delegate. This is required for initiating a transfer from a Smart Contract Wallet (Safe{Wallet}).
 * @member {String} wallet_type
 */
SafeContractCallSourceAllOfDelegate.prototype['wallet_type'] = undefined;

/**
 * The wallet address of the Delegate. This is required for initiating a transfer from a Smart Contract Wallet (Safe{Wallet}).
 * @member {String} wallet_address
 */
SafeContractCallSourceAllOfDelegate.prototype['wallet_address'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_group
 */
SafeContractCallSourceAllOfDelegate.prototype['mpc_used_key_group'] = undefined;






export default SafeContractCallSourceAllOfDelegate;

