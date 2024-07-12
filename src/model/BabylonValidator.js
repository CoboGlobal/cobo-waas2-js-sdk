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

/**
 * The BabylonValidator model module.
 * @module model/BabylonValidator
 * @version 0.2.6
 */
class BabylonValidator {
    /**
     * Constructs a new <code>BabylonValidator</code>.
     * The babylon validator information.
     * @alias module:model/BabylonValidator
     * @param iconUrl {String} The URL of the validator's icon.
     * @param name {String} The name of validator.
     * @param publicKey {String} The public key of validator.
     * @param commissionRate {Number} The commission rate of validator.
     * @param supportedPosChains {Array.<module:model/BabylonValidator.SupportedPosChainsEnum>} The list of supported pos chains.
     */
    constructor(iconUrl, name, publicKey, commissionRate, supportedPosChains) { 
        
        BabylonValidator.initialize(this, iconUrl, name, publicKey, commissionRate, supportedPosChains);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iconUrl, name, publicKey, commissionRate, supportedPosChains) { 
        obj['icon_url'] = iconUrl;
        obj['name'] = name;
        obj['public_key'] = publicKey;
        obj['commission_rate'] = commissionRate;
        obj['supported_pos_chains'] = supportedPosChains;
    }

    /**
     * Constructs a <code>BabylonValidator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BabylonValidator} obj Optional instance to populate.
     * @return {module:model/BabylonValidator} The populated <code>BabylonValidator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BabylonValidator();

            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('commission_rate')) {
                obj['commission_rate'] = ApiClient.convertToType(data['commission_rate'], 'Number');
            }
            if (data.hasOwnProperty('supported_pos_chains')) {
                obj['supported_pos_chains'] = ApiClient.convertToType(data['supported_pos_chains'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BabylonValidator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BabylonValidator</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BabylonValidator.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['public_key'] && !(typeof data['public_key'] === 'string' || data['public_key'] instanceof String)) {
            throw new Error("Expected the field `public_key` to be a primitive type in the JSON string but got " + data['public_key']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supported_pos_chains'])) {
            throw new Error("Expected the field `supported_pos_chains` to be an array in the JSON data but got " + data['supported_pos_chains']);
        }

        return true;
    }


}

BabylonValidator.RequiredProperties = ["icon_url", "name", "public_key", "commission_rate", "supported_pos_chains"];

/**
 * The URL of the validator's icon.
 * @member {String} icon_url
 */
BabylonValidator.prototype['icon_url'] = undefined;

/**
 * The name of validator.
 * @member {String} name
 */
BabylonValidator.prototype['name'] = undefined;

/**
 * The priority of validator.
 * @member {Number} priority
 */
BabylonValidator.prototype['priority'] = undefined;

/**
 * The public key of validator.
 * @member {String} public_key
 */
BabylonValidator.prototype['public_key'] = undefined;

/**
 * The commission rate of validator.
 * @member {Number} commission_rate
 */
BabylonValidator.prototype['commission_rate'] = undefined;

/**
 * The list of supported pos chains.
 * @member {Array.<module:model/BabylonValidator.SupportedPosChainsEnum>} supported_pos_chains
 */
BabylonValidator.prototype['supported_pos_chains'] = undefined;





/**
 * Allowed values for the <code>supportedPosChains</code> property.
 * @enum {String}
 * @readonly
 */
BabylonValidator['SupportedPosChainsEnum'] = {

    /**
     * value: "Babylon"
     * @const
     */
    "Babylon": "Babylon",

    /**
     * value: "Cosmos"
     * @const
     */
    "Cosmos": "Cosmos"
};



export default BabylonValidator;

