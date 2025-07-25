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
import Pagination from './Pagination';

/**
 * The TokenizationListEnabledChainsResponse model module.
 * @module model/TokenizationListEnabledChainsResponse
 */
class TokenizationListEnabledChainsResponse {
    /**
     * Constructs a new <code>TokenizationListEnabledChainsResponse</code>.
     * @alias module:model/TokenizationListEnabledChainsResponse
     * @param data {Array.<String>} The list of tokenization supported chains.
     * @param pagination {module:model/Pagination} 
     */
    constructor(data, pagination) { 
        
        TokenizationListEnabledChainsResponse.initialize(this, data, pagination);
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
     * Constructs a <code>TokenizationListEnabledChainsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationListEnabledChainsResponse} obj Optional instance to populate.
     * @return {module:model/TokenizationListEnabledChainsResponse} The populated <code>TokenizationListEnabledChainsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationListEnabledChainsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['String']);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationListEnabledChainsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationListEnabledChainsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenizationListEnabledChainsResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['data'])) {
            throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
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

TokenizationListEnabledChainsResponse.RequiredProperties = ["data", "pagination"];

/**
 * The list of tokenization supported chains.
 * @member {Array.<String>} data
 */
TokenizationListEnabledChainsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
TokenizationListEnabledChainsResponse.prototype['pagination'] = undefined;






export default TokenizationListEnabledChainsResponse;

