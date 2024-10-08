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

/**
 * The WalletBalanceSnapshot model module.
 * @module model/WalletBalanceSnapshot
 */
class WalletBalanceSnapshot {
    /**
     * Constructs a new <code>WalletBalanceSnapshot</code>.
     * The snapshot information.
     * @alias module:model/WalletBalanceSnapshot
     * @param snapshot_id {Number} The snapshot ID.
     */
    constructor(snapshot_id) { 
        
        WalletBalanceSnapshot.initialize(this, snapshot_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, snapshot_id) { 
        obj['snapshot_id'] = snapshot_id;
    }

    /**
     * Constructs a <code>WalletBalanceSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletBalanceSnapshot} obj Optional instance to populate.
     * @return {module:model/WalletBalanceSnapshot} The populated <code>WalletBalanceSnapshot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletBalanceSnapshot();

            if (data.hasOwnProperty('snapshot_id')) {
                obj['snapshot_id'] = ApiClient.convertToType(data['snapshot_id'], 'Number');
            }
            if (data.hasOwnProperty('snapshot_name')) {
                obj['snapshot_name'] = ApiClient.convertToType(data['snapshot_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WalletBalanceSnapshot</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WalletBalanceSnapshot</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WalletBalanceSnapshot.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['snapshot_name'] && !(typeof data['snapshot_name'] === 'string' || data['snapshot_name'] instanceof String)) {
            throw new Error("Expected the field `snapshot_name` to be a primitive type in the JSON string but got " + data['snapshot_name']);
        }

        return true;
    }


}

WalletBalanceSnapshot.RequiredProperties = ["snapshot_id"];

/**
 * The snapshot ID.
 * @member {Number} snapshot_id
 */
WalletBalanceSnapshot.prototype['snapshot_id'] = undefined;

/**
 * The snapshot name.
 * @member {String} snapshot_name
 */
WalletBalanceSnapshot.prototype['snapshot_name'] = undefined;






export default WalletBalanceSnapshot;

