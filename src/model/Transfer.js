/**
 * Cobo Wallet as a Service 2.0
 * Cobo WaaS 2.0 enables you to programmatically access Cobo's full suite of crypto wallet technologies with powerful and flexible access controls.  # Wallet technologies - Custodial Wallet - MPC Wallet - Smart Contract Wallet (Based on Safe{Wallet}) - Exchange Wallet  # Risk Control technologies - Workflow - Access Control List (ACL)  # Risk Control targets - Wallet Management   - User/team and their permission management   - Risk control configurations, e.g. whitelist, blacklist, rate-limiting etc. - Blockchain Interaction   - Crypto transfer   - Smart Contract Invocation  # Important HTTPS only. RESTful, resource oriented  # Get Started Set up your APIs or get authorization  # Authentication and Authorization CoboAuth  # Request and Response application/json  # Error Handling  ### Common error codes | Error Code | Description | | -- | -- |  ### API-specific error codes For error codes that are dedicated to a specific API, see the Error codes section in each API specification, for example, /v3/wallets.  # Rate and Usage Limiting  # Idempotent Request  # Pagination # Support [Developer Hub](https://cobo.com/developers) 
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
import TransactionFee from './TransactionFee';
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
     * The base data for transfer transaction.
     * @alias module:model/Transfer
     * @param requestId {String} Unique id of the request.
     * @param requestType {module:model/Transfer.RequestTypeEnum} 
     * @param source {module:model/TransferSource} 
     * @param tokenId {String} ID of the token. Unique in all chains scope.
     * @param amount {String} Transaction value (Note that this is an absolute value. If you trade 1.5 ETH, then the value is 1.5) 
     * @param destination {module:model/TransferDestination} 
     */
    constructor(requestId, requestType, source, tokenId, amount, destination) { 
        
        Transfer.initialize(this, requestId, requestType, source, tokenId, amount, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId, requestType, source, tokenId, amount, destination) { 
        obj['request_id'] = requestId;
        obj['request_type'] = requestType;
        obj['source'] = source;
        obj['token_id'] = tokenId;
        obj['amount'] = amount;
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
            if (data.hasOwnProperty('request_type')) {
                obj['request_type'] = ApiClient.convertToType(data['request_type'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TransferSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
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
                obj['fee'] = TransactionFee.constructFromObject(data['fee']);
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
        // ensure the json data is a string
        if (data['request_type'] && !(typeof data['request_type'] === 'string' || data['request_type'] instanceof String)) {
            throw new Error("Expected the field `request_type` to be a primitive type in the JSON string but got " + data['request_type']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          TransferSource.validateJSON(data['source']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
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
          TransactionFee.validateJSON(data['fee']);
        }

        return true;
    }


}

Transfer.RequiredProperties = ["request_id", "request_type", "source", "token_id", "amount", "destination"];

/**
 * Unique id of the request.
 * @member {String} request_id
 */
Transfer.prototype['request_id'] = undefined;

/**
 * @member {module:model/Transfer.RequestTypeEnum} request_type
 */
Transfer.prototype['request_type'] = undefined;

/**
 * @member {module:model/TransferSource} source
 */
Transfer.prototype['source'] = undefined;

/**
 * ID of the token. Unique in all chains scope.
 * @member {String} token_id
 */
Transfer.prototype['token_id'] = undefined;

/**
 * Transaction value (Note that this is an absolute value. If you trade 1.5 ETH, then the value is 1.5) 
 * @member {String} amount
 */
Transfer.prototype['amount'] = undefined;

/**
 * @member {module:model/TransferDestination} destination
 */
Transfer.prototype['destination'] = undefined;

/**
 * The category names for transfer.
 * @member {Array.<String>} category_names
 */
Transfer.prototype['category_names'] = undefined;

/**
 * The description for transfer.
 * @member {String} description
 */
Transfer.prototype['description'] = undefined;

/**
 * @member {module:model/TransactionFee} fee
 */
Transfer.prototype['fee'] = undefined;





/**
 * Allowed values for the <code>request_type</code> property.
 * @enum {String}
 * @readonly
 */
Transfer['RequestTypeEnum'] = {

    /**
     * value: "Transfer"
     * @const
     */
    "Transfer": "Transfer",

    /**
     * value: "Call"
     * @const
     */
    "Call": "Call",

    /**
     * value: "Sign"
     * @const
     */
    "Sign": "Sign"
};



export default Transfer;

