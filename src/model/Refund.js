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
import PaymentTransaction from './PaymentTransaction';
import RefundStatus from './RefundStatus';

/**
 * The Refund model module.
 * @module model/Refund
 */
class Refund {
    /**
     * Constructs a new <code>Refund</code>.
     * @alias module:model/Refund
     * @param refund_id {String} The refund order ID.
     * @param token_id {String} The ID of the cryptocurrency used for refund.
     * @param chain_id {String} The ID of the blockchain network on which the refund transaction occurs.
     * @param amount {String} The amount in cryptocurrency to be returned for this refund order.
     * @param to_address {String} The recipient's wallet address where the refund will be sent.
     * @param status {module:model/RefundStatus} 
     */
    constructor(refund_id, token_id, chain_id, amount, to_address, status) { 
        
        Refund.initialize(this, refund_id, token_id, chain_id, amount, to_address, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, refund_id, token_id, chain_id, amount, to_address, status) { 
        obj['refund_id'] = refund_id;
        obj['token_id'] = token_id;
        obj['chain_id'] = chain_id;
        obj['amount'] = amount;
        obj['to_address'] = to_address;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>Refund</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Refund} obj Optional instance to populate.
     * @return {module:model/Refund} The populated <code>Refund</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Refund();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('refund_id')) {
                obj['refund_id'] = ApiClient.convertToType(data['refund_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('to_address')) {
                obj['to_address'] = ApiClient.convertToType(data['to_address'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = RefundStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [PaymentTransaction]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Refund</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Refund</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Refund.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['refund_id'] && !(typeof data['refund_id'] === 'string' || data['refund_id'] instanceof String)) {
            throw new Error("Expected the field `refund_id` to be a primitive type in the JSON string but got " + data['refund_id']);
        }
        // ensure the json data is a string
        if (data['merchant_id'] && !(typeof data['merchant_id'] === 'string' || data['merchant_id'] instanceof String)) {
            throw new Error("Expected the field `merchant_id` to be a primitive type in the JSON string but got " + data['merchant_id']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['to_address'] && !(typeof data['to_address'] === 'string' || data['to_address'] instanceof String)) {
            throw new Error("Expected the field `to_address` to be a primitive type in the JSON string but got " + data['to_address']);
        }
        if (data['transactions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['transactions'])) {
                throw new Error("Expected the field `transactions` to be an array in the JSON data but got " + data['transactions']);
            }
            // validate the optional field `transactions` (array)
            for (const item of data['transactions']) {
                PaymentTransaction.validateJSON(item);
            };
        }

        return true;
    }


}

Refund.RequiredProperties = ["refund_id", "token_id", "chain_id", "amount", "to_address", "status"];

/**
 * The request ID provided by you when creating the refund request.
 * @member {String} request_id
 */
Refund.prototype['request_id'] = undefined;

/**
 * The refund order ID.
 * @member {String} refund_id
 */
Refund.prototype['refund_id'] = undefined;

/**
 * The merchant ID.
 * @member {String} merchant_id
 */
Refund.prototype['merchant_id'] = undefined;

/**
 * The ID of the cryptocurrency used for refund.
 * @member {String} token_id
 */
Refund.prototype['token_id'] = undefined;

/**
 * The ID of the blockchain network on which the refund transaction occurs.
 * @member {String} chain_id
 */
Refund.prototype['chain_id'] = undefined;

/**
 * The amount in cryptocurrency to be returned for this refund order.
 * @member {String} amount
 */
Refund.prototype['amount'] = undefined;

/**
 * The recipient's wallet address where the refund will be sent.
 * @member {String} to_address
 */
Refund.prototype['to_address'] = undefined;

/**
 * @member {module:model/RefundStatus} status
 */
Refund.prototype['status'] = undefined;

/**
 * An array of transactions associated with this refund order. Each transaction represents a separate blockchain operation related to the refund process.
 * @member {Array.<module:model/PaymentTransaction>} transactions
 */
Refund.prototype['transactions'] = undefined;






export default Refund;

