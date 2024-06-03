# CoboWaas2JsApi.TransactionsApi

All URIs are relative to *https://api.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTransactionById**](TransactionsApi.md#cancelTransactionById) | **POST** /transactions/{transaction_id}/cancel | Cancel a transaction by ID
[**createSmartContractCallTransaction**](TransactionsApi.md#createSmartContractCallTransaction) | **POST** /transactions/contract_call | Create a smart contract call transaction
[**createTransferTransaction**](TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Create a transfer transaction
[**dropTransactionById**](TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop a transaction by ID
[**estimateFee**](TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate the fee for transaction
[**getChainFeePrice**](TransactionsApi.md#getChainFeePrice) | **GET** /transactions/fee_price | Get the fee price data for chain and/or token(Hold, TBD after normalize fee settings)
[**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information by ID
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
[**resendTransactionById**](TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend a transaction by ID
[**speedupTransactionById**](TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up a transaction by ID



## cancelTransactionById

> CreateTransferTransaction201Response cancelTransactionById(transactionId)

Cancel a transaction by ID

Cancel a transaction.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
apiInstance.cancelTransactionById(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Unique id of the transaction | 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createSmartContractCallTransaction

> CreateTransferTransaction201Response createSmartContractCallTransaction(opts)

Create a smart contract call transaction

Create a transaction to call a smart contract.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const opts = {
  'contractCall': new CoboWaas2JsApi.ContractCall() // ContractCall | The request body to create a smart contract transaction
};
apiInstance.createSmartContractCallTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractCall** | [**ContractCall**](ContractCall.md)| The request body to create a smart contract transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTransferTransaction

> CreateTransferTransaction201Response createTransferTransaction(opts)

Create a transfer transaction

Create a transaction to transfer funds from one account to another.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const opts = {
  'transfer': new CoboWaas2JsApi.Transfer() // Transfer | The request body to create a transfer transaction
};
apiInstance.createTransferTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer** | [**Transfer**](Transfer.md)| The request body to create a transfer transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dropTransactionById

> CreateTransferTransaction201Response dropTransactionById(transactionId, opts)

Drop a transaction by ID

Drop a transaction.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
const opts = {
  'transactionFee': new CoboWaas2JsApi.TransactionFee() // TransactionFee | The request body of fee to initiate transaction
};
apiInstance.dropTransactionById(transactionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Unique id of the transaction | 
 **transactionFee** | [**TransactionFee**](TransactionFee.md)| The request body of fee to initiate transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## estimateFee

> EstimationFee estimateFee(opts)

Estimate the fee for transaction

Estimate the transaction fee.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const opts = {
  'estimateFee': new CoboWaas2JsApi.EstimateFee() // EstimateFee | The request body to estimate fee of transfer or call transaction
};
apiInstance.estimateFee(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimateFee** | [**EstimateFee**](EstimateFee.md)| The request body to estimate fee of transfer or call transaction | [optional] 

### Return type

[**EstimationFee**](EstimationFee.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getChainFeePrice

> ChainFeePrice getChainFeePrice(opts)

Get the fee price data for chain and/or token(Hold, TBD after normalize fee settings)

Retrieve the fee price data.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const opts = {
  'chainId': "ETH", // String | The chain ID.
  'tokenId': "ETH_USDT" // String | The token ID.
};
apiInstance.getChainFeePrice(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| The chain ID. | [optional] 
 **tokenId** | **String**| The token ID. | [optional] 

### Return type

[**ChainFeePrice**](ChainFeePrice.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactionById

> Transaction getTransactionById(transactionId)

Get transaction information by ID

Detailed description on retrieving transaction information by id

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
apiInstance.getTransactionById(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Unique id of the transaction | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransactions

> ListTransactions200Response listTransactions(opts)

List all transactions

Retrieve a list of transactions.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const opts = {
  'requestId': "web_send_by_user_327_1610444045047", // String | Request ID
  'coboId': "20231213122855000000000000000000", // String | Cobo ID
  'transactionId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | Unique id of the transaction
  'transactionHash': "239861be9a4afe080c359b7fe4a1d035945ec46256b1a0f44d1267c71de8ec28", // String | Transaction hash
  'type': [new CoboWaas2JsApi.TransactionType()], // [TransactionType] | The type of a transaction
  'status': [new CoboWaas2JsApi.TransactionStatus()], // [TransactionStatus] | The status of a transaction
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: Custodial Wallets  - `MPC`: MPC Wallets  - `SmartContract`: Smart Contract Wallets  - `Exchange`: Exchange Wallets 
  'walletId': ["null"], // [String] | Unique id of the wallet
  'chainId': ["null"], // [String] | Unique id of the chain
  'tokenId': ["null"], // [String] | Unique id of the token
  'assetId': ["null"], // [String] | Unique id of the asset
  'vaultId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | Unique id of the mpc vault
  'projectId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | Unique id of the mpc project
  'minCreatedTimestamp': 1635744000, // Number | The minimum transaction creation timestamp in Unix epoch seconds
  'maxCreatedTimestamp': 1635744000, // Number | The maximum transaction creation timestamp in Unix epoch seconds
  'sortBy': "timestamp", // String | Field of sort by
  'direction': "ASC", // String | Direction to sort by
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
};
apiInstance.listTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Request ID | [optional] 
 **coboId** | **String**| Cobo ID | [optional] 
 **transactionId** | **String**| Unique id of the transaction | [optional] 
 **transactionHash** | **String**| Transaction hash | [optional] 
 **type** | [**[TransactionType]**](TransactionType.md)| The type of a transaction | [optional] 
 **status** | [**[TransactionStatus]**](TransactionStatus.md)| The status of a transaction | [optional] 
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: Custodial Wallets  - &#x60;MPC&#x60;: MPC Wallets  - &#x60;SmartContract&#x60;: Smart Contract Wallets  - &#x60;Exchange&#x60;: Exchange Wallets  | [optional] 
 **walletId** | [**[String]**](String.md)| Unique id of the wallet | [optional] 
 **chainId** | [**[String]**](String.md)| Unique id of the chain | [optional] 
 **tokenId** | [**[String]**](String.md)| Unique id of the token | [optional] 
 **assetId** | [**[String]**](String.md)| Unique id of the asset | [optional] 
 **vaultId** | **String**| Unique id of the mpc vault | [optional] 
 **projectId** | **String**| Unique id of the mpc project | [optional] 
 **minCreatedTimestamp** | **Number**| The minimum transaction creation timestamp in Unix epoch seconds | [optional] 
 **maxCreatedTimestamp** | **Number**| The maximum transaction creation timestamp in Unix epoch seconds | [optional] 
 **sortBy** | **String**| Field of sort by | [optional] [default to &#39;&#39;]
 **direction** | **String**| Direction to sort by | [optional] [default to &#39;&#39;]
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendTransactionById

> CreateTransferTransaction201Response resendTransactionById(transactionId)

Resend a transaction by ID

Resend a transaction.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
apiInstance.resendTransactionById(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Unique id of the transaction | 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## speedupTransactionById

> CreateTransferTransaction201Response speedupTransactionById(transactionId, opts)

Speed up a transaction by ID

Speed up a transaction.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.TransactionsApi();
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
const opts = {
  'transactionFee': new CoboWaas2JsApi.TransactionFee() // TransactionFee | The request body of fee to initiate transaction
};
apiInstance.speedupTransactionById(transactionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Unique id of the transaction | 
 **transactionFee** | [**TransactionFee**](TransactionFee.md)| The request body of fee to initiate transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

