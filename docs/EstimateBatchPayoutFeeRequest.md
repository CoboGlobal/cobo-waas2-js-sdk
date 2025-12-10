# CoboWaas2.EstimateBatchPayoutFeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **String** | The ID of the cryptocurrency used for payout.  | 
**payout_mode** | [**PayoutMode**](PayoutMode.md) |  | 
**source** | [**PayoutSource**](PayoutSource.md) |  | 
**destinations** | [**[PayoutDestination]**](PayoutDestination.md) | The destinations of the payout. | 
**rbf_type** | [**PayoutRbfType**](PayoutRbfType.md) |  | [optional] 
**replaced_payout_id** | **String** | The ID of the payout that this payout replaced. | [optional] 


