# CoboWaas2JsApi.TransferSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_type** | [**WalletSubtype**](WalletSubtype.md) |  | 
**wallet_id** | **String** | The wallet ID. | 
**address** | **String** | The wallet address. | 
**included_utxos** | [**[MpcTransferSourceAllOfIncludedUtxos]**](MpcTransferSourceAllOfIncludedUtxos.md) |  | [optional] 
**excluded_utxos** | [**[MpcTransferSourceAllOfExcludedUtxos]**](MpcTransferSourceAllOfExcludedUtxos.md) |  | [optional] 
**mpc_used_key_share_holder_group** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 
**delegate** | [**CoboSafeDelegate**](CoboSafeDelegate.md) |  | 
**sub_wallet_id** | **String** | The exchange trading account or the sub-wallet ID. | 


