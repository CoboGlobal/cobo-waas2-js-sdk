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
import MPCVault from './MPCVault';
import Pagination from './Pagination';

/**
 * The ListMpcVaults200Response model module.
 * @module model/ListMpcVaults200Response
 */
class ListMpcVaults200Response {
    /**
     * Constructs a new <code>ListMpcVaults200Response</code>.
     * @alias module:model/ListMpcVaults200Response
     */
    constructor() { 
        
        ListMpcVaults200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMpcVaults200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMpcVaults200Response} obj Optional instance to populate.
     * @return {module:model/ListMpcVaults200Response} The populated <code>ListMpcVaults200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMpcVaults200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [MPCVault]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListMpcVaults200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListMpcVaults200Response</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                MPCVault.validateJSON(item);
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



/**
 * @member {Array.<module:model/MPCVault>} data
 */
ListMpcVaults200Response.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
ListMpcVaults200Response.prototype['pagination'] = undefined;






export default ListMpcVaults200Response;

