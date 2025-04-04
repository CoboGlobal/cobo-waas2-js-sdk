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
import StakingSource from './StakingSource';

/**
 * The CreateBabylonStakingRegistrationRequest model module.
 * @module model/CreateBabylonStakingRegistrationRequest
 */
class CreateBabylonStakingRegistrationRequest {
    /**
     * Constructs a new <code>CreateBabylonStakingRegistrationRequest</code>.
     * @alias module:model/CreateBabylonStakingRegistrationRequest
     */
    constructor() { 
        
        CreateBabylonStakingRegistrationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateBabylonStakingRegistrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBabylonStakingRegistrationRequest} obj Optional instance to populate.
     * @return {module:model/CreateBabylonStakingRegistrationRequest} The populated <code>CreateBabylonStakingRegistrationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBabylonStakingRegistrationRequest();

            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('babylon_address')) {
                obj['babylon_address'] = StakingSource.constructFromObject(data['babylon_address']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateBabylonStakingRegistrationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateBabylonStakingRegistrationRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // validate the optional field `babylon_address`
        if (data['babylon_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['babylon_address']);
          }
        }

        return true;
    }


}



/**
 * The ID of the Phase-1 BTC staking position.
 * @member {String} staking_id
 */
CreateBabylonStakingRegistrationRequest.prototype['staking_id'] = undefined;

/**
 * @member {module:model/StakingSource} babylon_address
 */
CreateBabylonStakingRegistrationRequest.prototype['babylon_address'] = undefined;






export default CreateBabylonStakingRegistrationRequest;

