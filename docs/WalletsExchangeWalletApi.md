# CoboWaas2Api.WalletsExchangeWalletApi

All URIs are relative to *https://api.cobo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExchangeSupportedAssets**](WalletsExchangeWalletApi.md#getExchangeSupportedAssets) | **GET** /wallets/exchanges/{exchange_id}/supported_assets | List the supported assets by exchange id
[**getExchangeSupportedChains**](WalletsExchangeWalletApi.md#getExchangeSupportedChains) | **GET** /wallets/exchanges/{exchange_id}/assets/supported_chains | List the supported chains by exchange id and asset id
[**getExchangeWalletAssetBalances**](WalletsExchangeWalletApi.md#getExchangeWalletAssetBalances) | **GET** /wallets/exchanges/{wallet_id}/assets | List the asset balance in exchange wallet
[**linkSubAccountsByWalletId**](WalletsExchangeWalletApi.md#linkSubAccountsByWalletId) | **POST** /wallets/{wallet_id}/exchanges/subaccounts | Link exchange sub accounts by wallet id
[**listExchanges**](WalletsExchangeWalletApi.md#listExchanges) | **GET** /wallets/exchanges/settings | List of exchanges
[**listSubAccountsByApikey**](WalletsExchangeWalletApi.md#listSubAccountsByApikey) | **GET** /wallets/exchanges/{exchange_id}/subaccounts | List exchange sub accounts by apikey
[**listSubAccountsByWalletId**](WalletsExchangeWalletApi.md#listSubAccountsByWalletId) | **GET** /wallets/{wallet_id}/exchanges/subaccounts | List exchange sub accounts by wallet id



## getExchangeSupportedAssets

> GetAssets200Response getExchangeSupportedAssets(exchangeId, opts)

List the supported assets by exchange id

Retrieve a list of supported asset.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
let exchangeId = new CoboWaas2Api.ExchangeId(); // ExchangeId | Exchange ID to query
let opts = {
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getExchangeSupportedAssets(exchangeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | [**ExchangeId**](.md)| Exchange ID to query | 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetAssets200Response**](GetAssets200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExchangeSupportedChains

> [ChainInfo] getExchangeSupportedChains(exchangeId, assetId, opts)

List the supported chains by exchange id and asset id

Retrieve a list of supported chains.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
let exchangeId = new CoboWaas2Api.ExchangeId(); // ExchangeId | Exchange ID to query
let assetId = "USDT"; // String | Unique id of the asset
let opts = {
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getExchangeSupportedChains(exchangeId, assetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | [**ExchangeId**](.md)| Exchange ID to query | 
 **assetId** | **String**| Unique id of the asset | 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**[ChainInfo]**](ChainInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExchangeWalletAssetBalances

> GetExchangeWalletAssetBalances200Response getExchangeWalletAssetBalances(walletId, subWalletId, opts)

List the asset balance in exchange wallet

Retrieve a list of asset balance in exchange wallet.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let subWalletId = "SPOT"; // String | Unique id of the wallet
let opts = {
  'assetId': "USDT", // String | Unique id of the asset
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getExchangeWalletAssetBalances(walletId, subWalletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **subWalletId** | **String**| Unique id of the wallet | 
 **assetId** | **String**| Unique id of the asset | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetExchangeWalletAssetBalances200Response**](GetExchangeWalletAssetBalances200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkSubAccountsByWalletId

> [String] linkSubAccountsByWalletId(walletId, opts)

Link exchange sub accounts by wallet id

Link exchange sub accounts.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let opts = {
  'linkSubAccountsByWalletIdRequest': new CoboWaas2Api.LinkSubAccountsByWalletIdRequest() // LinkSubAccountsByWalletIdRequest | Request body for linking subaccounts
};
apiInstance.linkSubAccountsByWalletId(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **linkSubAccountsByWalletIdRequest** | [**LinkSubAccountsByWalletIdRequest**](LinkSubAccountsByWalletIdRequest.md)| Request body for linking subaccounts | [optional] 

### Return type

**[String]**

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listExchanges

> [ListExchanges200ResponseInner] listExchanges()

List of exchanges

Retrieve a list of exchanges.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
apiInstance.listExchanges().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ListExchanges200ResponseInner]**](ListExchanges200ResponseInner.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubAccountsByApikey

> [String] listSubAccountsByApikey(exchangeId, opts)

List exchange sub accounts by apikey

Retrieve a list of exchange sub accounts.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
let exchangeId = new CoboWaas2Api.ExchangeId(); // ExchangeId | Exchange ID to query
let opts = {
  'apikey': "d8f062da-39f4-4a11-8b9d-12595854237f", // String | The API Key for the exchange
  'secret': "75B4F636193162488A3728B4A5797708", // String | The API Secret for the exchange.
  'passphrase': "A3DBHJV" // String | The API passphrase for the exchange wallet.
};
apiInstance.listSubAccountsByApikey(exchangeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | [**ExchangeId**](.md)| Exchange ID to query | 
 **apikey** | **String**| The API Key for the exchange | [optional] 
 **secret** | **String**| The API Secret for the exchange. | [optional] 
 **passphrase** | **String**| The API passphrase for the exchange wallet. | [optional] 

### Return type

**[String]**

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubAccountsByWalletId

> [String] listSubAccountsByWalletId(walletId)

List exchange sub accounts by wallet id

Retrieve a list of exchange sub accounts.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsExchangeWalletApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
apiInstance.listSubAccountsByWalletId(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 

### Return type

**[String]**

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

