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
import BaseTransferSource from './BaseTransferSource';
import ExchangeTransferSource from './ExchangeTransferSource';
import MpcSigningGroup from './MpcSigningGroup';
import MpcTransferSource from './MpcTransferSource';
import MpcTransferSourceAccountInput from './MpcTransferSourceAccountInput';
import MpcTransferSourceUtxoInputs from './MpcTransferSourceUtxoInputs';
import SafeTransferSource from './SafeTransferSource';
import SafeTransferSourceAllOfDelegate from './SafeTransferSourceAllOfDelegate';
import WalletSubtype from './WalletSubtype';

/**
 * The TransferSource model module.
 * @module model/TransferSource
 * @version 0.1.0
 */
class TransferSource {
    /**
     * Constructs a new <code>TransferSource</code>.
     * @alias module:model/TransferSource
     * @param {(module:model/BaseTransferSource|module:model/ExchangeTransferSource|module:model/MpcTransferSource|module:model/SafeTransferSource)} instance The actual instance to initialize TransferSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "BaseTransferSource") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                BaseTransferSource.validateJSON(instance); // throw an exception if no match
                // create BaseTransferSource from JS object
                this.actualInstance = BaseTransferSource.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BaseTransferSource
            errorMessages.push("Failed to construct BaseTransferSource: " + err)
        }

        try {
            if (typeof instance === "MpcTransferSource") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                MpcTransferSource.validateJSON(instance); // throw an exception if no match
                // create MpcTransferSource from JS object
                this.actualInstance = MpcTransferSource.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcTransferSource
            errorMessages.push("Failed to construct MpcTransferSource: " + err)
        }

        try {
            if (typeof instance === "SafeTransferSource") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SafeTransferSource.validateJSON(instance); // throw an exception if no match
                // create SafeTransferSource from JS object
                this.actualInstance = SafeTransferSource.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeTransferSource
            errorMessages.push("Failed to construct SafeTransferSource: " + err)
        }

        try {
            if (typeof instance === "ExchangeTransferSource") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExchangeTransferSource.validateJSON(instance); // throw an exception if no match
                // create ExchangeTransferSource from JS object
                this.actualInstance = ExchangeTransferSource.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExchangeTransferSource
            errorMessages.push("Failed to construct ExchangeTransferSource: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `TransferSource` with oneOf schemas BaseTransferSource, ExchangeTransferSource, MpcTransferSource, SafeTransferSource. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `TransferSource` with oneOf schemas BaseTransferSource, ExchangeTransferSource, MpcTransferSource, SafeTransferSource. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferSource} obj Optional instance to populate.
     * @return {module:model/TransferSource} The populated <code>TransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TransferSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>BaseTransferSource</code>, <code>ExchangeTransferSource</code>, <code>MpcTransferSource</code>, <code>SafeTransferSource</code>.
     * @return {(module:model/BaseTransferSource|module:model/ExchangeTransferSource|module:model/MpcTransferSource|module:model/SafeTransferSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BaseTransferSource</code>, <code>ExchangeTransferSource</code>, <code>MpcTransferSource</code>, <code>SafeTransferSource</code>.
     * @param {(module:model/BaseTransferSource|module:model/ExchangeTransferSource|module:model/MpcTransferSource|module:model/SafeTransferSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TransferSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TransferSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TransferSource} An instance of TransferSource.
     */
    static fromJSON = function(json_string){
        return TransferSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/WalletSubtype} source_type
 */
TransferSource.prototype['source_type'] = undefined;

/**
 * Unique id of the wallet to transfer from.
 * @member {String} wallet_id
 */
TransferSource.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/MpcTransferSourceAccountInput} account_input
 */
TransferSource.prototype['account_input'] = undefined;

/**
 * @member {module:model/MpcTransferSourceUtxoInputs} utxo_inputs
 */
TransferSource.prototype['utxo_inputs'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_group
 */
TransferSource.prototype['mpc_used_key_group'] = undefined;

/**
 * From address
 * @member {String} address_str
 */
TransferSource.prototype['address_str'] = undefined;

/**
 * @member {module:model/SafeTransferSourceAllOfDelegate} delegate
 */
TransferSource.prototype['delegate'] = undefined;

/**
 * Exchange trading account or any sub wallet info for transfer.
 * @member {String} sub_wallet_id
 */
TransferSource.prototype['sub_wallet_id'] = undefined;


TransferSource.OneOf = ["BaseTransferSource", "ExchangeTransferSource", "MpcTransferSource", "SafeTransferSource"];

export default TransferSource;

