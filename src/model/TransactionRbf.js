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
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The TransactionRbf model module.
 * @module model/TransactionRbf
 * @version 0.2.6
 */
class TransactionRbf {
    /**
     * Constructs a new <code>TransactionRbf</code>.
     * the information about the request to drop or to speed up transactions.
     * @alias module:model/TransactionRbf
     * @param requestId {String} The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
     */
    constructor(requestId) { 
        
        TransactionRbf.initialize(this, requestId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId) { 
        obj['request_id'] = requestId;
    }

    /**
     * Constructs a <code>TransactionRbf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRbf} obj Optional instance to populate.
     * @return {module:model/TransactionRbf} The populated <code>TransactionRbf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRbf();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionTransferFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRbf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRbf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionRbf.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionTransferFee.validateJSON(data['fee']);
        }

        return true;
    }


}

TransactionRbf.RequiredProperties = ["request_id"];

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
TransactionRbf.prototype['request_id'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
TransactionRbf.prototype['fee'] = undefined;






export default TransactionRbf;

