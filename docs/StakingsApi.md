# CoboWaas2JsApi.StakingsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStakeActivity**](StakingsApi.md#createStakeActivity) | **POST** /stakings/activities/stake | Create staking activity
[**createUnstakeActivity**](StakingsApi.md#createUnstakeActivity) | **POST** /stakings/activities/unstake | Create unstake activity
[**createWithdrawActivity**](StakingsApi.md#createWithdrawActivity) | **POST** /stakings/activities/withdraw | Create withdraw activity
[**getActivityById**](StakingsApi.md#getActivityById) | **GET** /stakings/activities/{activity_id} | Get activity details
[**getStakingById**](StakingsApi.md#getStakingById) | **GET** /stakings/{staking_id} | Get staking by id
[**getStakingEstimationFee**](StakingsApi.md#getStakingEstimationFee) | **POST** /stakings/estimate_fee | Estimate staking transaction fee
[**getStakingPoolById**](StakingsApi.md#getStakingPoolById) | **GET** /stakings/pools/{pool_id} | Get staking pool details
[**listActivities**](StakingsApi.md#listActivities) | **GET** /stakings/activities | List activities
[**listStakingPools**](StakingsApi.md#listStakingPools) | **GET** /stakings/pools | List staking pools
[**listStakings**](StakingsApi.md#listStakings) | **GET** /stakings | List all stakings



## createStakeActivity

> CreateStakeActivity201Response createStakeActivity(opts)

Create staking activity

This operation creates a stake activity. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'createStakeActivityRequest': new CoboWaas2JsApi.CreateStakeActivityRequest() // CreateStakeActivityRequest | The request body to create a staking activity.
};
apiInstance.createStakeActivity(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStakeActivityRequest** | [**CreateStakeActivityRequest**](CreateStakeActivityRequest.md)| The request body to create a staking activity. | [optional] 

### Return type

[**CreateStakeActivity201Response**](CreateStakeActivity201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUnstakeActivity

> CreateStakeActivity201Response createUnstakeActivity(opts)

Create unstake activity

This operation creates a unstake activity. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'createUnstakeActivityRequest': new CoboWaas2JsApi.CreateUnstakeActivityRequest() // CreateUnstakeActivityRequest | The request body to create a unstake activity.
};
apiInstance.createUnstakeActivity(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUnstakeActivityRequest** | [**CreateUnstakeActivityRequest**](CreateUnstakeActivityRequest.md)| The request body to create a unstake activity. | [optional] 

### Return type

[**CreateStakeActivity201Response**](CreateStakeActivity201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWithdrawActivity

> CreateStakeActivity201Response createWithdrawActivity(opts)

Create withdraw activity

This operation creates a withdraw activity. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'createWithdrawActivityRequest': new CoboWaas2JsApi.CreateWithdrawActivityRequest() // CreateWithdrawActivityRequest | The request body to create a withdraw activity.
};
apiInstance.createWithdrawActivity(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWithdrawActivityRequest** | [**CreateWithdrawActivityRequest**](CreateWithdrawActivityRequest.md)| The request body to create a withdraw activity. | [optional] 

### Return type

[**CreateStakeActivity201Response**](CreateStakeActivity201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getActivityById

> Activity getActivityById(activityId)

Get activity details

This operation retrieves a staking activity details. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const activityId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | activity id
apiInstance.getActivityById(activityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **String**| activity id | 

### Return type

[**Activity**](Activity.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStakingById

> ListStakings200Response getStakingById(stakingId)

Get staking by id

This operation retrieves a staking by id. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const stakingId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | staking id
apiInstance.getStakingById(stakingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stakingId** | **String**| staking id | 

### Return type

[**ListStakings200Response**](ListStakings200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStakingEstimationFee

> GetStakingEstimationFee201Response getStakingEstimationFee(opts)

Estimate staking transaction fee

This endpoint calculates the fee required for a transaction based on factors such as network congestion and transaction complexity. Users can provide transaction details in the request body, and the response will contain the estimated fee. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'getStakingEstimationFeeRequest': new CoboWaas2JsApi.GetStakingEstimationFeeRequest() // GetStakingEstimationFeeRequest | The request body to create a get estimate fee of a staking activity.
};
apiInstance.getStakingEstimationFee(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getStakingEstimationFeeRequest** | [**GetStakingEstimationFeeRequest**](GetStakingEstimationFeeRequest.md)| The request body to create a get estimate fee of a staking activity. | [optional] 

### Return type

[**GetStakingEstimationFee201Response**](GetStakingEstimationFee201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getStakingPoolById

> PoolDetails getStakingPoolById(poolId)

Get staking pool details

This operation retrieves a list of staking pools currently supported. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const poolId = "babylon_btc"; // String | staking pool id
apiInstance.getStakingPoolById(poolId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**| staking pool id | 

### Return type

[**PoolDetails**](PoolDetails.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listActivities

> ListActivities200Response listActivities(opts)

List activities

This operation retrieves a list staking activities. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'poolId': "babylon_btc", // String | staking pool id
  'stakingId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | staking id
  'activityType': new CoboWaas2JsApi.ActivityType(), // ActivityType | activity type
  'activityStatus': new CoboWaas2JsApi.ActivityStatus(), // ActivityStatus | activity status
  'minModifiedTimestamp': 1635744000000, // Number | The minimum modified timestamp in Unix epoch seconds
  'maxModifiedTimestamp': 1635744000000, // Number | The maximum modified timestamp in Unix epoch seconds
  'initiator': "vanya@cobo.com", // String | activity initiator, maybe email or api key.
  'limit': 10, // Number | The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
};
apiInstance.listActivities(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**| staking pool id | [optional] 
 **stakingId** | **String**| staking id | [optional] 
 **activityType** | [**ActivityType**](.md)| activity type | [optional] 
 **activityStatus** | [**ActivityStatus**](.md)| activity status | [optional] 
 **minModifiedTimestamp** | **Number**| The minimum modified timestamp in Unix epoch seconds | [optional] 
 **maxModifiedTimestamp** | **Number**| The maximum modified timestamp in Unix epoch seconds | [optional] 
 **initiator** | **String**| activity initiator, maybe email or api key. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  If the &#x60;before&#x60; and &#x60;after&#x60; are both set to empty, the first slice is returned. If the &#x60;before&#x60; is set to &#x60;infinity&#x60;, the last slice is returned.  | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  | [optional] 

### Return type

[**ListActivities200Response**](ListActivities200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStakingPools

> ListStakingPools200Response listStakingPools(opts)

List staking pools

This operation retrieves a list of staking pools currently supported. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'chainId': "ETH", // String | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List organization enabled chains](/v2/api-references/wallets/list-organization-enabled-chains).
  'tokenId': "ETH_USDT", // String | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens).
  'limit': 10, // Number | The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
};
apiInstance.listStakingPools(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List organization enabled chains](/v2/api-references/wallets/list-organization-enabled-chains). | [optional] 
 **tokenId** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  If the &#x60;before&#x60; and &#x60;after&#x60; are both set to empty, the first slice is returned. If the &#x60;before&#x60; is set to &#x60;infinity&#x60;, the last slice is returned.  | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  | [optional] 

### Return type

[**ListStakingPools200Response**](ListStakingPools200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStakings

> ListStakings200Response listStakings(opts)

List all stakings

This operation retrieves a list of current stakings. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.StakingsApi();
const opts = {
  'poolId': "babylon_btc", // String | staking pool id
  'limit': 10, // Number | The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
};
apiInstance.listStakings(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**| staking pool id | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  If the &#x60;before&#x60; and &#x60;after&#x60; are both set to empty, the first slice is returned. If the &#x60;before&#x60; is set to &#x60;infinity&#x60;, the last slice is returned.  | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  | [optional] 

### Return type

[**ListStakings200Response**](ListStakings200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

