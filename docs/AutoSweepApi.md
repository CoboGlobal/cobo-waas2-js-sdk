# CoboWaas2.AutoSweepApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAutoSweepTask**](AutoSweepApi.md#createAutoSweepTask) | **POST** /auto_sweep/tasks | create auto sweep task
[**createWalletSweepToAddresses**](AutoSweepApi.md#createWalletSweepToAddresses) | **POST** /auto_sweep/sweep_to_addresses | create wallet sweep to addresses
[**getAutoSweepTaskById**](AutoSweepApi.md#getAutoSweepTaskById) | **GET** /auto_sweep/tasks/{task_id} | Get auto sweep task information
[**listAutoSweepTask**](AutoSweepApi.md#listAutoSweepTask) | **GET** /auto_sweep/tasks | List wallet auto sweep task
[**listWalletSweepToAddresses**](AutoSweepApi.md#listWalletSweepToAddresses) | **GET** /auto_sweep/sweep_to_addresses | List wallet sweep to addresses



## createAutoSweepTask

> AutoSweepTask createAutoSweepTask(opts)

create auto sweep task

This operation create a new auto sweep task. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.AutoSweepApi();
const opts = {
  'CreateAutoSweepTask': new CoboWaas2.CreateAutoSweepTask()
};
apiInstance.createAutoSweepTask(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateAutoSweepTask** | [**CreateAutoSweepTask**](CreateAutoSweepTask.md)| The request body to generates a new sweep to addresses within a specified wallet. | [optional] 

### Return type

[**AutoSweepTask**](AutoSweepTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWalletSweepToAddresses

> SweepToAddress createWalletSweepToAddresses(opts)

create wallet sweep to addresses

This operation create a new sweep to address for the wallet. The old sweep to address will become invalid. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.AutoSweepApi();
const opts = {
  'CreateSweepToAddress': new CoboWaas2.CreateSweepToAddress()
};
apiInstance.createWalletSweepToAddresses(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateSweepToAddress** | [**CreateSweepToAddress**](CreateSweepToAddress.md)| The request body to generates a new sweep to addresses within a specified wallet. | [optional] 

### Return type

[**SweepToAddress**](SweepToAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAutoSweepTaskById

> AutoSweepTask getAutoSweepTaskById(task_id)

Get auto sweep task information

This operation retrieves detailed information about a specified auto sweep task. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.AutoSweepApi();
const task_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.getAutoSweepTaskById(task_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **String**| The auto sweep task ID. | 

### Return type

[**AutoSweepTask**](AutoSweepTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAutoSweepTask

> ListAutoSweepTask200Response listAutoSweepTask(wallet_id, opts)

List wallet auto sweep task

This operation retrieves a list of auto sweep task. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.AutoSweepApi();
const wallet_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'token_id': "ETH_USDT",
  'task_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,1ddca562-8434-41c9-8809-d437bad9c868",
  'min_created_timestamp': 1635744000000,
  'max_created_timestamp': 1635744000000,
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'direction': "ASC"
};
apiInstance.listAutoSweepTask(wallet_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet_id** | **String**| The wallet ID. | 
 **token_id** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **task_ids** | **String**| A list of auto sweep task IDs, separated by comma. | [optional] 
 **min_created_timestamp** | **Number**| The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time. | [optional] 
 **max_created_timestamp** | **Number**| The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set &#x60;before&#x60; to the ID of Object C (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object A.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned. - If you set it to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set &#x60;after&#x60; to the ID of Object A (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object C.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 
 **direction** | **String**| The sort direction. Possible values include:   - &#x60;ASC&#x60;: Sort the results in ascending order.   - &#x60;DESC&#x60;: Sort the results in descending order.  | [optional] [default to &#39;ASC&#39;]

### Return type

[**ListAutoSweepTask200Response**](ListAutoSweepTask200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWalletSweepToAddresses

> ListWalletSweepToAddresses200Response listWalletSweepToAddresses(wallet_id)

List wallet sweep to addresses

This operation retrieves a list of sweep to addresses within your wallet. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.AutoSweepApi();
const wallet_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.listWalletSweepToAddresses(wallet_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet_id** | **String**| The wallet ID. | 

### Return type

[**ListWalletSweepToAddresses200Response**](ListWalletSweepToAddresses200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

