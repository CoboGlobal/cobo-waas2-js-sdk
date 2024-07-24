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
 * The MPCDelegate model module.
 * @module model/MPCDelegate
 * @version 0.4.5
 */
class MPCDelegate {
    /**
     * Constructs a new <code>MPCDelegate</code>.
     * The information about the MPC delegate.
     * @alias module:model/MPCDelegate
     * @param delegateType {module:model/MPCDelegate.DelegateTypeEnum} The delegator subtype. Possible values include: - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets). - `User-Controlled`: MPC Wallets (User-Controlled Wallets). 
     * @param walletId {String} The wallet ID of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
     * @param address {String} The wallet address of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
     */
    constructor(delegateType, walletId, address) { 
        
        MPCDelegate.initialize(this, delegateType, walletId, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, delegateType, walletId, address) { 
        obj['delegate_type'] = delegateType || 'Org-Controlled';
        obj['wallet_id'] = walletId;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>MPCDelegate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MPCDelegate} obj Optional instance to populate.
     * @return {module:model/MPCDelegate} The populated <code>MPCDelegate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MPCDelegate();

            if (data.hasOwnProperty('delegate_type')) {
                obj['delegate_type'] = ApiClient.convertToType(data['delegate_type'], 'String');
            }
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
     * Validates the JSON data with respect to <code>MPCDelegate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MPCDelegate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MPCDelegate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['delegate_type'] && !(typeof data['delegate_type'] === 'string' || data['delegate_type'] instanceof String)) {
            throw new Error("Expected the field `delegate_type` to be a primitive type in the JSON string but got " + data['delegate_type']);
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

MPCDelegate.RequiredProperties = ["delegate_type", "wallet_id", "address"];

/**
 * The delegator subtype. Possible values include: - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets). - `User-Controlled`: MPC Wallets (User-Controlled Wallets). 
 * @member {module:model/MPCDelegate.DelegateTypeEnum} delegate_type
 * @default 'Org-Controlled'
 */
MPCDelegate.prototype['delegate_type'] = 'Org-Controlled';

/**
 * The wallet ID of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
 * @member {String} wallet_id
 */
MPCDelegate.prototype['wallet_id'] = undefined;

/**
 * The wallet address of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
 * @member {String} address
 */
MPCDelegate.prototype['address'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_share_holder_group
 */
MPCDelegate.prototype['mpc_used_key_share_holder_group'] = undefined;





/**
 * Allowed values for the <code>delegate_type</code> property.
 * @enum {String}
 * @readonly
 */
MPCDelegate['DelegateTypeEnum'] = {

    /**
     * value: "Org-Controlled"
     * @const
     */
    "Org-Controlled": "Org-Controlled",

    /**
     * value: "User-Controlled"
     * @const
     */
    "User-Controlled": "User-Controlled"
};



export default MPCDelegate;

