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
import TransactionStatus from './TransactionStatus';

/**
 * The CreateTransferTransaction201Response model module.
 * @module model/CreateTransferTransaction201Response
 * @version 0.4.1
 */
class CreateTransferTransaction201Response {
    /**
     * Constructs a new <code>CreateTransferTransaction201Response</code>.
     * @alias module:model/CreateTransferTransaction201Response
     * @param requestId {String} The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
     * @param transactionId {String} The transaction ID.
     * @param status {module:model/TransactionStatus} 
     */
    constructor(requestId, transactionId, status) { 
        
        CreateTransferTransaction201Response.initialize(this, requestId, transactionId, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId, transactionId, status) { 
        obj['request_id'] = requestId;
        obj['transaction_id'] = transactionId;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>CreateTransferTransaction201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransferTransaction201Response} obj Optional instance to populate.
     * @return {module:model/CreateTransferTransaction201Response} The populated <code>CreateTransferTransaction201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransferTransaction201Response();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TransactionStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTransferTransaction201Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTransferTransaction201Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateTransferTransaction201Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['transaction_id'] && !(typeof data['transaction_id'] === 'string' || data['transaction_id'] instanceof String)) {
            throw new Error("Expected the field `transaction_id` to be a primitive type in the JSON string but got " + data['transaction_id']);
        }

        return true;
    }


}

CreateTransferTransaction201Response.RequiredProperties = ["request_id", "transaction_id", "status"];

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
CreateTransferTransaction201Response.prototype['request_id'] = undefined;

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
CreateTransferTransaction201Response.prototype['transaction_id'] = undefined;

/**
 * @member {module:model/TransactionStatus} status
 */
CreateTransferTransaction201Response.prototype['status'] = undefined;






export default CreateTransferTransaction201Response;

