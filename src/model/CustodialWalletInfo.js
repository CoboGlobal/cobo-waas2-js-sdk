/**
 * Cobo Wallet as a Service 2.0
 * Cobo WaaS 2.0 enables you to programmatically access Cobo's full suite of crypto wallet technologies with powerful and flexible access controls.  # Wallet technologies - Custodial Wallet - MPC Wallet - Smart Contract Wallet (Based on Safe{Wallet}) - Exchange Wallet  # Risk Control technologies - Workflow - Access Control List (ACL)  # Risk Control targets - Wallet Management   - User/team and their permission management   - Risk control configurations, e.g. whitelist, blacklist, rate-limiting etc. - Blockchain Interaction   - Crypto transfer   - Smart Contract Invocation  # Important HTTPS only. RESTful, resource oriented  # Get Started Set up your APIs or get authorization  # Authentication and Authorization CoboAuth  # Request and Response application/json  # Error Handling  ### Common error codes | Error Code | Description | | -- | -- |  ### API-specific error codes For error codes that are dedicated to a specific API, see the Error codes section in each API specification, for example, /v3/wallets.  # Rate and Usage Limiting  # Idempotent Request  # Pagination # Support [Developer Hub](https://cobo.com/developers) 
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
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CustodialWalletInfo model module.
 * @module model/CustodialWalletInfo
 * @version 0.1.0
 */
class CustodialWalletInfo {
    /**
     * Constructs a new <code>CustodialWalletInfo</code>.
     * The data for wallet information.
     * @alias module:model/CustodialWalletInfo
     * @param walletId {String} 
     * @param walletType {module:model/WalletType} 
     * @param walletSubtype {module:model/WalletSubtype} 
     * @param name {String} 
     * @param orgId {String} The owning custody organization id of the custodial wallet.
     */
    constructor(walletId, walletType, walletSubtype, name, orgId) { 
        
        CustodialWalletInfo.initialize(this, walletId, walletType, walletSubtype, name, orgId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletId, walletType, walletSubtype, name, orgId) { 
        obj['wallet_id'] = walletId;
        obj['wallet_type'] = walletType;
        obj['wallet_subtype'] = walletSubtype;
        obj['name'] = name;
        obj['org_id'] = orgId;
    }

    /**
     * Constructs a <code>CustodialWalletInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustodialWalletInfo} obj Optional instance to populate.
     * @return {module:model/CustodialWalletInfo} The populated <code>CustodialWalletInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustodialWalletInfo();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustodialWalletInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustodialWalletInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustodialWalletInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['org_id'] && !(typeof data['org_id'] === 'string' || data['org_id'] instanceof String)) {
            throw new Error("Expected the field `org_id` to be a primitive type in the JSON string but got " + data['org_id']);
        }

        return true;
    }


}

CustodialWalletInfo.RequiredProperties = ["wallet_id", "wallet_type", "wallet_subtype", "name", "org_id"];

/**
 * @member {String} wallet_id
 */
CustodialWalletInfo.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CustodialWalletInfo.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CustodialWalletInfo.prototype['wallet_subtype'] = undefined;

/**
 * @member {String} name
 */
CustodialWalletInfo.prototype['name'] = undefined;

/**
 * The owning custody organization id of the custodial wallet.
 * @member {String} org_id
 */
CustodialWalletInfo.prototype['org_id'] = undefined;






export default CustodialWalletInfo;
