# CoboWaas2JsApi.WebhookEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The event ID. | 
**url** | **String** | The URL of the webhook endpoint. | 
**createdTimestamp** | **Number** | The time when the event occurred, in Unix timestamp format, measured in milliseconds. | 
**type** | [**WebhookEventType**](WebhookEventType.md) |  | 
**data** | **Object** | The data of the webhook event, in JSON format. | 
**status** | [**WebhookEventStatus**](WebhookEventStatus.md) |  | 
**nextRetryTimestamp** | **Number** | The timestamp indicating the next scheduled retry to deliver this event, in Unix timestamp format, measured in milliseconds. This field is only present if the event status is &#x60;Retrying&#x60;.  | [optional] 
**retriesLeft** | **Number** | The number of retries left. This field is only present if the event status is &#x60;Retrying&#x60;. | [optional] 


