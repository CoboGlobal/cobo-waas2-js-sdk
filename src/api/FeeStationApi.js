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
import ErrorResponse from '../model/ErrorResponse';
import ListAddresses200Response from '../model/ListAddresses200Response';
import ListTokenBalancesForAddress200Response from '../model/ListTokenBalancesForAddress200Response';
import ListTransactions200Response from '../model/ListTransactions200Response';
import TransactionDetail from '../model/TransactionDetail';

/**
* FeeStation service.
* @module api/FeeStationApi
*/
export default class FeeStationApi {

    /**
    * Constructs a new FeeStationApi. 
    * @alias module:api/FeeStationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Fee Station transaction information
     * This operation retrieves detailed information about a specified Fee Station transaction, such as the transaction status, source address, destination address, and timestamp. 
     * @param {String} transaction_id The transaction ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionDetail} and HTTP response
     */
    getFeeStationTransactionByIdWithHttpInfo(transaction_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'transaction_id' is set
      if (transaction_id === undefined || transaction_id === null) {
        throw new Error("Missing the required parameter 'transaction_id' when calling getFeeStationTransactionById");
      }

      let pathParams = {
        'transaction_id': transaction_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionDetail;
      return this.apiClient.callApi(
        '/fee_station/transactions/{transaction_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Fee Station transaction information
     * This operation retrieves detailed information about a specified Fee Station transaction, such as the transaction status, source address, destination address, and timestamp. 
     * @param {String} transaction_id The transaction ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionDetail}
     */
    getFeeStationTransactionById(transaction_id) {
      return this.getFeeStationTransactionByIdWithHttpInfo(transaction_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Fee Station addresses
     * This operation retrieves a list of addresses within your Fee Station. 
     * @param {Object} opts Optional parameters
     * @param {String} [chain_ids] A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} [addresses] A list of wallet addresses, separated by comma. For addresses requiring a memo, append the memo after the address using the '|' separator (e.g., \"address|memo\").
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set `before` to the ID of Object C (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object A.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. - If you set it to `infinity`, the last page of data is returned. 
     * @param {String} [after] This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set `after` to the ID of Object A (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object C.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAddresses200Response} and HTTP response
     */
    listFeeStationAddressesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'chain_ids': opts['chain_ids'],
        'addresses': opts['addresses'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAddresses200Response;
      return this.apiClient.callApi(
        '/fee_station/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Fee Station addresses
     * This operation retrieves a list of addresses within your Fee Station. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} opts.addresses A list of wallet addresses, separated by comma. For addresses requiring a memo, append the memo after the address using the '|' separator (e.g., \"address|memo\").
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set `before` to the ID of Object C (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object A.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. - If you set it to `infinity`, the last page of data is returned. 
     * @param {String} opts.after This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set `after` to the ID of Object A (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object C.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddresses200Response}
     */
    listFeeStationAddresses(opts) {
      return this.listFeeStationAddressesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Fee Station transactions
     * This operation retrieves all Fee Station transactions under your organization.  You can filter the results by request ID, Cobo ID, transaction ID, transaction hash, type, status, and timestamp. You can also paginate and sort your query results. 
     * @param {Object} opts Optional parameters
     * @param {String} [request_id] The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param {String} [cobo_ids] A list of Cobo IDs, separated by comma. A Cobo ID can be used to track a transaction.
     * @param {String} [transaction_ids] A list of transaction IDs, separated by comma.
     * @param {String} [transaction_hashes] A list of transaction hashes, separated by comma.
     * @param {String} [types] A list of transaction types for Fee Station, separated by comma. Possible values include:    - `Deposit`: A deposit transaction.   - `Withdrawal`: A withdrawal transaction. 
     * @param {String} [statuses] A list of transaction statuses, separated by comma. Possible values include:    - `Submitted`: The transaction is submitted.   - `PendingScreening`: The transaction is pending screening by Risk Control.    - `PendingAuthorization`: The transaction is pending approvals.   - `PendingSignature`: The transaction is pending signature.    - `Broadcasting`: The transaction is being broadcast.   - `Confirming`: The transaction is waiting for the required number of confirmations.   - `Completed`: The transaction is completed.   - `Failed`: The transaction failed.   - `Rejected`: The transaction is rejected.   - `Pending`: The transaction is waiting to be included in the next block of the blockchain. 
     * @param {String} [chain_ids] A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} [token_ids] A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {String} [asset_ids] (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account.
     * @param {Number} [min_created_timestamp] The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time.
     * @param {Number} [max_created_timestamp] The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time.
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set `before` to the ID of Object C (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object A.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. - If you set it to `infinity`, the last page of data is returned. 
     * @param {String} [after] This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set `after` to the ID of Object A (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object C.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @param {module:model/String} [direction = '')] The sort direction. Possible values include:   - `ASC`: Sort the results in ascending order.   - `DESC`: Sort the results in descending order. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTransactions200Response} and HTTP response
     */
    listFeeStationTransactionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'request_id': opts['request_id'],
        'cobo_ids': opts['cobo_ids'],
        'transaction_ids': opts['transaction_ids'],
        'transaction_hashes': opts['transaction_hashes'],
        'types': opts['types'],
        'statuses': opts['statuses'],
        'chain_ids': opts['chain_ids'],
        'token_ids': opts['token_ids'],
        'asset_ids': opts['asset_ids'],
        'min_created_timestamp': opts['min_created_timestamp'],
        'max_created_timestamp': opts['max_created_timestamp'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after'],
        'direction': opts['direction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListTransactions200Response;
      return this.apiClient.callApi(
        '/fee_station/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Fee Station transactions
     * This operation retrieves all Fee Station transactions under your organization.  You can filter the results by request ID, Cobo ID, transaction ID, transaction hash, type, status, and timestamp. You can also paginate and sort your query results. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.request_id The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param {String} opts.cobo_ids A list of Cobo IDs, separated by comma. A Cobo ID can be used to track a transaction.
     * @param {String} opts.transaction_ids A list of transaction IDs, separated by comma.
     * @param {String} opts.transaction_hashes A list of transaction hashes, separated by comma.
     * @param {String} opts.types A list of transaction types for Fee Station, separated by comma. Possible values include:    - `Deposit`: A deposit transaction.   - `Withdrawal`: A withdrawal transaction. 
     * @param {String} opts.statuses A list of transaction statuses, separated by comma. Possible values include:    - `Submitted`: The transaction is submitted.   - `PendingScreening`: The transaction is pending screening by Risk Control.    - `PendingAuthorization`: The transaction is pending approvals.   - `PendingSignature`: The transaction is pending signature.    - `Broadcasting`: The transaction is being broadcast.   - `Confirming`: The transaction is waiting for the required number of confirmations.   - `Completed`: The transaction is completed.   - `Failed`: The transaction failed.   - `Rejected`: The transaction is rejected.   - `Pending`: The transaction is waiting to be included in the next block of the blockchain. 
     * @param {String} opts.chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} opts.token_ids A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {String} opts.asset_ids (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account.
     * @param {Number} opts.min_created_timestamp The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time.
     * @param {Number} opts.max_created_timestamp The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time.
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set `before` to the ID of Object C (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object A.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. - If you set it to `infinity`, the last page of data is returned. 
     * @param {String} opts.after This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set `after` to the ID of Object A (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object C.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @param {module:model/String} opts.direction The sort direction. Possible values include:   - `ASC`: Sort the results in ascending order.   - `DESC`: Sort the results in descending order.  (default to '')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTransactions200Response}
     */
    listFeeStationTransactions(opts) {
      return this.listFeeStationTransactionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Fee Station token balances
     * The operation retrieves a list of token balances within your Fee Station. 
     * @param {Object} opts Optional parameters
     * @param {String} [token_ids] A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set `before` to the ID of Object C (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object A.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. - If you set it to `infinity`, the last page of data is returned. 
     * @param {String} [after] This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set `after` to the ID of Object A (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object C.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokenBalancesForAddress200Response} and HTTP response
     */
    listTokenBalancesForFeeStationWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'token_ids': opts['token_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListTokenBalancesForAddress200Response;
      return this.apiClient.callApi(
        '/fee_station/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Fee Station token balances
     * The operation retrieves a list of token balances within your Fee Station. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token_ids A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set `before` to the ID of Object C (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object A.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. - If you set it to `infinity`, the last page of data is returned. 
     * @param {String} opts.after This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set `after` to the ID of Object A (`RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`), the response will include Object B and Object C.    **Notes**:   - If you set both `after` and `before`, an error will occur. - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokenBalancesForAddress200Response}
     */
    listTokenBalancesForFeeStation(opts) {
      return this.listTokenBalancesForFeeStationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
