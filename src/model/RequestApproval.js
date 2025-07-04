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
import AppWorkflowField from './AppWorkflowField';

/**
 * The RequestApproval model module.
 * @module model/RequestApproval
 */
class RequestApproval {
    /**
     * Constructs a new <code>RequestApproval</code>.
     * The information about a approval request.
     * @alias module:model/RequestApproval
     * @param operation_id {String} The unique ID of the approval workflow.
     * @param request_id {String} An identifier provided by you to track this request.
     * @param initiator_email {String} The email of the user who requested the approval.
     * @param fields {Array.<module:model/AppWorkflowField>} 
     * @param guard_template {String} The template of a Cobo Guard message. Please connect [help@cobo.com](mailto:help@cobo.com) to get the template content.
     */
    constructor(operation_id, request_id, initiator_email, fields, guard_template) { 
        
        RequestApproval.initialize(this, operation_id, request_id, initiator_email, fields, guard_template);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operation_id, request_id, initiator_email, fields, guard_template) { 
        obj['operation_id'] = operation_id;
        obj['request_id'] = request_id;
        obj['initiator_email'] = initiator_email;
        obj['fields'] = fields;
        obj['guard_template'] = guard_template;
    }

    /**
     * Constructs a <code>RequestApproval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestApproval} obj Optional instance to populate.
     * @return {module:model/RequestApproval} The populated <code>RequestApproval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestApproval();

            if (data.hasOwnProperty('operation_id')) {
                obj['operation_id'] = ApiClient.convertToType(data['operation_id'], 'String');
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('initiator_email')) {
                obj['initiator_email'] = ApiClient.convertToType(data['initiator_email'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [AppWorkflowField]);
            }
            if (data.hasOwnProperty('guard_template')) {
                obj['guard_template'] = ApiClient.convertToType(data['guard_template'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RequestApproval</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RequestApproval</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RequestApproval.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['operation_id'] && !(typeof data['operation_id'] === 'string' || data['operation_id'] instanceof String)) {
            throw new Error("Expected the field `operation_id` to be a primitive type in the JSON string but got " + data['operation_id']);
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['initiator_email'] && !(typeof data['initiator_email'] === 'string' || data['initiator_email'] instanceof String)) {
            throw new Error("Expected the field `initiator_email` to be a primitive type in the JSON string but got " + data['initiator_email']);
        }
        if (data['fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fields'])) {
                throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
            }
            // validate the optional field `fields` (array)
            for (const item of data['fields']) {
                AppWorkflowField.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['guard_template'] && !(typeof data['guard_template'] === 'string' || data['guard_template'] instanceof String)) {
            throw new Error("Expected the field `guard_template` to be a primitive type in the JSON string but got " + data['guard_template']);
        }

        return true;
    }


}

RequestApproval.RequiredProperties = ["operation_id", "request_id", "initiator_email", "fields", "guard_template"];

/**
 * The unique ID of the approval workflow.
 * @member {String} operation_id
 */
RequestApproval.prototype['operation_id'] = undefined;

/**
 * An identifier provided by you to track this request.
 * @member {String} request_id
 */
RequestApproval.prototype['request_id'] = undefined;

/**
 * The email of the user who requested the approval.
 * @member {String} initiator_email
 */
RequestApproval.prototype['initiator_email'] = undefined;

/**
 * @member {Array.<module:model/AppWorkflowField>} fields
 */
RequestApproval.prototype['fields'] = undefined;

/**
 * The template of a Cobo Guard message. Please connect [help@cobo.com](mailto:help@cobo.com) to get the template content.
 * @member {String} guard_template
 */
RequestApproval.prototype['guard_template'] = undefined;






export default RequestApproval;

