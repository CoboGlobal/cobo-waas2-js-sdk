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
import CoboSafeDelegate from './CoboSafeDelegate';
import WalletSubtype from './WalletSubtype';

/**
 * The SafeTransferSource model module.
 * @module model/SafeTransferSource
 */
class SafeTransferSource {
    /**
     * Constructs a new <code>SafeTransferSource</code>.
     * The information about the transaction source type &#x60;Safe{Wallet}&#x60;.
     * @alias module:model/SafeTransferSource
     * @param source_type {module:model/WalletSubtype} 
     * @param wallet_id {String} The wallet ID.
     * @param address {String} The wallet address.
     * @param delegate {module:model/CoboSafeDelegate} 
     */
    constructor(source_type, wallet_id, address, delegate) { 
        
        SafeTransferSource.initialize(this, source_type, wallet_id, address, delegate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, wallet_id, address, delegate) { 
        obj['source_type'] = source_type;
        obj['wallet_id'] = wallet_id;
        obj['address'] = address;
        obj['delegate'] = delegate;
    }

    /**
     * Constructs a <code>SafeTransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SafeTransferSource} obj Optional instance to populate.
     * @return {module:model/SafeTransferSource} The populated <code>SafeTransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SafeTransferSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = WalletSubtype.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('delegate')) {
                obj['delegate'] = CoboSafeDelegate.constructFromObject(data['delegate']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SafeTransferSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SafeTransferSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SafeTransferSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `delegate`
        if (data['delegate']) { // data not null
          if (!!CoboSafeDelegate.validateJSON) {
            CoboSafeDelegate.validateJSON(data['delegate']);
          }
        }

        return true;
    }


}

SafeTransferSource.RequiredProperties = ["source_type", "wallet_id", "address", "delegate"];

/**
 * @member {module:model/WalletSubtype} source_type
 */
SafeTransferSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
SafeTransferSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
SafeTransferSource.prototype['address'] = undefined;

/**
 * @member {module:model/CoboSafeDelegate} delegate
 */
SafeTransferSource.prototype['delegate'] = undefined;






export default SafeTransferSource;

