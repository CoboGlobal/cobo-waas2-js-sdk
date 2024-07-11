# CoboWaas2JsApi.Stakings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id of the stake. | 
**walletId** | **String** | The unique wallet id. | 
**address** | **String** | The staker wallet address. | 
**amounts** | [**[AmountDetailsInner]**](AmountDetailsInner.md) | The staking amount details. | 
**initiator** | **String** | The initiator of the stake. | [optional] 
**unlockTime** | **Number** | The unlock time. | [optional] 
**unlockBlockHeight** | **Number** | The unlock block height. | [optional] 
**poolId** | **String** | The unique pool id. | 
**posChain** | **String** | The pos chain of the stake. | [optional] 
**rewardsInfo** | **Object** | The rewards info of the stake. | [optional] 
**createdTime** | **Number** | The time when the stake was created. | 
**updatedTime** | **Number** | The time when the stake was last updated. | 
**validatorInfo** | [**StakingsValidatorInfo**](StakingsValidatorInfo.md) |  | 


