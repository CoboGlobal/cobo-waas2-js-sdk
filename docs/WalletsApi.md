# CoboWaas2JsApi.WalletsApi

All URIs are relative to *https://api.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWalletAddress**](WalletsApi.md#addWalletAddress) | **POST** /wallets/{wallet_id}/addresses | Add address to wallet
[**createWallet**](WalletsApi.md#createWallet) | **POST** /wallets | Create new wallet
[**deleteWalletById**](WalletsApi.md#deleteWalletById) | **DELETE** /wallets/{wallet_id} | Delete wallet by ID
[**getAddressValidity**](WalletsApi.md#getAddressValidity) | **GET** /wallets/address/validity | Check address validity
[**getChains**](WalletsApi.md#getChains) | **GET** /wallets/chains | List chain metadata
[**getEnabledChains**](WalletsApi.md#getEnabledChains) | **GET** /wallets/enabled_chains | List enabled chains
[**getEnabledTokens**](WalletsApi.md#getEnabledTokens) | **GET** /wallets/enabled_tokens | List enabled tokens
[**getMaxTransferableValue**](WalletsApi.md#getMaxTransferableValue) | **GET** /wallets/{wallet_id}/max_transferable_value | Get max transferable value
[**getSpendableList**](WalletsApi.md#getSpendableList) | **GET** /wallets/{wallet_id}/spendables | List spendable UTXOs
[**getSupportedChains**](WalletsApi.md#getSupportedChains) | **GET** /wallets/supported_chains | List supported chains
[**getSupportedTokens**](WalletsApi.md#getSupportedTokens) | **GET** /wallets/supported_tokens | List supported tokens
[**getTokens**](WalletsApi.md#getTokens) | **GET** /wallets/tokens | List token metadata
[**getWalletAddressTokenBalances**](WalletsApi.md#getWalletAddressTokenBalances) | **GET** /wallets/{wallet_id}/addresses/{address_id}/tokens | List Token Balances by Address in Wallet
[**getWalletById**](WalletsApi.md#getWalletById) | **GET** /wallets/{wallet_id} | Retrieve wallet information by ID
[**getWalletTokenBalances**](WalletsApi.md#getWalletTokenBalances) | **GET** /wallets/{wallet_id}/tokens | List Token Balances in Wallet
[**listAddresses**](WalletsApi.md#listAddresses) | **GET** /wallets/{wallet_id}/addresses | List wallet addresses by wallet ID
[**listWallets**](WalletsApi.md#listWallets) | **GET** /wallets | List all wallets
[**updateWalletById**](WalletsApi.md#updateWalletById) | **PUT** /wallets/{wallet_id} | Update wallet by ID



## addWalletAddress

> [AddressInfo] addWalletAddress(walletId, opts)

Add address to wallet

Add an address to a wallet.  Error codes this API may return: | Error Code | Description | | -- | -- | | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const opts = {
  'addWalletAddressRequest': new CoboWaas2JsApi.AddWalletAddressRequest() // AddWalletAddressRequest | The request body to add address for a wallet
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

Creates a new wallet with the provided information.  Error codes this API may return: | Error Code | Description | | -- | -- | | &#x60;2003&#x60; | 必选参数缺失 | | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'createdWallet': new CoboWaas2JsApi.CreatedWallet() // CreatedWallet | The request body to create a wallet
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

Delete wallet by ID

Deletes a specific wallet identified by its ID. This endpoint is supported by Exchange wallets only.  Error codes this API may return: | Error Code | Description | | -- | -- | | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
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

Check address validity

Verifies if the given address is valid for the specified token. Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const tokenId = "ETH_USDT"; // String | Unique id of the token
const addressStr = "0x0000000000000000000000000000000000000000"; // String | The address string
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


## getChains

> GetChains200Response getChains(opts)

List chain metadata

This endpoint retrieves metadata for available blockchain chains. It provides details such as chain_id, name, and other relevant information. Pagination parameters can be used to manage the size of the response. The chain list is publicly accessible without any permission restrictions.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'chainId': "ETH", // String | Unique id of the chain
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetChains200Response**](GetChains200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnabledChains

> GetChains200Response getEnabledChains(opts)

List enabled chains

This endpoint allows users to query enabled chains based on wallet type and subtype  for the organization associated with the API key. Pagination parameters can be used to manage the response size. Wallet type/subtype are enumerations as described in parameters.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | Wallet type to query
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | Wallet subtype to query
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
};
apiInstance.getEnabledChains(opts).then((data) => {
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetChains200Response**](GetChains200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnabledTokens

> GetTokens200Response getEnabledTokens(opts)

List enabled tokens

This endpoint allows users to query enabled tokens based on wallet type, subtype,  and chain ID if specified for the organization associated with the API key. Pagination parameters can be used to manage the response size. Wallet type/subtype are enumerations as described in parameters. Chain_id can be get via List enabled chains.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | Wallet type to query
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | Wallet subtype to query
  'chainId': "ETH", // String | Unique id of the chain
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
};
apiInstance.getEnabledTokens(opts).then((data) => {
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
 **chainId** | **String**| Unique id of the chain | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaxTransferableValue

> MaxTransferableValue getMaxTransferableValue(walletId, toAddress, opts)

Get max transferable value

Retrieves the maximum transferable value and the corresponding transaction fee for a given address. This endpoint allows users to determine the maximum amount that can be transferred from a wallet address, along with the associated transaction fee.  Error codes this API may return:     | Error Code | Description |     | -- | -- |     | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const toAddress = "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE"; // String | address
const opts = {
  'fromAddress': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE" // String | address
};
apiInstance.getMaxTransferableValue(walletId, toAddress, opts).then((data) => {
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

[**MaxTransferableValue**](MaxTransferableValue.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpendableList

> [UTXO] getSpendableList(walletId, tokenId, opts)

List spendable UTXOs

Retrieves a list of spendable unspent transaction outputs (UTXOs) for a given wallet and token. This endpoint allows users to query UTXOs that can be spent in transactions.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const tokenId = "ETH_USDT"; // String | Unique id of the token
const opts = {
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

> GetChains200Response getSupportedChains(opts)

List supported chains

This endpoint allows users to query supported chains based on wallet type and subtype.  Pagination parameters can be used to manage the response size. Wallet type/subtype are enumerations as described in parameters.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | Wallet type to query
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | Wallet subtype to query
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
};
apiInstance.getSupportedChains(opts).then((data) => {
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetChains200Response**](GetChains200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSupportedTokens

> GetTokens200Response getSupportedTokens(opts)

List supported tokens

This endpoint allows users to query supported tokens based on wallet type, subtype, and chain ID if specified. Pagination parameters can be used to manage the response size. Wallet type/subtype are enumerations as described in parameters. Chain_id can be get via List supported chains.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | Wallet type to query
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | Wallet subtype to query
  'chainId': "ETH", // String | Unique id of the chain
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
};
apiInstance.getSupportedTokens(opts).then((data) => {
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
 **chainId** | **String**| Unique id of the chain | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokens

> GetTokens200Response getTokens(opts)

List token metadata

This endpoint retrieves metadata for tokens stored in the wallet system. It provides details such as token_id, symbol, and other relevant information. Pagination parameters can be used to manage the size of the response. The token list is publicly accessible without any permission restrictions.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletAddressTokenBalances

> GetWalletTokenBalances200Response getWalletAddressTokenBalances(walletId, addressId, opts)

List Token Balances by Address in Wallet

Retrieves a list of token balances for a specific address within a wallet. This endpoint allows users to query token balances based on the wallet ID, address ID, and optionally token ID. Pagination parameters can be used to manage the response size. This endpoint is supported by MPC wallets.  Error codes this API may return:     | Error Code | Description |     | -- | -- |     | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const addressId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the address
const opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**GetWalletTokenBalances200Response**](GetWalletTokenBalances200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletById

> WalletInfo getWalletById(walletId)

Retrieve wallet information by ID

Retrieves detailed information about a wallet identified by its unique ID.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
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

List Token Balances in Wallet

Retrieves a list of token balances within a wallet. This endpoint allows users to query token balances based on the wallet ID and optionally token ID. Pagination parameters can be used to manage the response size. This endpoint is supported by Custodial/MPC wallets.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

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

Retrieve a list of addresses associated with a wallet.  Error codes this API may return:   | Error Code | Description |   | -- | -- |   | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const opts = {
  'tokenId': "ETH_USDT", // String | Unique id of the token
  'addressStr': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE", // String | address
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
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
 **addressStr** | **String**| address | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

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

Retrieves a list of all wallets.  This endpoint allows filtering by wallet type, subtype, and MPC vault ID (if applicable).  Error codes this API may return:       | Error Code | Description |       | -- | -- |       | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const opts = {
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | Wallet type to query
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | Wallet subtype to query
  'vaultId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | Unique id of the mpc vault
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
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
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

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

Updates information for a specific wallet identified by its ID. This endpoint is supported by Exchange wallets only.  Error codes this API may return: | Error Code | Description | | -- | -- | | &#x60;2006&#x60; | 参数格式或者值非法 | 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsApi();
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the wallet
const opts = {
  'updateWalletByIdRequest': new CoboWaas2JsApi.UpdateWalletByIdRequest() // UpdateWalletByIdRequest | The request body to update a wallet
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

