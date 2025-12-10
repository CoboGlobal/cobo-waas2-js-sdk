# CoboWaas2.CreateWebhookEventParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **String** | Identifier for the client/organization. Corresponds to organization_id in Cobo Portal. | 
**type** | [**WebhookEventType**](WebhookEventType.md) |  | 
**data** | **{String: Object}** | The event payload object. | 
**uuid** | **String** | Unique event identifier. | 
**wallet_scopes_info** | **{String: Object}** | Wallet scope information. | [optional] 
**transaction_hash** | **String** | Blockchain transaction hash. | [optional] 
**request_id** | **String** | Request identifier. | [optional] 
**transaction_id** | **String** | Internal transaction identifier. | [optional] 
**cobo_id** | **String** | Cobo internal identifier. | [optional] 


