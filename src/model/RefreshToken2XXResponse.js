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
 * The RefreshToken2XXResponse model module.
 * @module model/RefreshToken2XXResponse
 */
class RefreshToken2XXResponse {
    /**
     * Constructs a new <code>RefreshToken2XXResponse</code>.
     * @alias module:model/RefreshToken2XXResponse
     */
    constructor() { 
        
        RefreshToken2XXResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RefreshToken2XXResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RefreshToken2XXResponse} obj Optional instance to populate.
     * @return {module:model/RefreshToken2XXResponse} The populated <code>RefreshToken2XXResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefreshToken2XXResponse();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RefreshToken2XXResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RefreshToken2XXResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_token'] && !(typeof data['access_token'] === 'string' || data['access_token'] instanceof String)) {
            throw new Error("Expected the field `access_token` to be a primitive type in the JSON string but got " + data['access_token']);
        }
        // ensure the json data is a string
        if (data['token_type'] && !(typeof data['token_type'] === 'string' || data['token_type'] instanceof String)) {
            throw new Error("Expected the field `token_type` to be a primitive type in the JSON string but got " + data['token_type']);
        }
        // ensure the json data is a string
        if (data['scope'] && !(typeof data['scope'] === 'string' || data['scope'] instanceof String)) {
            throw new Error("Expected the field `scope` to be a primitive type in the JSON string but got " + data['scope']);
        }
        // ensure the json data is a string
        if (data['refresh_token'] && !(typeof data['refresh_token'] === 'string' || data['refresh_token'] instanceof String)) {
            throw new Error("Expected the field `refresh_token` to be a primitive type in the JSON string but got " + data['refresh_token']);
        }

        return true;
    }


}



/**
 * The new Org Access Token.
 * @member {String} access_token
 */
RefreshToken2XXResponse.prototype['access_token'] = undefined;

/**
 * The type of the tokens, which is Bearer.
 * @member {String} token_type
 */
RefreshToken2XXResponse.prototype['token_type'] = undefined;

/**
 * The scope of the Org Access Token to limit the app's access to the organization's resources. **Note**: Currently this property value is empty. The scope of the Org Access Token is based on the permissions granted when the app user installs the app. 
 * @member {String} scope
 */
RefreshToken2XXResponse.prototype['scope'] = undefined;

/**
 * The time in seconds in which the new Org Access Token expires.
 * @member {Number} expires_in
 */
RefreshToken2XXResponse.prototype['expires_in'] = undefined;

/**
 * The Refresh Token, used to obtain another Org Access Token when the new Org Access Token expires. The expiration time for Refresh Tokens is currently set to 30 days and is subject to change.
 * @member {String} refresh_token
 */
RefreshToken2XXResponse.prototype['refresh_token'] = undefined;






export default RefreshToken2XXResponse;

