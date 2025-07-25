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
 * The TokenizationTokenPermissionParams model module.
 * @module model/TokenizationTokenPermissionParams
 */
class TokenizationTokenPermissionParams {
    /**
     * Constructs a new <code>TokenizationTokenPermissionParams</code>.
     * Role-based permission settings for token contract. If not provided, all permissions will be granted to the issuance wallet by default.
     * @alias module:model/TokenizationTokenPermissionParams
     */
    constructor() { 
        
        TokenizationTokenPermissionParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenizationTokenPermissionParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationTokenPermissionParams} obj Optional instance to populate.
     * @return {module:model/TokenizationTokenPermissionParams} The populated <code>TokenizationTokenPermissionParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationTokenPermissionParams();

            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], ['String']);
            }
            if (data.hasOwnProperty('minter')) {
                obj['minter'] = ApiClient.convertToType(data['minter'], ['String']);
            }
            if (data.hasOwnProperty('burner')) {
                obj['burner'] = ApiClient.convertToType(data['burner'], ['String']);
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ApiClient.convertToType(data['manager'], ['String']);
            }
            if (data.hasOwnProperty('pauser')) {
                obj['pauser'] = ApiClient.convertToType(data['pauser'], ['String']);
            }
            if (data.hasOwnProperty('salvager')) {
                obj['salvager'] = ApiClient.convertToType(data['salvager'], ['String']);
            }
            if (data.hasOwnProperty('upgrader')) {
                obj['upgrader'] = ApiClient.convertToType(data['upgrader'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationTokenPermissionParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationTokenPermissionParams</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['admin'])) {
            throw new Error("Expected the field `admin` to be an array in the JSON data but got " + data['admin']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['minter'])) {
            throw new Error("Expected the field `minter` to be an array in the JSON data but got " + data['minter']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['burner'])) {
            throw new Error("Expected the field `burner` to be an array in the JSON data but got " + data['burner']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['manager'])) {
            throw new Error("Expected the field `manager` to be an array in the JSON data but got " + data['manager']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['pauser'])) {
            throw new Error("Expected the field `pauser` to be an array in the JSON data but got " + data['pauser']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['salvager'])) {
            throw new Error("Expected the field `salvager` to be an array in the JSON data but got " + data['salvager']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['upgrader'])) {
            throw new Error("Expected the field `upgrader` to be an array in the JSON data but got " + data['upgrader']);
        }

        return true;
    }


}



/**
 * List of addresses for the admin role.
 * @member {Array.<String>} admin
 */
TokenizationTokenPermissionParams.prototype['admin'] = undefined;

/**
 * List of addresses for the minter role.
 * @member {Array.<String>} minter
 */
TokenizationTokenPermissionParams.prototype['minter'] = undefined;

/**
 * List of addresses for the burner role.
 * @member {Array.<String>} burner
 */
TokenizationTokenPermissionParams.prototype['burner'] = undefined;

/**
 * List of addresses for the manager role.
 * @member {Array.<String>} manager
 */
TokenizationTokenPermissionParams.prototype['manager'] = undefined;

/**
 * List of addresses for the pauser role.
 * @member {Array.<String>} pauser
 */
TokenizationTokenPermissionParams.prototype['pauser'] = undefined;

/**
 * List of addresses for the salvager role.
 * @member {Array.<String>} salvager
 */
TokenizationTokenPermissionParams.prototype['salvager'] = undefined;

/**
 * List of addresses for the upgrader role.
 * @member {Array.<String>} upgrader
 */
TokenizationTokenPermissionParams.prototype['upgrader'] = undefined;






export default TokenizationTokenPermissionParams;

