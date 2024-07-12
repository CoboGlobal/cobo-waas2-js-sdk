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
import AddressTransferDestination from './AddressTransferDestination';
import AddressTransferDestinationAccountOutput from './AddressTransferDestinationAccountOutput';
import AddressTransferDestinationUtxoOutputs from './AddressTransferDestinationUtxoOutputs';
import ExchangeTransferDestination from './ExchangeTransferDestination';
import TransferDestinationType from './TransferDestinationType';

/**
 * The TransferDestination model module.
 * @module model/TransferDestination
 * @version 0.2.7
 */
class TransferDestination {
    /**
     * Constructs a new <code>TransferDestination</code>.
     * @alias module:model/TransferDestination
     * @param {(module:model/AddressTransferDestination|module:model/ExchangeTransferDestination)} instance The actual instance to initialize TransferDestination.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "AddressTransferDestination") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                AddressTransferDestination.validateJSON(instance); // throw an exception if no match
                // create AddressTransferDestination from JS object
                this.actualInstance = AddressTransferDestination.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into AddressTransferDestination
            errorMessages.push("Failed to construct AddressTransferDestination: " + err)
        }

        try {
            if (typeof instance === "ExchangeTransferDestination") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExchangeTransferDestination.validateJSON(instance); // throw an exception if no match
                // create ExchangeTransferDestination from JS object
                this.actualInstance = ExchangeTransferDestination.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExchangeTransferDestination
            errorMessages.push("Failed to construct ExchangeTransferDestination: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `TransferDestination` with oneOf schemas AddressTransferDestination, ExchangeTransferDestination. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `TransferDestination` with oneOf schemas AddressTransferDestination, ExchangeTransferDestination. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TransferDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferDestination} obj Optional instance to populate.
     * @return {module:model/TransferDestination} The populated <code>TransferDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TransferDestination(data);
    }

    /**
     * Gets the actual instance, which can be <code>AddressTransferDestination</code>, <code>ExchangeTransferDestination</code>.
     * @return {(module:model/AddressTransferDestination|module:model/ExchangeTransferDestination)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddressTransferDestination</code>, <code>ExchangeTransferDestination</code>.
     * @param {(module:model/AddressTransferDestination|module:model/ExchangeTransferDestination)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TransferDestination.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TransferDestination from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TransferDestination} An instance of TransferDestination.
     */
    static fromJSON = function(json_string){
        return TransferDestination.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/TransferDestinationType} destination_type
 */
TransferDestination.prototype['destination_type'] = undefined;

/**
 * @member {module:model/AddressTransferDestinationAccountOutput} account_output
 */
TransferDestination.prototype['account_output'] = undefined;

/**
 * @member {module:model/AddressTransferDestinationUtxoOutputs} utxo_outputs
 */
TransferDestination.prototype['utxo_outputs'] = undefined;

/**
 * Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must be executed as a Loop transfer.   - `false`: The transaction request may not be executed as a Loop transfer. 
 * @member {Boolean} force_internal
 */
TransferDestination.prototype['force_internal'] = undefined;

/**
 * Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must not be executed as a Loop transfer.   - `false`: The transaction request can be executed as a Loop transfer. 
 * @member {Boolean} force_external
 */
TransferDestination.prototype['force_external'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransferDestination.prototype['wallet_id'] = undefined;

/**
 * The exchange trading account or the sub-wallet ID.
 * @member {String} sub_wallet_id
 */
TransferDestination.prototype['sub_wallet_id'] = undefined;

/**
 * The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} amount
 */
TransferDestination.prototype['amount'] = undefined;


TransferDestination.OneOf = ["AddressTransferDestination", "ExchangeTransferDestination"];

export default TransferDestination;

