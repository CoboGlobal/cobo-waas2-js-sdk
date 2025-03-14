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
import Balance from './Balance';

/**
 * The AssetBalance model module.
 * @module model/AssetBalance
 */
class AssetBalance {
    /**
     * Constructs a new <code>AssetBalance</code>.
     * The data for asset balance information.
     * @alias module:model/AssetBalance
     * @param asset_id {String} (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account.
     * @param balance {module:model/Balance} 
     */
    constructor(asset_id, balance) { 
        
        AssetBalance.initialize(this, asset_id, balance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, asset_id, balance) { 
        obj['asset_id'] = asset_id;
        obj['balance'] = balance;
    }

    /**
     * Constructs a <code>AssetBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetBalance} obj Optional instance to populate.
     * @return {module:model/AssetBalance} The populated <code>AssetBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetBalance();

            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = Balance.constructFromObject(data['balance']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetBalance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetBalance</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssetBalance.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['asset_id'] && !(typeof data['asset_id'] === 'string' || data['asset_id'] instanceof String)) {
            throw new Error("Expected the field `asset_id` to be a primitive type in the JSON string but got " + data['asset_id']);
        }
        // validate the optional field `balance`
        if (data['balance']) { // data not null
          if (!!Balance.validateJSON) {
            Balance.validateJSON(data['balance']);
          }
        }

        return true;
    }


}

AssetBalance.RequiredProperties = ["asset_id", "balance"];

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account.
 * @member {String} asset_id
 */
AssetBalance.prototype['asset_id'] = undefined;

/**
 * @member {module:model/Balance} balance
 */
AssetBalance.prototype['balance'] = undefined;






export default AssetBalance;

