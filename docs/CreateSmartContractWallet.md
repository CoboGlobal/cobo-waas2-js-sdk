# CoboWaas2JsApi.CreateSmartContractWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The wallet name. | 
**walletType** | **String** | The Smart Contract Wallet type. | 
**walletSubtype** | **String** | The Smart Contract Wallet subtype. | 
**label** | **String** | The wallet label. | [optional] 
**chainId** | **String** | The ID of the chain that the wallet operates on. | 
**smartContractWalletType** | [**SmartContractWalletType**](SmartContractWalletType.md) |  | 
**safeAddress** | **String** | The address of the Smart Contract Wallet. If this is not provided, Cobo will create a new Safe{Wallet} and set up Cobo Safe for you. In that case, the &#x60;threshold&#x60; and &#x60;owners&#x60; fields are required. | [optional] 
**owners** | **[String]** | The owners of the Smart Contract Wallet. This field is required when creating a new Safe{Wallet}. | [optional] 
**threshold** | **Number** | The minimum number of confirmations required for the Smart Contract Wallet. This field is required when creating a new Safe{Wallet}.  | [optional] 
**coboSafeAddress** | **String** | The address of Cobo Safe. If you are importing an existing Safe{Wallet}, Cobo Safe must has been created and enabled. | [optional] 
**initiator** | [**SafeWalletAllOfInitiator**](SafeWalletAllOfInitiator.md) |  | [optional] 



## Enum: WalletTypeEnum


* `SmartContract` (value: `"SmartContract"`)





## Enum: WalletSubtypeEnum


* `Safe{Wallet}` (value: `"Safe{Wallet}"`)




