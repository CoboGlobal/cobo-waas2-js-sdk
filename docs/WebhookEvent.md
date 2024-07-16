# CoboWaas2JsApi.WebhookEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **String** | The event ID. | [optional] 
**url** | **String** | The webhook endpoint URL. | 
**createdTimestamp** | **Number** | The time when the event occurred, in Unix timestamp format, measured in milliseconds. | 
**type** | [**WebhookEventType**](WebhookEventType.md) |  | 
**data** | [**Transaction**](Transaction.md) |  | 
**status** | [**WebhookEventStatus**](WebhookEventStatus.md) |  | [optional] 
**nextRetryTimestamp** | **Number** | The timestamp indicating the next scheduled retry to deliver this event, in Unix timestamp format, measured in milliseconds. This field is only present if the event status is &#x60;Retrying&#x60;.  | [optional] 
**retriesLeft** | **Number** | The number of retries left. This field is only present if the event status is &#x60;Retrying&#x60;. | [optional] 


