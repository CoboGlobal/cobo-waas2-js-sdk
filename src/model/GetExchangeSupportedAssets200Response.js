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
import AssetInfo from './AssetInfo';
import Pagination from './Pagination';

/**
 * The GetExchangeSupportedAssets200Response model module.
 * @module model/GetExchangeSupportedAssets200Response
 * @version 0.2.5
 */
class GetExchangeSupportedAssets200Response {
    /**
     * Constructs a new <code>GetExchangeSupportedAssets200Response</code>.
     * @alias module:model/GetExchangeSupportedAssets200Response
     */
    constructor() { 
        
        GetExchangeSupportedAssets200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetExchangeSupportedAssets200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeSupportedAssets200Response} obj Optional instance to populate.
     * @return {module:model/GetExchangeSupportedAssets200Response} The populated <code>GetExchangeSupportedAssets200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetExchangeSupportedAssets200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AssetInfo]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetExchangeSupportedAssets200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExchangeSupportedAssets200Response</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                AssetInfo.validateJSON(item);
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
 * @member {Array.<module:model/AssetInfo>} data
 */
GetExchangeSupportedAssets200Response.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
GetExchangeSupportedAssets200Response.prototype['pagination'] = undefined;






export default GetExchangeSupportedAssets200Response;

