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
import AddressTransferDestination from './AddressTransferDestination';
import AddressTransferDestinationAccountOutput from './AddressTransferDestinationAccountOutput';
import AddressTransferDestinationUtxoOutputsInner from './AddressTransferDestinationUtxoOutputsInner';
import ExchangeTransferDestination from './ExchangeTransferDestination';
import TransferDestinationType from './TransferDestinationType';

/**
 * The TransferDestination model module.
 * @module model/TransferDestination
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
            if (instance instanceof AddressTransferDestination) {
                this.actualInstance = instance;
            } else if(!!AddressTransferDestination.validateJSON && AddressTransferDestination.validateJSON(instance)){
                // plain JS object
                // create AddressTransferDestination from JS object
                this.actualInstance = AddressTransferDestination.constructFromObject(instance);
            } else if(AddressTransferDestination.constructFromObject(instance)){
                this.actualInstance = AddressTransferDestination.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into AddressTransferDestination
            errorMessages.push("Failed to construct AddressTransferDestination: " + err)
        }

        try {
            if (instance instanceof ExchangeTransferDestination) {
                this.actualInstance = instance;
            } else if(!!ExchangeTransferDestination.validateJSON && ExchangeTransferDestination.validateJSON(instance)){
                // plain JS object
                // create ExchangeTransferDestination from JS object
                this.actualInstance = ExchangeTransferDestination.constructFromObject(instance);
            } else if(ExchangeTransferDestination.constructFromObject(instance)){
                this.actualInstance = ExchangeTransferDestination.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExchangeTransferDestination
            errorMessages.push("Failed to construct ExchangeTransferDestination: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TransferDestination` with oneOf schemas AddressTransferDestination, ExchangeTransferDestination. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TransferDestination` with oneOf schemas AddressTransferDestination, ExchangeTransferDestination. Details: " +
        //                    errorMessages.join(", "));
        return;
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
 * @member {Array.<module:model/AddressTransferDestinationUtxoOutputsInner>} utxo_outputs
 */
TransferDestination.prototype['utxo_outputs'] = undefined;

/**
 * The address used to receive the remaining funds or change from the transaction.
 * @member {String} change_address
 */
TransferDestination.prototype['change_address'] = undefined;

/**
 * Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must be executed as a Loop transfer.   - `false`: The transaction request may not be executed as a Loop transfer. <Note>Please do not set both `force_internal` and `force_internal` as `true`.</Note> 
 * @member {Boolean} force_internal
 */
TransferDestination.prototype['force_internal'] = undefined;

/**
 * Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/).   - `true`: The transaction request must not be executed as a Loop transfer.   - `false`: The transaction request can be executed as a Loop transfer. <Note>Please do not set both `force_internal` and `force_internal` as `true`.</Note> 
 * @member {Boolean} force_external
 */
TransferDestination.prototype['force_external'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransferDestination.prototype['wallet_id'] = undefined;

/**
 * The trading account type.
 * @member {String} trading_account_type
 */
TransferDestination.prototype['trading_account_type'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} amount
 */
TransferDestination.prototype['amount'] = undefined;


TransferDestination.OneOf = ["AddressTransferDestination", "ExchangeTransferDestination"];

export default TransferDestination;

