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

/**
 * The TransactionAddressDestinationAccountOutput model module.
 * @module model/TransactionAddressDestinationAccountOutput
 * @version 0.2.5
 */
class TransactionAddressDestinationAccountOutput {
    /**
     * Constructs a new <code>TransactionAddressDestinationAccountOutput</code>.
     * @alias module:model/TransactionAddressDestinationAccountOutput
     */
    constructor() { 
        
        TransactionAddressDestinationAccountOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionAddressDestinationAccountOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionAddressDestinationAccountOutput} obj Optional instance to populate.
     * @return {module:model/TransactionAddressDestinationAccountOutput} The populated <code>TransactionAddressDestinationAccountOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionAddressDestinationAccountOutput();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionAddressDestinationAccountOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionAddressDestinationAccountOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}



/**
 * The destination address.
 * @member {String} address
 */
TransactionAddressDestinationAccountOutput.prototype['address'] = undefined;

/**
 * The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON.
 * @member {String} memo
 */
TransactionAddressDestinationAccountOutput.prototype['memo'] = undefined;

/**
 * The transaction amount. For example, if you trade 1.5 ETH, then the amount is `1.5`. 
 * @member {String} amount
 */
TransactionAddressDestinationAccountOutput.prototype['amount'] = undefined;






export default TransactionAddressDestinationAccountOutput;

