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
import ListStakingActivities200Response from '../model/ListStakingActivities200Response';
import ListStakingPools200Response from '../model/ListStakingPools200Response';
import ListStakings200Response from '../model/ListStakings200Response';
import PoolDetails from '../model/PoolDetails';
import Stakings from '../model/Stakings';

/**
* Stakings service.
* @module api/StakingsApi
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
     * Create stake activity
     * This operation creates a staking request.  For some protocols, you can use the `fee` property in the request body to specify the maximum fee you are willing to pay. The transaction will fail if the actual fee exceeds the specified maximum fee.   <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateStakeActivityRequest} [CreateStakeActivityRequest] The request body to create a staking request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStakeActivity201Response} and HTTP response
     */
    createStakeActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['CreateStakeActivityRequest'];
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

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
     * Create stake activity
     * This operation creates a staking request.  For some protocols, you can use the `fee` property in the request body to specify the maximum fee you are willing to pay. The transaction will fail if the actual fee exceeds the specified maximum fee.   <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateStakeActivityRequest} opts.CreateStakeActivityRequest The request body to create a staking request.
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
     * This operation creates an unstaking request. Your staked tokens will be automatically unlocked once the specified locking period ends. If you want to withdraw your tokens beforehand, you can unstake them with this operation.  For some protocols, you can use the `fee` property in the request body to specify the maximum fee you are willing to pay. The transaction will fail if the actual fee exceeds the specified maximum fee.   <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUnstakeActivityRequest} [CreateUnstakeActivityRequest] The request body to create a unstaking request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStakeActivity201Response} and HTTP response
     */
    createUnstakeActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['CreateUnstakeActivityRequest'];
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

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
     * This operation creates an unstaking request. Your staked tokens will be automatically unlocked once the specified locking period ends. If you want to withdraw your tokens beforehand, you can unstake them with this operation.  For some protocols, you can use the `fee` property in the request body to specify the maximum fee you are willing to pay. The transaction will fail if the actual fee exceeds the specified maximum fee.   <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUnstakeActivityRequest} opts.CreateUnstakeActivityRequest The request body to create a unstaking request.
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
     * This operation creates a withdrawal request.   For some protocols, you can use the `fee` property in the request body to specify the maximum fee you are willing to pay. The transaction will fail if the actual fee exceeds the specified maximum fee.   <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWithdrawActivityRequest} [CreateWithdrawActivityRequest] The request body to create a withdraw activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateStakeActivity201Response} and HTTP response
     */
    createWithdrawActivityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['CreateWithdrawActivityRequest'];
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

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
     * This operation creates a withdrawal request.   For some protocols, you can use the `fee` property in the request body to specify the maximum fee you are willing to pay. The transaction will fail if the actual fee exceeds the specified maximum fee.   <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWithdrawActivityRequest} opts.CreateWithdrawActivityRequest The request body to create a withdraw activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateStakeActivity201Response}
     */
    createWithdrawActivity(opts) {
      return this.createWithdrawActivityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get staking activity details
     * This operation retrieves the details of a specified staking activity. 
     * @param {String} activity_id The activity ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    getStakingActivityByIdWithHttpInfo(activity_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'activity_id' is set
      if (activity_id === undefined || activity_id === null) {
        throw new Error("Missing the required parameter 'activity_id' when calling getStakingActivityById");
      }

      let pathParams = {
        'activity_id': activity_id
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
     * Get staking activity details
     * This operation retrieves the details of a specified staking activity. 
     * @param {String} activity_id The activity ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    getStakingActivityById(activity_id) {
      return this.getStakingActivityByIdWithHttpInfo(activity_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get staking position details
     * This operation retrieves the detailed information about a specified staking position. 
     * @param {String} staking_id The ID of the staking position. You can retrieve a list of staking positions by calling [List staking positions](/v2/api-references/stakings/list-all-stakings).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Stakings} and HTTP response
     */
    getStakingByIdWithHttpInfo(staking_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'staking_id' is set
      if (staking_id === undefined || staking_id === null) {
        throw new Error("Missing the required parameter 'staking_id' when calling getStakingById");
      }

      let pathParams = {
        'staking_id': staking_id
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
      let returnType = Stakings;
      return this.apiClient.callApi(
        '/stakings/{staking_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get staking position details
     * This operation retrieves the detailed information about a specified staking position. 
     * @param {String} staking_id The ID of the staking position. You can retrieve a list of staking positions by calling [List staking positions](/v2/api-references/stakings/list-all-stakings).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Stakings}
     */
    getStakingById(staking_id) {
      return this.getStakingByIdWithHttpInfo(staking_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Estimate staking fees
     * This operation calculates the fee required for a staking activity based on factors such as network congestion and transaction complexity.  For some protocols, you can use the `fee.fee_rate` property in the request body to specify the fee rate you are willing to pay.  The `fee.max_fee_amount` property in the request body will be ignored.  <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/GetStakingEstimationFeeRequest} [GetStakingEstimationFeeRequest] The request body to get the estimated fee of a staking activity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStakingEstimationFee201Response} and HTTP response
     */
    getStakingEstimationFeeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['GetStakingEstimationFeeRequest'];
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

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
     * Estimate staking fees
     * This operation calculates the fee required for a staking activity based on factors such as network congestion and transaction complexity.  For some protocols, you can use the `fee.fee_rate` property in the request body to specify the fee rate you are willing to pay.  The `fee.max_fee_amount` property in the request body will be ignored.  <Note>For the Babylon protocol, you can only select UTXO as the fee model.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/GetStakingEstimationFeeRequest} opts.GetStakingEstimationFeeRequest The request body to get the estimated fee of a staking activity.
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
     * This operation retrieves the detailed information about a specified staking pool. 
     * @param {String} pool_id The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token. You can call [List staking pools](/v2/api-references/stakings/list-staking-pools) to retrieve a list of staking pools.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolDetails} and HTTP response
     */
    getStakingPoolByIdWithHttpInfo(pool_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'pool_id' is set
      if (pool_id === undefined || pool_id === null) {
        throw new Error("Missing the required parameter 'pool_id' when calling getStakingPoolById");
      }

      let pathParams = {
        'pool_id': pool_id
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
     * This operation retrieves the detailed information about a specified staking pool. 
     * @param {String} pool_id The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token. You can call [List staking pools](/v2/api-references/stakings/list-staking-pools) to retrieve a list of staking pools.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolDetails}
     */
    getStakingPoolById(pool_id) {
      return this.getStakingPoolByIdWithHttpInfo(pool_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List staking activities
     * This operation retrieves a list of staking activities. 
     * @param {Object} opts Optional parameters
     * @param {String} [pool_id] The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token. You can call [List staking pools](/v2/api-references/stakings/list-staking-pools) to retrieve a list of staking pools.
     * @param {String} [staking_id] The position ID.
     * @param {module:model/ActivityType} [activity_type] 
     * @param {module:model/ActivityStatus} [activity_status] 
     * @param {Number} [min_modified_timestamp] The start time of the query. All staking activities updated after the specified time will be retrieved. The time is in Unix timestamp format, measured in milliseconds.
     * @param {Number} [max_modified_timestamp] The end time of the query. All staking activities updated before the specified time will be retrieved. The time is in Unix timestamp format, measured in milliseconds.
     * @param {String} [initiator] The activity initiator, which is your API key by default. You can also specify the initiator when creating the activity.
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStakingActivities200Response} and HTTP response
     */
    listStakingActivitiesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'pool_id': opts['pool_id'],
        'staking_id': opts['staking_id'],
        'activity_type': opts['activity_type'],
        'activity_status': opts['activity_status'],
        'min_modified_timestamp': opts['min_modified_timestamp'],
        'max_modified_timestamp': opts['max_modified_timestamp'],
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
      let returnType = ListStakingActivities200Response;
      return this.apiClient.callApi(
        '/stakings/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List staking activities
     * This operation retrieves a list of staking activities. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pool_id The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token. You can call [List staking pools](/v2/api-references/stakings/list-staking-pools) to retrieve a list of staking pools.
     * @param {String} opts.staking_id The position ID.
     * @param {module:model/ActivityType} opts.activity_type 
     * @param {module:model/ActivityStatus} opts.activity_status 
     * @param {Number} opts.min_modified_timestamp The start time of the query. All staking activities updated after the specified time will be retrieved. The time is in Unix timestamp format, measured in milliseconds.
     * @param {Number} opts.max_modified_timestamp The end time of the query. All staking activities updated before the specified time will be retrieved. The time is in Unix timestamp format, measured in milliseconds.
     * @param {String} opts.initiator The activity initiator, which is your API key by default. You can also specify the initiator when creating the activity.
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStakingActivities200Response}
     */
    listStakingActivities(opts) {
      return this.listStakingActivitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List staking pools
     * This operation retrieves a list of staking pools currently supported. 
     * @param {Object} opts Optional parameters
     * @param {String} [chain_id] The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     * @param {String} [token_id] The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStakingPools200Response} and HTTP response
     */
    listStakingPoolsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'chain_id': opts['chain_id'],
        'token_id': opts['token_id'],
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
     * @param {String} opts.chain_id The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     * @param {String} opts.token_id The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStakingPools200Response}
     */
    listStakingPools(opts) {
      return this.listStakingPoolsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List staking positions
     * This operation retrieves a list of staking positions. 
     * @param {Object} opts Optional parameters
     * @param {String} [pool_id] The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token. You can call [List staking pools](/v2/api-references/stakings/list-staking-pools) to retrieve a list of staking pools.
     * @param {String} [statuses] The statuses of the staking amounts, separated by comma. Possible values include:  - `StakeInProgress`: The staking request is submitted and is waiting to be confirmed by the staking protocol. - `Active`: The amount has been staked. - `Rejected`: The staking request has been rejected because the signer refuses to sign the transaction. - `LimitExceeded`: The total staking cap of the staking protocol has been reached. - `Invalid`: The staking request is invalid. This is often due to the failure to broadcast the transaction. - `UnstakeInProgress`: The unstaking request is submitted and is waiting to be confirmed by the staking protocol. - `Withdrawable`: The tokens have been unstaked and are ready to be withdrawn. - `WithdrawInProgress`: The withdrawal request is submitted and is waiting to be confirmed on the chain network. - `Closed`: The staking position is closed. 
     * @param {String} [wallet_id] The wallet ID.
     * @param {String} [token_id] The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStakings200Response} and HTTP response
     */
    listStakingsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'pool_id': opts['pool_id'],
        'statuses': opts['statuses'],
        'wallet_id': opts['wallet_id'],
        'token_id': opts['token_id'],
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
     * List staking positions
     * This operation retrieves a list of staking positions. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pool_id The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token. You can call [List staking pools](/v2/api-references/stakings/list-staking-pools) to retrieve a list of staking pools.
     * @param {String} opts.statuses The statuses of the staking amounts, separated by comma. Possible values include:  - `StakeInProgress`: The staking request is submitted and is waiting to be confirmed by the staking protocol. - `Active`: The amount has been staked. - `Rejected`: The staking request has been rejected because the signer refuses to sign the transaction. - `LimitExceeded`: The total staking cap of the staking protocol has been reached. - `Invalid`: The staking request is invalid. This is often due to the failure to broadcast the transaction. - `UnstakeInProgress`: The unstaking request is submitted and is waiting to be confirmed by the staking protocol. - `Withdrawable`: The tokens have been unstaked and are ready to be withdrawn. - `WithdrawInProgress`: The withdrawal request is submitted and is waiting to be confirmed on the chain network. - `Closed`: The staking position is closed. 
     * @param {String} opts.wallet_id The wallet ID.
     * @param {String} opts.token_id The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStakings200Response}
     */
    listStakings(opts) {
      return this.listStakingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
