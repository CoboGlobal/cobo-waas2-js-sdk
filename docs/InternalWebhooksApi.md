# CoboWaas2.InternalWebhooksApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookEvent**](InternalWebhooksApi.md#createWebhookEvent) | **POST** /internal/webhook_event | Create webhook event



## createWebhookEvent

> CreateWebhookEventInfo createWebhookEvent(opts)

Create webhook event

This operation creates a webhook event. 

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
const apiInstance = new CoboWaas2.InternalWebhooksApi();
const opts = {
  'CreateWebhookEventParams': new CoboWaas2.CreateWebhookEventParams()
};
apiInstance.createWebhookEvent(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateWebhookEventParams** | [**CreateWebhookEventParams**](CreateWebhookEventParams.md)| The request body to create a webhook event | [optional] 

### Return type

[**CreateWebhookEventInfo**](CreateWebhookEventInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

