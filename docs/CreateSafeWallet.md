# CoboWaas2JsApi.CreateSafeWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The wallet name. | 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**label** | **String** | The wallet label. | [optional] 
**chainId** | **String** | The ID of the chain that the wallet operates on. | 
**smartContractWalletType** | [**SmartContractWalletType**](SmartContractWalletType.md) |  | 
**safeAddress** | **String** | The address of the Smart Contract Wallet. If this is not provided, Cobo will create a new Safe{Wallet} and set up Cobo Safe for you. In that case, the &#x60;threshold&#x60; and &#x60;signers&#x60; properties are required. | [optional] 
**signers** | **[String]** | The signers of the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}. | [optional] 
**threshold** | **Number** | The minimum number of confirmations required for the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}. | [optional] 
**coboSafeAddress** | **String** | The address of Cobo Safe. If you are importing an existing Safe{Wallet}, Cobo Safe must have been created and enabled. | [optional] 
**initiator** | [**CreateSafeWalletAllOfInitiator**](CreateSafeWalletAllOfInitiator.md) |  | [optional] 


