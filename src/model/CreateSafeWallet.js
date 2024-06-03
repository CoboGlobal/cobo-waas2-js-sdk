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
import SafeWalletAllOfInitiator from './SafeWalletAllOfInitiator';
import SmartContractWalletType from './SmartContractWalletType';

/**
 * The CreateSafeWallet model module.
 * @module model/CreateSafeWallet
 * @version 0.1.0
 */
class CreateSafeWallet {
    /**
     * Constructs a new <code>CreateSafeWallet</code>.
     * @alias module:model/CreateSafeWallet
     * @param name {String} The wallet name.
     * @param walletType {module:model/CreateSafeWallet.WalletTypeEnum} The Smart Contract Wallet type.
     * @param walletSubtype {module:model/CreateSafeWallet.WalletSubtypeEnum} The Smart Contract Wallet subtype.
     * @param chainId {String} The ID of the chain that the wallet operates on.
     * @param smartContractWalletType {module:model/SmartContractWalletType} 
     */
    constructor(name, walletType, walletSubtype, chainId, smartContractWalletType) { 
        
        CreateSafeWallet.initialize(this, name, walletType, walletSubtype, chainId, smartContractWalletType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, walletType, walletSubtype, chainId, smartContractWalletType) { 
        obj['name'] = name;
        obj['wallet_type'] = walletType;
        obj['wallet_subtype'] = walletSubtype;
        obj['chain_id'] = chainId;
        obj['smart_contract_wallet_type'] = smartContractWalletType;
    }

    /**
     * Constructs a <code>CreateSafeWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSafeWallet} obj Optional instance to populate.
     * @return {module:model/CreateSafeWallet} The populated <code>CreateSafeWallet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSafeWallet();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = ApiClient.convertToType(data['wallet_type'], 'String');
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = ApiClient.convertToType(data['wallet_subtype'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('smart_contract_wallet_type')) {
                obj['smart_contract_wallet_type'] = SmartContractWalletType.constructFromObject(data['smart_contract_wallet_type']);
            }
            if (data.hasOwnProperty('safe_address')) {
                obj['safe_address'] = ApiClient.convertToType(data['safe_address'], 'String');
            }
            if (data.hasOwnProperty('owners')) {
                obj['owners'] = ApiClient.convertToType(data['owners'], ['String']);
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('cobo_safe_address')) {
                obj['cobo_safe_address'] = ApiClient.convertToType(data['cobo_safe_address'], 'String');
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = SafeWalletAllOfInitiator.constructFromObject(data['initiator']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSafeWallet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSafeWallet</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSafeWallet.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['wallet_type'] && !(typeof data['wallet_type'] === 'string' || data['wallet_type'] instanceof String)) {
            throw new Error("Expected the field `wallet_type` to be a primitive type in the JSON string but got " + data['wallet_type']);
        }
        // ensure the json data is a string
        if (data['wallet_subtype'] && !(typeof data['wallet_subtype'] === 'string' || data['wallet_subtype'] instanceof String)) {
            throw new Error("Expected the field `wallet_subtype` to be a primitive type in the JSON string but got " + data['wallet_subtype']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['safe_address'] && !(typeof data['safe_address'] === 'string' || data['safe_address'] instanceof String)) {
            throw new Error("Expected the field `safe_address` to be a primitive type in the JSON string but got " + data['safe_address']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['owners'])) {
            throw new Error("Expected the field `owners` to be an array in the JSON data but got " + data['owners']);
        }
        // ensure the json data is a string
        if (data['cobo_safe_address'] && !(typeof data['cobo_safe_address'] === 'string' || data['cobo_safe_address'] instanceof String)) {
            throw new Error("Expected the field `cobo_safe_address` to be a primitive type in the JSON string but got " + data['cobo_safe_address']);
        }
        // validate the optional field `initiator`
        if (data['initiator']) { // data not null
          SafeWalletAllOfInitiator.validateJSON(data['initiator']);
        }

        return true;
    }


}

CreateSafeWallet.RequiredProperties = ["name", "wallet_type", "wallet_subtype", "chain_id", "smart_contract_wallet_type"];

/**
 * The wallet name.
 * @member {String} name
 */
CreateSafeWallet.prototype['name'] = undefined;

/**
 * The Smart Contract Wallet type.
 * @member {module:model/CreateSafeWallet.WalletTypeEnum} wallet_type
 */
CreateSafeWallet.prototype['wallet_type'] = undefined;

/**
 * The Smart Contract Wallet subtype.
 * @member {module:model/CreateSafeWallet.WalletSubtypeEnum} wallet_subtype
 */
CreateSafeWallet.prototype['wallet_subtype'] = undefined;

/**
 * The wallet label.
 * @member {String} label
 */
CreateSafeWallet.prototype['label'] = undefined;

/**
 * The ID of the chain that the wallet operates on.
 * @member {String} chain_id
 */
CreateSafeWallet.prototype['chain_id'] = undefined;

/**
 * @member {module:model/SmartContractWalletType} smart_contract_wallet_type
 */
CreateSafeWallet.prototype['smart_contract_wallet_type'] = undefined;

/**
 * The address of the Smart Contract Wallet. If this is not provided, Cobo will create a new Safe{Wallet} and set up Cobo Safe for you. In that case, the `threshold` and `owners` fields are required.
 * @member {String} safe_address
 */
CreateSafeWallet.prototype['safe_address'] = undefined;

/**
 * The owners of the Smart Contract Wallet. This field is required when creating a new Safe{Wallet}.
 * @member {Array.<String>} owners
 */
CreateSafeWallet.prototype['owners'] = undefined;

/**
 * The minimum number of confirmations required for the Smart Contract Wallet. This field is required when creating a new Safe{Wallet}. 
 * @member {Number} threshold
 */
CreateSafeWallet.prototype['threshold'] = undefined;

/**
 * The address of Cobo Safe. If you are importing an existing Safe{Wallet}, Cobo Safe must has been created and enabled.
 * @member {String} cobo_safe_address
 */
CreateSafeWallet.prototype['cobo_safe_address'] = undefined;

/**
 * @member {module:model/SafeWalletAllOfInitiator} initiator
 */
CreateSafeWallet.prototype['initiator'] = undefined;





/**
 * Allowed values for the <code>wallet_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateSafeWallet['WalletTypeEnum'] = {

    /**
     * value: "SmartContract"
     * @const
     */
    "SmartContract": "SmartContract"
};


/**
 * Allowed values for the <code>wallet_subtype</code> property.
 * @enum {String}
 * @readonly
 */
CreateSafeWallet['WalletSubtypeEnum'] = {

    /**
     * value: "Safe{Wallet}"
     * @const
     */
    "Safe{Wallet}": "Safe{Wallet}"
};



export default CreateSafeWallet;

