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
import CreateCustodialWallet from './CreateCustodialWallet';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CreateMpcWallet model module.
 * @module model/CreateMpcWallet
 * @version 0.2.5
 */
class CreateMpcWallet {
    /**
     * Constructs a new <code>CreateMpcWallet</code>.
     * @alias module:model/CreateMpcWallet
     * @implements module:model/CreateCustodialWallet
     * @param name {String} The wallet name.
     * @param walletType {module:model/WalletType} 
     * @param walletSubtype {module:model/WalletSubtype} 
     * @param vaultId {String} The ID of the owning vault. You can call [List all vaults](/v2/api-references/wallets--mpc-wallets/list-all-vaults) to retrieve all vault IDs under your organization.
     */
    constructor(name, walletType, walletSubtype, vaultId) { 
        CreateCustodialWallet.initialize(this, name, walletType, walletSubtype);
        CreateMpcWallet.initialize(this, name, walletType, walletSubtype, vaultId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, walletType, walletSubtype, vaultId) { 
        obj['name'] = name;
        obj['wallet_type'] = walletType;
        obj['wallet_subtype'] = walletSubtype;
        obj['vault_id'] = vaultId;
    }

    /**
     * Constructs a <code>CreateMpcWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMpcWallet} obj Optional instance to populate.
     * @return {module:model/CreateMpcWallet} The populated <code>CreateMpcWallet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMpcWallet();
            CreateCustodialWallet.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('vault_id')) {
                obj['vault_id'] = ApiClient.convertToType(data['vault_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateMpcWallet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateMpcWallet</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateMpcWallet.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['vault_id'] && !(typeof data['vault_id'] === 'string' || data['vault_id'] instanceof String)) {
            throw new Error("Expected the field `vault_id` to be a primitive type in the JSON string but got " + data['vault_id']);
        }

        return true;
    }


}

CreateMpcWallet.RequiredProperties = ["name", "wallet_type", "wallet_subtype", "vault_id"];

/**
 * The wallet name.
 * @member {String} name
 */
CreateMpcWallet.prototype['name'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CreateMpcWallet.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateMpcWallet.prototype['wallet_subtype'] = undefined;

/**
 * The ID of the owning vault. You can call [List all vaults](/v2/api-references/wallets--mpc-wallets/list-all-vaults) to retrieve all vault IDs under your organization.
 * @member {String} vault_id
 */
CreateMpcWallet.prototype['vault_id'] = undefined;


// Implement CreateCustodialWallet interface:
/**
 * The wallet name.
 * @member {String} name
 */
CreateCustodialWallet.prototype['name'] = undefined;
/**
 * @member {module:model/WalletType} wallet_type
 */
CreateCustodialWallet.prototype['wallet_type'] = undefined;
/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateCustodialWallet.prototype['wallet_subtype'] = undefined;




export default CreateMpcWallet;

