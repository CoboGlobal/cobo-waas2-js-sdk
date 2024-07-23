# CoboWaas2JsApi.TransferSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | [**WalletSubtype**](WalletSubtype.md) |  | 
**walletId** | **String** | The wallet ID. | 
**address** | **String** | The wallet address. | 
**includedUtxos** | [**[MpcTransferSourceAllOfIncludedUtxos]**](MpcTransferSourceAllOfIncludedUtxos.md) |  | [optional] 
**excludedUtxos** | [**[MpcTransferSourceAllOfExcludedUtxos]**](MpcTransferSourceAllOfExcludedUtxos.md) |  | [optional] 
**mpcUsedKeyShareHolderGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 
**delegate** | [**CoboSafeDelegate**](CoboSafeDelegate.md) |  | 
**subWalletId** | **String** | The exchange trading account or the sub-wallet ID. | 


