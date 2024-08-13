/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Pagination from './Pagination';
import WebhookEventLog from './WebhookEventLog';

/**
 * The ListWebhookEventLogs200Response model module.
 * @module model/ListWebhookEventLogs200Response
 */
class ListWebhookEventLogs200Response {
    /**
     * Constructs a new <code>ListWebhookEventLogs200Response</code>.
     * @alias module:model/ListWebhookEventLogs200Response
     */
    constructor() { 
        
        ListWebhookEventLogs200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListWebhookEventLogs200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWebhookEventLogs200Response} obj Optional instance to populate.
     * @return {module:model/ListWebhookEventLogs200Response} The populated <code>ListWebhookEventLogs200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWebhookEventLogs200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WebhookEventLog]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListWebhookEventLogs200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListWebhookEventLogs200Response</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                WebhookEventLog.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          Pagination.validateJSON(data['pagination']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/WebhookEventLog>} data
 */
ListWebhookEventLogs200Response.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
ListWebhookEventLogs200Response.prototype['pagination'] = undefined;






export default ListWebhookEventLogs200Response;
