# CoboWaas2JsApi.TransactionSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | [**TransactionSourceType**](TransactionSourceType.md) |  | 
**walletId** | **String** | The wallet ID. | 
**address** | **String** | The wallet address. | 
**includedUtxos** | [**[TransactionMPCWalletSourceIncludedUtxosInner]**](TransactionMPCWalletSourceIncludedUtxosInner.md) |  | [optional] 
**excludedUtxos** | [**[TransactionMPCWalletSourceExcludedUtxosInner]**](TransactionMPCWalletSourceExcludedUtxosInner.md) |  | [optional] 
**mpcUsedKeyShareHolderGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 
**delegate** | [**CoboSafeDelegate**](CoboSafeDelegate.md) |  | [optional] 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | 
**subWalletId** | **String** | The exchange trading account or a sub-wallet ID. | [optional] 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**addresses** | **[String]** |  | 


