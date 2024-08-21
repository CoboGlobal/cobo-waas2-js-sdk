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
import CreateStakeActivityExtra from './CreateStakeActivityExtra';
import StakingSource from './StakingSource';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The CreateStakeActivity model module.
 * @module model/CreateStakeActivity
 */
class CreateStakeActivity {
    /**
     * Constructs a new <code>CreateStakeActivity</code>.
     * @alias module:model/CreateStakeActivity
     * @param pool_id {String} The id of the staking pool
     * @param amount {String} The amount to stake
     * @param fee {module:model/TransactionRequestFee} 
     * @param extra {module:model/CreateStakeActivityExtra} 
     */
    constructor(pool_id, amount, fee, extra) { 
        
        CreateStakeActivity.initialize(this, pool_id, amount, fee, extra);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool_id, amount, fee, extra) { 
        obj['pool_id'] = pool_id;
        obj['amount'] = amount;
        obj['fee'] = fee;
        obj['extra'] = extra;
    }

    /**
     * Constructs a <code>CreateStakeActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateStakeActivity} obj Optional instance to populate.
     * @return {module:model/CreateStakeActivity} The populated <code>CreateStakeActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateStakeActivity();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = StakingSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = ApiClient.convertToType(data['pool_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = CreateStakeActivityExtra.constructFromObject(data['extra']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateStakeActivity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateStakeActivity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateStakeActivity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['source']);
          }
        }
        // ensure the json data is a string
        if (data['pool_id'] && !(typeof data['pool_id'] === 'string' || data['pool_id'] instanceof String)) {
            throw new Error("Expected the field `pool_id` to be a primitive type in the JSON string but got " + data['pool_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          if (!!TransactionRequestFee.validateJSON) {
            TransactionRequestFee.validateJSON(data['fee']);
          }
        }
        // validate the optional field `extra`
        if (data['extra']) { // data not null
          if (!!CreateStakeActivityExtra.validateJSON) {
            CreateStakeActivityExtra.validateJSON(data['extra']);
          }
        }

        return true;
    }


}

CreateStakeActivity.RequiredProperties = ["pool_id", "amount", "fee", "extra"];

/**
 * The request ID that is used to track a request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
CreateStakeActivity.prototype['request_id'] = undefined;

/**
 * @member {module:model/StakingSource} source
 */
CreateStakeActivity.prototype['source'] = undefined;

/**
 * The id of the staking pool
 * @member {String} pool_id
 */
CreateStakeActivity.prototype['pool_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
CreateStakeActivity.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
CreateStakeActivity.prototype['fee'] = undefined;

/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
CreateStakeActivity.prototype['extra'] = undefined;






export default CreateStakeActivity;

