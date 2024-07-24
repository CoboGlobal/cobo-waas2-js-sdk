# CoboWaas2JsApi.TransactionSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_type** | [**TransactionSourceType**](TransactionSourceType.md) |  | 
**account_input** | [**TransactionMPCWalletSourceAccountInput**](TransactionMPCWalletSourceAccountInput.md) |  | [optional] 
**utxo_inputs** | [**[TransactionMPCWalletSourceUtxoInputsInner]**](TransactionMPCWalletSourceUtxoInputsInner.md) |  | [optional] 
**wallet_id** | **String** | The Wallet ID. | 
**mpc_used_key_share_holder_group** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 
**address** | **String** | The wallet address. | 
**delegate** | [**TransactionSafeWalletSourceDelegate**](TransactionSafeWalletSourceDelegate.md) |  | [optional] 
**exchange_id** | [**ExchangeId**](ExchangeId.md) |  | 
**sub_wallet_id** | **String** | The exchange trading account or a sub-wallet ID. | [optional] 


