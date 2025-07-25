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
import TokenizationOperationType from './TokenizationOperationType';
import TokenizationTokenOperationSource from './TokenizationTokenOperationSource';
import TokenizationUpdateAddressAction from './TokenizationUpdateAddressAction';
import TokenizationUpdateAllowlistAddressesParams from './TokenizationUpdateAllowlistAddressesParams';
import TokenizationUpdateAllowlistAddressesParamsAddressesInner from './TokenizationUpdateAllowlistAddressesParamsAddressesInner';

/**
 * The TokenizationUpdateAllowlistAddressesEstimateFeeParams model module.
 * @module model/TokenizationUpdateAllowlistAddressesEstimateFeeParams
 */
class TokenizationUpdateAllowlistAddressesEstimateFeeParams {
    /**
     * Constructs a new <code>TokenizationUpdateAllowlistAddressesEstimateFeeParams</code>.
     * @alias module:model/TokenizationUpdateAllowlistAddressesEstimateFeeParams
     * @implements module:model/TokenizationUpdateAllowlistAddressesParams
     * @param action {module:model/TokenizationUpdateAddressAction} 
     * @param source {module:model/TokenizationTokenOperationSource} 
     * @param addresses {Array.<module:model/TokenizationUpdateAllowlistAddressesParamsAddressesInner>} A list of addresses to manage. For 'add' operations, notes can be provided. For 'remove' operations, notes are ignored.
     * @param operation_type {module:model/TokenizationOperationType} 
     * @param token_id {String} The ID of the token.
     */
    constructor(action, source, addresses, operation_type, token_id) { 
        TokenizationUpdateAllowlistAddressesParams.initialize(this, action, source, addresses);
        TokenizationUpdateAllowlistAddressesEstimateFeeParams.initialize(this, action, source, addresses, operation_type, token_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, source, addresses, operation_type, token_id) { 
        obj['action'] = action;
        obj['source'] = source;
        obj['addresses'] = addresses;
        obj['operation_type'] = operation_type;
        obj['token_id'] = token_id;
    }

    /**
     * Constructs a <code>TokenizationUpdateAllowlistAddressesEstimateFeeParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationUpdateAllowlistAddressesEstimateFeeParams} obj Optional instance to populate.
     * @return {module:model/TokenizationUpdateAllowlistAddressesEstimateFeeParams} The populated <code>TokenizationUpdateAllowlistAddressesEstimateFeeParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationUpdateAllowlistAddressesEstimateFeeParams();
            TokenizationUpdateAllowlistAddressesParams.constructFromObject(data, obj);

            if (data.hasOwnProperty('action')) {
                obj['action'] = TokenizationUpdateAddressAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TokenizationTokenOperationSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [TokenizationUpdateAllowlistAddressesParamsAddressesInner]);
            }
            if (data.hasOwnProperty('operation_type')) {
                obj['operation_type'] = TokenizationOperationType.constructFromObject(data['operation_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationUpdateAllowlistAddressesEstimateFeeParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationUpdateAllowlistAddressesEstimateFeeParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenizationUpdateAllowlistAddressesEstimateFeeParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          if (!!TokenizationTokenOperationSource.validateJSON) {
            TokenizationTokenOperationSource.validateJSON(data['source']);
          }
        }
        if (data['addresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['addresses'])) {
                throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
            }
            // validate the optional field `addresses` (array)
            for (const item of data['addresses']) {
                TokenizationUpdateAllowlistAddressesParamsAddressesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

TokenizationUpdateAllowlistAddressesEstimateFeeParams.RequiredProperties = ["action", "source", "addresses", "operation_type", "token_id"];

/**
 * @member {module:model/TokenizationUpdateAddressAction} action
 */
TokenizationUpdateAllowlistAddressesEstimateFeeParams.prototype['action'] = undefined;

/**
 * @member {module:model/TokenizationTokenOperationSource} source
 */
TokenizationUpdateAllowlistAddressesEstimateFeeParams.prototype['source'] = undefined;

/**
 * A list of addresses to manage. For 'add' operations, notes can be provided. For 'remove' operations, notes are ignored.
 * @member {Array.<module:model/TokenizationUpdateAllowlistAddressesParamsAddressesInner>} addresses
 */
TokenizationUpdateAllowlistAddressesEstimateFeeParams.prototype['addresses'] = undefined;

/**
 * @member {module:model/TokenizationOperationType} operation_type
 */
TokenizationUpdateAllowlistAddressesEstimateFeeParams.prototype['operation_type'] = undefined;

/**
 * The ID of the token.
 * @member {String} token_id
 */
TokenizationUpdateAllowlistAddressesEstimateFeeParams.prototype['token_id'] = undefined;


// Implement TokenizationUpdateAllowlistAddressesParams interface:
/**
 * @member {module:model/TokenizationUpdateAddressAction} action
 */
TokenizationUpdateAllowlistAddressesParams.prototype['action'] = undefined;
/**
 * @member {module:model/TokenizationTokenOperationSource} source
 */
TokenizationUpdateAllowlistAddressesParams.prototype['source'] = undefined;
/**
 * A list of addresses to manage. For 'add' operations, notes can be provided. For 'remove' operations, notes are ignored.
 * @member {Array.<module:model/TokenizationUpdateAllowlistAddressesParamsAddressesInner>} addresses
 */
TokenizationUpdateAllowlistAddressesParams.prototype['addresses'] = undefined;




export default TokenizationUpdateAllowlistAddressesEstimateFeeParams;

