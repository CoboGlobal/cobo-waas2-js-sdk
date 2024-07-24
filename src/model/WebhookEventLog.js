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
import WebhookEvent from './WebhookEvent';

/**
 * The WebhookEventLog model module.
 * @module model/WebhookEventLog
 * @version 0.4.4
 */
class WebhookEventLog {
    /**
     * Constructs a new <code>WebhookEventLog</code>.
     * The webhook event log.
     * @alias module:model/WebhookEventLog
     * @param id {String} The event log ID.
     * @param created_timestamp {Number} The time when the log was created, in Unix timestamp format, measured in milliseconds.
     * @param request_headers {Object} The request headers of the webhook event.
     * @param request_body {module:model/WebhookEvent} 
     * @param success {Boolean} Whether the webhook event has been successfully delivered.
     */
    constructor(id, created_timestamp, request_headers, request_body, success) { 
        
        WebhookEventLog.initialize(this, id, created_timestamp, request_headers, request_body, success);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created_timestamp, request_headers, request_body, success) { 
        obj['id'] = id;
        obj['created_timestamp'] = created_timestamp;
        obj['request_headers'] = request_headers;
        obj['request_body'] = request_body;
        obj['success'] = success;
    }

    /**
     * Constructs a <code>WebhookEventLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookEventLog} obj Optional instance to populate.
     * @return {module:model/WebhookEventLog} The populated <code>WebhookEventLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEventLog();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('request_headers')) {
                obj['request_headers'] = ApiClient.convertToType(data['request_headers'], Object);
            }
            if (data.hasOwnProperty('request_body')) {
                obj['request_body'] = WebhookEvent.constructFromObject(data['request_body']);
            }
            if (data.hasOwnProperty('response_body')) {
                obj['response_body'] = ApiClient.convertToType(data['response_body'], Object);
            }
            if (data.hasOwnProperty('response_status_code')) {
                obj['response_status_code'] = ApiClient.convertToType(data['response_status_code'], 'Number');
            }
            if (data.hasOwnProperty('response_time')) {
                obj['response_time'] = ApiClient.convertToType(data['response_time'], 'Number');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('failure_reason')) {
                obj['failure_reason'] = ApiClient.convertToType(data['failure_reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookEventLog</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookEventLog</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookEventLog.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `request_body`
        if (data['request_body']) { // data not null
          WebhookEvent.validateJSON(data['request_body']);
        }
        // ensure the json data is a string
        if (data['failure_reason'] && !(typeof data['failure_reason'] === 'string' || data['failure_reason'] instanceof String)) {
            throw new Error("Expected the field `failure_reason` to be a primitive type in the JSON string but got " + data['failure_reason']);
        }

        return true;
    }


}

WebhookEventLog.RequiredProperties = ["id", "created_timestamp", "request_headers", "request_body", "success"];

/**
 * The event log ID.
 * @member {String} id
 */
WebhookEventLog.prototype['id'] = undefined;

/**
 * The time when the log was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
WebhookEventLog.prototype['created_timestamp'] = undefined;

/**
 * The request headers of the webhook event.
 * @member {Object} request_headers
 */
WebhookEventLog.prototype['request_headers'] = undefined;

/**
 * @member {module:model/WebhookEvent} request_body
 */
WebhookEventLog.prototype['request_body'] = undefined;

/**
 * The response body of the webhook event.
 * @member {Object} response_body
 */
WebhookEventLog.prototype['response_body'] = undefined;

/**
 * The response status code of the webhook event.
 * @member {Number} response_status_code
 */
WebhookEventLog.prototype['response_status_code'] = undefined;

/**
 * The response time of the webhook event, in milliseconds.
 * @member {Number} response_time
 */
WebhookEventLog.prototype['response_time'] = undefined;

/**
 * Whether the webhook event has been successfully delivered.
 * @member {Boolean} success
 */
WebhookEventLog.prototype['success'] = undefined;

/**
 * The reason why the webhook event fails to be delivered.
 * @member {String} failure_reason
 */
WebhookEventLog.prototype['failure_reason'] = undefined;






export default WebhookEventLog;

