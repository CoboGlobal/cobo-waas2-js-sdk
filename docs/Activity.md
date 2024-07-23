# CoboWaas2JsApi.Activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id of the activity. | [optional] 
**initiator** | **String** | The initiator of the activity. | [optional] 
**type** | [**ActivityType**](ActivityType.md) |  | [optional] 
**walletId** | **String** | The id of the wallet to stake. | [optional] 
**address** | **String** | The staker wallet address. | [optional] 
**poolId** | **String** | The id of the staking pool. | 
**tokenId** | **String** | The id of the token. | 
**stakingId** | **String** | The id of the related staking. | [optional] 
**amount** | **String** | The amount of the activity. | 
**transactionIds** | **[String]** | The related txs of the activity. | [optional] 
**timeline** | [**[ActivityTimeline]**](ActivityTimeline.md) | The timeline of the activity. | [optional] 
**fee** | [**TransactionTransferFee**](TransactionTransferFee.md) |  | [optional] 
**status** | [**ActivityStatus**](ActivityStatus.md) |  | 
**createdTime** | **Number** | The time when the activity was created. | [optional] 
**updatedTime** | **Number** | The time when the activity was last updated. | [optional] 


