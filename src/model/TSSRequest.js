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
import TSSRequestStatus from './TSSRequestStatus';
import TSSRequestType from './TSSRequestType';

/**
 * The TSSRequest model module.
 * @module model/TSSRequest
 * @version 0.2.6
 */
class TSSRequest {
    /**
     * Constructs a new <code>TSSRequest</code>.
     * The data for the TSS request information.
     * @alias module:model/TSSRequest
     */
    constructor() { 
        
        TSSRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TSSRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TSSRequest} obj Optional instance to populate.
     * @return {module:model/TSSRequest} The populated <code>TSSRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TSSRequest();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TSSRequestType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TSSRequestStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TSSRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TSSRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }

        return true;
    }


}



/**
 * The TSS request ID.
 * @member {String} request_id
 */
TSSRequest.prototype['request_id'] = undefined;

/**
 * @member {module:model/TSSRequestType} type
 */
TSSRequest.prototype['type'] = undefined;

/**
 * @member {module:model/TSSRequestStatus} status
 */
TSSRequest.prototype['status'] = undefined;






export default TSSRequest;

