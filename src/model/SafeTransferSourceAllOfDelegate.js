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
 * The SafeTransferSourceAllOfDelegate model module.
 * @module model/SafeTransferSourceAllOfDelegate
 * @version 0.1.0
 */
class SafeTransferSourceAllOfDelegate {
    /**
     * Constructs a new <code>SafeTransferSourceAllOfDelegate</code>.
     * @alias module:model/SafeTransferSourceAllOfDelegate
     */
    constructor() { 
        
        SafeTransferSourceAllOfDelegate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SafeTransferSourceAllOfDelegate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SafeTransferSourceAllOfDelegate} obj Optional instance to populate.
     * @return {module:model/SafeTransferSourceAllOfDelegate} The populated <code>SafeTransferSourceAllOfDelegate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SafeTransferSourceAllOfDelegate();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = ApiClient.convertToType(data['wallet_type'], 'String');
            }
            if (data.hasOwnProperty('wallet_address')) {
                obj['wallet_address'] = ApiClient.convertToType(data['wallet_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SafeTransferSourceAllOfDelegate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SafeTransferSourceAllOfDelegate</code>.
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

        return true;
    }


}



/**
 * The wallet ID of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}). 
 * @member {String} wallet_id
 */
SafeTransferSourceAllOfDelegate.prototype['wallet_id'] = undefined;

/**
 * The wallet type of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
 * @member {String} wallet_type
 */
SafeTransferSourceAllOfDelegate.prototype['wallet_type'] = undefined;

/**
 * The wallet address of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
 * @member {String} wallet_address
 */
SafeTransferSourceAllOfDelegate.prototype['wallet_address'] = undefined;






export default SafeTransferSourceAllOfDelegate;

