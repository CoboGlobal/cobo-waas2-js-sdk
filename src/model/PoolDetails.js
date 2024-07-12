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
import PoolDetailsAllOfValidatorsInfo from './PoolDetailsAllOfValidatorsInfo';
import PoolSummary from './PoolSummary';
import StakingPoolType from './StakingPoolType';
import WalletType from './WalletType';

/**
 * The PoolDetails model module.
 * @module model/PoolDetails
 * @version 0.2.7
 */
class PoolDetails {
    /**
     * Constructs a new <code>PoolDetails</code>.
     * @alias module:model/PoolDetails
     * @implements module:model/PoolSummary
     * @param id {String} The unique protocol id.
     * @param chainId {String} The unique chain id.
     * @param protocol {String} The name of the protocol.
     * @param protocolIconUrl {String} The URL of the protocol's icon.
     * @param supportedWalletTypes {Array.<module:model/WalletType>} The list of available wallet types.
     * @param tokenId {String} The unique token id.
     * @param estApr {Number} The estimated APR.
     * @param validatorsInfo {Array.<module:model/PoolDetailsAllOfValidatorsInfo>} The list of validators.
     */
    constructor(id, chainId, protocol, protocolIconUrl, supportedWalletTypes, tokenId, estApr, validatorsInfo) { 
        PoolSummary.initialize(this, id, chainId, protocol, protocolIconUrl, supportedWalletTypes, tokenId, estApr);
        PoolDetails.initialize(this, id, chainId, protocol, protocolIconUrl, supportedWalletTypes, tokenId, estApr, validatorsInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, chainId, protocol, protocolIconUrl, supportedWalletTypes, tokenId, estApr, validatorsInfo) { 
        obj['id'] = id;
        obj['chain_id'] = chainId;
        obj['protocol'] = protocol;
        obj['protocol_icon_url'] = protocolIconUrl;
        obj['supported_wallet_types'] = supportedWalletTypes;
        obj['token_id'] = tokenId;
        obj['est_apr'] = estApr;
        obj['validators_info'] = validatorsInfo;
    }

    /**
     * Constructs a <code>PoolDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolDetails} obj Optional instance to populate.
     * @return {module:model/PoolDetails} The populated <code>PoolDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolDetails();
            PoolSummary.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('est_apr')) {
                obj['est_apr'] = ApiClient.convertToType(data['est_apr'], 'Number');
            }
            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
            if (data.hasOwnProperty('min_amount')) {
                obj['min_amount'] = ApiClient.convertToType(data['min_amount'], 'String');
            }
            if (data.hasOwnProperty('max_amount')) {
                obj['max_amount'] = ApiClient.convertToType(data['max_amount'], 'String');
            }
            if (data.hasOwnProperty('min_stake_period')) {
                obj['min_stake_period'] = ApiClient.convertToType(data['min_stake_period'], 'Number');
            }
            if (data.hasOwnProperty('max_stake_period')) {
                obj['max_stake_period'] = ApiClient.convertToType(data['max_stake_period'], 'Number');
            }
            if (data.hasOwnProperty('validators_info')) {
                obj['validators_info'] = ApiClient.convertToType(data['validators_info'], [PoolDetailsAllOfValidatorsInfo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PoolDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PoolDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PoolDetails.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['min_amount'] && !(typeof data['min_amount'] === 'string' || data['min_amount'] instanceof String)) {
            throw new Error("Expected the field `min_amount` to be a primitive type in the JSON string but got " + data['min_amount']);
        }
        // ensure the json data is a string
        if (data['max_amount'] && !(typeof data['max_amount'] === 'string' || data['max_amount'] instanceof String)) {
            throw new Error("Expected the field `max_amount` to be a primitive type in the JSON string but got " + data['max_amount']);
        }
        if (data['validators_info']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['validators_info'])) {
                throw new Error("Expected the field `validators_info` to be an array in the JSON data but got " + data['validators_info']);
            }
            // validate the optional field `validators_info` (array)
            for (const item of data['validators_info']) {
                PoolDetailsAllOfValidatorsInfo.validateJSON(item);
            };
        }

        return true;
    }


}

PoolDetails.RequiredProperties = ["id", "chain_id", "protocol", "protocol_icon_url", "supported_wallet_types", "token_id", "est_apr", "validators_info"];

/**
 * The unique protocol id.
 * @member {String} id
 */
PoolDetails.prototype['id'] = undefined;

/**
 * The unique chain id.
 * @member {String} chain_id
 */
PoolDetails.prototype['chain_id'] = undefined;

/**
 * The name of the protocol.
 * @member {String} protocol
 */
PoolDetails.prototype['protocol'] = undefined;

/**
 * The URL of the protocol's icon.
 * @member {String} protocol_icon_url
 */
PoolDetails.prototype['protocol_icon_url'] = undefined;

/**
 * The list of available wallet types.
 * @member {Array.<module:model/WalletType>} supported_wallet_types
 */
PoolDetails.prototype['supported_wallet_types'] = undefined;

/**
 * The unique token id.
 * @member {String} token_id
 */
PoolDetails.prototype['token_id'] = undefined;

/**
 * The estimated APR.
 * @member {Number} est_apr
 */
PoolDetails.prototype['est_apr'] = undefined;

/**
 * @member {module:model/StakingPoolType} pool_type
 */
PoolDetails.prototype['pool_type'] = undefined;

/**
 * The minimum amount to stake.
 * @member {String} min_amount
 */
PoolDetails.prototype['min_amount'] = undefined;

/**
 * The maximum amount to stake.
 * @member {String} max_amount
 */
PoolDetails.prototype['max_amount'] = undefined;

/**
 * The minimum staking period in days.
 * @member {Number} min_stake_period
 */
PoolDetails.prototype['min_stake_period'] = undefined;

/**
 * The maximum staking period in days.
 * @member {Number} max_stake_period
 */
PoolDetails.prototype['max_stake_period'] = undefined;

/**
 * The list of validators.
 * @member {Array.<module:model/PoolDetailsAllOfValidatorsInfo>} validators_info
 */
PoolDetails.prototype['validators_info'] = undefined;


// Implement PoolSummary interface:
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
 * The unique token id.
 * @member {String} token_id
 */
PoolSummary.prototype['token_id'] = undefined;
/**
 * The estimated APR.
 * @member {Number} est_apr
 */
PoolSummary.prototype['est_apr'] = undefined;




export default PoolDetails;

