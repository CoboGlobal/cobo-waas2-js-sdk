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
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CreateCustodialWalletParams model module.
 * @module model/CreateCustodialWalletParams
 */
class CreateCustodialWalletParams {
    /**
     * Constructs a new <code>CreateCustodialWalletParams</code>.
     * The information of Custodial Wallets.
     * @alias module:model/CreateCustodialWalletParams
     * @param name {String} The wallet name.
     * @param wallet_type {module:model/WalletType} 
     * @param wallet_subtype {module:model/WalletSubtype} 
     */
    constructor(name, wallet_type, wallet_subtype) { 
        
        CreateCustodialWalletParams.initialize(this, name, wallet_type, wallet_subtype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, wallet_type, wallet_subtype) { 
        obj['name'] = name;
        obj['wallet_type'] = wallet_type;
        obj['wallet_subtype'] = wallet_subtype;
    }

    /**
     * Constructs a <code>CreateCustodialWalletParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustodialWalletParams} obj Optional instance to populate.
     * @return {module:model/CreateCustodialWalletParams} The populated <code>CreateCustodialWalletParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustodialWalletParams();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustodialWalletParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustodialWalletParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCustodialWalletParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateCustodialWalletParams.RequiredProperties = ["name", "wallet_type", "wallet_subtype"];

/**
 * The wallet name.
 * @member {String} name
 */
CreateCustodialWalletParams.prototype['name'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CreateCustodialWalletParams.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateCustodialWalletParams.prototype['wallet_subtype'] = undefined;






export default CreateCustodialWalletParams;
