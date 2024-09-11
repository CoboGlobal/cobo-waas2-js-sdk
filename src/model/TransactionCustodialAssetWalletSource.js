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
import TransactionSourceType from './TransactionSourceType';

/**
 * The TransactionCustodialAssetWalletSource model module.
 * @module model/TransactionCustodialAssetWalletSource
 */
class TransactionCustodialAssetWalletSource {
    /**
     * Constructs a new <code>TransactionCustodialAssetWalletSource</code>.
     * Information about the transaction source type &#x60;Asset&#x60;. Switch between the tabs to display the properties for different transaction sources. 
     * @alias module:model/TransactionCustodialAssetWalletSource
     * @param source_type {module:model/TransactionSourceType} 
     * @param wallet_id {String} The wallet ID.
     */
    constructor(source_type, wallet_id) { 
        
        TransactionCustodialAssetWalletSource.initialize(this, source_type, wallet_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, wallet_id) { 
        obj['source_type'] = source_type;
        obj['wallet_id'] = wallet_id;
    }

    /**
     * Constructs a <code>TransactionCustodialAssetWalletSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionCustodialAssetWalletSource} obj Optional instance to populate.
     * @return {module:model/TransactionCustodialAssetWalletSource} The populated <code>TransactionCustodialAssetWalletSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionCustodialAssetWalletSource();

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
     * Validates the JSON data with respect to <code>TransactionCustodialAssetWalletSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionCustodialAssetWalletSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionCustodialAssetWalletSource.RequiredProperties) {
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

TransactionCustodialAssetWalletSource.RequiredProperties = ["source_type", "wallet_id"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionCustodialAssetWalletSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionCustodialAssetWalletSource.prototype['wallet_id'] = undefined;






export default TransactionCustodialAssetWalletSource;

