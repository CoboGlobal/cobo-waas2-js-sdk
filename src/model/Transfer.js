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
import TransferDestination from './TransferDestination';
import TransferSource from './TransferSource';

/**
 * The Transfer model module.
 * @module model/Transfer
 * @version 0.1.0
 */
class Transfer {
    /**
     * Constructs a new <code>Transfer</code>.
     * The information about a token transfer.
     * @alias module:model/Transfer
     * @param requestId {String} The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
     * @param source {module:model/TransferSource} 
     * @param tokenId {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens).
     * @param destination {module:model/TransferDestination} 
     */
    constructor(requestId, source, tokenId, destination) { 
        
        Transfer.initialize(this, requestId, source, tokenId, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId, source, tokenId, destination) { 
        obj['request_id'] = requestId;
        obj['source'] = source;
        obj['token_id'] = tokenId;
        obj['destination'] = destination;
    }

    /**
     * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transfer} obj Optional instance to populate.
     * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transfer();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TransferSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = TransferDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('category_names')) {
                obj['category_names'] = ApiClient.convertToType(data['category_names'], ['String']);
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
     * Validates the JSON data with respect to <code>Transfer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transfer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Transfer.RequiredProperties) {
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
          TransferSource.validateJSON(data['source']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          TransferDestination.validateJSON(data['destination']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category_names'])) {
            throw new Error("Expected the field `category_names` to be an array in the JSON data but got " + data['category_names']);
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

Transfer.RequiredProperties = ["request_id", "source", "token_id", "destination"];

/**
 * The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
Transfer.prototype['request_id'] = undefined;

/**
 * @member {module:model/TransferSource} source
 */
Transfer.prototype['source'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens).
 * @member {String} token_id
 */
Transfer.prototype['token_id'] = undefined;

/**
 * @member {module:model/TransferDestination} destination
 */
Transfer.prototype['destination'] = undefined;

/**
 * The custom category for you to identify your transactions.
 * @member {Array.<String>} category_names
 */
Transfer.prototype['category_names'] = undefined;

/**
 * The description of the transfer.
 * @member {String} description
 */
Transfer.prototype['description'] = undefined;

/**
 * @member {module:model/TransactionTransferFee} fee
 */
Transfer.prototype['fee'] = undefined;






export default Transfer;

