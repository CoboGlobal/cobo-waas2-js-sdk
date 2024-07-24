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
import WalletSubtype from './WalletSubtype';

/**
 * The BaseTransferSource model module.
 * @module model/BaseTransferSource
 * @version 0.4.5
 */
class BaseTransferSource {
    /**
     * Constructs a new <code>BaseTransferSource</code>.
     * The information about the transaction source.
     * @alias module:model/BaseTransferSource
     * @param sourceType {module:model/WalletSubtype} 
     * @param walletId {String} The wallet ID.
     */
    constructor(sourceType, walletId) { 
        
        BaseTransferSource.initialize(this, sourceType, walletId);
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
     * Constructs a <code>BaseTransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseTransferSource} obj Optional instance to populate.
     * @return {module:model/BaseTransferSource} The populated <code>BaseTransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseTransferSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = WalletSubtype.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseTransferSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseTransferSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseTransferSource.RequiredProperties) {
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

BaseTransferSource.RequiredProperties = ["source_type", "wallet_id"];

/**
 * @member {module:model/WalletSubtype} source_type
 */
BaseTransferSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
BaseTransferSource.prototype['wallet_id'] = undefined;






export default BaseTransferSource;

