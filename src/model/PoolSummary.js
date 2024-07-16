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
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The PoolSummary model module.
 * @module model/PoolSummary
 * @version 0.2.7
 */
class PoolSummary {
    /**
     * Constructs a new <code>PoolSummary</code>.
     * The summary of the staking pool.
     * @alias module:model/PoolSummary
     * @param id {String} The unique protocol id.
     * @param chainId {String} The unique chain id.
     * @param protocol {String} The name of the protocol.
     * @param protocolIconUrl {String} The URL of the protocol's icon.
     * @param supportedWalletTypes {Array.<module:model/WalletType>} The list of available wallet types.
     * @param supportedWalletSubtypes {Array.<module:model/WalletSubtype>} The list of available wallet types.
     * @param tokenId {String} The unique token id.
     * @param estApr {Number} The estimated APR.
     */
    constructor(id, chainId, protocol, protocolIconUrl, supportedWalletTypes, supportedWalletSubtypes, tokenId, estApr) { 
        
        PoolSummary.initialize(this, id, chainId, protocol, protocolIconUrl, supportedWalletTypes, supportedWalletSubtypes, tokenId, estApr);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, chainId, protocol, protocolIconUrl, supportedWalletTypes, supportedWalletSubtypes, tokenId, estApr) { 
        obj['id'] = id;
        obj['chain_id'] = chainId;
        obj['protocol'] = protocol;
        obj['protocol_icon_url'] = protocolIconUrl;
        obj['supported_wallet_types'] = supportedWalletTypes;
        obj['supported_wallet_subtypes'] = supportedWalletSubtypes;
        obj['token_id'] = tokenId;
        obj['est_apr'] = estApr;
    }

    /**
     * Constructs a <code>PoolSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolSummary} obj Optional instance to populate.
     * @return {module:model/PoolSummary} The populated <code>PoolSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolSummary();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('protocol_icon_url')) {
                obj['protocol_icon_url'] = ApiClient.convertToType(data['protocol_icon_url'], 'String');
            }
            if (data.hasOwnProperty('supported_wallet_types')) {
                obj['supported_wallet_types'] = ApiClient.convertToType(data['supported_wallet_types'], [WalletType]);
            }
            if (data.hasOwnProperty('supported_wallet_subtypes')) {
                obj['supported_wallet_subtypes'] = ApiClient.convertToType(data['supported_wallet_subtypes'], [WalletSubtype]);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('est_apr')) {
                obj['est_apr'] = ApiClient.convertToType(data['est_apr'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PoolSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PoolSummary</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PoolSummary.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }
        // ensure the json data is a string
        if (data['protocol_icon_url'] && !(typeof data['protocol_icon_url'] === 'string' || data['protocol_icon_url'] instanceof String)) {
            throw new Error("Expected the field `protocol_icon_url` to be a primitive type in the JSON string but got " + data['protocol_icon_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supported_wallet_types'])) {
            throw new Error("Expected the field `supported_wallet_types` to be an array in the JSON data but got " + data['supported_wallet_types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supported_wallet_subtypes'])) {
            throw new Error("Expected the field `supported_wallet_subtypes` to be an array in the JSON data but got " + data['supported_wallet_subtypes']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

PoolSummary.RequiredProperties = ["id", "chain_id", "protocol", "protocol_icon_url", "supported_wallet_types", "supported_wallet_subtypes", "token_id", "est_apr"];

/**
 * The unique protocol id.
 * @member {String} id
 */
PoolSummary.prototype['id'] = undefined;

/**
 * The unique chain id.
 * @member {String} chain_id
 */
PoolSummary.prototype['chain_id'] = undefined;

/**
 * The name of the protocol.
 * @member {String} protocol
 */
PoolSummary.prototype['protocol'] = undefined;

/**
 * The URL of the protocol's icon.
 * @member {String} protocol_icon_url
 */
PoolSummary.prototype['protocol_icon_url'] = undefined;

/**
 * The list of available wallet types.
 * @member {Array.<module:model/WalletType>} supported_wallet_types
 */
PoolSummary.prototype['supported_wallet_types'] = undefined;

/**
 * The list of available wallet types.
 * @member {Array.<module:model/WalletSubtype>} supported_wallet_subtypes
 */
PoolSummary.prototype['supported_wallet_subtypes'] = undefined;

/**
 * The unique token id.
 * @member {String} token_id
 */
PoolSummary.prototype['token_id'] = undefined;

/**
 * The estimated APR.
 * @member {Number} est_apr
 */
PoolSummary.prototype['est_apr'] = undefined;






export default PoolSummary;

