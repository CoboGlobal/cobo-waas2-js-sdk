# CoboWaas2Api.WebhookEventLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the log. | 
**createdTimestamp** | **Number** | The timestamp at which the object was created, represented as an integer value, typically in milliseconds since the epoch. | 
**requestHeaders** | **Object** | The request headers of the webhook event. | 
**requestBody** | [**WebhookEvent**](WebhookEvent.md) |  | 
**responseBody** | **Object** | The response body of the webhook event. | [optional] 
**responseStatusCode** | **Number** | The response status code of the webhook event. | [optional] 
**responseTime** | **Number** | The response time of the webhook event in milliseconds. | [optional] 
**success** | **Boolean** | The success status of the webhook event. | 
**failureReason** | **String** | The reason of the webhook event failure. | [optional] 


