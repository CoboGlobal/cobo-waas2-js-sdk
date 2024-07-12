# CoboWaas2JsApi.TransactionsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTransactionById**](TransactionsApi.md#cancelTransactionById) | **POST** /transactions/{transaction_id}/cancel | Cancel transaction
[**createContractCallTransaction**](TransactionsApi.md#createContractCallTransaction) | **POST** /transactions/contract_call | Call smart contract
[**createMessageSignTransaction**](TransactionsApi.md#createMessageSignTransaction) | **POST** /transactions/message_sign | Sign message
[**createTransferTransaction**](TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Transfer token
[**dropTransactionById**](TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop transaction
[**estimateFee**](TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
[**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information
[**listFeeRates**](TransactionsApi.md#listFeeRates) | **GET** /transactions/fee_rates | Get fee rates
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
[**resendTransactionById**](TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend transaction
[**speedupTransactionById**](TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up transaction



## cancelTransactionById

> CreateTransferTransaction201Response cancelTransactionById(transactionId)

Cancel transaction

This operation cancels a specified transaction. A transaction can be cancelled if its status is either of the following: - &#x60;Submitted&#x60; - &#x60;PendingScreening&#x60; - &#x60;PendingAuthorization&#x60; - &#x60;PendingSignature&#x60;   A transaction request for tracking is returned upon successful operation. 

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
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
apiInstance.cancelTransactionById(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The transaction ID. | 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createContractCallTransaction

> CreateTransferTransaction201Response createContractCallTransaction(opts)

Call smart contract

This operation creates a transaction to interact with a smart contract on the blockchain.  You need to provide details such as the source address, destination address, and the calldata. You can specify the fee-related properties to limit the transaction fee. A transaction request for tracking is returned upon successful operation.  Currently, this operation only applies to blockchains that have a similar architecture to Ethereum. 

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
  'contractCall': new CoboWaas2JsApi.ContractCall() // ContractCall | The request body for making a contract call.
};
apiInstance.createContractCallTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractCall** | [**ContractCall**](ContractCall.md)| The request body for making a contract call. | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMessageSignTransaction

> CreateTransferTransaction201Response createMessageSignTransaction(opts)

Sign message

This operation creates a transaction to sign the provided message using cryptographic techniques.  In some scenarios, you want to sign a message for identity authentication or transaction approval. You need to provide details such as the source address, destination address, and the message to be signed. A transaction request for tracking is returned upon successful operation.  Currently, only MPC Wallets support this type of transaction to sign a message. 

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
  'signMessage': new CoboWaas2JsApi.SignMessage() // SignMessage | The request body to create a message sign transaction
};
apiInstance.createMessageSignTransaction(opts).then((data) => {
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

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTransferTransaction

> CreateTransferTransaction201Response createTransferTransaction(opts)

Transfer token

The operation transfers your assets from a wallet created on Cobo Protal to another address.  You need to specify details such as the sender address and recipient address, token ID, and the amount to transfer. You can specify the fee-related properties to limit the transaction fee.  A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;  There are some requirements towards the transfer source and destination: Only Exchange source can transfer to Exchange destination. Exchange Sub wallet source can only be transferred to Exchange destination. Only MPC source support to transfer to multiple address by using &#39;utxo_outputs&#39; property in BTC-like chains &lt;/Note&gt; 

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

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dropTransactionById

> CreateTransferTransaction201Response dropTransactionById(transactionId, opts)

Drop transaction

This operation drops a specified transaction.   Dropping a transaction will trigger a Replace-By-Fee (RBF) transaction which is a new version of the original transaction. For EVM chains, this RBF transaction has a transfer amount of &#x60;0&#x60; and the sending address is the same as the receiving address. It has a higher transaction fee to incentivize miners to prioritize its confirmation over the previous one. A transaction can be dropped if its status is &#x60;Broadcasting&#x60; or &#x60;Confirming&#x60;.  A transaction request for tracking is returned upon successful operation. 

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
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
const opts = {
  'transactionRbf': new CoboWaas2JsApi.TransactionRbf() // TransactionRbf | The request body to drop or to speed up transactions
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
 **transactionId** | **String**| The transaction ID. | 
 **transactionRbf** | [**TransactionRbf**](TransactionRbf.md)| The request body to drop or to speed up transactions | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## estimateFee

> [EstimationFee] estimateFee(opts)

Estimate transaction fee

This operation estimates the transaction fee rates of a token transfer or a contract call for three different transaction speeds (slow, recommended, and fast), based on factors such as network congestion and transaction complexity.  You need to specify the transaction information, including the request ID, request type, source address, destination address, and token ID of the transaction fee.  The response can contain different properties based on the transaction fee model used by the chain, including EIP-1559 fee model, legacy fee model, UTXO fee model, and fixed fee model. 

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
  'estimateFee': new CoboWaas2JsApi.EstimateFee() // EstimateFee | The request body to estimate the transaction fee of a token transfer or a contract call.
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
 **estimateFee** | [**EstimateFee**](EstimateFee.md)| The request body to estimate the transaction fee of a token transfer or a contract call. | [optional] 

### Return type

[**[EstimationFee]**](EstimationFee.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionById

> TransactionDetail getTransactionById(transactionId)

Get transaction information

This operation retrieves detailed information about a specified transaction, such as the transaction status, source address, destination address, and timestamp. 

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
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
apiInstance.getTransactionById(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The transaction ID. | 

### Return type

[**TransactionDetail**](TransactionDetail.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFeeRates

> [FeeRate] listFeeRates(chainId)

Get fee rates

This operation retrieves current transaction fee rates on the blockchain based on the specified chain ID.  The response can contain different properties based on the transaction fee model used by the chain, including EIP-1559 fee model, legacy fee model, UTXO fee model, and fixed fee model. 

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
const chainId = "ETH"; // String | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
apiInstance.listFeeRates(chainId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | 

### Return type

[**[FeeRate]**](FeeRate.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransactions

> ListTransactions200Response listTransactions(opts)

List all transactions

This operation retrieves all the transactions under your organization.  You can filter the results by request ID, Cobo ID, transaction ID, transaction hash, type, status, and timestamps. You can also paginate and sort your query results. 

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
  'requestId': "web_send_by_user_327_1610444045047", // String | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization.
  'coboId': "20231213122855000000000000000000", // String | The Cobo ID, which can be used to track a transaction.
  'transactionId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | The transaction ID.
  'transactionHash': "239861be9a4afe080c359b7fe4a1d035945ec46256b1a0f44d1267c71de8ec28", // String | The transaction hash.
  'type': new CoboWaas2JsApi.TransactionType(), // TransactionType | The transaction type. Possible values include:    - `Deposit`: A deposit transaction.   - `Withdrawal`: A withdrawal transaction.   - `TokenApproval`: A transaction that grants permission to access your tokens.    - `ContractCall`: A transaction that interacts with a smart contract.   - `TransactionFeePayment`: A transaction that is initiated by Fee Station to pay your transaction fee.   - `RawMessage`: A transaction that signs a message. 
  'status': new CoboWaas2JsApi.TransactionStatus(), // TransactionStatus | The transaction status. Possible values include:    - `Submitted`: The transaction is submitted.   - `PendingScreening`: The transaction is pending screening by Risk Control.    - `PendingAuthorization`: The transaction is pending approvals.   - `PendingSignature`: The transaction is pending signature.    - `Broadcasting`: The transaction is being broadcast.   - `Confirming`: The transaction is waiting for the required number of confirmations.   - `Completed`: The transaction is completed.   - `Failed`: The transaction failed.   - `Rejected`: The transaction is rejected. 
  'sourceType': new CoboWaas2JsApi.TransactionSourceType(), // TransactionSourceType | The type of transaction source. Possible values include:   - `Address`: An external address.   - `CustodialWallet`: A Custodial Wallet.   - `MPCWallet`: An MPC Wallet.   - `SafeWallet`: A Smart Contract Wallet (Safe{Wallet}).   - `ExchangeWallet`: An Exchange Wallet.   - `FeeStation`: A Fee Station. 
  'sourceWalletId': "f47ac10b-58cc-4372-a567-0e02b2c3d479,557918d2-632a-4fe1-932f-315711f05fe3", // String | The wallet ID of the transaction source.
  'sourceAddress': "sourceAddress_example", // String | The address of the transaction source.
  'destinationType': new CoboWaas2JsApi.TransactionDestinationType(), // TransactionDestinationType | The transaction destination type. Possible values include:   - `Address`: An external address.    - `ContractCall`: A transaction that interacts with a smart contract.   - `MessageSign`: A transaction that signs a message.    - `CustodialWallet`: A Custodial Wallet.   - `MPCWallet`: An MPC Wallet.   - `SafeWallet`: A Smart Contract Wallets (Safe{Wallet}).   - `ExchangeWallet`: An Exchange Wallet. 
  'destinationWalletId': "f47ac10b-58cc-4372-a567-0e02b2c3d479,557918d2-632a-4fe1-932f-315711f05fe3", // String | The wallet ID of the transaction destination.
  'destinationAddress': "destinationAddress_example", // String | The address of the transaction destination. If the address includes a memo, the format should be `address|memo`. 
  'chainIds': "BTC,ETH", // String | A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
  'tokenIds': "ETH_USDT,ETH_USDC", // String | A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'assetIds': "USDT,USDC", // String | A list of asset IDs, separated by comma. (This concept applies to Exchange Wallets only) An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT.
  'vaultId': "f5c3f9e8-1d8a-44b2-9284-94bf76b7b017,ab2e3f55-472e-4a98-86d1-446d2f9e839e", // String | The MPC vault ID.
  'projectId': "a3d8eae2-1740-4b5e-92f2-88c2b1e44c6b,b51f63a3-8a8e-4a34-ae9e-6f3e6b1fdf99", // String | The MPC project ID.
  'minCreatedTimestamp': 1635744000, // Number | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time.
  'maxCreatedTimestamp': 1635744000, // Number | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time.
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **requestId** | **String**| The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | [optional] 
 **coboId** | **String**| The Cobo ID, which can be used to track a transaction. | [optional] 
 **transactionId** | **String**| The transaction ID. | [optional] 
 **transactionHash** | **String**| The transaction hash. | [optional] 
 **type** | [**TransactionType**](.md)| The transaction type. Possible values include:    - &#x60;Deposit&#x60;: A deposit transaction.   - &#x60;Withdrawal&#x60;: A withdrawal transaction.   - &#x60;TokenApproval&#x60;: A transaction that grants permission to access your tokens.    - &#x60;ContractCall&#x60;: A transaction that interacts with a smart contract.   - &#x60;TransactionFeePayment&#x60;: A transaction that is initiated by Fee Station to pay your transaction fee.   - &#x60;RawMessage&#x60;: A transaction that signs a message.  | [optional] 
 **status** | [**TransactionStatus**](.md)| The transaction status. Possible values include:    - &#x60;Submitted&#x60;: The transaction is submitted.   - &#x60;PendingScreening&#x60;: The transaction is pending screening by Risk Control.    - &#x60;PendingAuthorization&#x60;: The transaction is pending approvals.   - &#x60;PendingSignature&#x60;: The transaction is pending signature.    - &#x60;Broadcasting&#x60;: The transaction is being broadcast.   - &#x60;Confirming&#x60;: The transaction is waiting for the required number of confirmations.   - &#x60;Completed&#x60;: The transaction is completed.   - &#x60;Failed&#x60;: The transaction failed.   - &#x60;Rejected&#x60;: The transaction is rejected.  | [optional] 
 **sourceType** | [**TransactionSourceType**](.md)| The type of transaction source. Possible values include:   - &#x60;Address&#x60;: An external address.   - &#x60;CustodialWallet&#x60;: A Custodial Wallet.   - &#x60;MPCWallet&#x60;: An MPC Wallet.   - &#x60;SafeWallet&#x60;: A Smart Contract Wallet (Safe{Wallet}).   - &#x60;ExchangeWallet&#x60;: An Exchange Wallet.   - &#x60;FeeStation&#x60;: A Fee Station.  | [optional] 
 **sourceWalletId** | **String**| The wallet ID of the transaction source. | [optional] 
 **sourceAddress** | **String**| The address of the transaction source. | [optional] 
 **destinationType** | [**TransactionDestinationType**](.md)| The transaction destination type. Possible values include:   - &#x60;Address&#x60;: An external address.    - &#x60;ContractCall&#x60;: A transaction that interacts with a smart contract.   - &#x60;MessageSign&#x60;: A transaction that signs a message.    - &#x60;CustodialWallet&#x60;: A Custodial Wallet.   - &#x60;MPCWallet&#x60;: An MPC Wallet.   - &#x60;SafeWallet&#x60;: A Smart Contract Wallets (Safe{Wallet}).   - &#x60;ExchangeWallet&#x60;: An Exchange Wallet.  | [optional] 
 **destinationWalletId** | **String**| The wallet ID of the transaction destination. | [optional] 
 **destinationAddress** | **String**| The address of the transaction destination. If the address includes a memo, the format should be &#x60;address|memo&#x60;.  | [optional] 
 **chainIds** | **String**| A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **tokenIds** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **assetIds** | **String**| A list of asset IDs, separated by comma. (This concept applies to Exchange Wallets only) An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | [optional] 
 **vaultId** | **String**| The MPC vault ID. | [optional] 
 **projectId** | **String**| The MPC project ID. | [optional] 
 **minCreatedTimestamp** | **Number**| The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time. | [optional] 
 **maxCreatedTimestamp** | **Number**| The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendTransactionById

> CreateTransferTransaction201Response resendTransactionById(transactionId, opts)

Resend transaction

This operation resends a specified transaction.   Resending a transaction initiates a new attempt to process the transaction that failed previously. A transaction can be resent if its status is &#x60;failed&#x60;.  A transaction request for tracking is returned upon successful operation. 

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
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
const opts = {
  'transactionResend': new CoboWaas2JsApi.TransactionResend() // TransactionResend | The request body to resend transactions
};
apiInstance.resendTransactionById(transactionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The transaction ID. | 
 **transactionResend** | [**TransactionResend**](TransactionResend.md)| The request body to resend transactions | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## speedupTransactionById

> CreateTransferTransaction201Response speedupTransactionById(transactionId, opts)

Speed up transaction

This operation accelerates a specified transaction.   Speeding up a transaction will trigger an RBF transaction which is a new version of the original transaction. It shares the same inputs but has a higher transaction fee to incentivize miners to prioritize its confirmation over the previous one. A transaction can be accelerated if its status is either &#x60;Broadcasting&#x60; or &#x60;Confirming&#x60;.  A transaction request for tracking is returned upon successful operation. 

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
const transactionId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
const opts = {
  'transactionRbf': new CoboWaas2JsApi.TransactionRbf() // TransactionRbf | The request body to drop or to speed up transactions
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
 **transactionId** | **String**| The transaction ID. | 
 **transactionRbf** | [**TransactionRbf**](TransactionRbf.md)| The request body to drop or to speed up transactions | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

