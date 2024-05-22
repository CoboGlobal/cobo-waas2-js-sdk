# CoboWaas2JsApi.DevelopersWebhooksApi

All URIs are relative to *https://api.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebhookEvent**](DevelopersWebhooksApi.md#getWebhookEvent) | **GET** /webhooks/events/{event_id} | Retrieve event by ID
[**getWebhookEventLogs**](DevelopersWebhooksApi.md#getWebhookEventLogs) | **GET** /webhooks/events/{event_id}/logs | List event logs by ID
[**listEvents**](DevelopersWebhooksApi.md#listEvents) | **GET** /webhooks/events | List all events
[**retryWebhookEvent**](DevelopersWebhooksApi.md#retryWebhookEvent) | **POST** /webhooks/events/{event_id}/retry | Retry event by ID



## getWebhookEvent

> WebhookEvent getWebhookEvent(eventId)

Retrieve event by ID

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
const eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/api-references/v2/developers--webhooks/list-all-events).
apiInstance.getWebhookEvent(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/api-references/v2/developers--webhooks/list-all-events). | 

### Return type

[**WebhookEvent**](WebhookEvent.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookEventLogs

> [WebhookEventLog] getWebhookEventLogs(eventId)

List event logs by ID

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
const eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/api-references/v2/developers--webhooks/list-all-events).
apiInstance.getWebhookEventLogs(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/api-references/v2/developers--webhooks/list-all-events). | 

### Return type

[**[WebhookEventLog]**](WebhookEventLog.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEvents

> ListEvents200Response listEvents(opts)

List all events

This operation retrieves a list of webhook events that have occurred within the last 30 days.  Note: The request will only return webhook events that have occurred to the wallets associated with your current API key. For example, if the current API key is only associated with Asset Wallets, any webhook events that have occurred to an MPC Wallet will not be retrieved with the current API key. 

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
  'status': new CoboWaas2JsApi.WebhookEventStatus(), // WebhookEventStatus | The event status. Possible values include: - `Success`: The event has been delivered, and the webhook endpoint has responded to the event. - `Retrying`: The event has been delivered, but the webhook endpoint has not responded. In this case, Cobo will retry delivering the event. - `Failed`: The event cannot be delivered and Cobo will stop retrying. This may occur if the number of retries reaches 10, or if the event has been delivered but the webhook endpoint responded with an error. 
  'type': new CoboWaas2JsApi.WebhookEventType(), // WebhookEventType | The event type. 
  'limit': 10, // Number | The maximum number of objects to return. The value range is [1, 50].
  'before': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f", // String | An object ID which serves as a cursor for pagination. For example, if you specify `before` as `foo`, the request will retrieve a list of data objects that end before the object with the object ID `foo`. You can set this parameter to the value of `pagination.after` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
  'after': "8f2e919a-6a7b-4a9b-8c1a-4c0b3f5b8b1f" // String | An object ID which serves as a cursor for pagination. For example, if you specify `after` as `bar`, the request will retrieve a list of data objects that start after the object with the object ID `bar`. You can set this parameter to the value of `pagination.before` in the response of the previous request. If you set both `after` or `before`, only the setting of `before` will take effect.
};
apiInstance.listEvents(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**WebhookEventStatus**](.md)| The event status. Possible values include: - &#x60;Success&#x60;: The event has been delivered, and the webhook endpoint has responded to the event. - &#x60;Retrying&#x60;: The event has been delivered, but the webhook endpoint has not responded. In this case, Cobo will retry delivering the event. - &#x60;Failed&#x60;: The event cannot be delivered and Cobo will stop retrying. This may occur if the number of retries reaches 10, or if the event has been delivered but the webhook endpoint responded with an error.  | [optional] 
 **type** | [**WebhookEventType**](.md)| The event type.  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. The value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;before&#x60; as &#x60;foo&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;foo&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 
 **after** | **String**| An object ID which serves as a cursor for pagination. For example, if you specify &#x60;after&#x60; as &#x60;bar&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;bar&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request. If you set both &#x60;after&#x60; or &#x60;before&#x60;, only the setting of &#x60;before&#x60; will take effect. | [optional] 

### Return type

[**ListEvents200Response**](ListEvents200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryWebhookEvent

> RetryWebhookEvent201Response retryWebhookEvent(eventId)

Retry event by ID

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
const eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The event ID. You can obtain a list of event IDs by calling [List all events](/api-references/v2/developers--webhooks/list-all-events).
apiInstance.retryWebhookEvent(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| The event ID. You can obtain a list of event IDs by calling [List all events](/api-references/v2/developers--webhooks/list-all-events). | 

### Return type

[**RetryWebhookEvent201Response**](RetryWebhookEvent201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

