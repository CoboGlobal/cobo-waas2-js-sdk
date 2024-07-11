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
import TransactionAddressSourceAccountInput from './TransactionAddressSourceAccountInput';
import TransactionAddressSourceUtxoInputsInner from './TransactionAddressSourceUtxoInputsInner';
import TransactionSourceType from './TransactionSourceType';

/**
 * The TransactionAddressSource model module.
 * @module model/TransactionAddressSource
 * @version 0.1.0
 */
class TransactionAddressSource {
    /**
     * Constructs a new <code>TransactionAddressSource</code>.
     * The information about the transaction source.
     * @alias module:model/TransactionAddressSource
     * @param sourceType {module:model/TransactionSourceType} 
     */
    constructor(sourceType) { 
        
        TransactionAddressSource.initialize(this, sourceType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType) { 
        obj['source_type'] = sourceType;
    }

    /**
     * Constructs a <code>TransactionAddressSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionAddressSource} obj Optional instance to populate.
     * @return {module:model/TransactionAddressSource} The populated <code>TransactionAddressSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionAddressSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('account_input')) {
                obj['account_input'] = TransactionAddressSourceAccountInput.constructFromObject(data['account_input']);
            }
            if (data.hasOwnProperty('utxo_inputs')) {
                obj['utxo_inputs'] = ApiClient.convertToType(data['utxo_inputs'], [TransactionAddressSourceUtxoInputsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionAddressSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionAddressSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionAddressSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `account_input`
        if (data['account_input']) { // data not null
          TransactionAddressSourceAccountInput.validateJSON(data['account_input']);
        }
        if (data['utxo_inputs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['utxo_inputs'])) {
                throw new Error("Expected the field `utxo_inputs` to be an array in the JSON data but got " + data['utxo_inputs']);
            }
            // validate the optional field `utxo_inputs` (array)
            for (const item of data['utxo_inputs']) {
                TransactionAddressSourceUtxoInputsInner.validateJSON(item);
            };
        }

        return true;
    }


}

TransactionAddressSource.RequiredProperties = ["source_type"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionAddressSource.prototype['source_type'] = undefined;

/**
 * @member {module:model/TransactionAddressSourceAccountInput} account_input
 */
TransactionAddressSource.prototype['account_input'] = undefined;

/**
 * @member {Array.<module:model/TransactionAddressSourceUtxoInputsInner>} utxo_inputs
 */
TransactionAddressSource.prototype['utxo_inputs'] = undefined;






export default TransactionAddressSource;
