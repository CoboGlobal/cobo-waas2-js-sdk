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
import BabylonRegistrationStatus from './BabylonRegistrationStatus';
import StakingSource from './StakingSource';

/**
 * The ListBabylonEligibleStakings200ResponseDataInner model module.
 * @module model/ListBabylonEligibleStakings200ResponseDataInner
 */
class ListBabylonEligibleStakings200ResponseDataInner {
    /**
     * Constructs a new <code>ListBabylonEligibleStakings200ResponseDataInner</code>.
     * The babylon staking position eligible for Phase-2 registration.
     * @alias module:model/ListBabylonEligibleStakings200ResponseDataInner
     */
    constructor() { 
        
        ListBabylonEligibleStakings200ResponseDataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListBabylonEligibleStakings200ResponseDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBabylonEligibleStakings200ResponseDataInner} obj Optional instance to populate.
     * @return {module:model/ListBabylonEligibleStakings200ResponseDataInner} The populated <code>ListBabylonEligibleStakings200ResponseDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBabylonEligibleStakings200ResponseDataInner();

            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('btc_address')) {
                obj['btc_address'] = StakingSource.constructFromObject(data['btc_address']);
            }
            if (data.hasOwnProperty('babylon_address')) {
                obj['babylon_address'] = StakingSource.constructFromObject(data['babylon_address']);
            }
            if (data.hasOwnProperty('staked_amount')) {
                obj['staked_amount'] = ApiClient.convertToType(data['staked_amount'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = BabylonRegistrationStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListBabylonEligibleStakings200ResponseDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListBabylonEligibleStakings200ResponseDataInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
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
        if (data['staked_amount'] && !(typeof data['staked_amount'] === 'string' || data['staked_amount'] instanceof String)) {
            throw new Error("Expected the field `staked_amount` to be a primitive type in the JSON string but got " + data['staked_amount']);
        }

        return true;
    }


}



/**
 * The ID of the Phase-1 BTC staking position.
 * @member {String} staking_id
 */
ListBabylonEligibleStakings200ResponseDataInner.prototype['staking_id'] = undefined;

/**
 * @member {module:model/StakingSource} btc_address
 */
ListBabylonEligibleStakings200ResponseDataInner.prototype['btc_address'] = undefined;

/**
 * @member {module:model/StakingSource} babylon_address
 */
ListBabylonEligibleStakings200ResponseDataInner.prototype['babylon_address'] = undefined;

/**
 * The current amount of BTC staked.
 * @member {String} staked_amount
 */
ListBabylonEligibleStakings200ResponseDataInner.prototype['staked_amount'] = undefined;

/**
 * @member {module:model/BabylonRegistrationStatus} status
 */
ListBabylonEligibleStakings200ResponseDataInner.prototype['status'] = undefined;






export default ListBabylonEligibleStakings200ResponseDataInner;

