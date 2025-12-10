# CoboWaas2.CreateWebhookEventInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | Unique event identifier. | 
**channel_id** | **String** | Identifier for the client/organization. Corresponds to organization_id in Cobo Portal. | 
**type** | [**WebhookEventType**](WebhookEventType.md) |  | 
**data** | **String** | JSON serialized object of event data. | 
**wallet_scopes_info** | **{String: Object}** | Wallet scope information. | 
**transaction_hash** | **String** | Blockchain transaction hash. | [optional] 
**request_id** | **String** | Request identifier. | [optional] 
**transaction_id** | **String** | Internal transaction identifier. | [optional] 
**cobo_id** | **String** | Cobo internal identifier. | [optional] 
**status** | [**WebhookEventInternalStatus**](WebhookEventInternalStatus.md) |  | 


