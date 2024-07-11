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
 * The MPCProject model module.
 * @module model/MPCProject
 * @version 0.1.0
 */
class MPCProject {
    /**
     * Constructs a new <code>MPCProject</code>.
     * The data for project information.
     * @alias module:model/MPCProject
     */
    constructor() { 
        
        MPCProject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MPCProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MPCProject} obj Optional instance to populate.
     * @return {module:model/MPCProject} The populated <code>MPCProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MPCProject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_count')) {
                obj['node_count'] = ApiClient.convertToType(data['node_count'], 'Number');
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('create_timestamp')) {
                obj['create_timestamp'] = ApiClient.convertToType(data['create_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MPCProject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MPCProject</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['org_id'] && !(typeof data['org_id'] === 'string' || data['org_id'] instanceof String)) {
            throw new Error("Expected the field `org_id` to be a primitive type in the JSON string but got " + data['org_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The project ID.
 * @member {String} id
 */
MPCProject.prototype['id'] = undefined;

/**
 * The [Organization](https://manuals.cobo.com/en/portal/organization/introduction) ID.
 * @member {String} org_id
 */
MPCProject.prototype['org_id'] = undefined;

/**
 * The project name.
 * @member {String} name
 */
MPCProject.prototype['name'] = undefined;

/**
 * The number of key share holders in the project.
 * @member {Number} node_count
 */
MPCProject.prototype['node_count'] = undefined;

/**
 * The number of key share holders required to sign an operation in the project.
 * @member {Number} threshold
 */
MPCProject.prototype['threshold'] = undefined;

/**
 * The project's creation time in Unix timestamp format, measured in milliseconds.
 * @member {Number} create_timestamp
 */
MPCProject.prototype['create_timestamp'] = undefined;






export default MPCProject;

