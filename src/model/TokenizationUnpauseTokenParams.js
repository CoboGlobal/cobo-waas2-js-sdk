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
import TokenizationTokenOperationSource from './TokenizationTokenOperationSource';

/**
 * The TokenizationUnpauseTokenParams model module.
 * @module model/TokenizationUnpauseTokenParams
 */
class TokenizationUnpauseTokenParams {
    /**
     * Constructs a new <code>TokenizationUnpauseTokenParams</code>.
     * @alias module:model/TokenizationUnpauseTokenParams
     * @param source {module:model/TokenizationTokenOperationSource} 
     */
    constructor(source) { 
        
        TokenizationUnpauseTokenParams.initialize(this, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source) { 
        obj['source'] = source;
    }

    /**
     * Constructs a <code>TokenizationUnpauseTokenParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationUnpauseTokenParams} obj Optional instance to populate.
     * @return {module:model/TokenizationUnpauseTokenParams} The populated <code>TokenizationUnpauseTokenParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationUnpauseTokenParams();

            if (data.hasOwnProperty('source')) {
                obj['source'] = TokenizationTokenOperationSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationUnpauseTokenParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationUnpauseTokenParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenizationUnpauseTokenParams.RequiredProperties) {
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

        return true;
    }


}

TokenizationUnpauseTokenParams.RequiredProperties = ["source"];

/**
 * @member {module:model/TokenizationTokenOperationSource} source
 */
TokenizationUnpauseTokenParams.prototype['source'] = undefined;






export default TokenizationUnpauseTokenParams;

