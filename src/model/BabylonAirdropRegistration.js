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
import BabylonRegistrationRequestStatus from './BabylonRegistrationRequestStatus';
import StakingSource from './StakingSource';

/**
 * The BabylonAirdropRegistration model module.
 * @module model/BabylonAirdropRegistration
 */
class BabylonAirdropRegistration {
    /**
     * Constructs a new <code>BabylonAirdropRegistration</code>.
     * The details of a Babylon airdrop registration.
     * @alias module:model/BabylonAirdropRegistration
     */
    constructor() { 
        
        BabylonAirdropRegistration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BabylonAirdropRegistration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BabylonAirdropRegistration} obj Optional instance to populate.
     * @return {module:model/BabylonAirdropRegistration} The populated <code>BabylonAirdropRegistration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BabylonAirdropRegistration();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = BabylonRegistrationRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('btc_address')) {
                obj['btc_address'] = StakingSource.constructFromObject(data['btc_address']);
            }
            if (data.hasOwnProperty('babylon_address')) {
                obj['babylon_address'] = StakingSource.constructFromObject(data['babylon_address']);
            }
            if (data.hasOwnProperty('airdrop_amount')) {
                obj['airdrop_amount'] = ApiClient.convertToType(data['airdrop_amount'], 'String');
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BabylonAirdropRegistration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BabylonAirdropRegistration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `btc_address`
        if (data['btc_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['btc_address']);
          }
        }
        // validate the optional field `babylon_address`
        if (data['babylon_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['babylon_address']);
          }
        }
        // ensure the json data is a string
        if (data['airdrop_amount'] && !(typeof data['airdrop_amount'] === 'string' || data['airdrop_amount'] instanceof String)) {
            throw new Error("Expected the field `airdrop_amount` to be a primitive type in the JSON string but got " + data['airdrop_amount']);
        }
        // ensure the json data is a string
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }

        return true;
    }


}



/**
 * The registration ID, a unique identifier for tracking the airdrop registration.
 * @member {String} id
 */
BabylonAirdropRegistration.prototype['id'] = undefined;

/**
 * @member {module:model/BabylonRegistrationRequestStatus} status
 */
BabylonAirdropRegistration.prototype['status'] = undefined;

/**
 * @member {module:model/StakingSource} btc_address
 */
BabylonAirdropRegistration.prototype['btc_address'] = undefined;

/**
 * @member {module:model/StakingSource} babylon_address
 */
BabylonAirdropRegistration.prototype['babylon_address'] = undefined;

/**
 * The actual airdrop amount allocated for this BTC address.
 * @member {String} airdrop_amount
 */
BabylonAirdropRegistration.prototype['airdrop_amount'] = undefined;

/**
 * The detailed error message if the registration failed.
 * @member {String} error_message
 */
BabylonAirdropRegistration.prototype['error_message'] = undefined;

/**
 * The time when the registration was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
BabylonAirdropRegistration.prototype['created_timestamp'] = undefined;

/**
 * The time when the registration was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
BabylonAirdropRegistration.prototype['updated_timestamp'] = undefined;






export default BabylonAirdropRegistration;

