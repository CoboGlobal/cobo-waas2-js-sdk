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
 * The CreateTssRequestRequestDetailParams model module.
 * @module model/CreateTssRequestRequestDetailParams
 * @version 0.4.1
 */
class CreateTssRequestRequestDetailParams {
    /**
     * Constructs a new <code>CreateTssRequestRequestDetailParams</code>.
     * @alias module:model/CreateTssRequestRequestDetailParams
     */
    constructor() { 
        
        CreateTssRequestRequestDetailParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTssRequestRequestDetailParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTssRequestRequestDetailParams} obj Optional instance to populate.
     * @return {module:model/CreateTssRequestRequestDetailParams} The populated <code>CreateTssRequestRequestDetailParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTssRequestRequestDetailParams();

            if (data.hasOwnProperty('tss_node_ids')) {
                obj['tss_node_ids'] = ApiClient.convertToType(data['tss_node_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTssRequestRequestDetailParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTssRequestRequestDetailParams</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['tss_node_ids'])) {
            throw new Error("Expected the field `tss_node_ids` to be an array in the JSON data but got " + data['tss_node_ids']);
        }

        return true;
    }


}



/**
 * The TSS Node IDs participating in creating a new key share group when `type` is set to either `KeyGenFromKeyGroup` or `Recovery`.   **Note:** In any [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) such as the 2-2, 2-3, and 3-3 schemes (in the \"threshold - node count\" format), for `node_ids`, you only need to fill in 1 Cobo TSS Node ID and enough non-Cobo TSS Node IDs to satisfy the number of approvers specified in `threshold`. To obtain the Cobo TSS Node ID, run [List all Cobo key share holders](/developers/v2/api-references/wallets--mpc-wallets/list-all-cobo-key-share-holders). 
 * @member {Array.<String>} tss_node_ids
 */
CreateTssRequestRequestDetailParams.prototype['tss_node_ids'] = undefined;






export default CreateTssRequestRequestDetailParams;

