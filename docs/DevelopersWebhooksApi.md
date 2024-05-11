# CoboWaas2Api.DevelopersWebhooksApi

All URIs are relative to *https://api.cobo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebhookEvent**](DevelopersWebhooksApi.md#getWebhookEvent) | **GET** /webhooks/events/{event_id} | Retrieve webhook event information by event ID.
[**getWebhookEventLogs**](DevelopersWebhooksApi.md#getWebhookEventLogs) | **GET** /webhooks/events/{event_id}/logs | List webhook event logs by event ID.
[**listEvents**](DevelopersWebhooksApi.md#listEvents) | **GET** /webhooks/events | List triggered events.
[**listWebhookEventDefinitions**](DevelopersWebhooksApi.md#listWebhookEventDefinitions) | **GET** /webhooks/events/definitions | List all supported event definitions.
[**retryWebhookEvent**](DevelopersWebhooksApi.md#retryWebhookEvent) | **POST** /webhooks/events/{event_id}/retry | Retry webhook event by event ID.



## getWebhookEvent

> WebhookEvent getWebhookEvent(eventId)

Retrieve webhook event information by event ID.

This operation is used to retrieve a webhook event information by its ID. Get event IDs by calling &#x60;List triggered events&#x60;. 

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.DevelopersWebhooksApi();
let eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the webhook event, get event IDs by calling `List triggered events`.
apiInstance.getWebhookEvent(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| Unique id of the webhook event, get event IDs by calling &#x60;List triggered events&#x60;. | 

### Return type

[**WebhookEvent**](WebhookEvent.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookEventLogs

> [WebhookEventLog] getWebhookEventLogs(eventId)

List webhook event logs by event ID.

This operation is used to retrieve a list of webhook event logs by event ID. Get event IDs by calling &#x60;List triggered events&#x60;. 

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.DevelopersWebhooksApi();
let eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the webhook event, get event IDs by calling `List triggered events`.
apiInstance.getWebhookEventLogs(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| Unique id of the webhook event, get event IDs by calling &#x60;List triggered events&#x60;. | 

### Return type

[**[WebhookEventLog]**](WebhookEventLog.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEvents

> ListEvents200Response listEvents(opts)

List triggered events.

This operation retrieves a list of events that have been triggered within the system.  The retrieved list of events can be useful for monitoring system activities, setting up event-driven workflows, and integrating with external systems to respond to specific events. 

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.DevelopersWebhooksApi();
let opts = {
  'status': new CoboWaas2Api.WebhookEventStatus(), // WebhookEventStatus | The status of event.
  'type': new CoboWaas2Api.WebhookEventType(), // WebhookEventType | The type of event. Get event types by calling `List all supported event definitions`. 
  'limit': 10, // Number | size of page to return (pagination)
  'before': "123", // String | Cursor string received from previous request
  'after': "123" // String | Cursor string received from previous request
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
 **status** | [**WebhookEventStatus**](.md)| The status of event. | [optional] 
 **type** | [**WebhookEventType**](.md)| The type of event. Get event types by calling &#x60;List all supported event definitions&#x60;.  | [optional] 
 **limit** | **Number**| size of page to return (pagination) | [optional] [default to 10]
 **before** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]
 **after** | **String**| Cursor string received from previous request | [optional] [default to &#39;&#39;]

### Return type

[**ListEvents200Response**](ListEvents200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhookEventDefinitions

> [ListWebhookEventDefinitions200ResponseInner] listWebhookEventDefinitions()

List all supported event definitions.

This operation is used to retrieve a list of all supported event definitions in the current system.  These event definitions include different event types that trigger webhooks, enabling custom notifications and integration features within the system. A successful call to this endpoint will return a detailed list of event definitions. 

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.DevelopersWebhooksApi();
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

> RetryWebhookEvent201Response retryWebhookEvent(eventId)

Retry webhook event by event ID.

This operation is used to retry a webhook event by its ID. Events in &#x60;Retrying&#x60; or &#x60;Failed&#x60; status can be retried. Get event IDs by calling &#x60;List triggered events&#x60;. 

### Example

```javascript
import CoboWaas2Api from 'cobo-waas2-api';
let defaultClient = CoboWaas2Api.ApiClient.instance;
// Configure API key authorization: CoboAuth
let CoboAuth = defaultClient.authentications['CoboAuth'];
CoboAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CoboAuth.apiKeyPrefix = 'Token';

let apiInstance = new CoboWaas2Api.DevelopersWebhooksApi();
let eventId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the webhook event, get event IDs by calling `List triggered events`.
apiInstance.retryWebhookEvent(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**| Unique id of the webhook event, get event IDs by calling &#x60;List triggered events&#x60;. | 

### Return type

[**RetryWebhookEvent201Response**](RetryWebhookEvent201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

