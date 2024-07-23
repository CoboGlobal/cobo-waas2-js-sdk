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
import KeyShareHolder from './KeyShareHolder';
import KeyShareHolderGroupStatus from './KeyShareHolderGroupStatus';
import KeyShareHolderGroupType from './KeyShareHolderGroupType';
import TSSGroups from './TSSGroups';

/**
 * The KeyShareHolderGroup model module.
 * @module model/KeyShareHolderGroup
 * @version 0.4.4
 */
class KeyShareHolderGroup {
    /**
     * Constructs a new <code>KeyShareHolderGroup</code>.
     * The data for key share holder group information.
     * @alias module:model/KeyShareHolderGroup
     */
    constructor() { 
        
        KeyShareHolderGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyShareHolderGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyShareHolderGroup} obj Optional instance to populate.
     * @return {module:model/KeyShareHolderGroup} The populated <code>KeyShareHolderGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyShareHolderGroup();

            if (data.hasOwnProperty('key_share_holder_group_id')) {
                obj['key_share_holder_group_id'] = ApiClient.convertToType(data['key_share_holder_group_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = KeyShareHolderGroupType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('tss_key_share_groups')) {
                obj['tss_key_share_groups'] = ApiClient.convertToType(data['tss_key_share_groups'], [TSSGroups]);
            }
            if (data.hasOwnProperty('key_share_holders')) {
                obj['key_share_holders'] = ApiClient.convertToType(data['key_share_holders'], [KeyShareHolder]);
            }
            if (data.hasOwnProperty('node_count')) {
                obj['node_count'] = ApiClient.convertToType(data['node_count'], 'Number');
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = KeyShareHolderGroupStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('create_timestamp')) {
                obj['create_timestamp'] = ApiClient.convertToType(data['create_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeyShareHolderGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeyShareHolderGroup</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key_share_holder_group_id'] && !(typeof data['key_share_holder_group_id'] === 'string' || data['key_share_holder_group_id'] instanceof String)) {
            throw new Error("Expected the field `key_share_holder_group_id` to be a primitive type in the JSON string but got " + data['key_share_holder_group_id']);
        }
        if (data['tss_key_share_groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tss_key_share_groups'])) {
                throw new Error("Expected the field `tss_key_share_groups` to be an array in the JSON data but got " + data['tss_key_share_groups']);
            }
            // validate the optional field `tss_key_share_groups` (array)
            for (const item of data['tss_key_share_groups']) {
                TSSGroups.validateJSON(item);
            };
        }
        if (data['key_share_holders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['key_share_holders'])) {
                throw new Error("Expected the field `key_share_holders` to be an array in the JSON data but got " + data['key_share_holders']);
            }
            // validate the optional field `key_share_holders` (array)
            for (const item of data['key_share_holders']) {
                KeyShareHolder.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The key share holder group ID.
 * @member {String} key_share_holder_group_id
 */
KeyShareHolderGroup.prototype['key_share_holder_group_id'] = undefined;

/**
 * @member {module:model/KeyShareHolderGroupType} type
 */
KeyShareHolderGroup.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/TSSGroups>} tss_key_share_groups
 */
KeyShareHolderGroup.prototype['tss_key_share_groups'] = undefined;

/**
 * @member {Array.<module:model/KeyShareHolder>} key_share_holders
 */
KeyShareHolderGroup.prototype['key_share_holders'] = undefined;

/**
 * The number of key share holders in this key share holder group.
 * @member {Number} node_count
 */
KeyShareHolderGroup.prototype['node_count'] = undefined;

/**
 * The number of key share holders required to approve each operation in this key share holder group.
 * @member {Number} threshold
 */
KeyShareHolderGroup.prototype['threshold'] = undefined;

/**
 * @member {module:model/KeyShareHolderGroupStatus} status
 */
KeyShareHolderGroup.prototype['status'] = undefined;

/**
 * The key share holder group's creation time in Unix timestamp format, measured in milliseconds.
 * @member {Number} create_timestamp
 */
KeyShareHolderGroup.prototype['create_timestamp'] = undefined;






export default KeyShareHolderGroup;

