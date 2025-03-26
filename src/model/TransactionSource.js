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
import CoboSafeDelegate from './CoboSafeDelegate';
import ExchangeId from './ExchangeId';
import TransactionCustodialAssetWalletSource from './TransactionCustodialAssetWalletSource';
import TransactionCustodialWeb3WalletSource from './TransactionCustodialWeb3WalletSource';
import TransactionDepositFromAddressSource from './TransactionDepositFromAddressSource';
import TransactionDepositFromLoopSource from './TransactionDepositFromLoopSource';
import TransactionDepositFromWalletSource from './TransactionDepositFromWalletSource';
import TransactionExchangeWalletSource from './TransactionExchangeWalletSource';
import TransactionMPCWalletSource from './TransactionMPCWalletSource';
import TransactionSmartContractSafeWalletSource from './TransactionSmartContractSafeWalletSource';
import TransactionSourceType from './TransactionSourceType';
import TransactionUtxo from './TransactionUtxo';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The TransactionSource model module.
 * @module model/TransactionSource
 */
class TransactionSource {
    /**
     * Constructs a new <code>TransactionSource</code>.
     * @alias module:model/TransactionSource
     * @param {(module:model/TransactionCustodialAssetWalletSource|module:model/TransactionCustodialWeb3WalletSource|module:model/TransactionDepositFromAddressSource|module:model/TransactionDepositFromLoopSource|module:model/TransactionDepositFromWalletSource|module:model/TransactionExchangeWalletSource|module:model/TransactionMPCWalletSource|module:model/TransactionSmartContractSafeWalletSource)} instance The actual instance to initialize TransactionSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["source_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Asset":
                    this.actualInstance = TransactionCustodialAssetWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "DepositFromAddress":
                    this.actualInstance = TransactionDepositFromAddressSource.constructFromObject(instance);
                    match++;
                    break;
                case "DepositFromLoop":
                    this.actualInstance = TransactionDepositFromLoopSource.constructFromObject(instance);
                    match++;
                    break;
                case "DepositFromWallet":
                    this.actualInstance = TransactionDepositFromWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "Main":
                    this.actualInstance = TransactionExchangeWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "Org-Controlled":
                    this.actualInstance = TransactionMPCWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "Safe{Wallet}":
                    this.actualInstance = TransactionSmartContractSafeWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "Sub":
                    this.actualInstance = TransactionExchangeWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "User-Controlled":
                    this.actualInstance = TransactionMPCWalletSource.constructFromObject(instance);
                    match++;
                    break;
                case "Web3":
                    this.actualInstance = TransactionCustodialWeb3WalletSource.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof TransactionCustodialAssetWalletSource) {
                this.actualInstance = instance;
            } else if(!!TransactionCustodialAssetWalletSource.validateJSON && TransactionCustodialAssetWalletSource.validateJSON(instance)){
                // plain JS object
                // create TransactionCustodialAssetWalletSource from JS object
                this.actualInstance = TransactionCustodialAssetWalletSource.constructFromObject(instance);
            } else {
                if(TransactionCustodialAssetWalletSource.constructFromObject(instance)) {
                    if (!!TransactionCustodialAssetWalletSource.constructFromObject(instance).toJSON) {
                        if (TransactionCustodialAssetWalletSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionCustodialAssetWalletSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionCustodialAssetWalletSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionCustodialAssetWalletSource
            errorMessages.push("Failed to construct TransactionCustodialAssetWalletSource: " + err)
        }

        try {
            if (instance instanceof TransactionCustodialWeb3WalletSource) {
                this.actualInstance = instance;
            } else if(!!TransactionCustodialWeb3WalletSource.validateJSON && TransactionCustodialWeb3WalletSource.validateJSON(instance)){
                // plain JS object
                // create TransactionCustodialWeb3WalletSource from JS object
                this.actualInstance = TransactionCustodialWeb3WalletSource.constructFromObject(instance);
            } else {
                if(TransactionCustodialWeb3WalletSource.constructFromObject(instance)) {
                    if (!!TransactionCustodialWeb3WalletSource.constructFromObject(instance).toJSON) {
                        if (TransactionCustodialWeb3WalletSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionCustodialWeb3WalletSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionCustodialWeb3WalletSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionCustodialWeb3WalletSource
            errorMessages.push("Failed to construct TransactionCustodialWeb3WalletSource: " + err)
        }

        try {
            if (instance instanceof TransactionMPCWalletSource) {
                this.actualInstance = instance;
            } else if(!!TransactionMPCWalletSource.validateJSON && TransactionMPCWalletSource.validateJSON(instance)){
                // plain JS object
                // create TransactionMPCWalletSource from JS object
                this.actualInstance = TransactionMPCWalletSource.constructFromObject(instance);
            } else {
                if(TransactionMPCWalletSource.constructFromObject(instance)) {
                    if (!!TransactionMPCWalletSource.constructFromObject(instance).toJSON) {
                        if (TransactionMPCWalletSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionMPCWalletSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionMPCWalletSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionMPCWalletSource
            errorMessages.push("Failed to construct TransactionMPCWalletSource: " + err)
        }

        try {
            if (instance instanceof TransactionSmartContractSafeWalletSource) {
                this.actualInstance = instance;
            } else if(!!TransactionSmartContractSafeWalletSource.validateJSON && TransactionSmartContractSafeWalletSource.validateJSON(instance)){
                // plain JS object
                // create TransactionSmartContractSafeWalletSource from JS object
                this.actualInstance = TransactionSmartContractSafeWalletSource.constructFromObject(instance);
            } else {
                if(TransactionSmartContractSafeWalletSource.constructFromObject(instance)) {
                    if (!!TransactionSmartContractSafeWalletSource.constructFromObject(instance).toJSON) {
                        if (TransactionSmartContractSafeWalletSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionSmartContractSafeWalletSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionSmartContractSafeWalletSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionSmartContractSafeWalletSource
            errorMessages.push("Failed to construct TransactionSmartContractSafeWalletSource: " + err)
        }

        try {
            if (instance instanceof TransactionExchangeWalletSource) {
                this.actualInstance = instance;
            } else if(!!TransactionExchangeWalletSource.validateJSON && TransactionExchangeWalletSource.validateJSON(instance)){
                // plain JS object
                // create TransactionExchangeWalletSource from JS object
                this.actualInstance = TransactionExchangeWalletSource.constructFromObject(instance);
            } else {
                if(TransactionExchangeWalletSource.constructFromObject(instance)) {
                    if (!!TransactionExchangeWalletSource.constructFromObject(instance).toJSON) {
                        if (TransactionExchangeWalletSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionExchangeWalletSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionExchangeWalletSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionExchangeWalletSource
            errorMessages.push("Failed to construct TransactionExchangeWalletSource: " + err)
        }

        try {
            if (instance instanceof TransactionDepositFromAddressSource) {
                this.actualInstance = instance;
            } else if(!!TransactionDepositFromAddressSource.validateJSON && TransactionDepositFromAddressSource.validateJSON(instance)){
                // plain JS object
                // create TransactionDepositFromAddressSource from JS object
                this.actualInstance = TransactionDepositFromAddressSource.constructFromObject(instance);
            } else {
                if(TransactionDepositFromAddressSource.constructFromObject(instance)) {
                    if (!!TransactionDepositFromAddressSource.constructFromObject(instance).toJSON) {
                        if (TransactionDepositFromAddressSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionDepositFromAddressSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionDepositFromAddressSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionDepositFromAddressSource
            errorMessages.push("Failed to construct TransactionDepositFromAddressSource: " + err)
        }

        try {
            if (instance instanceof TransactionDepositFromWalletSource) {
                this.actualInstance = instance;
            } else if(!!TransactionDepositFromWalletSource.validateJSON && TransactionDepositFromWalletSource.validateJSON(instance)){
                // plain JS object
                // create TransactionDepositFromWalletSource from JS object
                this.actualInstance = TransactionDepositFromWalletSource.constructFromObject(instance);
            } else {
                if(TransactionDepositFromWalletSource.constructFromObject(instance)) {
                    if (!!TransactionDepositFromWalletSource.constructFromObject(instance).toJSON) {
                        if (TransactionDepositFromWalletSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionDepositFromWalletSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionDepositFromWalletSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionDepositFromWalletSource
            errorMessages.push("Failed to construct TransactionDepositFromWalletSource: " + err)
        }

        try {
            if (instance instanceof TransactionDepositFromLoopSource) {
                this.actualInstance = instance;
            } else if(!!TransactionDepositFromLoopSource.validateJSON && TransactionDepositFromLoopSource.validateJSON(instance)){
                // plain JS object
                // create TransactionDepositFromLoopSource from JS object
                this.actualInstance = TransactionDepositFromLoopSource.constructFromObject(instance);
            } else {
                if(TransactionDepositFromLoopSource.constructFromObject(instance)) {
                    if (!!TransactionDepositFromLoopSource.constructFromObject(instance).toJSON) {
                        if (TransactionDepositFromLoopSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionDepositFromLoopSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionDepositFromLoopSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionDepositFromLoopSource
            errorMessages.push("Failed to construct TransactionDepositFromLoopSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TransactionSource` with oneOf schemas TransactionCustodialAssetWalletSource, TransactionCustodialWeb3WalletSource, TransactionDepositFromAddressSource, TransactionDepositFromLoopSource, TransactionDepositFromWalletSource, TransactionExchangeWalletSource, TransactionMPCWalletSource, TransactionSmartContractSafeWalletSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TransactionSource` with oneOf schemas TransactionCustodialAssetWalletSource, TransactionCustodialWeb3WalletSource, TransactionDepositFromAddressSource, TransactionDepositFromLoopSource, TransactionDepositFromWalletSource, TransactionExchangeWalletSource, TransactionMPCWalletSource, TransactionSmartContractSafeWalletSource. Details: " +
        //                    errorMessages.join(", "));
        return;
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
     * Gets the actual instance, which can be <code>TransactionCustodialAssetWalletSource</code>, <code>TransactionCustodialWeb3WalletSource</code>, <code>TransactionDepositFromAddressSource</code>, <code>TransactionDepositFromLoopSource</code>, <code>TransactionDepositFromWalletSource</code>, <code>TransactionExchangeWalletSource</code>, <code>TransactionMPCWalletSource</code>, <code>TransactionSmartContractSafeWalletSource</code>.
     * @return {(module:model/TransactionCustodialAssetWalletSource|module:model/TransactionCustodialWeb3WalletSource|module:model/TransactionDepositFromAddressSource|module:model/TransactionDepositFromLoopSource|module:model/TransactionDepositFromWalletSource|module:model/TransactionExchangeWalletSource|module:model/TransactionMPCWalletSource|module:model/TransactionSmartContractSafeWalletSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>TransactionCustodialAssetWalletSource</code>, <code>TransactionCustodialWeb3WalletSource</code>, <code>TransactionDepositFromAddressSource</code>, <code>TransactionDepositFromLoopSource</code>, <code>TransactionDepositFromWalletSource</code>, <code>TransactionExchangeWalletSource</code>, <code>TransactionMPCWalletSource</code>, <code>TransactionSmartContractSafeWalletSource</code>.
     * @param {(module:model/TransactionCustodialAssetWalletSource|module:model/TransactionCustodialWeb3WalletSource|module:model/TransactionDepositFromAddressSource|module:model/TransactionDepositFromLoopSource|module:model/TransactionDepositFromWalletSource|module:model/TransactionExchangeWalletSource|module:model/TransactionMPCWalletSource|module:model/TransactionSmartContractSafeWalletSource)} obj The actual instance.
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
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
TransactionSource.prototype['address'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} included_utxos
 */
TransactionSource.prototype['included_utxos'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} excluded_utxos
 */
TransactionSource.prototype['excluded_utxos'] = undefined;

/**
 * The ID of the key share holder group that is selected to sign the transaction.
 * @member {String} signer_key_share_holder_group_id
 */
TransactionSource.prototype['signer_key_share_holder_group_id'] = undefined;

/**
 * @member {module:model/CoboSafeDelegate} delegate
 */
TransactionSource.prototype['delegate'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
TransactionSource.prototype['exchange_id'] = undefined;

/**
 * The exchange trading account or a sub-wallet ID.
 * @member {String} trading_account_type
 */
TransactionSource.prototype['trading_account_type'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
TransactionSource.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TransactionSource.prototype['wallet_subtype'] = undefined;

/**
 * A list of addresses.
 * @member {Array.<String>} addresses
 */
TransactionSource.prototype['addresses'] = undefined;


TransactionSource.OneOf = ["TransactionCustodialAssetWalletSource", "TransactionCustodialWeb3WalletSource", "TransactionDepositFromAddressSource", "TransactionDepositFromLoopSource", "TransactionDepositFromWalletSource", "TransactionExchangeWalletSource", "TransactionMPCWalletSource", "TransactionSmartContractSafeWalletSource"];

export default TransactionSource;

