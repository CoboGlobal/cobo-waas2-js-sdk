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
 * The GraphQLRequest model module.
 * @module model/GraphQLRequest
 */
class GraphQLRequest {
    /**
     * Constructs a new <code>GraphQLRequest</code>.
     * The request body for a GraphQL query or mutation.
     * @alias module:model/GraphQLRequest
     * @param query {String} The GraphQL query or mutation as a string.
     */
    constructor(query) { 
        
        GraphQLRequest.initialize(this, query);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query) { 
        obj['query'] = query;
    }

    /**
     * Constructs a <code>GraphQLRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GraphQLRequest} obj Optional instance to populate.
     * @return {module:model/GraphQLRequest} The populated <code>GraphQLRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GraphQLRequest();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': Object});
            }
            if (data.hasOwnProperty('operationName')) {
                obj['operationName'] = ApiClient.convertToType(data['operationName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GraphQLRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GraphQLRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GraphQLRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['operationName'] && !(typeof data['operationName'] === 'string' || data['operationName'] instanceof String)) {
            throw new Error("Expected the field `operationName` to be a primitive type in the JSON string but got " + data['operationName']);
        }

        return true;
    }


}

GraphQLRequest.RequiredProperties = ["query"];

/**
 * The GraphQL query or mutation as a string.
 * @member {String} query
 */
GraphQLRequest.prototype['query'] = undefined;

/**
 * Variables to use in the GraphQL operation. Can include dynamic values required for the query or mutation.
 * @member {Object.<String, Object>} variables
 */
GraphQLRequest.prototype['variables'] = undefined;

/**
 * The operation name in case of multiple operations in the same query or mutation.
 * @member {String} operationName
 */
GraphQLRequest.prototype['operationName'] = undefined;






export default GraphQLRequest;

