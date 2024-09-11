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
 * The ChainInfo model module.
 * @module model/ChainInfo
 */
class ChainInfo {
    /**
     * Constructs a new <code>ChainInfo</code>.
     * The chain information.
     * @alias module:model/ChainInfo
     * @param chain_id {String} The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     */
    constructor(chain_id) { 
        
        ChainInfo.initialize(this, chain_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, chain_id) { 
        obj['chain_id'] = chain_id;
    }

    /**
     * Constructs a <code>ChainInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChainInfo} obj Optional instance to populate.
     * @return {module:model/ChainInfo} The populated <code>ChainInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChainInfo();

            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('explorer_tx_url')) {
                obj['explorer_tx_url'] = ApiClient.convertToType(data['explorer_tx_url'], 'String');
            }
            if (data.hasOwnProperty('explorer_address_url')) {
                obj['explorer_address_url'] = ApiClient.convertToType(data['explorer_address_url'], 'String');
            }
            if (data.hasOwnProperty('require_memo')) {
                obj['require_memo'] = ApiClient.convertToType(data['require_memo'], 'Boolean');
            }
            if (data.hasOwnProperty('confirming_threshold')) {
                obj['confirming_threshold'] = ApiClient.convertToType(data['confirming_threshold'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChainInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChainInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChainInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['explorer_tx_url'] && !(typeof data['explorer_tx_url'] === 'string' || data['explorer_tx_url'] instanceof String)) {
            throw new Error("Expected the field `explorer_tx_url` to be a primitive type in the JSON string but got " + data['explorer_tx_url']);
        }
        // ensure the json data is a string
        if (data['explorer_address_url'] && !(typeof data['explorer_address_url'] === 'string' || data['explorer_address_url'] instanceof String)) {
            throw new Error("Expected the field `explorer_address_url` to be a primitive type in the JSON string but got " + data['explorer_address_url']);
        }

        return true;
    }


}

ChainInfo.RequiredProperties = ["chain_id"];

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
ChainInfo.prototype['chain_id'] = undefined;

/**
 * The chain symbol, which is the abbreviated name of a chain.
 * @member {String} symbol
 */
ChainInfo.prototype['symbol'] = undefined;

/**
 * The URL of the chain icon.
 * @member {String} icon_url
 */
ChainInfo.prototype['icon_url'] = undefined;

/**
 * The transaction URL pattern on the blockchain explorer. You can use it to concatenate the transaction URLs.
 * @member {String} explorer_tx_url
 */
ChainInfo.prototype['explorer_tx_url'] = undefined;

/**
 * The address URL pattern on the blockchain explorer. You can use it to concatenate the address URLs.
 * @member {String} explorer_address_url
 */
ChainInfo.prototype['explorer_address_url'] = undefined;

/**
 * Whether the chain requires a memo.
 * @member {Boolean} require_memo
 */
ChainInfo.prototype['require_memo'] = undefined;

/**
 * Number of confirmations required for a transaction, such as 64 for ETH chain.
 * @member {Number} confirming_threshold
 */
ChainInfo.prototype['confirming_threshold'] = undefined;






export default ChainInfo;

