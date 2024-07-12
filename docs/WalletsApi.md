# CoboWaas2JsApi.WalletsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkAddressValidity**](WalletsApi.md#checkAddressValidity) | **GET** /wallets/address/check_validity | Check address validity
[**createWallet**](WalletsApi.md#createWallet) | **POST** /wallets | Create wallet
[**deleteWalletById**](WalletsApi.md#deleteWalletById) | **POST** /wallets/{wallet_id}/delete | Delete wallet
[**generateWalletAddress**](WalletsApi.md#generateWalletAddress) | **POST** /wallets/{wallet_id}/addresses | Generate new addresses in wallet
[**getAddressById**](WalletsApi.md#getAddressById) | **GET** /wallets/{wallet_id}/addresses/{address} | Get address information
[**getChainById**](WalletsApi.md#getChainById) | **GET** /wallets/chains/{chain_id} | Get chain information
[**getChains**](WalletsApi.md#getChains) | **GET** /wallets/chains | List supported chains
[**getEnabledChains**](WalletsApi.md#getEnabledChains) | **GET** /wallets/enabled_chains | List enabled chains
[**getEnabledTokens**](WalletsApi.md#getEnabledTokens) | **GET** /wallets/enabled_tokens | List enabled tokens
[**getMaxTransferableValue**](WalletsApi.md#getMaxTransferableValue) | **GET** /wallets/{wallet_id}/max_transferable_value | Get maximum transferable value
[**getSpendableList**](WalletsApi.md#getSpendableList) | **GET** /wallets/{wallet_id}/spendables | List spendable UTXOs
[**getTokenById**](WalletsApi.md#getTokenById) | **GET** /wallets/tokens/{token_id} | Get token information
[**getTokens**](WalletsApi.md#getTokens) | **GET** /wallets/tokens | List supported tokens
[**getWalletAddressTokenBalances**](WalletsApi.md#getWalletAddressTokenBalances) | **GET** /wallets/{wallet_id}/addresses/{address}/tokens | List token balances by address
[**getWalletById**](WalletsApi.md#getWalletById) | **GET** /wallets/{wallet_id} | Get wallet information
[**getWalletTokenBalances**](WalletsApi.md#getWalletTokenBalances) | **GET** /wallets/{wallet_id}/tokens | List token balances by wallet
[**listAddresses**](WalletsApi.md#listAddresses) | **GET** /wallets/{wallet_id}/addresses | List wallet addresses
[**listWallets**](WalletsApi.md#listWallets) | **GET** /wallets | List all wallets
[**lockSpendableList**](WalletsApi.md#lockSpendableList) | **POST** /wallets/{wallet_id}/spendables/lock | Lock UTXOs
[**unlockSpendableList**](WalletsApi.md#unlockSpendableList) | **POST** /wallets/{wallet_id}/spendables/unlock | Unlock UTXOs
[**updateWalletById**](WalletsApi.md#updateWalletById) | **PUT** /wallets/{wallet_id} | Update wallet



## checkAddressValidity

> CheckAddressValidity200Response checkAddressValidity(tokenId, address)

Check address validity

This operation verifies if a given address is valid for a specific token. 

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
const tokenId = "ETH_USDT"; // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // String | The wallet address.
apiInstance.checkAddressValidity(tokenId, address).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
 **address** | **String**| The wallet address. | 

### Return type

[**CheckAddressValidity200Response**](CheckAddressValidity200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
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

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWalletById

> DeleteWalletById200Response deleteWalletById(walletId)

Delete wallet

This operation deletes a specified wallet.  &lt;Note&gt;This operation is applicable to Exchange Wallets only.&lt;/Note&gt; 

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
apiInstance.deleteWalletById(walletId).then((data) => {
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

[**DeleteWalletById200Response**](DeleteWalletById200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateWalletAddress

> [AddressInfo] generateWalletAddress(walletId, opts)

Generate new addresses in wallet

This operation generates one or more addresses within a specified wallet.  &lt;Note&gt;This operation is applicable to Custodial Wallets and MPC Wallets only.&lt;/Note&gt; 

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
  'generateWalletAddressRequest': new CoboWaas2JsApi.GenerateWalletAddressRequest() // GenerateWalletAddressRequest | The request body to generates addresses within a specified wallet.
};
apiInstance.generateWalletAddress(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **generateWalletAddressRequest** | [**GenerateWalletAddressRequest**](GenerateWalletAddressRequest.md)| The request body to generates addresses within a specified wallet. | [optional] 

### Return type

[**[AddressInfo]**](AddressInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAddressById

> ListAddresses200Response getAddressById(walletId, address, opts)

Get address information

This operation retrieves the detailed information about a specified address within a wallet. 

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
const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // String | The wallet address.
const opts = {
  'tokenId': "ETH_USDT", // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.getAddressById(walletId, address, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **address** | **String**| The wallet address. | 
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListAddresses200Response**](ListAddresses200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChainById

> ChainInfo getChainById(chainId)

Get chain information

This operation retrieves the detailed information about a specified chain. 

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
const chainId = "ETH"; // String | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
apiInstance.getChainById(chainId).then((data) => {
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

[**ChainInfo**](ChainInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChains

> GetChains200Response getChains(opts)

List supported chains

This operation retrieves all chains supported by a specific wallet type or subtype.   It provides details such as the chain ID, chain symbol, and other relevant information. You can filter the result by chain IDs. The chain metadata is publicly available without any permission restrictions. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'chainIds': "BTC,ETH", // String | A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - &#x60;MPC&#x60;: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - &#x60;SmartContract&#x60;: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - &#x60;Exchange&#x60;: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction)  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **chainIds** | **String**| A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

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

This operation retrieves all the chains that can be used by your organization.   You can filter the result by wallet type or subtype. If you do not specify a wallet type, this operation returns a combination of chains supported by each wallet type. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - &#x60;MPC&#x60;: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - &#x60;SmartContract&#x60;: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - &#x60;Exchange&#x60;: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction)  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

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

This operation retrieves all the tokens that can be used by your organization.   You can filter the result by wallet type, subtype, and chain IDs. If you do not specify a wallet type, this operation returns a combination of tokens supported by each wallet type. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'chainIds': "BTC,ETH", // String | A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - &#x60;MPC&#x60;: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - &#x60;SmartContract&#x60;: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - &#x60;Exchange&#x60;: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction)  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **chainIds** | **String**| A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaxTransferableValue

> MaxTransferableValue getMaxTransferableValue(walletId, tokenId, feeRate, toAddress, opts)

Get maximum transferable value

This operation retrieves the maximum amount that you can transfer from a wallet or a specified wallet address, along with the corresponding transaction fee.  You must specify &#x60;to_address&#x60; in your query because it affects the transaction fee. 

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
const tokenId = "ETH_USDT"; // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
const feeRate = "0.001"; // String | The fee rate in sats/vByte or fee_price in gwei.
const toAddress = "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE"; // String | The recipient's address.
const opts = {
  'fromAddress': "2N2xFZtbCFB6Nb3Pj9Sxsx5mX2fxX3yEgkE" // String | The sender's address.
};
apiInstance.getMaxTransferableValue(walletId, tokenId, feeRate, toAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
 **feeRate** | **String**| The fee rate in sats/vByte or fee_price in gwei. | 
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

> GetSpendableList200Response getSpendableList(walletId, tokenId, opts)

List spendable UTXOs

The operation retrieves a list of spendable unspent transaction outputs (UTXOs) for a specified wallet and token.  &lt;Note&gt;This operation is applicable to MPC Wallets only.&lt;/Note&gt; 

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
const tokenId = "ETH_USDT"; // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
const opts = {
  'address': "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" // String | The wallet address.
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
 **walletId** | **String**| The wallet ID. | 
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
 **address** | **String**| The wallet address. | [optional] 

### Return type

[**GetSpendableList200Response**](GetSpendableList200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokenById

> GetTokens200Response getTokenById(tokenId)

Get token information

This operation retrieves the detailed information about a specified token. 

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
const tokenId = "ETH_USDT"; // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
apiInstance.getTokenById(tokenId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokens

> GetTokens200Response getTokens(opts)

List supported tokens

This operation retrieves all tokens supported by a specific wallet type or subtype.   It provides details such as token ID, token symbol, and other relevant information. You can filter the result by token IDs or chain IDs. The token metadata is publicly available without any permission restrictions. 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'chainIds': "BTC,ETH", // String | A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
  'tokenIds': "ETH_USDT,ETH_USDC", // String | A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - &#x60;MPC&#x60;: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - &#x60;SmartContract&#x60;: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - &#x60;Exchange&#x60;: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction)  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **chainIds** | **String**| A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **tokenIds** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**GetTokens200Response**](GetTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletAddressTokenBalances

> GetWalletTokenBalances200Response getWalletAddressTokenBalances(walletId, address, opts)

List token balances by address

The operation retrieves a list of token balances for a specified address within an MPC Wallet.   &lt;Note&gt;This operation is applicable to MPC Wallets only.&lt;/Note&gt; 

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
const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // String | The wallet address.
const opts = {
  'tokenIds': "ETH_USDT,ETH_USDC", // String | A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.getWalletAddressTokenBalances(walletId, address, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **address** | **String**| The wallet address. | 
 **tokenIds** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**GetWalletTokenBalances200Response**](GetWalletTokenBalances200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletById

> WalletInfo getWalletById(walletId)

Get wallet information

This operation retrieves the detailed information about a specified wallet. 

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

The operation retrieves a list of token balances within a specified wallet.  &lt;Note&gt;This operation is applicable to Custodial Wallets and MPC Wallets only.&lt;/Note&gt; 

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
  'tokenIds': "ETH_USDT,ETH_USDC", // String | A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **tokenIds** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**GetWalletTokenBalances200Response**](GetWalletTokenBalances200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddresses

> ListAddresses200Response listAddresses(walletId, opts)

List wallet addresses

This operation retrieves a list of addresses within a specified wallet. 

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
  'tokenId': "ETH_USDT", // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'addresses': "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97", // String | A list of wallet addresses, separated by comma.
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **addresses** | **String**| A list of wallet addresses, separated by comma. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

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

This operation retrieves the information of all wallets under your organization. You can filter the result by wallet type, subtype, and vault ID (for MPC Wallets).  &lt;Note&gt;You must specify either the wallet type or subtype, or both.&lt;/Note&gt; 

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
  'walletType': new CoboWaas2JsApi.WalletType(), // WalletType | The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
  'walletSubtype': new CoboWaas2JsApi.WalletSubtype(), // WalletSubtype | The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
  'projectId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). This parameter is applicable to MPC Wallets only.
  'vaultId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | The MPC vault ID. This parameter is applicable to MPC Wallets only.
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
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
 **walletType** | [**WalletType**](.md)| The wallet type.  - &#x60;Custodial&#x60;: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - &#x60;MPC&#x60;: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - &#x60;SmartContract&#x60;: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - &#x60;Exchange&#x60;: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction)  | [optional] 
 **walletSubtype** | [**WalletSubtype**](.md)| The wallet subtype.  - &#x60;Asset&#x60;: Custodial Wallets (Asset Wallets)  - &#x60;Web3&#x60;: Custodial Wallets (Web3 Wallets)  - &#x60;Main&#x60;: Exchange Wallets (Main Account)  - &#x60;Sub&#x60;: Exchange Wallets (Sub Account)  - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets)  - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets)  - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet})  | [optional] 
 **projectId** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). This parameter is applicable to MPC Wallets only. | [optional] 
 **vaultId** | **String**| The MPC vault ID. This parameter is applicable to MPC Wallets only. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListWallets200Response**](ListWallets200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lockSpendableList

> LockSpendableList200Response lockSpendableList(walletId, opts)

Lock UTXOs

This operation locks the UTXOs with specified transaction hashes. Locked UTXOs cannot be transferred until unlocked.  &lt;Note&gt;This operation is applicable to MPC Wallets only.&lt;/Note&gt; 

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
  'lockSpendableListRequest': new CoboWaas2JsApi.LockSpendableListRequest() // LockSpendableListRequest | The request body of the Lock/Unlock UTXOs operation.
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
 **lockSpendableListRequest** | [**LockSpendableListRequest**](LockSpendableListRequest.md)| The request body of the Lock/Unlock UTXOs operation. | [optional] 

### Return type

[**LockSpendableList200Response**](LockSpendableList200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlockSpendableList

> LockSpendableList200Response unlockSpendableList(walletId, opts)

Unlock UTXOs

This operation unlocks the UTXOs with specified transaction hashes. Locked UTXOs cannot be transferred until unlocked.  &lt;Note&gt;This operation is applicable to MPC Wallets only.&lt;/Note&gt; 

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
  'lockSpendableListRequest': new CoboWaas2JsApi.LockSpendableListRequest() // LockSpendableListRequest | The request body of the Lock/Unlock UTXOs operation.
};
apiInstance.unlockSpendableList(walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| The wallet ID. | 
 **lockSpendableListRequest** | [**LockSpendableListRequest**](LockSpendableListRequest.md)| The request body of the Lock/Unlock UTXOs operation. | [optional] 

### Return type

[**LockSpendableList200Response**](LockSpendableList200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWalletById

> WalletInfo updateWalletById(walletId, opts)

Update wallet

This operation updates the information of a specified wallet.  For Exchange Wallets, you can update the API key, API secret, and other information about your exchange accounts with this operation. For other wallet types, you can only update the wallet name. 

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

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

