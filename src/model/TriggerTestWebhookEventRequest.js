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
import WebhookEventType from './WebhookEventType';

/**
 * The TriggerTestWebhookEventRequest model module.
 * @module model/TriggerTestWebhookEventRequest
 */
class TriggerTestWebhookEventRequest {
    /**
     * Constructs a new <code>TriggerTestWebhookEventRequest</code>.
     * @alias module:model/TriggerTestWebhookEventRequest
     * @param event_type {module:model/WebhookEventType} 
     */
    constructor(event_type) { 
        
        TriggerTestWebhookEventRequest.initialize(this, event_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, event_type) { 
        obj['event_type'] = event_type;
    }

    /**
     * Constructs a <code>TriggerTestWebhookEventRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerTestWebhookEventRequest} obj Optional instance to populate.
     * @return {module:model/TriggerTestWebhookEventRequest} The populated <code>TriggerTestWebhookEventRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerTestWebhookEventRequest();

            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = WebhookEventType.constructFromObject(data['event_type']);
            }
            if (data.hasOwnProperty('override_data')) {
                obj['override_data'] = ApiClient.convertToType(data['override_data'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TriggerTestWebhookEventRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TriggerTestWebhookEventRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TriggerTestWebhookEventRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

TriggerTestWebhookEventRequest.RequiredProperties = ["event_type"];

/**
 * @member {module:model/WebhookEventType} event_type
 */
TriggerTestWebhookEventRequest.prototype['event_type'] = undefined;

/**
 * An object for customization of the webhook event payload. You only need to include the fields you want to customize.   The provided fields must match the webhook event data structure, depending on the specified event type. For a complete introduction of the webhook event data structure, refer to the `data.data` property in the response of [List all webhook events](/v2/api-references/developers--webhooks/list-all-webhook-events).  If this property is not provided, a default payload will be returned. 
 * @member {Object} override_data
 */
TriggerTestWebhookEventRequest.prototype['override_data'] = undefined;






export default TriggerTestWebhookEventRequest;
