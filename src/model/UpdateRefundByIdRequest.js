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
 * The UpdateRefundByIdRequest model module.
 * @module model/UpdateRefundByIdRequest
 */
class UpdateRefundByIdRequest {
    /**
     * Constructs a new <code>UpdateRefundByIdRequest</code>.
     * @alias module:model/UpdateRefundByIdRequest
     * @param to_address {String} The address where the refunded cryptocurrency will be sent.
     */
    constructor(to_address) { 
        
        UpdateRefundByIdRequest.initialize(this, to_address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, to_address) { 
        obj['to_address'] = to_address;
    }

    /**
     * Constructs a <code>UpdateRefundByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRefundByIdRequest} obj Optional instance to populate.
     * @return {module:model/UpdateRefundByIdRequest} The populated <code>UpdateRefundByIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRefundByIdRequest();

            if (data.hasOwnProperty('to_address')) {
                obj['to_address'] = ApiClient.convertToType(data['to_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateRefundByIdRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateRefundByIdRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateRefundByIdRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['to_address'] && !(typeof data['to_address'] === 'string' || data['to_address'] instanceof String)) {
            throw new Error("Expected the field `to_address` to be a primitive type in the JSON string but got " + data['to_address']);
        }

        return true;
    }


}

UpdateRefundByIdRequest.RequiredProperties = ["to_address"];

/**
 * The address where the refunded cryptocurrency will be sent.
 * @member {String} to_address
 */
UpdateRefundByIdRequest.prototype['to_address'] = undefined;






export default UpdateRefundByIdRequest;

