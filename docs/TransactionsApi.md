# CoboWaas2Api.TransactionsApi

All URIs are relative to *https://api.cobo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSignMessageTransaction**](TransactionsApi.md#createSignMessageTransaction) | **POST** /transactions/sign | Create a sign message transaction
[**createSmartContractCallTransaction**](TransactionsApi.md#createSmartContractCallTransaction) | **POST** /transactions/call | Create a smart contract call transaction
[**createTransferTransaction**](TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Create a transfer transaction
[**dropTransactionById**](TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop a transaction by ID
[**estimateFee**](TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate the fee for transaction
[**getChainFeePrice**](TransactionsApi.md#getChainFeePrice) | **GET** /transactions/fee_price | Get the fee price data for chain and/or token(Hold, TBD after normalize fee settings)
[**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information by ID
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
[**resendTransactionById**](TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend a transaction by ID
[**retryTransactionDoubleCheckById**](TransactionsApi.md#retryTransactionDoubleCheckById) | **POST** /transactions/{transaction_id}/double_check/retry | Retry up a transaction double-check by ID
[**speedupTransactionById**](TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up a transaction by ID
[**updateTransacitonById**](TransactionsApi.md#updateTransacitonById) | **PUT** /transactions/{transaction_id} | Update transaction by ID



## createSignMessageTransaction

> CreateTransferTransaction201Response createSignMessageTransaction(opts)

Create a sign message transaction

Create a transaction to sign message.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let opts = {
  'signMessage': new CoboWaas2Api.SignMessage() // SignMessage | The request body to create a message sign transaction
};
apiInstance.createSignMessageTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signMessage** | [**SignMessage**](SignMessage.md)| The request body to create a message sign transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSmartContractCallTransaction

> CreateTransferTransaction201Response createSmartContractCallTransaction(opts)

Create a smart contract call transaction

Create a transaction to call a smart contract.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let opts = {
  'smartContractCall': new CoboWaas2Api.SmartContractCall() // SmartContractCall | The request body to create a smart contract transaction
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
 **smartContractCall** | [**SmartContractCall**](SmartContractCall.md)| The request body to create a smart contract transaction | [optional] 

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
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let opts = {
  'transfer': new CoboWaas2Api.Transfer() // Transfer | The request body to create a transfer transaction
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
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
let opts = {
  'transactionFee': new CoboWaas2Api.TransactionFee() // TransactionFee | The request body of fee to initiate transaction
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

> TransactionFee estimateFee(opts)

Estimate the fee for transaction

Estimate the transaction fee.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let opts = {
  'estimateFee': new CoboWaas2Api.EstimateFee() // EstimateFee | The request body to estimate fee of transfer or call transaction
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

[**TransactionFee**](TransactionFee.md)

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
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let opts = {
  'chainId': "ETH", // String | Unique id of the chain
  'tokenId': "ETH_USDT" // String | Unique id of the token
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
 **chainId** | **String**| Unique id of the chain | [optional] 
 **tokenId** | **String**| Unique id of the token | [optional] 

### Return type

[**ChainFeePrice**](ChainFeePrice.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactionById

> TransactionDetails getTransactionById(transactionId)

Get transaction information by ID

Detailed description on retrieving transaction information by id

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
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

[**TransactionDetails**](TransactionDetails.md)

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
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let opts = {
  'requestId': "web_send_by_user_327_1610444045047", // String | Request ID
  'sortBy': "timestamp", // String | Field of sort by
  'direction': "ASC", // String | Direction to sort by
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
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
 **sortBy** | **String**| Field of sort by | [optional] [default to &#39;&#39;]
 **direction** | **String**| Direction to sort by | [optional] [default to &#39;&#39;]
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

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
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
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


## retryTransactionDoubleCheckById

> CreateTransferTransaction201Response retryTransactionDoubleCheckById(transactionId)

Retry up a transaction double-check by ID

Retry a transaction double-check.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
apiInstance.retryTransactionDoubleCheckById(transactionId).then((data) => {
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
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
let opts = {
  'transactionFee': new CoboWaas2Api.TransactionFee() // TransactionFee | The request body of fee to initiate transaction
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


## updateTransacitonById

> TransactionDetails updateTransacitonById(transactionId, opts)

Update transaction by ID

Update information of a transaction.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.TransactionsApi();
let transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the transaction
let opts = {
  'transactionDetails': new CoboWaas2Api.TransactionDetails() // TransactionDetails | The request body to update a address
};
apiInstance.updateTransacitonById(transactionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Unique id of the transaction | 
 **transactionDetails** | [**TransactionDetails**](TransactionDetails.md)| The request body to update a address | [optional] 

### Return type

[**TransactionDetails**](TransactionDetails.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

