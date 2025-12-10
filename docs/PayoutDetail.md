# CoboWaas2.PayoutDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payout_id** | **String** | The payout ID. | 
**source** | [**PayoutSource**](PayoutSource.md) |  | [optional] 
**destination_count** | **Number** | The destination count. | 
**token_id** | **String** | The token ID. | 
**total_amount** | **String** | The total amount. | 
**status** | [**PayoutStatus**](PayoutStatus.md) |  | 
**description** | **String** | The description. | [optional] 
**created_timestamp** | **Number** | The created time of the payout, represented as a UNIX timestamp in seconds. | 
**updated_timestamp** | **Number** | The updated time of the payout, represented as a UNIX timestamp in seconds. | [optional] 
**destinations** | [**[PayoutDestinationDetail]**](PayoutDestinationDetail.md) | The destinations of the payout. | [optional] 


