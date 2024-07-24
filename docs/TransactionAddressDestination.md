# CoboWaas2JsApi.TransactionAddressDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_type** | [**TransactionDestinationType**](TransactionDestinationType.md) |  | 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
**asset_id** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | [optional] 
**account_output** | [**TransactionAddressDestinationAccountOutput**](TransactionAddressDestinationAccountOutput.md) |  | [optional] 
**utxo_outputs** | [**TransactionAddressDestinationUtxoOutputs**](TransactionAddressDestinationUtxoOutputs.md) |  | [optional] 
**change_address** | **String** | The address used to receive the remaining funds or change from the transaction. | [optional] 


