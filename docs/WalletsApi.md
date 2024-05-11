# CoboWaas2Api.WalletsApi

All URIs are relative to *https://api.cobo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWalletAddress**](WalletsApi.md#addWalletAddress) | **POST** /wallets/{wallet_id}/addresses | Add address to a wallet
[**createWallet**](WalletsApi.md#createWallet) | **POST** /wallets | Create new wallet
[**deleteWalletById**](WalletsApi.md#deleteWalletById) | **DELETE** /wallets/{wallet_id} | Delete a wallet by ID
[**getAddressValidity**](WalletsApi.md#getAddressValidity) | **GET** /wallets/address/validity | Get the given address validity for token
[**getAssets**](WalletsApi.md#getAssets) | **GET** /wallets/assets | List the metadata of assets
[**getChains**](WalletsApi.md#getChains) | **GET** /wallets/chains | List the metadata of chain
[**getMaxSendValue**](WalletsApi.md#getMaxSendValue) | **GET** /wallets/{wallet_id}/max_sendable_value | Get max sendable Vaule
[**getSpendableList**](WalletsApi.md#getSpendableList) | **GET** /wallets/{wallet_id}/spendables | List the spendable utxo
[**getSupportedChains**](WalletsApi.md#getSupportedChains) | **GET** /wallets/supported_chains | List the supported chains by wallet subtype
[**getSupportedTokens**](WalletsApi.md#getSupportedTokens) | **GET** /wallets/supported_tokens | List the supported tokens by wallet subtype and chain id if specified
[**getTokens**](WalletsApi.md#getTokens) | **GET** /wallets/tokens | List the metadata of tokens
[**getWalletAddressById**](WalletsApi.md#getWalletAddressById) | **GET** /wallets/{wallet_id}/addresses/{address_id} | Get address information by ID
[**getWalletAddressTokenBalances**](WalletsApi.md#getWalletAddressTokenBalances) | **GET** /wallets/{wallet_id}/addresses/{address_id}/tokens | List the token balance by address in the wallets(to be specific)
[**getWalletById**](WalletsApi.md#getWalletById) | **GET** /wallets/{wallet_id} | Get wallet information by ID
[**getWalletTokenBalances**](WalletsApi.md#getWalletTokenBalances) | **GET** /wallets/{wallet_id}/tokens | List the token balance in the wallets(to be specific)
[**listAddresses**](WalletsApi.md#listAddresses) | **GET** /wallets/{wallet_id}/addresses | List wallet addresses by wallet ID
[**listWallets**](WalletsApi.md#listWallets) | **GET** /wallets | List all wallets
[**updateWalletById**](WalletsApi.md#updateWalletById) | **PUT** /wallets/{wallet_id} | Update wallet by ID



## addWalletAddress

> [AddressInfo] addWalletAddress(walletId, opts)

Add address to a wallet

Add address to a wallet.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let opts = {
  'addWalletAddressRequest': new CoboWaas2Api.AddWalletAddressRequest() // AddWalletAddressRequest | The request body to add address for a wallet
};
apiInstance.addWalletAddress(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **addWalletAddressRequest** | [**AddWalletAddressRequest**](AddWalletAddressRequest.md)| The request body to add address for a wallet | [optional] 

### Return type

[**[AddressInfo]**](AddressInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWallet

> WalletInfo createWallet(opts)

Create new wallet

..More detailed explanation on creating a new wallet..  Error codes this API may return: | Error Code | Description | | -- | -- | | &#x60;2003&#x60; | 必选参数缺失 | | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let opts = {
  'createdWallet': new CoboWaas2Api.CreatedWallet() // CreatedWallet | The request body to create a wallet
};
apiInstance.createWallet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdWallet** | [**CreatedWallet**](CreatedWallet.md)| The request body to create a wallet | [optional] 

### Return type

[**WalletInfo**](WalletInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWalletById

> deleteWalletById(walletId)

Delete a wallet by ID

Delete a specific wallet by ID

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
apiInstance.deleteWalletById(walletId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 

### Return type

null (empty response body)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAddressValidity

> GetAddressValidity200Response getAddressValidity(tokenId, addressStr)

Get the given address validity for token

Check if the given address valid.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let tokenId = "ETH_USDT"; // String | Unique id of the token
let addressStr = "0x0000000000000000000000000000000000000000"; // String | The address string
apiInstance.getAddressValidity(tokenId, addressStr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| Unique id of the token | 
 **addressStr** | **String**| The address string | 

### Return type

[**GetAddressValidity200Response**](GetAddressValidity200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssets

> GetAssets200Response getAssets(opts)

List the metadata of assets

Retrieve a list of asset metadata.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let opts = {
  'assetId': "USDT", // String | Unique id of the asset
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getAssets(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **String**| Unique id of the asset | [optional] 
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


## getChains

> GetChains200Response getChains(opts)

List the metadata of chain

Retrieve a list of chain metadata.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let opts = {
  'chainId': "ETH", // String | Unique id of the chain
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getChains(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Unique id of the chain | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetChains200Response**](GetChains200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaxSendValue

> MaxSendValue getMaxSendValue(walletId, toAddress, opts)

Get max sendable Vaule

Retrieve the maximum sendable vaule and the corresponding transaction fee for a given address.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let toAddress = "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE"; // String | address
let opts = {
  'fromAddress': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE" // String | address
};
apiInstance.getMaxSendValue(walletId, toAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **toAddress** | **String**| address | 
 **fromAddress** | **String**| address | [optional] 

### Return type

[**MaxSendValue**](MaxSendValue.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpendableList

> [UTXO] getSpendableList(walletId, tokenId, opts)

List the spendable utxo

Retrieve a list of spendable utxo.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let tokenId = "ETH_USDT"; // String | Unique id of the token
let opts = {
  'addressStr': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE" // String | address
};
apiInstance.getSpendableList(walletId, tokenId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **tokenId** | **String**| Unique id of the token | 
 **addressStr** | **String**| address | [optional] 

### Return type

[**[UTXO]**](UTXO.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSupportedChains

> GetChains200Response getSupportedChains(walletSubtype, opts)

List the supported chains by wallet subtype

Retrieve a list of supported chain.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletSubtype = new CoboWaas2Api.WalletSubtype(); // WalletSubtype | Wallet subtype to query
let opts = {
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getSupportedChains(walletSubtype, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletSubtype** | [**WalletSubtype**](.md)| Wallet subtype to query | 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetChains200Response**](GetChains200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSupportedTokens

> GetTokens200Response getSupportedTokens(walletSubtype, opts)

List the supported tokens by wallet subtype and chain id if specified

Retrieve a list of supported token.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletSubtype = new CoboWaas2Api.WalletSubtype(); // WalletSubtype | Wallet subtype to query
let opts = {
  'chainId': "ETH", // String | Unique id of the chain
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getSupportedTokens(walletSubtype, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletSubtype** | [**WalletSubtype**](.md)| Wallet subtype to query | 
 **chainId** | **String**| Unique id of the chain | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokens

> GetTokens200Response getTokens(opts)

List the metadata of tokens

Retrieve a list of token metadata.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getTokens(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| Unique id of the token | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletAddressById

> AddressInfo getWalletAddressById(walletId, addressId)

Get address information by ID

Retrieve wallet information by ID

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let addressId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the address
apiInstance.getWalletAddressById(walletId, addressId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **addressId** | **String**| Unique id of the address | 

### Return type

[**AddressInfo**](AddressInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletAddressTokenBalances

> GetWalletTokenBalances200Response getWalletAddressTokenBalances(walletId, addressId, opts)

List the token balance by address in the wallets(to be specific)

Retrieve a list of token balance by address in wallet.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let addressId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the address
let opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getWalletAddressTokenBalances(walletId, addressId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **addressId** | **String**| Unique id of the address | 
 **tokenId** | **String**| Unique id of the token | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetWalletTokenBalances200Response**](GetWalletTokenBalances200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletById

> WalletInfo getWalletById(walletId)

Get wallet information by ID

Retrieve wallet information by ID

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
apiInstance.getWalletById(walletId).then((data) => {
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

[**WalletInfo**](WalletInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletTokenBalances

> GetWalletTokenBalances200Response getWalletTokenBalances(walletId, opts)

List the token balance in the wallets(to be specific)

Retrieve a list of token balance in wallet.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.getWalletTokenBalances(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **tokenId** | **String**| Unique id of the token | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**GetWalletTokenBalances200Response**](GetWalletTokenBalances200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddresses

> ListAddresses200Response listAddresses(walletId, opts)

List wallet addresses by wallet ID

Retrieve a list of addresses.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.listAddresses(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **tokenId** | **String**| Unique id of the token | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**ListAddresses200Response**](ListAddresses200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWallets

> ListWallets200Response listWallets(opts)

List all wallets

Retrieve a list of wallets.

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let opts = {
  'walletType': new CoboWaas2Api.WalletType(), // WalletType | Wallet type to query
  'walletSubtype': new CoboWaas2Api.WalletSubtype(), // WalletSubtype | Wallet subtype to query
  'vaultId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | Unique id of the mpc vault
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
};
apiInstance.listWallets(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletType** | [**WalletType**](.md)| Wallet type to query | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| Wallet subtype to query | [optional] 
 **vaultId** | **String**| Unique id of the mpc vault | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**ListWallets200Response**](ListWallets200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWalletById

> WalletInfo updateWalletById(walletId, opts)

Update wallet by ID

Update wallet info by ID

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.WalletsApi();
let walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
let opts = {
  'updateWalletByIdRequest': new CoboWaas2Api.UpdateWalletByIdRequest() // UpdateWalletByIdRequest | The request body to update a wallet
};
apiInstance.updateWalletById(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Unique id of the wallet | 
 **updateWalletByIdRequest** | [**UpdateWalletByIdRequest**](UpdateWalletByIdRequest.md)| The request body to update a wallet | [optional] 

### Return type

[**WalletInfo**](WalletInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

