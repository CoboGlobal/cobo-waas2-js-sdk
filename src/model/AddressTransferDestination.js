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
import AddressTransferDestinationAccountOutput from './AddressTransferDestinationAccountOutput';
import AddressTransferDestinationUtxoOutputsInner from './AddressTransferDestinationUtxoOutputsInner';
import TransferDestinationType from './TransferDestinationType';

/**
 * The AddressTransferDestination model module.
 * @module model/AddressTransferDestination
 */
class AddressTransferDestination {
    /**
     * Constructs a new <code>AddressTransferDestination</code>.
     * The information about the transaction destination type &#x60;Address&#x60;. Refer to [Transaction sources and destinations](https://www.cobo.com/developers/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.  **You need to specify either the &#x60;account_output&#x60; property or the &#x60;utxo_outputs&#x60; property.**  You can transfer tokens to multiple addresses only if you use MPC Wallets as the transaction source. To do this, you should use the &#x60;utxo_outputs&#x60; property to specify the destination addresses.  Switch between the tabs to display the properties for different transaction destinations. 
     * @alias module:model/AddressTransferDestination
     * @param destination_type {module:model/TransferDestinationType} 
     */
    constructor(destination_type) { 
        
        AddressTransferDestination.initialize(this, destination_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type) { 
        obj['destination_type'] = destination_type;
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
            if (data.hasOwnProperty('change_output_type')) {
                obj['change_output_type'] = ApiClient.convertToType(data['change_output_type'], 'String');
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
          if (!!AddressTransferDestinationAccountOutput.validateJSON) {
            AddressTransferDestinationAccountOutput.validateJSON(data['account_output']);
          }
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
        // ensure the json data is a string
        if (data['change_output_type'] && !(typeof data['change_output_type'] === 'string' || data['change_output_type'] instanceof String)) {
            throw new Error("Expected the field `change_output_type` to be a primitive type in the JSON string but got " + data['change_output_type']);
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
 * The position of the change output in the transaction's outputs. Possible values are: - `Last`: The change output is placed at the end of the transaction's outputs.   - `First`: The change output is placed at the beginning of the transaction's outputs. 
 * @member {module:model/AddressTransferDestination.ChangeOutputTypeEnum} change_output_type
 */
AddressTransferDestination.prototype['change_output_type'] = undefined;

/**
 * Whether the transaction request must be executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer.   - `true`: The transaction request must be executed as a Cobo Loop transfer.   - `false`: The transaction request may not be executed as a Cobo Loop transfer.    Please do not set both `force_internal` and `force_external` as `true`. If both are set to `false`, the system uses Cobo Loop by default if possible; otherwise, it proceeds with an on-chain transfer. 
 * @member {Boolean} force_internal
 */
AddressTransferDestination.prototype['force_internal'] = undefined;

/**
 * Whether the transaction request must not be executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer.   - `true`: The transaction request must not be executed as a Cobo Loop transfer.   - `false`: The transaction request can be executed as a Cobo Loop transfer.  Please do not set both `force_internal` and `force_external` as `true`. If both are set to `false`, the system uses Cobo Loop by default if possible; otherwise, it proceeds with an on-chain transfer. 
 * @member {Boolean} force_external
 */
AddressTransferDestination.prototype['force_external'] = undefined;





/**
 * Allowed values for the <code>change_output_type</code> property.
 * @enum {String}
 * @readonly
 */
AddressTransferDestination['ChangeOutputTypeEnum'] = {

    /**
     * value: "Last"
     * @const
     */
    "Last": "Last",

    /**
     * value: "First"
     * @const
     */
    "First": "First",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default AddressTransferDestination;

