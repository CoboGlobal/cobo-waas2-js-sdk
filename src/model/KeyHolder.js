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
import KeyHolderStatus from './KeyHolderStatus';
import KeyHolderType from './KeyHolderType';

/**
 * The KeyHolder model module.
 * @module model/KeyHolder
 * @version 0.2.7
 */
class KeyHolder {
    /**
     * Constructs a new <code>KeyHolder</code>.
     * The data for MPC Wallets&#39; key share holder information.
     * @alias module:model/KeyHolder
     */
    constructor() { 
        
        KeyHolder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyHolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyHolder} obj Optional instance to populate.
     * @return {module:model/KeyHolder} The populated <code>KeyHolder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyHolder();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = KeyHolderType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('tss_node_id')) {
                obj['tss_node_id'] = ApiClient.convertToType(data['tss_node_id'], 'String');
            }
            if (data.hasOwnProperty('online')) {
                obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = KeyHolderStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeyHolder</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeyHolder</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['tss_node_id'] && !(typeof data['tss_node_id'] === 'string' || data['tss_node_id'] instanceof String)) {
            throw new Error("Expected the field `tss_node_id` to be a primitive type in the JSON string but got " + data['tss_node_id']);
        }

        return true;
    }


}



/**
 * The key share holder name.
 * @member {String} name
 */
KeyHolder.prototype['name'] = undefined;

/**
 * @member {module:model/KeyHolderType} type
 */
KeyHolder.prototype['type'] = undefined;

/**
 * Key share holder's TSS Node ID.
 * @member {String} tss_node_id
 */
KeyHolder.prototype['tss_node_id'] = undefined;

/**
 * Whether the key share holder's TSS Node is online. - `true`: The TSS Node is online.  - `false`: The TSS Node is offline. 
 * @member {Boolean} online
 */
KeyHolder.prototype['online'] = undefined;

/**
 * @member {module:model/KeyHolderStatus} status
 */
KeyHolder.prototype['status'] = undefined;






export default KeyHolder;

