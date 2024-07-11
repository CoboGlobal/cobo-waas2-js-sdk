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
import Activity from '../model/Activity';
import ActivityStatus from '../model/ActivityStatus';
import ActivityType from '../model/ActivityType';
import CreateStakeActivity201Response from '../model/CreateStakeActivity201Response';
import CreateStakeActivityRequest from '../model/CreateStakeActivityRequest';
import CreateUnstakeActivityRequest from '../model/CreateUnstakeActivityRequest';
import CreateWithdrawActivityRequest from '../model/CreateWithdrawActivityRequest';
import ErrorResponse from '../model/ErrorResponse';
import GetStakingEstimationFee201Response from '../model/GetStakingEstimationFee201Response';
import GetStakingEstimationFeeRequest from '../model/GetStakingEstimationFeeRequest';
import ListActivities200Response from '../model/ListActivities200Response';
import ListStakingPools200Response from '../model/ListStakingPools200Response';
import ListStakings200Response from '../model/ListStakings200Response';
import PoolDetails from '../model/PoolDetails';

/**
* Stakings service.
* @module api/StakingsApi
* @version 0.1.0
*/
export default class StakingsApi {

    /**
    * Constructs a new StakingsApi. 
    * @alias module:api/StakingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create staking activity
     * This operation creates a stake activity. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateStakeActivityRequest} [createStakeActivityRequest] The request body to create a staking activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStakeActivity201Response} and HTTP response
     */
    createStakeActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createStakeActivityRequest'];

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
      let returnType = CreateStakeActivity201Response;
      return this.apiClient.callApi(
        '/stakings/activities/stake', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create staking activity
     * This operation creates a stake activity. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateStakeActivityRequest} opts.createStakeActivityRequest The request body to create a staking activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStakeActivity201Response}
     */
    createStakeActivity(opts) {
      return this.createStakeActivityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create unstake activity
     * This operation creates a unstake activity. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUnstakeActivityRequest} [createUnstakeActivityRequest] The request body to create a unstake activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStakeActivity201Response} and HTTP response
     */
    createUnstakeActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createUnstakeActivityRequest'];

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
      let returnType = CreateStakeActivity201Response;
      return this.apiClient.callApi(
        '/stakings/activities/unstake', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create unstake activity
     * This operation creates a unstake activity. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUnstakeActivityRequest} opts.createUnstakeActivityRequest The request body to create a unstake activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStakeActivity201Response}
     */
    createUnstakeActivity(opts) {
      return this.createUnstakeActivityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create withdraw activity
     * This operation creates a withdraw activity. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWithdrawActivityRequest} [createWithdrawActivityRequest] The request body to create a withdraw activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStakeActivity201Response} and HTTP response
     */
    createWithdrawActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createWithdrawActivityRequest'];

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
      let returnType = CreateStakeActivity201Response;
      return this.apiClient.callApi(
        '/stakings/activities/withdraw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create withdraw activity
     * This operation creates a withdraw activity. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWithdrawActivityRequest} opts.createWithdrawActivityRequest The request body to create a withdraw activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStakeActivity201Response}
     */
    createWithdrawActivity(opts) {
      return this.createWithdrawActivityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get activity details
     * This operation retrieves a staking activity details. 
     * @param {String} activityId activity id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    getActivityByIdWithHttpInfo(activityId) {
      let postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling getActivityById");
      }

      let pathParams = {
        'activity_id': activityId
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
      let returnType = Activity;
      return this.apiClient.callApi(
        '/stakings/activities/{activity_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get activity details
     * This operation retrieves a staking activity details. 
     * @param {String} activityId activity id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    getActivityById(activityId) {
      return this.getActivityByIdWithHttpInfo(activityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get staking by id
     * This operation retrieves a staking by id. 
     * @param {String} stakingId staking id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStakings200Response} and HTTP response
     */
    getStakingByIdWithHttpInfo(stakingId) {
      let postBody = null;
      // verify the required parameter 'stakingId' is set
      if (stakingId === undefined || stakingId === null) {
        throw new Error("Missing the required parameter 'stakingId' when calling getStakingById");
      }

      let pathParams = {
        'staking_id': stakingId
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
      let returnType = ListStakings200Response;
      return this.apiClient.callApi(
        '/stakings/{staking_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get staking by id
     * This operation retrieves a staking by id. 
     * @param {String} stakingId staking id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStakings200Response}
     */
    getStakingById(stakingId) {
      return this.getStakingByIdWithHttpInfo(stakingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Estimate staking transaction fee
     * This endpoint calculates the fee required for a transaction based on factors such as network congestion and transaction complexity. Users can provide transaction details in the request body, and the response will contain the estimated fee. 
     * @param {Object} opts Optional parameters
     * @param {module:model/GetStakingEstimationFeeRequest} [getStakingEstimationFeeRequest] The request body to create a get estimate fee of a staking activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStakingEstimationFee201Response} and HTTP response
     */
    getStakingEstimationFeeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['getStakingEstimationFeeRequest'];

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
      let returnType = GetStakingEstimationFee201Response;
      return this.apiClient.callApi(
        '/stakings/estimate_fee', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Estimate staking transaction fee
     * This endpoint calculates the fee required for a transaction based on factors such as network congestion and transaction complexity. Users can provide transaction details in the request body, and the response will contain the estimated fee. 
     * @param {Object} opts Optional parameters
     * @param {module:model/GetStakingEstimationFeeRequest} opts.getStakingEstimationFeeRequest The request body to create a get estimate fee of a staking activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStakingEstimationFee201Response}
     */
    getStakingEstimationFee(opts) {
      return this.getStakingEstimationFeeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get staking pool details
     * This operation retrieves a list of staking pools currently supported. 
     * @param {String} poolId staking pool id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolDetails} and HTTP response
     */
    getStakingPoolByIdWithHttpInfo(poolId) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling getStakingPoolById");
      }

      let pathParams = {
        'pool_id': poolId
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
      let returnType = PoolDetails;
      return this.apiClient.callApi(
        '/stakings/pools/{pool_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get staking pool details
     * This operation retrieves a list of staking pools currently supported. 
     * @param {String} poolId staking pool id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolDetails}
     */
    getStakingPoolById(poolId) {
      return this.getStakingPoolByIdWithHttpInfo(poolId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List activities
     * This operation retrieves a list staking activities. 
     * @param {Object} opts Optional parameters
     * @param {String} [poolId] staking pool id
     * @param {String} [stakingId] staking id
     * @param {module:model/ActivityType} [activityType] activity type
     * @param {module:model/ActivityStatus} [activityStatus] activity status
     * @param {Number} [minModifiedTimestamp] The minimum modified timestamp in Unix epoch seconds
     * @param {Number} [maxModifiedTimestamp] The maximum modified timestamp in Unix epoch seconds
     * @param {String} [initiator] activity initiator, maybe email or api key.
     * @param {Number} [limit = 10)] The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
     * @param {String} [before] An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
     * @param {String} [after] An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListActivities200Response} and HTTP response
     */
    listActivitiesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pool_id': opts['poolId'],
        'staking_id': opts['stakingId'],
        'activity_type': opts['activityType'],
        'activity_status': opts['activityStatus'],
        'min_modified_timestamp': opts['minModifiedTimestamp'],
        'max_modified_timestamp': opts['maxModifiedTimestamp'],
        'initiator': opts['initiator'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListActivities200Response;
      return this.apiClient.callApi(
        '/stakings/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List activities
     * This operation retrieves a list staking activities. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.poolId staking pool id
     * @param {String} opts.stakingId staking id
     * @param {module:model/ActivityType} opts.activityType activity type
     * @param {module:model/ActivityStatus} opts.activityStatus activity status
     * @param {Number} opts.minModifiedTimestamp The minimum modified timestamp in Unix epoch seconds
     * @param {Number} opts.maxModifiedTimestamp The maximum modified timestamp in Unix epoch seconds
     * @param {String} opts.initiator activity initiator, maybe email or api key.
     * @param {Number} opts.limit The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. (default to 10)
     * @param {String} opts.before An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
     * @param {String} opts.after An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListActivities200Response}
     */
    listActivities(opts) {
      return this.listActivitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List staking pools
     * This operation retrieves a list of staking pools currently supported. 
     * @param {Object} opts Optional parameters
     * @param {String} [chainId] The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List organization enabled chains](/v2/api-references/wallets/list-organization-enabled-chains).
     * @param {String} [tokenId] The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
     * @param {String} [before] An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
     * @param {String} [after] An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStakingPools200Response} and HTTP response
     */
    listStakingPoolsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'chain_id': opts['chainId'],
        'token_id': opts['tokenId'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListStakingPools200Response;
      return this.apiClient.callApi(
        '/stakings/pools', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List staking pools
     * This operation retrieves a list of staking pools currently supported. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.chainId The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List organization enabled chains](/v2/api-references/wallets/list-organization-enabled-chains).
     * @param {String} opts.tokenId The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. (default to 10)
     * @param {String} opts.before An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
     * @param {String} opts.after An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStakingPools200Response}
     */
    listStakingPools(opts) {
      return this.listStakingPoolsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all stakings
     * This operation retrieves a list of current stakings. 
     * @param {Object} opts Optional parameters
     * @param {String} [poolId] staking pool id
     * @param {Number} [limit = 10)] The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
     * @param {String} [before] An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
     * @param {String} [after] An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStakings200Response} and HTTP response
     */
    listStakingsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pool_id': opts['poolId'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListStakings200Response;
      return this.apiClient.callApi(
        '/stakings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all stakings
     * This operation retrieves a list of current stakings. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.poolId staking pool id
     * @param {Number} opts.limit The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. (default to 10)
     * @param {String} opts.before An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
     * @param {String} opts.after An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStakings200Response}
     */
    listStakings(opts) {
      return this.listStakingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}