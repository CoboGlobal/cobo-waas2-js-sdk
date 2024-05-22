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


import ApiClient from "../ApiClient";
import CreateKeyGroupRequest from '../model/CreateKeyGroupRequest';
import CreateMpcProjectRequest from '../model/CreateMpcProjectRequest';
import CreateMpcVaultRequest from '../model/CreateMpcVaultRequest';
import CreateTssRequestRequest from '../model/CreateTssRequestRequest';
import ErrorResponse from '../model/ErrorResponse';
import KeyGroup from '../model/KeyGroup';
import KeyGroupType from '../model/KeyGroupType';
import KeyHolder from '../model/KeyHolder';
import MPCProject from '../model/MPCProject';
import MPCVault from '../model/MPCVault';
import ModifyMpcVaultRequest from '../model/ModifyMpcVaultRequest';
import TSSRequest from '../model/TSSRequest';
import UpdateMpcProjectRequest from '../model/UpdateMpcProjectRequest';

/**
* WalletsMPCWallet service.
* @module api/WalletsMPCWalletApi
* @version 0.1.0
*/
export default class WalletsMPCWalletApi {

    /**
    * Constructs a new WalletsMPCWalletApi. 
    * @alias module:api/WalletsMPCWalletApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * cancel tss request
     * cancel tss request.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} tssRequestId Unique id of the tss request
     * @param {module:model/String} tssRequestAction The action of tss request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TSSRequest} and HTTP response
     */
    cancelTssRequestWithHttpInfo(vaultId, tssRequestId, tssRequestAction) {
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling cancelTssRequest");
      }
      // verify the required parameter 'tssRequestId' is set
      if (tssRequestId === undefined || tssRequestId === null) {
        throw new Error("Missing the required parameter 'tssRequestId' when calling cancelTssRequest");
      }
      // verify the required parameter 'tssRequestAction' is set
      if (tssRequestAction === undefined || tssRequestAction === null) {
        throw new Error("Missing the required parameter 'tssRequestAction' when calling cancelTssRequest");
      }

      let pathParams = {
        'vault_id': vaultId,
        'tss_request_id': tssRequestId
      };
      let queryParams = {
        'tss_request_action': tssRequestAction
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TSSRequest;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * cancel tss request
     * cancel tss request.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} tssRequestId Unique id of the tss request
     * @param {module:model/String} tssRequestAction The action of tss request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TSSRequest}
     */
    cancelTssRequest(vaultId, tssRequestId, tssRequestAction) {
      return this.cancelTssRequestWithHttpInfo(vaultId, tssRequestId, tssRequestAction)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create a mpc key group
     * create a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateKeyGroupRequest} [createKeyGroupRequest] The request body to create a mpc key group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyGroup} and HTTP response
     */
    createKeyGroupWithHttpInfo(vaultId, opts) {
      opts = opts || {};
      let postBody = opts['createKeyGroupRequest'];
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling createKeyGroup");
      }

      let pathParams = {
        'vault_id': vaultId
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
      let returnType = KeyGroup;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/key_groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create a mpc key group
     * create a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateKeyGroupRequest} opts.createKeyGroupRequest The request body to create a mpc key group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyGroup}
     */
    createKeyGroup(vaultId, opts) {
      return this.createKeyGroupWithHttpInfo(vaultId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a mpc project
     * create a mpc project
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateMpcProjectRequest} [createMpcProjectRequest] The request body to create a mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MPCProject} and HTTP response
     */
    createMpcProjectWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createMpcProjectRequest'];

      let pathParams = {
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
      let returnType = MPCProject;
      return this.apiClient.callApi(
        '/wallets/mpc/projects', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a mpc project
     * create a mpc project
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateMpcProjectRequest} opts.createMpcProjectRequest The request body to create a mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MPCProject}
     */
    createMpcProject(opts) {
      return this.createMpcProjectWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a mpc vault
     * create a mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateMpcVaultRequest} [createMpcVaultRequest] The request body to create a mpc vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MPCVault} and HTTP response
     */
    createMpcVaultWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createMpcVaultRequest'];

      let pathParams = {
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
      let returnType = MPCVault;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a mpc vault
     * create a mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateMpcVaultRequest} opts.createMpcVaultRequest The request body to create a mpc vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MPCVault}
     */
    createMpcVault(opts) {
      return this.createMpcVaultWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a tss request to generate key secrets for a tss group
     * Create a tss request to generate key secrets for a tss group
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTssRequestRequest} [createTssRequestRequest] The request body to create a tss request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TSSRequest} and HTTP response
     */
    createTssRequestWithHttpInfo(vaultId, opts) {
      opts = opts || {};
      let postBody = opts['createTssRequestRequest'];
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling createTssRequest");
      }

      let pathParams = {
        'vault_id': vaultId
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
      let returnType = TSSRequest;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/tss_requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a tss request to generate key secrets for a tss group
     * Create a tss request to generate key secrets for a tss group
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTssRequestRequest} opts.createTssRequestRequest The request body to create a tss request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TSSRequest}
     */
    createTssRequest(vaultId, opts) {
      return this.createTssRequestWithHttpInfo(vaultId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete a mpc key group
     * delete a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} keyGroupId Unique id of the tss group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyGroup} and HTTP response
     */
    deleteKeyGroupWithHttpInfo(vaultId, keyGroupId) {
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling deleteKeyGroup");
      }
      // verify the required parameter 'keyGroupId' is set
      if (keyGroupId === undefined || keyGroupId === null) {
        throw new Error("Missing the required parameter 'keyGroupId' when calling deleteKeyGroup");
      }

      let pathParams = {
        'vault_id': vaultId,
        'key_group_id': keyGroupId
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
      let returnType = KeyGroup;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete a mpc key group
     * delete a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} keyGroupId Unique id of the tss group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyGroup}
     */
    deleteKeyGroup(vaultId, keyGroupId) {
      return this.deleteKeyGroupWithHttpInfo(vaultId, keyGroupId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get a mpc key group
     * get a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} keyGroupId Unique id of the tss group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyGroup} and HTTP response
     */
    getKeyGroupWithHttpInfo(vaultId, keyGroupId) {
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling getKeyGroup");
      }
      // verify the required parameter 'keyGroupId' is set
      if (keyGroupId === undefined || keyGroupId === null) {
        throw new Error("Missing the required parameter 'keyGroupId' when calling getKeyGroup");
      }

      let pathParams = {
        'vault_id': vaultId,
        'key_group_id': keyGroupId
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
      let returnType = KeyGroup;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get a mpc key group
     * get a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} keyGroupId Unique id of the tss group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyGroup}
     */
    getKeyGroup(vaultId, keyGroupId) {
      return this.getKeyGroupWithHttpInfo(vaultId, keyGroupId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get a mpc project
     * get a mpc vault
     * @param {String} projectId Unique id of the mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MPCProject} and HTTP response
     */
    getMpcProjectWithHttpInfo(projectId) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getMpcProject");
      }

      let pathParams = {
        'project_id': projectId
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
      let returnType = MPCProject;
      return this.apiClient.callApi(
        '/wallets/mpc/projects/{project_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get a mpc project
     * get a mpc vault
     * @param {String} projectId Unique id of the mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MPCProject}
     */
    getMpcProject(projectId) {
      return this.getMpcProjectWithHttpInfo(projectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get a mpc vault
     * get a mpc vault
     * @param {String} vaultId Unique id of the mpc vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MPCVault} and HTTP response
     */
    getMpcVaultWithHttpInfo(vaultId) {
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling getMpcVault");
      }

      let pathParams = {
        'vault_id': vaultId
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
      let returnType = MPCVault;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get a mpc vault
     * get a mpc vault
     * @param {String} vaultId Unique id of the mpc vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MPCVault}
     */
    getMpcVault(vaultId) {
      return this.getMpcVaultWithHttpInfo(vaultId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get a tss request
     * get a tss request.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} tssRequestId Unique id of the tss request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TSSRequest} and HTTP response
     */
    getTssRequestWithHttpInfo(vaultId, tssRequestId) {
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling getTssRequest");
      }
      // verify the required parameter 'tssRequestId' is set
      if (tssRequestId === undefined || tssRequestId === null) {
        throw new Error("Missing the required parameter 'tssRequestId' when calling getTssRequest");
      }

      let pathParams = {
        'vault_id': vaultId,
        'tss_request_id': tssRequestId
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
      let returnType = TSSRequest;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get a tss request
     * get a tss request.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} tssRequestId Unique id of the tss request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TSSRequest}
     */
    getTssRequest(vaultId, tssRequestId) {
      return this.getTssRequestWithHttpInfo(vaultId, tssRequestId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all cobo key holders
     * Retrieve a list of key holders.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/KeyHolder>} and HTTP response
     */
    listCoboKeyHolderWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = [KeyHolder];
      return this.apiClient.callApi(
        '/wallets/mpc/cobo_key_holders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all cobo key holders
     * Retrieve a list of key holders.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/KeyHolder>}
     */
    listCoboKeyHolder() {
      return this.listCoboKeyHolderWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all mpc key groups
     * Retrieve a list of mpc key groups.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/KeyGroupType} [keyGroupType] The type of key group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/KeyGroup>} and HTTP response
     */
    listKeyGroupWithHttpInfo(vaultId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling listKeyGroup");
      }

      let pathParams = {
        'vault_id': vaultId
      };
      let queryParams = {
        'key_group_type': opts['keyGroupType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [KeyGroup];
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/key_groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all mpc key groups
     * Retrieve a list of mpc key groups.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/KeyGroupType} opts.keyGroupType The type of key group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/KeyGroup>}
     */
    listKeyGroup(vaultId, opts) {
      return this.listKeyGroupWithHttpInfo(vaultId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all mpc projects
     * Retrieve a list of mpc project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MPCProject>} and HTTP response
     */
    listMpcProjectWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = [MPCProject];
      return this.apiClient.callApi(
        '/wallets/mpc/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all mpc projects
     * Retrieve a list of mpc project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MPCProject>}
     */
    listMpcProject() {
      return this.listMpcProjectWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all mpc vaults
     * Retrieve a list of mpc vault.
     * @param {Object} opts Optional parameters
     * @param {String} [projectId] Unique id of the mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MPCVault>} and HTTP response
     */
    listMpcVaultWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'project_id': opts['projectId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MPCVault];
      return this.apiClient.callApi(
        '/wallets/mpc/vaults', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all mpc vaults
     * Retrieve a list of mpc vault.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectId Unique id of the mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MPCVault>}
     */
    listMpcVault(opts) {
      return this.listMpcVaultWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List tss request information of a vault
     * Detailed description on retrieving list of tss request information
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {String} [targetKeyGroupId] The target key group id of tss request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TSSRequest} and HTTP response
     */
    listTssRequestWithHttpInfo(vaultId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling listTssRequest");
      }

      let pathParams = {
        'vault_id': vaultId
      };
      let queryParams = {
        'target_key_group_id': opts['targetKeyGroupId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TSSRequest;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/tss_requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List tss request information of a vault
     * Detailed description on retrieving list of tss request information
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {String} opts.targetKeyGroupId The target key group id of tss request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TSSRequest}
     */
    listTssRequest(vaultId, opts) {
      return this.listTssRequestWithHttpInfo(vaultId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify a mpc vault
     * modify a mpc vault
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyMpcVaultRequest} [modifyMpcVaultRequest] The request body to update a mpc vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MPCVault} and HTTP response
     */
    modifyMpcVaultWithHttpInfo(vaultId, opts) {
      opts = opts || {};
      let postBody = opts['modifyMpcVaultRequest'];
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling modifyMpcVault");
      }

      let pathParams = {
        'vault_id': vaultId
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
      let returnType = MPCVault;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Modify a mpc vault
     * modify a mpc vault
     * @param {String} vaultId Unique id of the mpc vault
     * @param {Object} opts Optional parameters
     * @param {module:model/ModifyMpcVaultRequest} opts.modifyMpcVaultRequest The request body to update a mpc vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MPCVault}
     */
    modifyMpcVault(vaultId, opts) {
      return this.modifyMpcVaultWithHttpInfo(vaultId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update a mpc key group
     * update a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} keyGroupId Unique id of the tss group
     * @param {module:model/String} updateKeyGroupAction The action of update key group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeyGroup} and HTTP response
     */
    updateKeyGroupWithHttpInfo(vaultId, keyGroupId, updateKeyGroupAction) {
      let postBody = null;
      // verify the required parameter 'vaultId' is set
      if (vaultId === undefined || vaultId === null) {
        throw new Error("Missing the required parameter 'vaultId' when calling updateKeyGroup");
      }
      // verify the required parameter 'keyGroupId' is set
      if (keyGroupId === undefined || keyGroupId === null) {
        throw new Error("Missing the required parameter 'keyGroupId' when calling updateKeyGroup");
      }
      // verify the required parameter 'updateKeyGroupAction' is set
      if (updateKeyGroupAction === undefined || updateKeyGroupAction === null) {
        throw new Error("Missing the required parameter 'updateKeyGroupAction' when calling updateKeyGroup");
      }

      let pathParams = {
        'vault_id': vaultId,
        'key_group_id': keyGroupId
      };
      let queryParams = {
        'update_key_group_action': updateKeyGroupAction
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = KeyGroup;
      return this.apiClient.callApi(
        '/wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update a mpc key group
     * update a mpc key group.
     * @param {String} vaultId Unique id of the mpc vault
     * @param {String} keyGroupId Unique id of the tss group
     * @param {module:model/String} updateKeyGroupAction The action of update key group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyGroup}
     */
    updateKeyGroup(vaultId, keyGroupId, updateKeyGroupAction) {
      return this.updateKeyGroupWithHttpInfo(vaultId, keyGroupId, updateKeyGroupAction)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update a mpc project
     * update a mpc vault
     * @param {String} projectId Unique id of the mpc project
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMpcProjectRequest} [updateMpcProjectRequest] The request body to update a mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MPCProject} and HTTP response
     */
    updateMpcProjectWithHttpInfo(projectId, opts) {
      opts = opts || {};
      let postBody = opts['updateMpcProjectRequest'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling updateMpcProject");
      }

      let pathParams = {
        'project_id': projectId
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
      let returnType = MPCProject;
      return this.apiClient.callApi(
        '/wallets/mpc/projects/{project_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update a mpc project
     * update a mpc vault
     * @param {String} projectId Unique id of the mpc project
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMpcProjectRequest} opts.updateMpcProjectRequest The request body to update a mpc project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MPCProject}
     */
    updateMpcProject(projectId, opts) {
      return this.updateMpcProjectWithHttpInfo(projectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
