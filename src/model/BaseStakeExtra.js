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
import StakingPoolType from './StakingPoolType';

/**
 * The BaseStakeExtra model module.
 * @module model/BaseStakeExtra
 */
class BaseStakeExtra {
    /**
     * Constructs a new <code>BaseStakeExtra</code>.
     * The base information about a staking protocol.
     * @alias module:model/BaseStakeExtra
     * @param pool_type {module:model/StakingPoolType} 
     */
    constructor(pool_type) { 
        
        BaseStakeExtra.initialize(this, pool_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool_type) { 
        obj['pool_type'] = pool_type;
    }

    /**
     * Constructs a <code>BaseStakeExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseStakeExtra} obj Optional instance to populate.
     * @return {module:model/BaseStakeExtra} The populated <code>BaseStakeExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseStakeExtra();

            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseStakeExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseStakeExtra</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseStakeExtra.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

BaseStakeExtra.RequiredProperties = ["pool_type"];

/**
 * @member {module:model/StakingPoolType} pool_type
 */
BaseStakeExtra.prototype['pool_type'] = undefined;






export default BaseStakeExtra;

