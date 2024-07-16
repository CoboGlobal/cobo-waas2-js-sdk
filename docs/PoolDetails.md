# CoboWaas2JsApi.PoolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique protocol id. | 
**chainId** | **String** | The unique chain id. | 
**protocol** | **String** | The name of the protocol. | 
**protocolIconUrl** | **String** | The URL of the protocol&#39;s icon. | 
**supportedWalletTypes** | [**[WalletType]**](WalletType.md) | The list of available wallet types. | 
**supportedWalletSubtypes** | [**[WalletSubtype]**](WalletSubtype.md) | The list of available wallet types. | 
**tokenId** | **String** | The unique token id. | 
**estApr** | **Number** | The estimated APR. | 
**poolType** | [**StakingPoolType**](StakingPoolType.md) |  | [optional] 
**minAmount** | **String** | The minimum amount to stake. | [optional] 
**maxAmount** | **String** | The maximum amount to stake. | [optional] 
**minStakePeriod** | **Number** | The minimum staking period in days. | [optional] 
**maxStakePeriod** | **Number** | The maximum staking period in days. | [optional] 
**validatorsInfo** | [**[PoolDetailsAllOfValidatorsInfo]**](PoolDetailsAllOfValidatorsInfo.md) | The list of validators. | 


