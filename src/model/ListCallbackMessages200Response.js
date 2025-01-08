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
import CallbackMessage from './CallbackMessage';
import Pagination from './Pagination';

/**
 * The ListCallbackMessages200Response model module.
 * @module model/ListCallbackMessages200Response
 */
class ListCallbackMessages200Response {
    /**
     * Constructs a new <code>ListCallbackMessages200Response</code>.
     * @alias module:model/ListCallbackMessages200Response
     * @param data {Array.<module:model/CallbackMessage>} 
     * @param pagination {module:model/Pagination} 
     */
    constructor(data, pagination) { 
        
        ListCallbackMessages200Response.initialize(this, data, pagination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, pagination) { 
        obj['data'] = data;
        obj['pagination'] = pagination;
    }

    /**
     * Constructs a <code>ListCallbackMessages200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListCallbackMessages200Response} obj Optional instance to populate.
     * @return {module:model/ListCallbackMessages200Response} The populated <code>ListCallbackMessages200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListCallbackMessages200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CallbackMessage]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListCallbackMessages200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListCallbackMessages200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListCallbackMessages200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                CallbackMessage.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          if (!!Pagination.validateJSON) {
            Pagination.validateJSON(data['pagination']);
          }
        }

        return true;
    }


}

ListCallbackMessages200Response.RequiredProperties = ["data", "pagination"];

/**
 * @member {Array.<module:model/CallbackMessage>} data
 */
ListCallbackMessages200Response.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
ListCallbackMessages200Response.prototype['pagination'] = undefined;






export default ListCallbackMessages200Response;

