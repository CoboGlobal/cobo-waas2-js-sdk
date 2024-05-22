# CoboWaas2JsApi.SafeWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** |  | 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**name** | **String** |  | 
**orgId** | **String** | The owning custody organization id of the custodial wallet. | 
**chainId** | **String** | The chain the wallet is on. | [optional] 
**label** | **String** | The label of the wallet. | [optional] 
**smartContractWalletType** | [**SmartContractWalletType**](SmartContractWalletType.md) |  | 
**safeAddress** | **String** | The address of the smart contract wallet. | [optional] 
**owners** | **[String]** | The owners of the smart contract wallet. This MUST be provided when user want to create a new safe wallet. | [optional] 
**threshold** | **Number** | The threshold of required confirmations for the smart contract wallet. This MUST be provided when user want to create a new safe wallet. | [optional] 
**coboSafeAddress** | **String** | The address of the cobo safe module. | [optional] 
**initiator** | [**SafeWalletAllOfInitiator**](SafeWalletAllOfInitiator.md) |  | [optional] 


