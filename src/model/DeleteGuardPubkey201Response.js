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
 * The DeleteGuardPubkey201Response model module.
 * @module model/DeleteGuardPubkey201Response
 */
class DeleteGuardPubkey201Response {
    /**
     * Constructs a new <code>DeleteGuardPubkey201Response</code>.
     * @alias module:model/DeleteGuardPubkey201Response
     * @param statement_id {String} The deleted Cobo Guard binding statement ID.
     */
    constructor(statement_id) { 
        
        DeleteGuardPubkey201Response.initialize(this, statement_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, statement_id) { 
        obj['statement_id'] = statement_id;
    }

    /**
     * Constructs a <code>DeleteGuardPubkey201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteGuardPubkey201Response} obj Optional instance to populate.
     * @return {module:model/DeleteGuardPubkey201Response} The populated <code>DeleteGuardPubkey201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteGuardPubkey201Response();

            if (data.hasOwnProperty('statement_id')) {
                obj['statement_id'] = ApiClient.convertToType(data['statement_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteGuardPubkey201Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteGuardPubkey201Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteGuardPubkey201Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['statement_id'] && !(typeof data['statement_id'] === 'string' || data['statement_id'] instanceof String)) {
            throw new Error("Expected the field `statement_id` to be a primitive type in the JSON string but got " + data['statement_id']);
        }

        return true;
    }


}

DeleteGuardPubkey201Response.RequiredProperties = ["statement_id"];

/**
 * The deleted Cobo Guard binding statement ID.
 * @member {String} statement_id
 */
DeleteGuardPubkey201Response.prototype['statement_id'] = undefined;






export default DeleteGuardPubkey201Response;

