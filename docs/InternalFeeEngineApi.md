# CoboWaas2.InternalFeeEngineApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCommissionFee**](InternalFeeEngineApi.md#getCommissionFee) | **GET** /internal/commission_fee | Get commission fee



## getCommissionFee

> [CommissionFeeDetail] getCommissionFee(request_id, opts)

Get commission fee

This operation retrieves commission fee. 

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
const apiInstance = new CoboWaas2.InternalFeeEngineApi();
const request_id = "request_id_example";
const opts = {
  'business_type_id': 789,
  'amount': 789,
  'chain_id': "chain_id_example",
  'token_id': "token_id_example",
  'wallet_id': "wallet_id_example",
  'wallet_type': 56,
  'request_type': new CoboWaas2.TransactionRequestTypeParams(),
  'strategy_context': {key: null}
};
apiInstance.getCommissionFee(request_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **String**| Unique request identifier | 
 **business_type_id** | **Number**|  | [optional] 
 **amount** | **Number**| Transaction amount in smallest unit | [optional] 
 **chain_id** | **String**| Blockchain chain ID | [optional] 
 **token_id** | **String**| Token ID | [optional] 
 **wallet_id** | **String**| Wallet ID | [optional] 
 **wallet_type** | **Number**| Wallet type | [optional] 
 **request_type** | [**TransactionRequestTypeParams**](.md)|  | [optional] 
 **strategy_context** | [**{String: Object}**](Object.md)| Strategy context parameters.  | [optional] 

### Return type

[**[CommissionFeeDetail]**](CommissionFeeDetail.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

