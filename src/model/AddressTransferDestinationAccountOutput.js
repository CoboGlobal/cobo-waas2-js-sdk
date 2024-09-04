/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AddressTransferDestinationAccountOutput model module.
 * @module model/AddressTransferDestinationAccountOutput
 */
class AddressTransferDestinationAccountOutput {
    /**
     * Constructs a new <code>AddressTransferDestinationAccountOutput</code>.
     * @alias module:model/AddressTransferDestinationAccountOutput
     * @param address {String} The destination address.
     * @param amount {String} The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
     */
    constructor(address, amount) { 
        
        AddressTransferDestinationAccountOutput.initialize(this, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount) { 
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AddressTransferDestinationAccountOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTransferDestinationAccountOutput} obj Optional instance to populate.
     * @return {module:model/AddressTransferDestinationAccountOutput} The populated <code>AddressTransferDestinationAccountOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTransferDestinationAccountOutput();

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
     * Validates the JSON data with respect to <code>AddressTransferDestinationAccountOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressTransferDestinationAccountOutput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddressTransferDestinationAccountOutput.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

AddressTransferDestinationAccountOutput.RequiredProperties = ["address", "amount"];

/**
 * The destination address.
 * @member {String} address
 */
AddressTransferDestinationAccountOutput.prototype['address'] = undefined;

/**
 * The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON.
 * @member {String} memo
 */
AddressTransferDestinationAccountOutput.prototype['memo'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
 * @member {String} amount
 */
AddressTransferDestinationAccountOutput.prototype['amount'] = undefined;






export default AddressTransferDestinationAccountOutput;

