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
 * The CreateMpcProjectRequest model module.
 * @module model/CreateMpcProjectRequest
 * @version 0.4.5
 */
class CreateMpcProjectRequest {
    /**
     * Constructs a new <code>CreateMpcProjectRequest</code>.
     * @alias module:model/CreateMpcProjectRequest
     * @param name {String} The project name.
     * @param nodeCount {Number} The number of key share holders in the project.  **Notes:** 1. Currently, the available [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) are 2-2, 2-3, and 3-3 schemes (in the \"threshold - node count\" format), so you can only set `node_count` to 2 or 3.   2. Threshold must be less than or equal to node count. 
     * @param threshold {Number} The number of key share holders required to sign an operation in the project.  **Notes:** 1. Currently, the available [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) are 2-2, 2-3, and 3-3 schemes (in the \"threshold - node count\" format), so you can only set `threshold` to 2 or 3.   2. Threshold must be less than or equal to node count. 
     */
    constructor(name, nodeCount, threshold) { 
        
        CreateMpcProjectRequest.initialize(this, name, nodeCount, threshold);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, nodeCount, threshold) { 
        obj['name'] = name;
        obj['node_count'] = nodeCount;
        obj['threshold'] = threshold;
    }

    /**
     * Constructs a <code>CreateMpcProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMpcProjectRequest} obj Optional instance to populate.
     * @return {module:model/CreateMpcProjectRequest} The populated <code>CreateMpcProjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMpcProjectRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_count')) {
                obj['node_count'] = ApiClient.convertToType(data['node_count'], 'Number');
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateMpcProjectRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateMpcProjectRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateMpcProjectRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateMpcProjectRequest.RequiredProperties = ["name", "node_count", "threshold"];

/**
 * The project name.
 * @member {String} name
 */
CreateMpcProjectRequest.prototype['name'] = undefined;

/**
 * The number of key share holders in the project.  **Notes:** 1. Currently, the available [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) are 2-2, 2-3, and 3-3 schemes (in the \"threshold - node count\" format), so you can only set `node_count` to 2 or 3.   2. Threshold must be less than or equal to node count. 
 * @member {Number} node_count
 */
CreateMpcProjectRequest.prototype['node_count'] = undefined;

/**
 * The number of key share holders required to sign an operation in the project.  **Notes:** 1. Currently, the available [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) are 2-2, 2-3, and 3-3 schemes (in the \"threshold - node count\" format), so you can only set `threshold` to 2 or 3.   2. Threshold must be less than or equal to node count. 
 * @member {Number} threshold
 */
CreateMpcProjectRequest.prototype['threshold'] = undefined;






export default CreateMpcProjectRequest;

