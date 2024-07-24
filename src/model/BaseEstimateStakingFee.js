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
import ActivityType from './ActivityType';

/**
 * The BaseEstimateStakingFee model module.
 * @module model/BaseEstimateStakingFee
 * @version 0.4.4
 */
class BaseEstimateStakingFee {
    /**
     * Constructs a new <code>BaseEstimateStakingFee</code>.
     * @alias module:model/BaseEstimateStakingFee
     * @param activity_type {module:model/ActivityType} 
     */
    constructor(activity_type) { 
        
        BaseEstimateStakingFee.initialize(this, activity_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activity_type) { 
        obj['activity_type'] = activity_type;
    }

    /**
     * Constructs a <code>BaseEstimateStakingFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseEstimateStakingFee} obj Optional instance to populate.
     * @return {module:model/BaseEstimateStakingFee} The populated <code>BaseEstimateStakingFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseEstimateStakingFee();

            if (data.hasOwnProperty('activity_type')) {
                obj['activity_type'] = ActivityType.constructFromObject(data['activity_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseEstimateStakingFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseEstimateStakingFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseEstimateStakingFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

BaseEstimateStakingFee.RequiredProperties = ["activity_type"];

/**
 * @member {module:model/ActivityType} activity_type
 */
BaseEstimateStakingFee.prototype['activity_type'] = undefined;






export default BaseEstimateStakingFee;

