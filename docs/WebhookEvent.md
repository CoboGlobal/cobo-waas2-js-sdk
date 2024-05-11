# CoboWaas2Api.WebhookEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the event. | 
**url** | **String** | The URL of the webhook endpoint. | 
**createdTimestamp** | **Number** | The timestamp at which the object was created, represented as an integer value, typically in milliseconds since the epoch. | 
**type** | [**WebhookEventType**](WebhookEventType.md) |  | 
**data** | **Object** | The data of the webhook event in json format. | 
**status** | [**WebhookEventStatus**](WebhookEventStatus.md) |  | 
**nextRetryTimestamp** | **Number** | The timestamp indicating the next scheduled retry for this event. This field is only present when the event status is set to &#x60;Retrying&#x60;. The timestamp is represented as an integer value, typically in milliseconds since the epoch.  | [optional] 
**retriesLeft** | **Number** | The number of retries left. This field is only present when the event status is &#x60;Retrying&#x60;. | [optional] 


