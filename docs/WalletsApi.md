# CoboWaas2JsApi.WalletsApi

All URIs are relative to *https://api.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWalletAddress**](WalletsApi.md#addWalletAddress) | **POST** /wallets/{wallet_id}/addresses | Add address to wallet
[**createWallet**](WalletsApi.md#createWallet) | **POST** /wallets | Create wallet
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
[**getWalletAddressTokenBalances**](WalletsApi.md#getWalletAddressTokenBalances) | **GET** /wallets/{wallet_id}/addresses/{address_id}/tokens | List token balances by address
[**getWalletById**](WalletsApi.md#getWalletById) | **GET** /wallets/{wallet_id} | Retrieve wallet information by ID
[**getWalletTokenBalances**](WalletsApi.md#getWalletTokenBalances) | **GET** /wallets/{wallet_id}/tokens | List token balances by wallet
[**listAddresses**](WalletsApi.md#listAddresses) | **GET** /wallets/{wallet_id}/addresses | List wallet addresses by wallet ID
[**listWallets**](WalletsApi.md#listWallets) | **GET** /wallets | List all wallets
[**lockSpendableList**](WalletsApi.md#lockSpendableList) | **POST** /wallets/{wallet_id}/spendables/lock | Lock/Unlock the UTXOs in tx hash list
[**updateWalletById**](WalletsApi.md#updateWalletById) | **PUT** /wallets/{wallet_id} | Update wallet by ID



## addWalletAddress

> [AddressInfo] addWalletAddress(walletId, opts)

Add address to wallet

This operation creates one or more addresses for the specified wallet. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const opts = {
  'addWalletAddressRequest': new CoboWaas2JsApi.AddWalletAddressRequest() // AddWalletAddressRequest | The request body to add address to a wallet.
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
 **walletId** | **String**| The wallet ID. | 
 **addWalletAddressRequest** | [**AddWalletAddressRequest**](AddWalletAddressRequest.md)| The request body to add address to a wallet. | [optional] 

### Return type

[**[AddressInfo]**](AddressInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWallet

> WalletInfo createWallet(opts)

Create wallet

This operation creates a wallet with the provided information. 

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

This operation deletes the specified wallet. &lt;Note&gt;This operation is applicable to Exchange Wallets only.&lt;/Note&gt; 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
apiInstance.deleteWalletById(walletId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 

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

This operation verifies if the given address is valid for the specified token. 

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
const tokenId = "ETH_USDT"; // String | The token ID.
const addressStr = "0x0000000000000000000000000000000000000000"; // String | The wallet address.
apiInstance.getAddressValidity(tokenId, addressStr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| The token ID. | 
 **addressStr** | **String**| The wallet address. | 

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

This operation retrieves the metadata of all chains supported by Cobo WaaS 2.0.  It provides details such as chain ID, chain name, and other relevant information. The chain metadata is publicly available without any permission restrictions. 

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
  'chainId': "ETH", // String | The chain ID.
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
 **chainId** | **String**| The chain ID. | [optional] 
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

This operation retrieves all the chains enabled for the organization associated with your API key. You can also specify the wallet type and subtype you want to query. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: Custodial Wallets  - `MPC`: MPC Wallets  - `SmartContract`: Smart Contract Wallets  - `Exchange`: Exchange Wallets 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: Custodial Wallets  - &#x60;MPC&#x60;: MPC Wallets  - &#x60;SmartContract&#x60;: Smart Contract Wallets  - &#x60;Exchange&#x60;: Exchange Wallets  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
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

This operation retrieves all tokens that can be used by the organization associated with your API key. You can filter the result by wallet type, subtype, and chain ID.  You can retrieve chain IDs by using the [List enabled chains](/api-references/v2/wallets/list-enabled-chains) operation. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: Custodial Wallets  - `MPC`: MPC Wallets  - `SmartContract`: Smart Contract Wallets  - `Exchange`: Exchange Wallets 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'chainId': "ETH", // String | The chain ID.
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: Custodial Wallets  - &#x60;MPC&#x60;: MPC Wallets  - &#x60;SmartContract&#x60;: Smart Contract Wallets  - &#x60;Exchange&#x60;: Exchange Wallets  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **chainId** | **String**| The chain ID. | [optional] 
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

This operation retrieves the maximum amount that you can transfer from a wallet or a specified wallet address, along with the corresponding transaction fee. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const toAddress = "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE"; // String | The recipient's address.
const opts = {
  'fromAddress': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE" // String | The sender's address.
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
 **walletId** | **String**| The wallet ID. | 
 **toAddress** | **String**| The recipient&#39;s address. | 
 **fromAddress** | **String**| The sender&#39;s address. | [optional] 

### Return type

[**MaxTransferableValue**](MaxTransferableValue.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpendableList

> [UTXO] getSpendableList(walletId, txHash, opts)

List spendable UTXOs

The operation retrieves a list of spendable unspent transaction outputs (UTXOs) for the specified wallet and token. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const txHash = "dd7e1cecf6bbde1844ee1815b780711a1e306a718bcd23cd64401b48ef88eb83"; // String | Transaction hash of the UTXO.
const opts = {
  'tokenId': "ETH_USDT", // String | The token ID.
  'addressStr': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE" // String | The wallet address.
};
apiInstance.getSpendableList(walletId, txHash, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **txHash** | **String**| Transaction hash of the UTXO. | 
 **tokenId** | **String**| The token ID. | [optional] 
 **addressStr** | **String**| The wallet address. | [optional] 

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

This operation retrieves all chains supported by the specified wallet type or subtype. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: Custodial Wallets  - `MPC`: MPC Wallets  - `SmartContract`: Smart Contract Wallets  - `Exchange`: Exchange Wallets 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: Custodial Wallets  - &#x60;MPC&#x60;: MPC Wallets  - &#x60;SmartContract&#x60;: Smart Contract Wallets  - &#x60;Exchange&#x60;: Exchange Wallets  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
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

This operation retrieves all supported tokens for the organization associated with your API key. You can also specify the wallet type, subtype, and chain ID you want to query.  You can retrieve chain IDs by using the [List supported chains](/api-references/v2/wallets/list-supported-chains) operation. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: Custodial Wallets  - `MPC`: MPC Wallets  - `SmartContract`: Smart Contract Wallets  - `Exchange`: Exchange Wallets 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'chainId': "ETH", // String | The chain ID.
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: Custodial Wallets  - &#x60;MPC&#x60;: MPC Wallets  - &#x60;SmartContract&#x60;: Smart Contract Wallets  - &#x60;Exchange&#x60;: Exchange Wallets  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **chainId** | **String**| The chain ID. | [optional] 
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

This operation retrieves the metadata of the tokens stored under your account.  It provides details such as token ID, token symbol, and other relevant information. The token metadata is publicly available without any permission restrictions. 

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
  'tokenId': "ETH_USDT", // String | The token ID.
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
 **tokenId** | **String**| The token ID. | [optional] 
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

List token balances by address

The operation retrieves a list of token balances for a specified address within an MPC Wallet. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const addressId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The address ID.
const opts = {
  'tokenId': "ETH_USDT", // String | The token ID.
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
 **walletId** | **String**| The wallet ID. | 
 **addressId** | **String**| The address ID. | 
 **tokenId** | **String**| The token ID. | [optional] 
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

This operation retrieves detailed information about the specified wallet. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
apiInstance.getWalletById(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 

### Return type

[**WalletInfo**](WalletInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletTokenBalances

> GetWalletTokenBalances200Response getWalletTokenBalances(walletId, opts)

List token balances by wallet

The operation retrieves a list of token balances within the specified wallet. &lt;Note&gt;This operation is applicable to Custodial Wallets and MPC Wallets only.&lt;/Note&gt; 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const opts = {
  'tokenId': "ETH_USDT", // String | The token ID.
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
 **walletId** | **String**| The wallet ID. | 
 **tokenId** | **String**| The token ID. | [optional] 
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

This operation retrieves a list of addresses under the specified wallet. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const opts = {
  'tokenId': "ETH_USDT", // String | The token ID.
  'addressStr': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE", // String | The wallet address.
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
 **walletId** | **String**| The wallet ID. | 
 **tokenId** | **String**| The token ID. | [optional] 
 **addressStr** | **String**| The wallet address. | [optional] 
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

This operation retrieves the information of all wallets under your organization. You can filter the result by wallet type, subtype, and Vault ID (for MPC Wallets). 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: Custodial Wallets  - `MPC`: MPC Wallets  - `SmartContract`: Smart Contract Wallets  - `Exchange`: Exchange Wallets 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'vaultId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | The MPC Vault ID.
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: Custodial Wallets  - &#x60;MPC&#x60;: MPC Wallets  - &#x60;SmartContract&#x60;: Smart Contract Wallets  - &#x60;Exchange&#x60;: Exchange Wallets  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **vaultId** | **String**| The MPC Vault ID. | [optional] 
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


## lockSpendableList

> LockSpendableList200Response lockSpendableList(walletId, opts)

Lock/Unlock the UTXOs in tx hash list

Lock/Unlock the UTXOs in the given tx hash list. The Locked UTXO can not be transferred until unlocked. 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const opts = {
  'lockSpendableListRequest': new CoboWaas2JsApi.LockSpendableListRequest() // LockSpendableListRequest | The request body to lock/unlock spendable
};
apiInstance.lockSpendableList(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **lockSpendableListRequest** | [**LockSpendableListRequest**](LockSpendableListRequest.md)| The request body to lock/unlock spendable | [optional] 

### Return type

[**LockSpendableList200Response**](LockSpendableList200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWalletById

> WalletInfo updateWalletById(walletId, opts)

Update wallet by ID

This operation updates the information of a specified wallet.  &lt;Note&gt;This operation is applicable to Exchange Wallets only.&lt;/Note&gt; 

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
const walletId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The wallet ID.
const opts = {
  'updateWalletByIdRequest': new CoboWaas2JsApi.UpdateWalletByIdRequest() // UpdateWalletByIdRequest | The request body.
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
 **walletId** | **String**| The wallet ID. | 
 **updateWalletByIdRequest** | [**UpdateWalletByIdRequest**](UpdateWalletByIdRequest.md)| The request body. | [optional] 

### Return type

[**WalletInfo**](WalletInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

