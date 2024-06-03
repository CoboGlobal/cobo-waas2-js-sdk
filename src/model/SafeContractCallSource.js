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
import BaseContractCallSource from './BaseContractCallSource';
import SafeContractCallSourceAllOfDelegate from './SafeContractCallSourceAllOfDelegate';

/**
 * The SafeContractCallSource model module.
 * @module model/SafeContractCallSource
 * @version 0.1.0
 */
class SafeContractCallSource {
    /**
     * Constructs a new <code>SafeContractCallSource</code>.
     * @alias module:model/SafeContractCallSource
     * @implements module:model/BaseContractCallSource
     * @param sourceType {module:model/SafeContractCallSource.SourceTypeEnum} 
     * @param walletId {String} Unique id of the wallet to initiate contract call from.
     * @param addressStr {String} From address
     * @param delegate {module:model/SafeContractCallSourceAllOfDelegate} 
     */
    constructor(sourceType, walletId, addressStr, delegate) { 
        BaseContractCallSource.initialize(this, sourceType, walletId, addressStr);
        SafeContractCallSource.initialize(this, sourceType, walletId, addressStr, delegate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceType, walletId, addressStr, delegate) { 
        obj['source_type'] = sourceType;
        obj['wallet_id'] = walletId;
        obj['address_str'] = addressStr;
        obj['delegate'] = delegate;
    }

    /**
     * Constructs a <code>SafeContractCallSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SafeContractCallSource} obj Optional instance to populate.
     * @return {module:model/SafeContractCallSource} The populated <code>SafeContractCallSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SafeContractCallSource();
            BaseContractCallSource.constructFromObject(data, obj);

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address_str')) {
                obj['address_str'] = ApiClient.convertToType(data['address_str'], 'String');
            }
            if (data.hasOwnProperty('delegate')) {
                obj['delegate'] = SafeContractCallSourceAllOfDelegate.constructFromObject(data['delegate']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SafeContractCallSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SafeContractCallSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SafeContractCallSource.RequiredProperties) {
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
        if (data['address_str'] && !(typeof data['address_str'] === 'string' || data['address_str'] instanceof String)) {
            throw new Error("Expected the field `address_str` to be a primitive type in the JSON string but got " + data['address_str']);
        }
        // validate the optional field `delegate`
        if (data['delegate']) { // data not null
          SafeContractCallSourceAllOfDelegate.validateJSON(data['delegate']);
        }

        return true;
    }


}

SafeContractCallSource.RequiredProperties = ["source_type", "wallet_id", "address_str", "delegate"];

/**
 * @member {module:model/SafeContractCallSource.SourceTypeEnum} source_type
 */
SafeContractCallSource.prototype['source_type'] = undefined;

/**
 * Unique id of the wallet to initiate contract call from.
 * @member {String} wallet_id
 */
SafeContractCallSource.prototype['wallet_id'] = undefined;

/**
 * From address
 * @member {String} address_str
 */
SafeContractCallSource.prototype['address_str'] = undefined;

/**
 * @member {module:model/SafeContractCallSourceAllOfDelegate} delegate
 */
SafeContractCallSource.prototype['delegate'] = undefined;


// Implement BaseContractCallSource interface:
/**
 * @member {module:model/BaseContractCallSource.SourceTypeEnum} source_type
 */
BaseContractCallSource.prototype['source_type'] = undefined;
/**
 * Unique id of the wallet to initiate contract call from.
 * @member {String} wallet_id
 */
BaseContractCallSource.prototype['wallet_id'] = undefined;
/**
 * From address
 * @member {String} address_str
 */
BaseContractCallSource.prototype['address_str'] = undefined;



/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
SafeContractCallSource['SourceTypeEnum'] = {

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



export default SafeContractCallSource;
