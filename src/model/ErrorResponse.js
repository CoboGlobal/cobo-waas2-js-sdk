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
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 0.4.4
 */
class ErrorResponse {
    /**
     * Constructs a new <code>ErrorResponse</code>.
     * The response of a failed request.
     * @alias module:model/ErrorResponse
     * @param errorCode {Number} The error code.
     * @param errorMessage {String} The error description.
     * @param errorId {String} The error log ID. You can provide the error ID when submitting a ticket to help Cobo to locate the issue.
     */
    constructor(errorCode, errorMessage, errorId) { 
        
        ErrorResponse.initialize(this, errorCode, errorMessage, errorId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorCode, errorMessage, errorId) { 
        obj['error_code'] = errorCode;
        obj['error_message'] = errorMessage;
        obj['error_id'] = errorId;
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponse} obj Optional instance to populate.
     * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            if (data.hasOwnProperty('error_code')) {
                obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('error_id')) {
                obj['error_id'] = ApiClient.convertToType(data['error_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ErrorResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }
        // ensure the json data is a string
        if (data['error_id'] && !(typeof data['error_id'] === 'string' || data['error_id'] instanceof String)) {
            throw new Error("Expected the field `error_id` to be a primitive type in the JSON string but got " + data['error_id']);
        }

        return true;
    }


}

ErrorResponse.RequiredProperties = ["error_code", "error_message", "error_id"];

/**
 * The error code.
 * @member {Number} error_code
 */
ErrorResponse.prototype['error_code'] = undefined;

/**
 * The error description.
 * @member {String} error_message
 */
ErrorResponse.prototype['error_message'] = undefined;

/**
 * The error log ID. You can provide the error ID when submitting a ticket to help Cobo to locate the issue.
 * @member {String} error_id
 */
ErrorResponse.prototype['error_id'] = undefined;






export default ErrorResponse;

