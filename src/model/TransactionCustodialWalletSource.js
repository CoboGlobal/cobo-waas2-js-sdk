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

/**
 * The TransactionCustodialWalletSource model module.
 * @module model/TransactionCustodialWalletSource
 * @version 0.1.0
 */
class TransactionCustodialWalletSource {
    /**
     * Constructs a new <code>TransactionCustodialWalletSource</code>.
     * The information about the transaction source.
     * @alias module:model/TransactionCustodialWalletSource
     * @param sourceType {module:model/TransactionSourceType} 
     * @param walletId {String} The wallet ID.
     */
    constructor(sourceType, walletId) { 
        
        TransactionCustodialWalletSource.initialize(this, sourceType, walletId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, walletId) { 
        obj['source_type'] = sourceType;
        obj['wallet_id'] = walletId;
    }

    /**
     * Constructs a <code>TransactionCustodialWalletSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionCustodialWalletSource} obj Optional instance to populate.
     * @return {module:model/TransactionCustodialWalletSource} The populated <code>TransactionCustodialWalletSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionCustodialWalletSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionCustodialWalletSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionCustodialWalletSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionCustodialWalletSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }

        return true;
    }


}

TransactionCustodialWalletSource.RequiredProperties = ["source_type", "wallet_id"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionCustodialWalletSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionCustodialWalletSource.prototype['wallet_id'] = undefined;






export default TransactionCustodialWalletSource;
