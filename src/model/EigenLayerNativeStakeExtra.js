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
import BaseStakeExtra from './BaseStakeExtra';
import StakingPoolType from './StakingPoolType';

/**
 * The EigenLayerNativeStakeExtra model module.
 * @module model/EigenLayerNativeStakeExtra
 * @version 0.2.5
 */
class EigenLayerNativeStakeExtra {
    /**
     * Constructs a new <code>EigenLayerNativeStakeExtra</code>.
     * @alias module:model/EigenLayerNativeStakeExtra
     * @implements module:model/BaseStakeExtra
     * @param poolType {module:model/StakingPoolType} 
     */
    constructor(poolType) { 
        BaseStakeExtra.initialize(this, poolType);
        EigenLayerNativeStakeExtra.initialize(this, poolType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, poolType) { 
        obj['pool_type'] = poolType;
    }

    /**
     * Constructs a <code>EigenLayerNativeStakeExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EigenLayerNativeStakeExtra} obj Optional instance to populate.
     * @return {module:model/EigenLayerNativeStakeExtra} The populated <code>EigenLayerNativeStakeExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EigenLayerNativeStakeExtra();
            BaseStakeExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
            if (data.hasOwnProperty('fee_recipient')) {
                obj['fee_recipient'] = ApiClient.convertToType(data['fee_recipient'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EigenLayerNativeStakeExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EigenLayerNativeStakeExtra</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EigenLayerNativeStakeExtra.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

EigenLayerNativeStakeExtra.RequiredProperties = ["pool_type"];

/**
 * @member {module:model/StakingPoolType} pool_type
 */
EigenLayerNativeStakeExtra.prototype['pool_type'] = undefined;

/**
 * The fee recipient address, if not provided the staker address will be used.
 * @member {Number} fee_recipient
 */
EigenLayerNativeStakeExtra.prototype['fee_recipient'] = undefined;


// Implement BaseStakeExtra interface:
/**
 * @member {module:model/StakingPoolType} pool_type
 */
BaseStakeExtra.prototype['pool_type'] = undefined;




export default EigenLayerNativeStakeExtra;

