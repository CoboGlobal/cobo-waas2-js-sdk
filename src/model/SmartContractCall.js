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
import MpcSigningGroup from './MpcSigningGroup';
import TransactionFee from './TransactionFee';

/**
 * The SmartContractCall model module.
 * @module model/SmartContractCall
 * @version 0.1.0
 */
class SmartContractCall {
    /**
     * Constructs a new <code>SmartContractCall</code>.
     * The data for create smart contract call transaction.
     * @alias module:model/SmartContractCall
     * @param requestId {String} Unique id of the request.
     * @param requestType {module:model/SmartContractCall.RequestTypeEnum} 
     * @param fromWalletId {String} Unique id of the wallet to transfer from.
     * @param fromAddressStr {String} From address
     * @param chainId {String} The blockchain on which the token operates.
     * @param toAddressStr {String} To address
     * @param calldata {Blob} calldata for this transaction. Commonly used as part of contract interaction. 
     */
    constructor(requestId, requestType, fromWalletId, fromAddressStr, chainId, toAddressStr, calldata) { 
        
        SmartContractCall.initialize(this, requestId, requestType, fromWalletId, fromAddressStr, chainId, toAddressStr, calldata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId, requestType, fromWalletId, fromAddressStr, chainId, toAddressStr, calldata) { 
        obj['request_id'] = requestId;
        obj['request_type'] = requestType;
        obj['from_wallet_id'] = fromWalletId;
        obj['from_address_str'] = fromAddressStr;
        obj['chain_id'] = chainId;
        obj['to_address_str'] = toAddressStr;
        obj['calldata'] = calldata;
    }

    /**
     * Constructs a <code>SmartContractCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmartContractCall} obj Optional instance to populate.
     * @return {module:model/SmartContractCall} The populated <code>SmartContractCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartContractCall();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('request_type')) {
                obj['request_type'] = ApiClient.convertToType(data['request_type'], 'String');
            }
            if (data.hasOwnProperty('from_wallet_id')) {
                obj['from_wallet_id'] = ApiClient.convertToType(data['from_wallet_id'], 'String');
            }
            if (data.hasOwnProperty('from_address_str')) {
                obj['from_address_str'] = ApiClient.convertToType(data['from_address_str'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('to_address_str')) {
                obj['to_address_str'] = ApiClient.convertToType(data['to_address_str'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('calldata')) {
                obj['calldata'] = ApiClient.convertToType(data['calldata'], 'Blob');
            }
            if (data.hasOwnProperty('mpc_used_key_group')) {
                obj['mpc_used_key_group'] = MpcSigningGroup.constructFromObject(data['mpc_used_key_group']);
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmartContractCall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmartContractCall</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SmartContractCall.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['from_wallet_id'] && !(typeof data['from_wallet_id'] === 'string' || data['from_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `from_wallet_id` to be a primitive type in the JSON string but got " + data['from_wallet_id']);
        }
        // ensure the json data is a string
        if (data['from_address_str'] && !(typeof data['from_address_str'] === 'string' || data['from_address_str'] instanceof String)) {
            throw new Error("Expected the field `from_address_str` to be a primitive type in the JSON string but got " + data['from_address_str']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['to_address_str'] && !(typeof data['to_address_str'] === 'string' || data['to_address_str'] instanceof String)) {
            throw new Error("Expected the field `to_address_str` to be a primitive type in the JSON string but got " + data['to_address_str']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // validate the optional field `mpc_used_key_group`
        if (data['mpc_used_key_group']) { // data not null
          MpcSigningGroup.validateJSON(data['mpc_used_key_group']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionFee.validateJSON(data['fee']);
        }

        return true;
    }


}

SmartContractCall.RequiredProperties = ["request_id", "request_type", "from_wallet_id", "from_address_str", "chain_id", "to_address_str", "calldata"];

/**
 * Unique id of the request.
 * @member {String} request_id
 */
SmartContractCall.prototype['request_id'] = undefined;

/**
 * @member {module:model/SmartContractCall.RequestTypeEnum} request_type
 */
SmartContractCall.prototype['request_type'] = undefined;

/**
 * Unique id of the wallet to transfer from.
 * @member {String} from_wallet_id
 */
SmartContractCall.prototype['from_wallet_id'] = undefined;

/**
 * From address
 * @member {String} from_address_str
 */
SmartContractCall.prototype['from_address_str'] = undefined;

/**
 * The blockchain on which the token operates.
 * @member {String} chain_id
 */
SmartContractCall.prototype['chain_id'] = undefined;

/**
 * To address
 * @member {String} to_address_str
 */
SmartContractCall.prototype['to_address_str'] = undefined;

/**
 * Transaction value (Note that this is an absolute value. If you trade 1.5 ETH, then the value is 1.5) 
 * @member {String} value
 */
SmartContractCall.prototype['value'] = undefined;

/**
 * calldata for this transaction. Commonly used as part of contract interaction. 
 * @member {Blob} calldata
 */
SmartContractCall.prototype['calldata'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_group
 */
SmartContractCall.prototype['mpc_used_key_group'] = undefined;

/**
 * @member {module:model/TransactionFee} fee
 */
SmartContractCall.prototype['fee'] = undefined;





/**
 * Allowed values for the <code>request_type</code> property.
 * @enum {String}
 * @readonly
 */
SmartContractCall['RequestTypeEnum'] = {

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



export default SmartContractCall;
