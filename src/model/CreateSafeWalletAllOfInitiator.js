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
 * The CreateSafeWalletAllOfInitiator model module.
 * @module model/CreateSafeWalletAllOfInitiator
 * @version 0.2.5
 */
class CreateSafeWalletAllOfInitiator {
    /**
     * Constructs a new <code>CreateSafeWalletAllOfInitiator</code>.
     * @alias module:model/CreateSafeWalletAllOfInitiator
     */
    constructor() { 
        
        CreateSafeWalletAllOfInitiator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSafeWalletAllOfInitiator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSafeWalletAllOfInitiator} obj Optional instance to populate.
     * @return {module:model/CreateSafeWalletAllOfInitiator} The populated <code>CreateSafeWalletAllOfInitiator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSafeWalletAllOfInitiator();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = ApiClient.convertToType(data['wallet_type'], 'String');
            }
            if (data.hasOwnProperty('wallet_address')) {
                obj['wallet_address'] = ApiClient.convertToType(data['wallet_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSafeWalletAllOfInitiator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSafeWalletAllOfInitiator</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['wallet_type'] && !(typeof data['wallet_type'] === 'string' || data['wallet_type'] instanceof String)) {
            throw new Error("Expected the field `wallet_type` to be a primitive type in the JSON string but got " + data['wallet_type']);
        }
        // ensure the json data is a string
        if (data['wallet_address'] && !(typeof data['wallet_address'] === 'string' || data['wallet_address'] instanceof String)) {
            throw new Error("Expected the field `wallet_address` to be a primitive type in the JSON string but got " + data['wallet_address']);
        }

        return true;
    }


}



/**
 * The initiator's wallet ID. This property is required when creating a new Safe{Wallet}.
 * @member {String} wallet_id
 */
CreateSafeWalletAllOfInitiator.prototype['wallet_id'] = undefined;

/**
 * The initiator's wallet type. This property is required when creating a new Safe{Wallet}.
 * @member {String} wallet_type
 */
CreateSafeWalletAllOfInitiator.prototype['wallet_type'] = undefined;

/**
 * The initiator's wallet address. This property is required when creating a new Safe{Wallet}.
 * @member {String} wallet_address
 */
CreateSafeWalletAllOfInitiator.prototype['wallet_address'] = undefined;






export default CreateSafeWalletAllOfInitiator;

