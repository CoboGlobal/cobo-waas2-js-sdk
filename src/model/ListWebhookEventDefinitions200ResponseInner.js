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
import WebhookEventType from './WebhookEventType';

/**
 * The ListWebhookEventDefinitions200ResponseInner model module.
 * @module model/ListWebhookEventDefinitions200ResponseInner
 * @version 0.1.0
 */
class ListWebhookEventDefinitions200ResponseInner {
    /**
     * Constructs a new <code>ListWebhookEventDefinitions200ResponseInner</code>.
     * @alias module:model/ListWebhookEventDefinitions200ResponseInner
     */
    constructor() { 
        
        ListWebhookEventDefinitions200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListWebhookEventDefinitions200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWebhookEventDefinitions200ResponseInner} obj Optional instance to populate.
     * @return {module:model/ListWebhookEventDefinitions200ResponseInner} The populated <code>ListWebhookEventDefinitions200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWebhookEventDefinitions200ResponseInner();

            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = WebhookEventType.constructFromObject(data['event_type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListWebhookEventDefinitions200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListWebhookEventDefinitions200ResponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebhookEventType} event_type
 */
ListWebhookEventDefinitions200ResponseInner.prototype['event_type'] = undefined;

/**
 * The description of the webhook event type.
 * @member {String} description
 */
ListWebhookEventDefinitions200ResponseInner.prototype['description'] = undefined;






export default ListWebhookEventDefinitions200ResponseInner;

