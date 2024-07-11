# CoboWaas2JsApi.DevelopersWebhooksApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookEndpoint**](DevelopersWebhooksApi.md#createWebhookEndpoint) | **POST** /webhooks/endpoints | Register webhook endpoint
[**getWebhookEndpointById**](DevelopersWebhooksApi.md#getWebhookEndpointById) | **GET** /webhooks/endpoints/{endpoint_id} | Get webhook endpoint information
[**getWebhookEvent**](DevelopersWebhooksApi.md#getWebhookEvent) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id} | Retrieve event information
[**getWebhookEventLogs**](DevelopersWebhooksApi.md#getWebhookEventLogs) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id}/logs | List event logs
[**listEvents**](DevelopersWebhooksApi.md#listEvents) | **GET** /webhooks/endpoints/{endpoint_id}/events | List all events
[**listWebhookEndpoints**](DevelopersWebhooksApi.md#listWebhookEndpoints) | **GET** /webhooks/endpoints | List webhook endpoints
[**listWebhookEventDefinitions**](DevelopersWebhooksApi.md#listWebhookEventDefinitions) | **GET** /webhooks/events/definitions | Get webhook event types
[**retryWebhookEvent**](DevelopersWebhooksApi.md#retryWebhookEvent) | **POST** /webhooks/endpoints/{endpoint_id}/events/{event_id}/retry | Retry event
[**updateWebhookEndpoint**](DevelopersWebhooksApi.md#updateWebhookEndpoint) | **PUT** /webhooks/endpoints/{endpoint_id} | Update webhook endpoint



## createWebhookEndpoint

> Endpoint createWebhookEndpoint(opts)

Register webhook endpoint

This operation registers a new webhook endpoint for your organization.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const opts = {
  'createWebhookEndpointRequest': new CoboWaas2JsApi.CreateWebhookEndpointRequest() // CreateWebhookEndpointRequest | The request body to register a webhook endpoint.
};
apiInstance.createWebhookEndpoint(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhookEndpointRequest** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md)| The request body to register a webhook endpoint. | [optional] 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWebhookEndpointById

> Endpoint getWebhookEndpointById(endpointId)

Get webhook endpoint information

This operation retrieves the information of a specified webhook endpoint.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const endpointId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.getWebhookEndpointById(endpointId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookEvent

> WebhookEvent getWebhookEvent(eventId, endpointId)

Retrieve event information

This operation retrieves the information of a webhook event by the event ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
const endpointId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.getWebhookEvent(eventId, endpointId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events). | 
 **endpointId** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**WebhookEvent**](WebhookEvent.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookEventLogs

> [WebhookEventLog] getWebhookEventLogs(eventId, endpointId)

List event logs

This operation retrieves a list of webhook event logs by event ID. Each retry will generate a separate event log. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
const endpointId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.getWebhookEventLogs(eventId, endpointId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events). | 
 **endpointId** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**[WebhookEventLog]**](WebhookEventLog.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEvents

> ListEvents200Response listEvents(endpointId, opts)

List all events

This operation retrieves a list of webhook events that have occurred within the last 30 days.  Note: The request will only return webhook events that have occurred to the wallets associated with your current API key. For example, if the current API key is only associated with Custodial Wallets, any webhook events that have occurred to an MPC Wallet will not be retrieved with the current API key. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const endpointId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
const opts = {
  'status': new CoboWaas2JsApi.WebhookEventStatus(), // WebhookEventStatus | 
  'type': new CoboWaas2JsApi.WebhookEventType(), // WebhookEventType | 
  'limit': 10, // Number | The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
};
apiInstance.listEvents(endpointId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 
 **status** | [**WebhookEventStatus**](.md)|  | [optional] 
 **type** | [**WebhookEventType**](.md)|  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  If the &#x60;before&#x60; and &#x60;after&#x60; are both set to empty, the first slice is returned. If the &#x60;before&#x60; is set to &#x60;infinity&#x60;, the last slice is returned.  | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  | [optional] 

### Return type

[**ListEvents200Response**](ListEvents200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEndpoints

> ListWebhookEndpoints200Response listWebhookEndpoints(opts)

List webhook endpoints

This operation retrieves the information of all webhook endpoints registered under your organization. You can filter the result by endpoint status and the subscribed event type.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const opts = {
  'status': new CoboWaas2JsApi.EndpointStatus(), // EndpointStatus | 
  'eventType': new CoboWaas2JsApi.WebhookEventType(), // WebhookEventType | 
  'limit': 10, // Number | The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified.
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect.  If the `before` and `after` are both set to empty, the first slice is returned. If the `before` is set to `infinity`, the last slice is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the specified ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  If you set both `after` or `before`, only the setting of `before` will take effect. 
};
apiInstance.listWebhookEndpoints(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**EndpointStatus**](.md)|  | [optional] 
 **eventType** | [**WebhookEventType**](.md)|  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The default value range is [1, 50] and can be set endpoint specified. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  If the &#x60;before&#x60; and &#x60;after&#x60; are both set to empty, the first slice is returned. If the &#x60;before&#x60; is set to &#x60;infinity&#x60;, the last slice is returned.  | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the specified ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect.  | [optional] 

### Return type

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEventDefinitions

> [ListWebhookEventDefinitions200ResponseInner] listWebhookEventDefinitions()

Get webhook event types

This operation retrieves all supported webhook event types.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
apiInstance.listWebhookEventDefinitions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ListWebhookEventDefinitions200ResponseInner]**](ListWebhookEventDefinitions200ResponseInner.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryWebhookEvent

> RetryWebhookEvent201Response retryWebhookEvent(eventId, endpointId)

Retry event

This operation retries delivering a webhook event with the specified event ID. You can only retry delivering a webhook event in the &#x60;Retrying&#x60; or &#x60;Failed&#x60; status. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
const endpointId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
apiInstance.retryWebhookEvent(eventId, endpointId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events). | 
 **endpointId** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 

### Return type

[**RetryWebhookEvent201Response**](RetryWebhookEvent201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhookEndpoint

> Endpoint updateWebhookEndpoint(endpointId, opts)

Update webhook endpoint

This operation updates the information of a specified webhook endpoint.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.DevelopersWebhooksApi();
const endpointId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
const opts = {
  'updateWebhookEndpointRequest': new CoboWaas2JsApi.UpdateWebhookEndpointRequest() // UpdateWebhookEndpointRequest | The request body to update a webhook endpoint.
};
apiInstance.updateWebhookEndpoint(endpointId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **String**| The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints). | 
 **updateWebhookEndpointRequest** | [**UpdateWebhookEndpointRequest**](UpdateWebhookEndpointRequest.md)| The request body to update a webhook endpoint. | [optional] 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

