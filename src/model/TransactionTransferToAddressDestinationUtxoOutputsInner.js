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
 * The TransactionTransferToAddressDestinationUtxoOutputsInner model module.
 * @module model/TransactionTransferToAddressDestinationUtxoOutputsInner
 */
class TransactionTransferToAddressDestinationUtxoOutputsInner {
    /**
     * Constructs a new <code>TransactionTransferToAddressDestinationUtxoOutputsInner</code>.
     * @alias module:model/TransactionTransferToAddressDestinationUtxoOutputsInner
     */
    constructor() { 
        
        TransactionTransferToAddressDestinationUtxoOutputsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionTransferToAddressDestinationUtxoOutputsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionTransferToAddressDestinationUtxoOutputsInner} obj Optional instance to populate.
     * @return {module:model/TransactionTransferToAddressDestinationUtxoOutputsInner} The populated <code>TransactionTransferToAddressDestinationUtxoOutputsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionTransferToAddressDestinationUtxoOutputsInner();

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
     * Validates the JSON data with respect to <code>TransactionTransferToAddressDestinationUtxoOutputsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionTransferToAddressDestinationUtxoOutputsInner</code>.
     */
    static validateJSON(data) {
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



/**
 * The destination address.
 * @member {String} address
 */
TransactionTransferToAddressDestinationUtxoOutputsInner.prototype['address'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} amount
 */
TransactionTransferToAddressDestinationUtxoOutputsInner.prototype['amount'] = undefined;

/**
 * The script of the output. It is a programmable code fragment that defines the conditions under which the UTXO can be spent.
 * @member {String} script
 */
TransactionTransferToAddressDestinationUtxoOutputsInner.prototype['script'] = undefined;






export default TransactionTransferToAddressDestinationUtxoOutputsInner;

