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
import BaseContractCallSource from './BaseContractCallSource';
import MpcSigningGroup from './MpcSigningGroup';

/**
 * The MpcContractCallSource model module.
 * @module model/MpcContractCallSource
 * @version 0.1.0
 */
class MpcContractCallSource {
    /**
     * Constructs a new <code>MpcContractCallSource</code>.
     * @alias module:model/MpcContractCallSource
     * @implements module:model/BaseContractCallSource
     * @param sourceType {module:model/MpcContractCallSource.SourceTypeEnum} 
     * @param walletId {String} Unique id of the wallet to initiate contract call from.
     * @param addressStr {String} From address
     * @param mpcUsedKeyGroup {module:model/MpcSigningGroup} 
     */
    constructor(sourceType, walletId, addressStr, mpcUsedKeyGroup) { 
        BaseContractCallSource.initialize(this, sourceType, walletId, addressStr);
        MpcContractCallSource.initialize(this, sourceType, walletId, addressStr, mpcUsedKeyGroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, walletId, addressStr, mpcUsedKeyGroup) { 
        obj['source_type'] = sourceType;
        obj['wallet_id'] = walletId;
        obj['address_str'] = addressStr;
        obj['mpc_used_key_group'] = mpcUsedKeyGroup;
    }

    /**
     * Constructs a <code>MpcContractCallSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MpcContractCallSource} obj Optional instance to populate.
     * @return {module:model/MpcContractCallSource} The populated <code>MpcContractCallSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MpcContractCallSource();
            BaseContractCallSource.constructFromObject(data, obj);

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
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
     * Validates the JSON data with respect to <code>MpcContractCallSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MpcContractCallSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MpcContractCallSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
            throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
        }
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

MpcContractCallSource.RequiredProperties = ["source_type", "wallet_id", "address_str", "mpc_used_key_group"];

/**
 * @member {module:model/MpcContractCallSource.SourceTypeEnum} source_type
 */
MpcContractCallSource.prototype['source_type'] = undefined;

/**
 * Unique id of the wallet to initiate contract call from.
 * @member {String} wallet_id
 */
MpcContractCallSource.prototype['wallet_id'] = undefined;

/**
 * From address
 * @member {String} address_str
 */
MpcContractCallSource.prototype['address_str'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_group
 */
MpcContractCallSource.prototype['mpc_used_key_group'] = undefined;


// Implement BaseContractCallSource interface:
/**
 * @member {module:model/BaseContractCallSource.SourceTypeEnum} source_type
 */
BaseContractCallSource.prototype['source_type'] = undefined;
/**
 * Unique id of the wallet to initiate contract call from.
 * @member {String} wallet_id
 */
BaseContractCallSource.prototype['wallet_id'] = undefined;
/**
 * From address
 * @member {String} address_str
 */
BaseContractCallSource.prototype['address_str'] = undefined;



/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
MpcContractCallSource['SourceTypeEnum'] = {

    /**
     * value: "Org-Controlled"
     * @const
     */
    "Org-Controlled": "Org-Controlled",

    /**
     * value: "User-Controlled"
     * @const
     */
    "User-Controlled": "User-Controlled",

    /**
     * value: "Safe{Wallet}"
     * @const
     */
    "Safe{Wallet}": "Safe{Wallet}"
};



export default MpcContractCallSource;

