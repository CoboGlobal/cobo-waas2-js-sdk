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

/**
 * The BaseContractCallSource model module.
 * @module model/BaseContractCallSource
 * @version 0.2.5
 */
class BaseContractCallSource {
    /**
     * Constructs a new <code>BaseContractCallSource</code>.
     * The information about the transaction source.
     * @alias module:model/BaseContractCallSource
     * @param sourceType {module:model/BaseContractCallSource.SourceTypeEnum} The type of the wallet. Possible values include: - `Org-Controlled`: MPC Wallets (Organization-Controlled). - `User-Controlled`: MPC Wallets (User-Controlled). - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}). 
     * @param walletId {String} The wallet ID.
     * @param address {String} The wallet address.
     */
    constructor(sourceType, walletId, address) { 
        
        BaseContractCallSource.initialize(this, sourceType, walletId, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, walletId, address) { 
        obj['source_type'] = sourceType;
        obj['wallet_id'] = walletId;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>BaseContractCallSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseContractCallSource} obj Optional instance to populate.
     * @return {module:model/BaseContractCallSource} The populated <code>BaseContractCallSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseContractCallSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseContractCallSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseContractCallSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseContractCallSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
            throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }

        return true;
    }


}

BaseContractCallSource.RequiredProperties = ["source_type", "wallet_id", "address"];

/**
 * The type of the wallet. Possible values include: - `Org-Controlled`: MPC Wallets (Organization-Controlled). - `User-Controlled`: MPC Wallets (User-Controlled). - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}). 
 * @member {module:model/BaseContractCallSource.SourceTypeEnum} source_type
 */
BaseContractCallSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
BaseContractCallSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
BaseContractCallSource.prototype['address'] = undefined;





/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
BaseContractCallSource['SourceTypeEnum'] = {

    /**
     * value: "Org-Controlled"
     * @const
     */
    "Org-Controlled": "Org-Controlled",

    /**
     * value: "User-Controlled"
     * @const
     */
    "User-Controlled": "User-Controlled",

    /**
     * value: "Safe{Wallet}"
     * @const
     */
    "Safe{Wallet}": "Safe{Wallet}"
};



export default BaseContractCallSource;

