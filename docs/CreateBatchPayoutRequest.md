# CoboWaas2.CreateBatchPayoutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the batch payout. | 
**token_id** | **String** | The ID of the cryptocurrency used for payout.  | 
**payout_mode** | [**PayoutMode**](PayoutMode.md) |  | 
**unlimited_token_approval** | **Boolean** | Whether to apply unlimited token allowance. Only applicable when: - &#x60;payout_mode&#x60; is &#x60;SmartContract&#x60;  | [optional] [default to false]
**source** | [**PayoutSource**](PayoutSource.md) |  | 
**destinations** | [**[PayoutDestination]**](PayoutDestination.md) | The destinations of the payout. | 


