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
 * The TransactionSolContractAccount model module.
 * @module model/TransactionSolContractAccount
 */
class TransactionSolContractAccount {
    /**
     * Constructs a new <code>TransactionSolContractAccount</code>.
     * sol contract instruction account
     * @alias module:model/TransactionSolContractAccount
     */
    constructor() { 
        
        TransactionSolContractAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionSolContractAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSolContractAccount} obj Optional instance to populate.
     * @return {module:model/TransactionSolContractAccount} The populated <code>TransactionSolContractAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSolContractAccount();

            if (data.hasOwnProperty('pubkey')) {
                obj['pubkey'] = ApiClient.convertToType(data['pubkey'], 'String');
            }
            if (data.hasOwnProperty('is_signer')) {
                obj['is_signer'] = ApiClient.convertToType(data['is_signer'], 'Boolean');
            }
            if (data.hasOwnProperty('is_writable')) {
                obj['is_writable'] = ApiClient.convertToType(data['is_writable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSolContractAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSolContractAccount</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['pubkey'] && !(typeof data['pubkey'] === 'string' || data['pubkey'] instanceof String)) {
            throw new Error("Expected the field `pubkey` to be a primitive type in the JSON string but got " + data['pubkey']);
        }

        return true;
    }


}



/**
 * account address. If the account is signer, pubkey needs to match the from_address parameter. 
 * @member {String} pubkey
 */
TransactionSolContractAccount.prototype['pubkey'] = undefined;

/**
 * boolean value indicating whether the account can sign transactions. 
 * @member {Boolean} is_signer
 */
TransactionSolContractAccount.prototype['is_signer'] = undefined;

/**
 * boolean value indicating whether the account can be modified. 
 * @member {Boolean} is_writable
 */
TransactionSolContractAccount.prototype['is_writable'] = undefined;






export default TransactionSolContractAccount;

