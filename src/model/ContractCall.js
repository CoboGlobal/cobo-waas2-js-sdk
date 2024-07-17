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
import ContractCallSource from './ContractCallSource';
import EstimateFeeContractCallDestination from './EstimateFeeContractCallDestination';
import TransactionTransferFee from './TransactionTransferFee';

/**
 * The ContractCall model module.
 * @module model/ContractCall
 * @version 0.4.1
 */
class ContractCall {
    /**
     * Constructs a new <code>ContractCall</code>.
     * The information about a transaction that interacts with a smart contract
     * @alias module:model/ContractCall
     * @param requestId {String} The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
     * @param chainId {String} The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/developers/v2/api-references/wallets/list-enabled-chains).
     * @param source {module:model/ContractCallSource} 
     * @param destination {module:model/EstimateFeeContractCallDestination} 
     */
    constructor(requestId, chainId, source, destination) { 
        
        ContractCall.initialize(this, requestId, chainId, source, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId, chainId, source, destination) { 
        obj['request_id'] = requestId;
        obj['chain_id'] = chainId;
        obj['source'] = source;
        obj['destination'] = destination;
    }

    /**
     * Constructs a <code>ContractCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractCall} obj Optional instance to populate.
     * @return {module:model/ContractCall} The populated <code>ContractCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractCall();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ContractCallSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = EstimateFeeContractCallDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionTransferFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContractCall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContractCall</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContractCall.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          ContractCallSource.validateJSON(data['source']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          EstimateFeeContractCallDestination.validateJSON(data['destination']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionTransferFee.validateJSON(data['fee']);
        }

        return true;
    }


}

ContractCall.RequiredProperties = ["request_id", "chain_id", "source", "destination"];

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
ContractCall.prototype['request_id'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/developers/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
ContractCall.prototype['chain_id'] = undefined;

/**
 * @member {module:model/ContractCallSource} source
 */
ContractCall.prototype['source'] = undefined;

/**
 * @member {module:model/EstimateFeeContractCallDestination} destination
 */
ContractCall.prototype['destination'] = undefined;

/**
 * The description of the contract call transaction.
 * @member {String} description
 */
ContractCall.prototype['description'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
ContractCall.prototype['fee'] = undefined;






export default ContractCall;

