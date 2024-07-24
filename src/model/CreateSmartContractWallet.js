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
import CreateSafeWallet from './CreateSafeWallet';
import SmartContractInitiator from './SmartContractInitiator';
import SmartContractWalletType from './SmartContractWalletType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CreateSmartContractWallet model module.
 * @module model/CreateSmartContractWallet
 * @version 0.4.5
 */
class CreateSmartContractWallet {
    /**
     * Constructs a new <code>CreateSmartContractWallet</code>.
     * @alias module:model/CreateSmartContractWallet
     * @param {(module:model/CreateSafeWallet)} instance The actual instance to initialize CreateSmartContractWallet.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "CreateSafeWallet") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                CreateSafeWallet.validateJSON(instance); // throw an exception if no match
                // create CreateSafeWallet from JS object
                this.actualInstance = CreateSafeWallet.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CreateSafeWallet
            errorMessages.push("Failed to construct CreateSafeWallet: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `CreateSmartContractWallet` with oneOf schemas CreateSafeWallet. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `CreateSmartContractWallet` with oneOf schemas CreateSafeWallet. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CreateSmartContractWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSmartContractWallet} obj Optional instance to populate.
     * @return {module:model/CreateSmartContractWallet} The populated <code>CreateSmartContractWallet</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CreateSmartContractWallet(data);
    }

    /**
     * Gets the actual instance, which can be <code>CreateSafeWallet</code>.
     * @return {(module:model/CreateSafeWallet)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CreateSafeWallet</code>.
     * @param {(module:model/CreateSafeWallet)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CreateSmartContractWallet.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CreateSmartContractWallet from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CreateSmartContractWallet} An instance of CreateSmartContractWallet.
     */
    static fromJSON = function(json_string){
        return CreateSmartContractWallet.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The wallet name.
 * @member {String} name
 */
CreateSmartContractWallet.prototype['name'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CreateSmartContractWallet.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateSmartContractWallet.prototype['wallet_subtype'] = undefined;

/**
 * The ID of the chain that the wallet operates on.
 * @member {String} chain_id
 */
CreateSmartContractWallet.prototype['chain_id'] = undefined;

/**
 * @member {module:model/SmartContractWalletType} smart_contract_wallet_type
 */
CreateSmartContractWallet.prototype['smart_contract_wallet_type'] = undefined;

/**
 * The address of the Smart Contract Wallet. If this is not provided, Cobo will create a new Safe{Wallet} and set up Cobo Safe for you. In that case, the `threshold` and `signers` properties are required.
 * @member {String} safe_address
 */
CreateSmartContractWallet.prototype['safe_address'] = undefined;

/**
 * The signers of the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}.
 * @member {Array.<String>} signers
 */
CreateSmartContractWallet.prototype['signers'] = undefined;

/**
 * The minimum number of confirmations required for the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}.
 * @member {Number} threshold
 */
CreateSmartContractWallet.prototype['threshold'] = undefined;

/**
 * The address of Cobo Safe. If you are importing an existing Safe{Wallet}, Cobo Safe must have been created and enabled.
 * @member {String} cobo_safe_address
 */
CreateSmartContractWallet.prototype['cobo_safe_address'] = undefined;

/**
 * @member {module:model/SmartContractInitiator} initiator
 */
CreateSmartContractWallet.prototype['initiator'] = undefined;


CreateSmartContractWallet.OneOf = ["CreateSafeWallet"];

export default CreateSmartContractWallet;

