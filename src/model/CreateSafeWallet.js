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
import CreateSafeWalletAllOfInitiator from './CreateSafeWalletAllOfInitiator';
import SmartContractWalletType from './SmartContractWalletType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

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
     * @param walletType {module:model/WalletType} 
     * @param walletSubtype {module:model/WalletSubtype} 
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
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
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
            if (data.hasOwnProperty('signers')) {
                obj['signers'] = ApiClient.convertToType(data['signers'], ['String']);
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('cobo_safe_address')) {
                obj['cobo_safe_address'] = ApiClient.convertToType(data['cobo_safe_address'], 'String');
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = CreateSafeWalletAllOfInitiator.constructFromObject(data['initiator']);
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
        if (!Array.isArray(data['signers'])) {
            throw new Error("Expected the field `signers` to be an array in the JSON data but got " + data['signers']);
        }
        // ensure the json data is a string
        if (data['cobo_safe_address'] && !(typeof data['cobo_safe_address'] === 'string' || data['cobo_safe_address'] instanceof String)) {
            throw new Error("Expected the field `cobo_safe_address` to be a primitive type in the JSON string but got " + data['cobo_safe_address']);
        }
        // validate the optional field `initiator`
        if (data['initiator']) { // data not null
          CreateSafeWalletAllOfInitiator.validateJSON(data['initiator']);
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
 * @member {module:model/WalletType} wallet_type
 */
CreateSafeWallet.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
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
 * The address of the Smart Contract Wallet. If this is not provided, Cobo will create a new Safe{Wallet} and set up Cobo Safe for you. In that case, the `threshold` and `signers` properties are required.
 * @member {String} safe_address
 */
CreateSafeWallet.prototype['safe_address'] = undefined;

/**
 * The signers of the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}.
 * @member {Array.<String>} signers
 */
CreateSafeWallet.prototype['signers'] = undefined;

/**
 * The minimum number of confirmations required for the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}.
 * @member {Number} threshold
 */
CreateSafeWallet.prototype['threshold'] = undefined;

/**
 * The address of Cobo Safe. If you are importing an existing Safe{Wallet}, Cobo Safe must have been created and enabled.
 * @member {String} cobo_safe_address
 */
CreateSafeWallet.prototype['cobo_safe_address'] = undefined;

/**
 * @member {module:model/CreateSafeWalletAllOfInitiator} initiator
 */
CreateSafeWallet.prototype['initiator'] = undefined;






export default CreateSafeWallet;

