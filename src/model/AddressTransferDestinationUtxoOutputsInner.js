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
 * The AddressTransferDestinationUtxoOutputsInner model module.
 * @module model/AddressTransferDestinationUtxoOutputsInner
 */
class AddressTransferDestinationUtxoOutputsInner {
    /**
     * Constructs a new <code>AddressTransferDestinationUtxoOutputsInner</code>.
     * @alias module:model/AddressTransferDestinationUtxoOutputsInner
     * @param address {String} The destination address.
     */
    constructor(address) { 
        
        AddressTransferDestinationUtxoOutputsInner.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>AddressTransferDestinationUtxoOutputsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTransferDestinationUtxoOutputsInner} obj Optional instance to populate.
     * @return {module:model/AddressTransferDestinationUtxoOutputsInner} The populated <code>AddressTransferDestinationUtxoOutputsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTransferDestinationUtxoOutputsInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('script')) {
                obj['script'] = ApiClient.convertToType(data['script'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressTransferDestinationUtxoOutputsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressTransferDestinationUtxoOutputsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddressTransferDestinationUtxoOutputsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['script'] && !(typeof data['script'] === 'string' || data['script'] instanceof String)) {
            throw new Error("Expected the field `script` to be a primitive type in the JSON string but got " + data['script']);
        }

        return true;
    }


}

AddressTransferDestinationUtxoOutputsInner.RequiredProperties = ["address"];

/**
 * The destination address.
 * @member {String} address
 */
AddressTransferDestinationUtxoOutputsInner.prototype['address'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
 * @member {String} amount
 */
AddressTransferDestinationUtxoOutputsInner.prototype['amount'] = undefined;

/**
 * The script of the output. It is a programmable code fragment that defines the conditions under which the UTXO can be spent.
 * @member {String} script
 */
AddressTransferDestinationUtxoOutputsInner.prototype['script'] = undefined;






export default AddressTransferDestinationUtxoOutputsInner;

