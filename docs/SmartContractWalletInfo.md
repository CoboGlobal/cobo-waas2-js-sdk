# CoboWaas2JsApi.SmartContractWalletInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** | The wallet ID. | 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**name** | **String** | The wallet name. | 
**orgId** | **String** | The ID of the owning organization. | 
**chainId** | **String** | The chain the wallet operates on. | [optional] 
**label** | **String** | The wallet label. | [optional] 
**smartContractWalletType** | [**SmartContractWalletType**](SmartContractWalletType.md) |  | 
**safeAddress** | **String** | The Smart Contract Wallet address. | [optional] 
**owners** | **[String]** | The owners of the Smart Contract Wallet. This field is required when creating a new Safe{Wallet}. | [optional] 
**threshold** | **Number** | The minimum number of confirmations required for the Smart Contract Wallet. This field is required when creating a new Safe{Wallet}.  | [optional] 
**coboSafeAddress** | **String** | The address of Cobo Safe. | [optional] 
**initiator** | [**SafeWalletAllOfInitiator**](SafeWalletAllOfInitiator.md) |  | [optional] 


