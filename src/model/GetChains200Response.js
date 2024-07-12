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
import ChainInfo from './ChainInfo';
import Pagination from './Pagination';

/**
 * The GetChains200Response model module.
 * @module model/GetChains200Response
 * @version 0.2.7
 */
class GetChains200Response {
    /**
     * Constructs a new <code>GetChains200Response</code>.
     * @alias module:model/GetChains200Response
     */
    constructor() { 
        
        GetChains200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChains200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChains200Response} obj Optional instance to populate.
     * @return {module:model/GetChains200Response} The populated <code>GetChains200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChains200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ChainInfo]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetChains200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetChains200Response</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                ChainInfo.validateJSON(item);
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
 * @member {Array.<module:model/ChainInfo>} data
 */
GetChains200Response.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
GetChains200Response.prototype['pagination'] = undefined;






export default GetChains200Response;

