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
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The CreateWithdrawActivity model module.
 * @module model/CreateWithdrawActivity
 * @version 0.4.1
 */
class CreateWithdrawActivity {
    /**
     * Constructs a new <code>CreateWithdrawActivity</code>.
     * @alias module:model/CreateWithdrawActivity
     * @param stakingId {String} The id of the related staking.
     * @param fee {module:model/TransactionTransferFee} 
     */
    constructor(stakingId, fee) { 
        
        CreateWithdrawActivity.initialize(this, stakingId, fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, stakingId, fee) { 
        obj['staking_id'] = stakingId;
        obj['fee'] = fee;
    }

    /**
     * Constructs a <code>CreateWithdrawActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWithdrawActivity} obj Optional instance to populate.
     * @return {module:model/CreateWithdrawActivity} The populated <code>CreateWithdrawActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWithdrawActivity();

            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionTransferFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateWithdrawActivity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateWithdrawActivity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateWithdrawActivity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionTransferFee.validateJSON(data['fee']);
        }

        return true;
    }


}

CreateWithdrawActivity.RequiredProperties = ["staking_id", "fee"];

/**
 * The id of the related staking.
 * @member {String} staking_id
 */
CreateWithdrawActivity.prototype['staking_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
CreateWithdrawActivity.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
CreateWithdrawActivity.prototype['fee'] = undefined;






export default CreateWithdrawActivity;

