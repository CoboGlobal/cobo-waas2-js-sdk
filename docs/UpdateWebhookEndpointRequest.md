# CoboWaas2JsApi.UpdateWebhookEndpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscribedEvents** | [**[WebhookEventType]**](WebhookEventType.md) | The new event types you want to subscribe to for this webhook endpoint. You can call [Get webhook event types](/v2/api-references/developers--webhooks/get-webhook-event-types) to retrieve all available event types. | [optional] 
**status** | **String** | The new status you want to set the webhook endpoint to. If you set &#x60;status&#x60; to &#x60;STATUS_INACTIVE&#x60;, the endpoint will be revoked, meaning it will no longer receive any webhook events. | [optional] 
**description** | **String** | The webhook endpoint description. | [optional] 



## Enum: StatusEnum


* `STATUS_INACTIVE` (value: `"STATUS_INACTIVE"`)




