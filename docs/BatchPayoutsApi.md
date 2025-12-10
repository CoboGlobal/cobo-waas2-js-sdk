# CoboWaas2.BatchPayoutsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelBatchPayout**](BatchPayoutsApi.md#cancelBatchPayout) | **POST** /batch_payouts/payouts/{payout_id}/cancel | Cancel batch payout
[**createBatchPayout**](BatchPayoutsApi.md#createBatchPayout) | **POST** /batch_payouts/payouts | Create batch payout
[**dropBatchPayout**](BatchPayoutsApi.md#dropBatchPayout) | **POST** /batch_payouts/payouts/{payout_id}/drop | Drop batch payout
[**estimateBatchPayoutFee**](BatchPayoutsApi.md#estimateBatchPayoutFee) | **POST** /batch_payouts/estimate_fee | Estimate batch payout fee
[**getBatchPayout**](BatchPayoutsApi.md#getBatchPayout) | **GET** /batch_payouts/payouts/{payout_id} | Get batch payout
[**listBatchPayouts**](BatchPayoutsApi.md#listBatchPayouts) | **GET** /batch_payouts/payouts | List batch payouts
[**revokeBatchPayout**](BatchPayoutsApi.md#revokeBatchPayout) | **POST** /batch_payouts/payouts/{payout_id}/revoke | Revoke batch payout
[**speedUpBatchPayout**](BatchPayoutsApi.md#speedUpBatchPayout) | **POST** /batch_payouts/payouts/{payout_id}/speedup | Speed up batch payout



## cancelBatchPayout

> PayoutDetail cancelBatchPayout(payout_id, opts)

Cancel batch payout

This operation cancels a batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const payout_id = "e3986401-4aec-480a-973d-e775a4518413";
const opts = {
  'CancelPayoutBody': new CoboWaas2.CancelPayoutBody()
};
apiInstance.cancelBatchPayout(payout_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **String**| The payout ID. | 
 **CancelPayoutBody** | [**CancelPayoutBody**](CancelPayoutBody.md)| The request body to cancel a batch payout. | [optional] 

### Return type

[**PayoutDetail**](PayoutDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBatchPayout

> CreateBatchPayout201Response createBatchPayout(opts)

Create batch payout

This operation creates a batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const opts = {
  'CreateBatchPayoutRequest': new CoboWaas2.CreateBatchPayoutRequest()
};
apiInstance.createBatchPayout(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateBatchPayoutRequest** | [**CreateBatchPayoutRequest**](CreateBatchPayoutRequest.md)| The request body to create a batch payout. | [optional] 

### Return type

[**CreateBatchPayout201Response**](CreateBatchPayout201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dropBatchPayout

> PayoutDetail dropBatchPayout(payout_id, opts)

Drop batch payout

This operation drops a batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const payout_id = "e3986401-4aec-480a-973d-e775a4518413";
const opts = {
  'PayoutRbfBody': new CoboWaas2.PayoutRbfBody()
};
apiInstance.dropBatchPayout(payout_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **String**| The payout ID. | 
 **PayoutRbfBody** | [**PayoutRbfBody**](PayoutRbfBody.md)| The request body to speed up or drop a batch payout. | [optional] 

### Return type

[**PayoutDetail**](PayoutDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## estimateBatchPayoutFee

> [PayoutEstimatedFee] estimateBatchPayoutFee(opts)

Estimate batch payout fee

This operation estimates the fee of a batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const opts = {
  'EstimateBatchPayoutFeeRequest': new CoboWaas2.EstimateBatchPayoutFeeRequest()
};
apiInstance.estimateBatchPayoutFee(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EstimateBatchPayoutFeeRequest** | [**EstimateBatchPayoutFeeRequest**](EstimateBatchPayoutFeeRequest.md)| The request body to estimate the fee of a batch payout. | [optional] 

### Return type

[**[PayoutEstimatedFee]**](PayoutEstimatedFee.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBatchPayout

> PayoutDetail getBatchPayout(payout_id)

Get batch payout

This operation retrieves details of a specific batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const payout_id = "e3986401-4aec-480a-973d-e775a4518413";
apiInstance.getBatchPayout(payout_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **String**| The payout ID. | 

### Return type

[**PayoutDetail**](PayoutDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBatchPayouts

> ListBatchPayouts200Response listBatchPayouts(opts)

List batch payouts

This operation retrieves the information of all batch payouts. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listBatchPayouts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set &#x60;before&#x60; to the ID of Object C (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object A.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned. - If you set it to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set &#x60;after&#x60; to the ID of Object A (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object C.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListBatchPayouts200Response**](ListBatchPayouts200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeBatchPayout

> PayoutDetail revokeBatchPayout(payout_id)

Revoke batch payout

This operation revokes a batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const payout_id = "e3986401-4aec-480a-973d-e775a4518413";
apiInstance.revokeBatchPayout(payout_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **String**| The payout ID. | 

### Return type

[**PayoutDetail**](PayoutDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## speedUpBatchPayout

> PayoutDetail speedUpBatchPayout(payout_id, opts)

Speed up batch payout

This operation speeds up a batch payout. 

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
const apiInstance = new CoboWaas2.BatchPayoutsApi();
const payout_id = "e3986401-4aec-480a-973d-e775a4518413";
const opts = {
  'PayoutRbfBody': new CoboWaas2.PayoutRbfBody()
};
apiInstance.speedUpBatchPayout(payout_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **String**| The payout ID. | 
 **PayoutRbfBody** | [**PayoutRbfBody**](PayoutRbfBody.md)| The request body to speed up or drop a batch payout. | [optional] 

### Return type

[**PayoutDetail**](PayoutDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

