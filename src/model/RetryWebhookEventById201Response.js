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

/**
 * The RetryWebhookEventById201Response model module.
 * @module model/RetryWebhookEventById201Response
 */
class RetryWebhookEventById201Response {
    /**
     * Constructs a new <code>RetryWebhookEventById201Response</code>.
     * @alias module:model/RetryWebhookEventById201Response
     */
    constructor() { 
        
        RetryWebhookEventById201Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RetryWebhookEventById201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetryWebhookEventById201Response} obj Optional instance to populate.
     * @return {module:model/RetryWebhookEventById201Response} The populated <code>RetryWebhookEventById201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetryWebhookEventById201Response();

            if (data.hasOwnProperty('retried')) {
                obj['retried'] = ApiClient.convertToType(data['retried'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RetryWebhookEventById201Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RetryWebhookEventById201Response</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Whether the retry request has been successfully sent.
 * @member {Boolean} retried
 */
RetryWebhookEventById201Response.prototype['retried'] = undefined;






export default RetryWebhookEventById201Response;

