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
import BaseTransactionAddress from './BaseTransactionAddress';
import BaseWalletTransactionAddress from './BaseWalletTransactionAddress';
import ExchangeId from './ExchangeId';
import ExchangeWalletTransactionAddress from './ExchangeWalletTransactionAddress';
import MPCWalletTransactionAddress from './MPCWalletTransactionAddress';
import MpcSigningGroup from './MpcSigningGroup';
import SafeTransactionAddress from './SafeTransactionAddress';
import SafeTransactionAddressAllOfDelegate from './SafeTransactionAddressAllOfDelegate';
import TransactionAddressType from './TransactionAddressType';

/**
 * The TransactionSource model module.
 * @module model/TransactionSource
 * @version 0.1.0
 */
class TransactionSource {
    /**
     * Constructs a new <code>TransactionSource</code>.
     * @alias module:model/TransactionSource
     * @param {(module:model/BaseTransactionAddress|module:model/BaseWalletTransactionAddress|module:model/ExchangeWalletTransactionAddress|module:model/MPCWalletTransactionAddress|module:model/SafeTransactionAddress)} instance The actual instance to initialize TransactionSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "BaseTransactionAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                BaseTransactionAddress.validateJSON(instance); // throw an exception if no match
                // create BaseTransactionAddress from JS object
                this.actualInstance = BaseTransactionAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BaseTransactionAddress
            errorMessages.push("Failed to construct BaseTransactionAddress: " + err)
        }

        try {
            if (typeof instance === "BaseWalletTransactionAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                BaseWalletTransactionAddress.validateJSON(instance); // throw an exception if no match
                // create BaseWalletTransactionAddress from JS object
                this.actualInstance = BaseWalletTransactionAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BaseWalletTransactionAddress
            errorMessages.push("Failed to construct BaseWalletTransactionAddress: " + err)
        }

        try {
            if (typeof instance === "MPCWalletTransactionAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                MPCWalletTransactionAddress.validateJSON(instance); // throw an exception if no match
                // create MPCWalletTransactionAddress from JS object
                this.actualInstance = MPCWalletTransactionAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MPCWalletTransactionAddress
            errorMessages.push("Failed to construct MPCWalletTransactionAddress: " + err)
        }

        try {
            if (typeof instance === "SafeTransactionAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SafeTransactionAddress.validateJSON(instance); // throw an exception if no match
                // create SafeTransactionAddress from JS object
                this.actualInstance = SafeTransactionAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeTransactionAddress
            errorMessages.push("Failed to construct SafeTransactionAddress: " + err)
        }

        try {
            if (typeof instance === "ExchangeWalletTransactionAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExchangeWalletTransactionAddress.validateJSON(instance); // throw an exception if no match
                // create ExchangeWalletTransactionAddress from JS object
                this.actualInstance = ExchangeWalletTransactionAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExchangeWalletTransactionAddress
            errorMessages.push("Failed to construct ExchangeWalletTransactionAddress: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `TransactionSource` with oneOf schemas BaseTransactionAddress, BaseWalletTransactionAddress, ExchangeWalletTransactionAddress, MPCWalletTransactionAddress, SafeTransactionAddress. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `TransactionSource` with oneOf schemas BaseTransactionAddress, BaseWalletTransactionAddress, ExchangeWalletTransactionAddress, MPCWalletTransactionAddress, SafeTransactionAddress. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TransactionSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSource} obj Optional instance to populate.
     * @return {module:model/TransactionSource} The populated <code>TransactionSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TransactionSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>BaseTransactionAddress</code>, <code>BaseWalletTransactionAddress</code>, <code>ExchangeWalletTransactionAddress</code>, <code>MPCWalletTransactionAddress</code>, <code>SafeTransactionAddress</code>.
     * @return {(module:model/BaseTransactionAddress|module:model/BaseWalletTransactionAddress|module:model/ExchangeWalletTransactionAddress|module:model/MPCWalletTransactionAddress|module:model/SafeTransactionAddress)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BaseTransactionAddress</code>, <code>BaseWalletTransactionAddress</code>, <code>ExchangeWalletTransactionAddress</code>, <code>MPCWalletTransactionAddress</code>, <code>SafeTransactionAddress</code>.
     * @param {(module:model/BaseTransactionAddress|module:model/BaseWalletTransactionAddress|module:model/ExchangeWalletTransactionAddress|module:model/MPCWalletTransactionAddress|module:model/SafeTransactionAddress)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TransactionSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TransactionSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TransactionSource} An instance of TransactionSource.
     */
    static fromJSON = function(json_string){
        return TransactionSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/TransactionAddressType} type
 */
TransactionSource.prototype['type'] = undefined;

/**
 * Address
 * @member {String} address
 */
TransactionSource.prototype['address'] = undefined;

/**
 * Address memo
 * @member {String} memo
 */
TransactionSource.prototype['memo'] = undefined;

/**
 * Unique id of the wallet.
 * @member {String} wallet_id
 */
TransactionSource.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_group
 */
TransactionSource.prototype['mpc_used_key_group'] = undefined;

/**
 * @member {module:model/SafeTransactionAddressAllOfDelegate} delegate
 */
TransactionSource.prototype['delegate'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
TransactionSource.prototype['exchange_id'] = undefined;

/**
 * Exchange trading account or any sub wallet info for transfer.
 * @member {String} sub_wallet_id
 */
TransactionSource.prototype['sub_wallet_id'] = undefined;


TransactionSource.OneOf = ["BaseTransactionAddress", "BaseWalletTransactionAddress", "ExchangeWalletTransactionAddress", "MPCWalletTransactionAddress", "SafeTransactionAddress"];

export default TransactionSource;
