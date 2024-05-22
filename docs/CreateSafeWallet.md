# CoboWaas2JsApi.CreateSafeWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**walletType** | **String** |  | 
**walletSubtype** | **String** |  | 
**label** | **String** | The label of the wallet. | [optional] 
**chainId** | **String** | The chain id the wallet is on. | 
**smartContractWalletType** | [**SmartContractWalletType**](SmartContractWalletType.md) |  | 
**safeAddress** | **String** | The address of the smart contract wallet. If this is not provided, WaaS 2.0 will create a new safe wallet and setup cobo safe module for user. In this case, threshold, owners is required. | [optional] 
**owners** | **[String]** | The owners of the smart contract wallet. This MUST be provided when user want to create a new safe wallet. | [optional] 
**threshold** | **Number** | The threshold of required confirmations for the smart contract wallet. This MUST be provided when user want to create a new safe wallet. | [optional] 
**coboSafeAddress** | **String** | The address of the cobo safe module. Cobo safe module must has been created &amp; enabled when import a existing safe wallet. | [optional] 
**initiator** | [**SafeWalletAllOfInitiator**](SafeWalletAllOfInitiator.md) |  | [optional] 



## Enum: WalletTypeEnum


* `SmartContract` (value: `"SmartContract"`)





## Enum: WalletSubtypeEnum


* `Safe{Wallet}` (value: `"Safe{Wallet}"`)




