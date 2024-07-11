# CoboWaas2JsApi.OAuthApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](OAuthApi.md#getToken) | **GET** /oauth/token | Get Access Token
[**refreshToken**](OAuthApi.md#refreshToken) | **POST** /oauth/token | Refresh Access Token



## getToken

> GetToken200Response getToken(clientId, orgId, grantType)

Get Access Token

If the Org has already authorized the App, the App can retrieve an Access Token through this interface. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.OAuthApi();
const clientId = "pvSwS8iFrfK0oZrB0ugG54XPDOLEv0Ij"; // String | A unique ID identifier to distinguish different apps.
const orgId = "e3986401-4aec-480a-973d-e775a4518413"; // String | A unique ID identifier to distinguish different orgs.
const grantType = "org_implicit"; // String | Identify different types of authorization.
apiInstance.getToken(clientId, orgId, grantType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| A unique ID identifier to distinguish different apps. | 
 **orgId** | **String**| A unique ID identifier to distinguish different orgs. | 
 **grantType** | **String**| Identify different types of authorization. | 

### Return type

[**GetToken200Response**](GetToken200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshToken

> refreshToken(refreshTokenRequest)

Refresh Access Token

Use fefresh token to obtain a new access token. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.OAuthApi();
const refreshTokenRequest = new CoboWaas2JsApi.RefreshTokenRequest(); // RefreshTokenRequest | The request body for refreshing a new access token.
apiInstance.refreshToken(refreshTokenRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshTokenRequest** | [**RefreshTokenRequest**](RefreshTokenRequest.md)| The request body for refreshing a new access token. | 

### Return type

null (empty response body)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

