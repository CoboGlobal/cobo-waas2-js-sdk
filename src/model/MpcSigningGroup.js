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
 * The MpcSigningGroup model module.
 * @module model/MpcSigningGroup
 * @version 0.2.7
 */
class MpcSigningGroup {
    /**
     * Constructs a new <code>MpcSigningGroup</code>.
     * The information about the Signing Group of an MPC Wallet.
     * @alias module:model/MpcSigningGroup
     */
    constructor() { 
        
        MpcSigningGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MpcSigningGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MpcSigningGroup} obj Optional instance to populate.
     * @return {module:model/MpcSigningGroup} The populated <code>MpcSigningGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MpcSigningGroup();

            if (data.hasOwnProperty('used_key_share_holder_group_id')) {
                obj['used_key_share_holder_group_id'] = ApiClient.convertToType(data['used_key_share_holder_group_id'], 'String');
            }
            if (data.hasOwnProperty('used_tss_node_ids')) {
                obj['used_tss_node_ids'] = ApiClient.convertToType(data['used_tss_node_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MpcSigningGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MpcSigningGroup</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['used_key_share_holder_group_id'] && !(typeof data['used_key_share_holder_group_id'] === 'string' || data['used_key_share_holder_group_id'] instanceof String)) {
            throw new Error("Expected the field `used_key_share_holder_group_id` to be a primitive type in the JSON string but got " + data['used_key_share_holder_group_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['used_tss_node_ids'])) {
            throw new Error("Expected the field `used_tss_node_ids` to be an array in the JSON data but got " + data['used_tss_node_ids']);
        }

        return true;
    }


}



/**
 * The ID of the Signing Group.
 * @member {String} used_key_share_holder_group_id
 */
MpcSigningGroup.prototype['used_key_share_holder_group_id'] = undefined;

/**
 * The ID of the TSS Nodes that are required to participate in the signature.
 * @member {Array.<String>} used_tss_node_ids
 */
MpcSigningGroup.prototype['used_tss_node_ids'] = undefined;






export default MpcSigningGroup;

