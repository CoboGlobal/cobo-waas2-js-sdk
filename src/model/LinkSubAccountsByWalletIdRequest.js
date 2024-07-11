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

/**
 * The LinkSubAccountsByWalletIdRequest model module.
 * @module model/LinkSubAccountsByWalletIdRequest
 * @version 0.2.5
 */
class LinkSubAccountsByWalletIdRequest {
    /**
     * Constructs a new <code>LinkSubAccountsByWalletIdRequest</code>.
     * @alias module:model/LinkSubAccountsByWalletIdRequest
     */
    constructor() { 
        
        LinkSubAccountsByWalletIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkSubAccountsByWalletIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkSubAccountsByWalletIdRequest} obj Optional instance to populate.
     * @return {module:model/LinkSubAccountsByWalletIdRequest} The populated <code>LinkSubAccountsByWalletIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkSubAccountsByWalletIdRequest();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('sub_account_ids')) {
                obj['sub_account_ids'] = ApiClient.convertToType(data['sub_account_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkSubAccountsByWalletIdRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkSubAccountsByWalletIdRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sub_account_ids'])) {
            throw new Error("Expected the field `sub_account_ids` to be an array in the JSON data but got " + data['sub_account_ids']);
        }

        return true;
    }


}



/**
 * The ID of main account wallet.
 * @member {String} wallet_id
 */
LinkSubAccountsByWalletIdRequest.prototype['wallet_id'] = undefined;

/**
 * The ID list of sub accounts.
 * @member {Array.<String>} sub_account_ids
 */
LinkSubAccountsByWalletIdRequest.prototype['sub_account_ids'] = undefined;






export default LinkSubAccountsByWalletIdRequest;

