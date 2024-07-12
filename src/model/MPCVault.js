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
import MPCVaultType from './MPCVaultType';
import RootPubkey from './RootPubkey';

/**
 * The MPCVault model module.
 * @module model/MPCVault
 * @version 0.2.7
 */
class MPCVault {
    /**
     * Constructs a new <code>MPCVault</code>.
     * The data for vault information.
     * @alias module:model/MPCVault
     */
    constructor() { 
        
        MPCVault.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MPCVault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MPCVault} obj Optional instance to populate.
     * @return {module:model/MPCVault} The populated <code>MPCVault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MPCVault();

            if (data.hasOwnProperty('vault_id')) {
                obj['vault_id'] = ApiClient.convertToType(data['vault_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MPCVaultType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('root_pubkeys')) {
                obj['root_pubkeys'] = ApiClient.convertToType(data['root_pubkeys'], [RootPubkey]);
            }
            if (data.hasOwnProperty('create_timestamp')) {
                obj['create_timestamp'] = ApiClient.convertToType(data['create_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MPCVault</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MPCVault</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['vault_id'] && !(typeof data['vault_id'] === 'string' || data['vault_id'] instanceof String)) {
            throw new Error("Expected the field `vault_id` to be a primitive type in the JSON string but got " + data['vault_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['root_pubkeys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['root_pubkeys'])) {
                throw new Error("Expected the field `root_pubkeys` to be an array in the JSON data but got " + data['root_pubkeys']);
            }
            // validate the optional field `root_pubkeys` (array)
            for (const item of data['root_pubkeys']) {
                RootPubkey.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The vault ID.
 * @member {String} vault_id
 */
MPCVault.prototype['vault_id'] = undefined;

/**
 * The vault name.
 * @member {String} name
 */
MPCVault.prototype['name'] = undefined;

/**
 * @member {module:model/MPCVaultType} type
 */
MPCVault.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/RootPubkey>} root_pubkeys
 */
MPCVault.prototype['root_pubkeys'] = undefined;

/**
 * The vault's creation time in Unix timestamp format, measured in milliseconds.
 * @member {Number} create_timestamp
 */
MPCVault.prototype['create_timestamp'] = undefined;






export default MPCVault;

