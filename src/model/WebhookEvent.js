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
import Transaction from './Transaction';
import WebhookEventStatus from './WebhookEventStatus';
import WebhookEventType from './WebhookEventType';

/**
 * The WebhookEvent model module.
 * @module model/WebhookEvent
 * @version 0.2.7
 */
class WebhookEvent {
    /**
     * Constructs a new <code>WebhookEvent</code>.
     * The webhook event payload.
     * @alias module:model/WebhookEvent
     * @param id {String} The event ID.
     * @param url {String} The webhook endpoint URL.
     * @param createdTimestamp {Number} The time when the event occurred, in Unix timestamp format, measured in milliseconds.
     * @param type {module:model/WebhookEventType} 
     * @param data {module:model/Transaction} 
     */
    constructor(id, url, createdTimestamp, type, data) { 
        
        WebhookEvent.initialize(this, id, url, createdTimestamp, type, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, url, createdTimestamp, type, data) { 
        obj['id'] = id;
        obj['url'] = url;
        obj['created_timestamp'] = createdTimestamp;
        obj['type'] = type;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>WebhookEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookEvent} obj Optional instance to populate.
     * @return {module:model/WebhookEvent} The populated <code>WebhookEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEvent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = WebhookEventType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Transaction.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = WebhookEventStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('next_retry_timestamp')) {
                obj['next_retry_timestamp'] = ApiClient.convertToType(data['next_retry_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('retries_left')) {
                obj['retries_left'] = ApiClient.convertToType(data['retries_left'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookEvent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookEvent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          Transaction.validateJSON(data['data']);
        }

        return true;
    }


}

WebhookEvent.RequiredProperties = ["id", "url", "created_timestamp", "type", "data"];

/**
 * The event ID.
 * @member {String} id
 */
WebhookEvent.prototype['id'] = undefined;

/**
 * The webhook endpoint URL.
 * @member {String} url
 */
WebhookEvent.prototype['url'] = undefined;

/**
 * The time when the event occurred, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
WebhookEvent.prototype['created_timestamp'] = undefined;

/**
 * @member {module:model/WebhookEventType} type
 */
WebhookEvent.prototype['type'] = undefined;

/**
 * @member {module:model/Transaction} data
 */
WebhookEvent.prototype['data'] = undefined;

/**
 * @member {module:model/WebhookEventStatus} status
 */
WebhookEvent.prototype['status'] = undefined;

/**
 * The timestamp indicating the next scheduled retry to deliver this event, in Unix timestamp format, measured in milliseconds. This field is only present if the event status is `Retrying`. 
 * @member {Number} next_retry_timestamp
 */
WebhookEvent.prototype['next_retry_timestamp'] = undefined;

/**
 * The number of retries left. This field is only present if the event status is `Retrying`.
 * @member {Number} retries_left
 */
WebhookEvent.prototype['retries_left'] = undefined;






export default WebhookEvent;

