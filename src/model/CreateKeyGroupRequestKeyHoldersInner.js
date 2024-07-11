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
import KeyHolderType from './KeyHolderType';

/**
 * The CreateKeyGroupRequestKeyHoldersInner model module.
 * @module model/CreateKeyGroupRequestKeyHoldersInner
 * @version 0.1.0
 */
class CreateKeyGroupRequestKeyHoldersInner {
    /**
     * Constructs a new <code>CreateKeyGroupRequestKeyHoldersInner</code>.
     * When creating MainKeyGroup and SigningKeyGroup, the Cobo key share holder will be added automatically.
     * @alias module:model/CreateKeyGroupRequestKeyHoldersInner
     */
    constructor() { 
        
        CreateKeyGroupRequestKeyHoldersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateKeyGroupRequestKeyHoldersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateKeyGroupRequestKeyHoldersInner} obj Optional instance to populate.
     * @return {module:model/CreateKeyGroupRequestKeyHoldersInner} The populated <code>CreateKeyGroupRequestKeyHoldersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateKeyGroupRequestKeyHoldersInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = KeyHolderType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('tss_node_id')) {
                obj['tss_node_id'] = ApiClient.convertToType(data['tss_node_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateKeyGroupRequestKeyHoldersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateKeyGroupRequestKeyHoldersInner</code>.
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
 * Key share holder's name.
 * @member {String} name
 */
CreateKeyGroupRequestKeyHoldersInner.prototype['name'] = undefined;

/**
 * @member {module:model/KeyHolderType} type
 */
CreateKeyGroupRequestKeyHoldersInner.prototype['type'] = undefined;

/**
 * The TSS Node ID.
 * @member {String} tss_node_id
 */
CreateKeyGroupRequestKeyHoldersInner.prototype['tss_node_id'] = undefined;






export default CreateKeyGroupRequestKeyHoldersInner;

