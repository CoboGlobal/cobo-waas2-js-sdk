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


import ApiClient from "../ApiClient";
import ChangeGuardPubkey200Response from '../model/ChangeGuardPubkey200Response';
import CreatePrimeBrokerAddress201Response from '../model/CreatePrimeBrokerAddress201Response';
import CreatePrimeBrokerAddressRequest from '../model/CreatePrimeBrokerAddressRequest';
import DeleteGuardPubkey201Response from '../model/DeleteGuardPubkey201Response';
import ErrorResponse from '../model/ErrorResponse';
import QueryApprovalStatement200Response from '../model/QueryApprovalStatement200Response';
import QueryGuardPubkey200Response from '../model/QueryGuardPubkey200Response';

/**
* PrimeBroker service.
* @module api/PrimeBrokerApi
*/
export default class PrimeBrokerApi {

    /**
    * Constructs a new PrimeBrokerApi. 
    * @alias module:api/PrimeBrokerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Change Guard pubkey binding
     * This operation updates an existing binding to associate a broker user ID with a new Cobo Guard public key. 
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangeGuardPubkey200Response} and HTTP response
     */
    changeGuardPubkeyWithHttpInfo(user_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling changeGuardPubkey");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChangeGuardPubkey200Response;
      return this.apiClient.callApi(
        '/prime_broker/user/{user_id}/guard_pubkey', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Change Guard pubkey binding
     * This operation updates an existing binding to associate a broker user ID with a new Cobo Guard public key. 
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeGuardPubkey200Response}
     */
    changeGuardPubkey(user_id) {
      return this.changeGuardPubkeyWithHttpInfo(user_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Guard pubkey binding
     * This operation creates a binding between a broker user ID and a Cobo Guard public key.  
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangeGuardPubkey200Response} and HTTP response
     */
    createGuardPubkeyWithHttpInfo(user_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling createGuardPubkey");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChangeGuardPubkey200Response;
      return this.apiClient.callApi(
        '/prime_broker/user/{user_id}/guard_pubkey', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Guard pubkey binding
     * This operation creates a binding between a broker user ID and a Cobo Guard public key.  
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeGuardPubkey200Response}
     */
    createGuardPubkey(user_id) {
      return this.createGuardPubkeyWithHttpInfo(user_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Bind addresses to a broker user
     * This operation binds addresses to a broker user. 
     * @param {String} user_id The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePrimeBrokerAddressRequest} [CreatePrimeBrokerAddressRequest] The request body to bind addresses to a broker user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatePrimeBrokerAddress201Response} and HTTP response
     */
    createPrimeBrokerAddressWithHttpInfo(user_id, opts) {
      opts = opts || {};
      let postBody = opts['CreatePrimeBrokerAddressRequest'];
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling createPrimeBrokerAddress");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreatePrimeBrokerAddress201Response;
      return this.apiClient.callApi(
        '/prime_broker/user/{user_id}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Bind addresses to a broker user
     * This operation binds addresses to a broker user. 
     * @param {String} user_id The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePrimeBrokerAddressRequest} opts.CreatePrimeBrokerAddressRequest The request body to bind addresses to a broker user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatePrimeBrokerAddress201Response}
     */
    createPrimeBrokerAddress(user_id, opts) {
      return this.createPrimeBrokerAddressWithHttpInfo(user_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Guard pubkey binding
     * This operation deletes a binding between a broker user ID and a Cobo Guard public key. 
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteGuardPubkey201Response} and HTTP response
     */
    deleteGuardPubkeyWithHttpInfo(user_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteGuardPubkey");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteGuardPubkey201Response;
      return this.apiClient.callApi(
        '/prime_broker/user/{user_id}/guard_pubkey/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Guard pubkey binding
     * This operation deletes a binding between a broker user ID and a Cobo Guard public key. 
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteGuardPubkey201Response}
     */
    deleteGuardPubkey(user_id) {
      return this.deleteGuardPubkeyWithHttpInfo(user_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query approval statement
     * This operation queries an approval statement. 
     * @param {String} statement_id The approval statement ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QueryApprovalStatement200Response} and HTTP response
     */
    queryApprovalStatementWithHttpInfo(statement_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'statement_id' is set
      if (statement_id === undefined || statement_id === null) {
        throw new Error("Missing the required parameter 'statement_id' when calling queryApprovalStatement");
      }

      let pathParams = {
        'statement_id': statement_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QueryApprovalStatement200Response;
      return this.apiClient.callApi(
        '/prime_broker/approval_statement/{statement_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query approval statement
     * This operation queries an approval statement. 
     * @param {String} statement_id The approval statement ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QueryApprovalStatement200Response}
     */
    queryApprovalStatement(statement_id) {
      return this.queryApprovalStatementWithHttpInfo(statement_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query a Guard pubkey
     * This operation retrieves the current Cobo Guard public key binding details for a broker user. 
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QueryGuardPubkey200Response} and HTTP response
     */
    queryGuardPubkeyWithHttpInfo(user_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling queryGuardPubkey");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QueryGuardPubkey200Response;
      return this.apiClient.callApi(
        '/prime_broker/user/{user_id}/guard_pubkey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query a Guard pubkey
     * This operation retrieves the current Cobo Guard public key binding details for a broker user. 
     * @param {String} user_id The user ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QueryGuardPubkey200Response}
     */
    queryGuardPubkey(user_id) {
      return this.queryGuardPubkeyWithHttpInfo(user_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
