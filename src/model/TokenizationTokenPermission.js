/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TokenizationTokenPermissionType from './TokenizationTokenPermissionType';

/**
 * The TokenizationTokenPermission model module.
 * @module model/TokenizationTokenPermission
 */
class TokenizationTokenPermission {
    /**
     * Constructs a new <code>TokenizationTokenPermission</code>.
     * @alias module:model/TokenizationTokenPermission
     * @param permission_type {module:model/TokenizationTokenPermissionType} 
     * @param name {String} The display name of the permission.
     * @param description {String} Detailed description of what this permission allows.
     * @param enabled {Boolean} Whether this permission is currently enabled.
     */
    constructor(permission_type, name, description, enabled) { 
        
        TokenizationTokenPermission.initialize(this, permission_type, name, description, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, permission_type, name, description, enabled) { 
        obj['permission_type'] = permission_type;
        obj['name'] = name;
        obj['description'] = description;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>TokenizationTokenPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationTokenPermission} obj Optional instance to populate.
     * @return {module:model/TokenizationTokenPermission} The populated <code>TokenizationTokenPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationTokenPermission();

            if (data.hasOwnProperty('permission_type')) {
                obj['permission_type'] = TokenizationTokenPermissionType.constructFromObject(data['permission_type']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationTokenPermission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationTokenPermission</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenizationTokenPermission.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

TokenizationTokenPermission.RequiredProperties = ["permission_type", "name", "description", "enabled"];

/**
 * @member {module:model/TokenizationTokenPermissionType} permission_type
 */
TokenizationTokenPermission.prototype['permission_type'] = undefined;

/**
 * The display name of the permission.
 * @member {String} name
 */
TokenizationTokenPermission.prototype['name'] = undefined;

/**
 * Detailed description of what this permission allows.
 * @member {String} description
 */
TokenizationTokenPermission.prototype['description'] = undefined;

/**
 * Whether this permission is currently enabled.
 * @member {Boolean} enabled
 */
TokenizationTokenPermission.prototype['enabled'] = undefined;






export default TokenizationTokenPermission;

