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
import TransactionSourceType from './TransactionSourceType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The TransactionDepositFromWalletSource model module.
 * @module model/TransactionDepositFromWalletSource
 * @version 0.4.5
 */
class TransactionDepositFromWalletSource {
    /**
     * Constructs a new <code>TransactionDepositFromWalletSource</code>.
     * The information about the transaction source.
     * @alias module:model/TransactionDepositFromWalletSource
     * @param sourceType {module:model/TransactionSourceType} 
     * @param walletId {String} The wallet ID.
     * @param walletType {module:model/WalletType} 
     * @param walletSubtype {module:model/WalletSubtype} 
     */
    constructor(sourceType, walletId, walletType, walletSubtype) { 
        
        TransactionDepositFromWalletSource.initialize(this, sourceType, walletId, walletType, walletSubtype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, walletId, walletType, walletSubtype) { 
        obj['source_type'] = sourceType;
        obj['wallet_id'] = walletId;
        obj['wallet_type'] = walletType;
        obj['wallet_subtype'] = walletSubtype;
    }

    /**
     * Constructs a <code>TransactionDepositFromWalletSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDepositFromWalletSource} obj Optional instance to populate.
     * @return {module:model/TransactionDepositFromWalletSource} The populated <code>TransactionDepositFromWalletSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDepositFromWalletSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('sub_wallet_id')) {
                obj['sub_wallet_id'] = ApiClient.convertToType(data['sub_wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDepositFromWalletSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDepositFromWalletSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDepositFromWalletSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['sub_wallet_id'] && !(typeof data['sub_wallet_id'] === 'string' || data['sub_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `sub_wallet_id` to be a primitive type in the JSON string but got " + data['sub_wallet_id']);
        }

        return true;
    }


}

TransactionDepositFromWalletSource.RequiredProperties = ["source_type", "wallet_id", "wallet_type", "wallet_subtype"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionDepositFromWalletSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionDepositFromWalletSource.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
TransactionDepositFromWalletSource.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TransactionDepositFromWalletSource.prototype['wallet_subtype'] = undefined;

/**
 * The exchange trading account or a sub-wallet ID.
 * @member {String} sub_wallet_id
 */
TransactionDepositFromWalletSource.prototype['sub_wallet_id'] = undefined;






export default TransactionDepositFromWalletSource;

