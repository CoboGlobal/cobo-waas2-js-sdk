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
import TransactionAddressDestinationUtxoOutputsOutputsInner from './TransactionAddressDestinationUtxoOutputsOutputsInner';

/**
 * The TransactionAddressDestinationUtxoOutputs model module.
 * @module model/TransactionAddressDestinationUtxoOutputs
 * @version 0.1.0
 */
class TransactionAddressDestinationUtxoOutputs {
    /**
     * Constructs a new <code>TransactionAddressDestinationUtxoOutputs</code>.
     * @alias module:model/TransactionAddressDestinationUtxoOutputs
     */
    constructor() { 
        
        TransactionAddressDestinationUtxoOutputs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionAddressDestinationUtxoOutputs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionAddressDestinationUtxoOutputs} obj Optional instance to populate.
     * @return {module:model/TransactionAddressDestinationUtxoOutputs} The populated <code>TransactionAddressDestinationUtxoOutputs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionAddressDestinationUtxoOutputs();

            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = ApiClient.convertToType(data['outputs'], [TransactionAddressDestinationUtxoOutputsOutputsInner]);
            }
            if (data.hasOwnProperty('change_address')) {
                obj['change_address'] = ApiClient.convertToType(data['change_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionAddressDestinationUtxoOutputs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionAddressDestinationUtxoOutputs</code>.
     */
    static validateJSON(data) {
        if (data['outputs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['outputs'])) {
                throw new Error("Expected the field `outputs` to be an array in the JSON data but got " + data['outputs']);
            }
            // validate the optional field `outputs` (array)
            for (const item of data['outputs']) {
                TransactionAddressDestinationUtxoOutputsOutputsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['change_address'] && !(typeof data['change_address'] === 'string' || data['change_address'] instanceof String)) {
            throw new Error("Expected the field `change_address` to be a primitive type in the JSON string but got " + data['change_address']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/TransactionAddressDestinationUtxoOutputsOutputsInner>} outputs
 */
TransactionAddressDestinationUtxoOutputs.prototype['outputs'] = undefined;

/**
 * The address used to receive the remaining funds or change from the transaction.
 * @member {String} change_address
 */
TransactionAddressDestinationUtxoOutputs.prototype['change_address'] = undefined;






export default TransactionAddressDestinationUtxoOutputs;
