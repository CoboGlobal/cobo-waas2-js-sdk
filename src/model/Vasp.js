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
 * The Vasp model module.
 * @module model/Vasp
 */
class Vasp {
    /**
     * Constructs a new <code>Vasp</code>.
     * The information of a virtual asset service provider (VASP).
     * @alias module:model/Vasp
     * @param name {String} The VASP name.
     * @param vendor_code {String} The vendor code of the VASP.
     * @param vendor_vasp_id {String} The VASP ID.
     */
    constructor(name, vendor_code, vendor_vasp_id) { 
        
        Vasp.initialize(this, name, vendor_code, vendor_vasp_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, vendor_code, vendor_vasp_id) { 
        obj['name'] = name;
        obj['vendor_code'] = vendor_code;
        obj['vendor_vasp_id'] = vendor_vasp_id;
    }

    /**
     * Constructs a <code>Vasp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vasp} obj Optional instance to populate.
     * @return {module:model/Vasp} The populated <code>Vasp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vasp();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('vendor_code')) {
                obj['vendor_code'] = ApiClient.convertToType(data['vendor_code'], 'String');
            }
            if (data.hasOwnProperty('vendor_vasp_id')) {
                obj['vendor_vasp_id'] = ApiClient.convertToType(data['vendor_vasp_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Vasp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Vasp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Vasp.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['vendor_code'] && !(typeof data['vendor_code'] === 'string' || data['vendor_code'] instanceof String)) {
            throw new Error("Expected the field `vendor_code` to be a primitive type in the JSON string but got " + data['vendor_code']);
        }
        // ensure the json data is a string
        if (data['vendor_vasp_id'] && !(typeof data['vendor_vasp_id'] === 'string' || data['vendor_vasp_id'] instanceof String)) {
            throw new Error("Expected the field `vendor_vasp_id` to be a primitive type in the JSON string but got " + data['vendor_vasp_id']);
        }

        return true;
    }


}

Vasp.RequiredProperties = ["name", "vendor_code", "vendor_vasp_id"];

/**
 * The VASP name.
 * @member {String} name
 */
Vasp.prototype['name'] = undefined;

/**
 * The vendor code of the VASP.
 * @member {String} vendor_code
 */
Vasp.prototype['vendor_code'] = undefined;

/**
 * The VASP ID.
 * @member {String} vendor_vasp_id
 */
Vasp.prototype['vendor_vasp_id'] = undefined;






export default Vasp;

