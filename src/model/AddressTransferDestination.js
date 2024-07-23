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
import AddressTransferDestinationAccountOutput from './AddressTransferDestinationAccountOutput';
import AddressTransferDestinationUtxoOutputsInner from './AddressTransferDestinationUtxoOutputsInner';
import TransferDestinationType from './TransferDestinationType';

/**
 * The AddressTransferDestination model module.
 * @module model/AddressTransferDestination
 * @version 0.4.4
 */
class AddressTransferDestination {
    /**
     * Constructs a new <code>AddressTransferDestination</code>.
     * The information about the transaction destination. Specify either the &#x60;account_output&#x60; property or the &#x60;utxo_outputs&#x60; property. Only MPC Wallets as the transaction source can transfer tokens to multiple addresses by using the &#x60;utxo_outputs&#x60; property. 
     * @alias module:model/AddressTransferDestination
     * @param destinationType {module:model/TransferDestinationType} 
     */
    constructor(destinationType) { 
        
        AddressTransferDestination.initialize(this, destinationType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destinationType) { 
        obj['destination_type'] = destinationType;
    }

    /**
     * Constructs a <code>AddressTransferDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTransferDestination} obj Optional instance to populate.
     * @return {module:model/AddressTransferDestination} The populated <code>AddressTransferDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTransferDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransferDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('account_output')) {
                obj['account_output'] = AddressTransferDestinationAccountOutput.constructFromObject(data['account_output']);
            }
            if (data.hasOwnProperty('utxo_outputs')) {
                obj['utxo_outputs'] = ApiClient.convertToType(data['utxo_outputs'], [AddressTransferDestinationUtxoOutputsInner]);
            }
            if (data.hasOwnProperty('change_address')) {
                obj['change_address'] = ApiClient.convertToType(data['change_address'], 'String');
            }
            if (data.hasOwnProperty('force_internal')) {
                obj['force_internal'] = ApiClient.convertToType(data['force_internal'], 'Boolean');
            }
            if (data.hasOwnProperty('force_external')) {
                obj['force_external'] = ApiClient.convertToType(data['force_external'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressTransferDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressTransferDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddressTransferDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `account_output`
        if (data['account_output']) { // data not null
          AddressTransferDestinationAccountOutput.validateJSON(data['account_output']);
        }
        if (data['utxo_outputs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['utxo_outputs'])) {
                throw new Error("Expected the field `utxo_outputs` to be an array in the JSON data but got " + data['utxo_outputs']);
            }
            // validate the optional field `utxo_outputs` (array)
            for (const item of data['utxo_outputs']) {
                AddressTransferDestinationUtxoOutputsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['change_address'] && !(typeof data['change_address'] === 'string' || data['change_address'] instanceof String)) {
            throw new Error("Expected the field `change_address` to be a primitive type in the JSON string but got " + data['change_address']);
        }

        return true;
    }


}

AddressTransferDestination.RequiredProperties = ["destination_type"];

/**
 * @member {module:model/TransferDestinationType} destination_type
 */
AddressTransferDestination.prototype['destination_type'] = undefined;

/**
 * @member {module:model/AddressTransferDestinationAccountOutput} account_output
 */
AddressTransferDestination.prototype['account_output'] = undefined;

/**
 * @member {Array.<module:model/AddressTransferDestinationUtxoOutputsInner>} utxo_outputs
 */
AddressTransferDestination.prototype['utxo_outputs'] = undefined;

/**
 * The address used to receive the remaining funds or change from the transaction.
 * @member {String} change_address
 */
AddressTransferDestination.prototype['change_address'] = undefined;

/**
 * Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must be executed as a Loop transfer.   - `false`: The transaction request may not be executed as a Loop transfer. 
 * @member {Boolean} force_internal
 */
AddressTransferDestination.prototype['force_internal'] = undefined;

/**
 * Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must not be executed as a Loop transfer.   - `false`: The transaction request can be executed as a Loop transfer. 
 * @member {Boolean} force_external
 */
AddressTransferDestination.prototype['force_external'] = undefined;






export default AddressTransferDestination;

