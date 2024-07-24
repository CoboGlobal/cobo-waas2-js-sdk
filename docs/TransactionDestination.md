# CoboWaas2JsApi.TransactionDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_type** | [**TransactionDestinationType**](TransactionDestinationType.md) |  | 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
**asset_id** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | 
**account_output** | [**TransactionAddressDestinationAccountOutput**](TransactionAddressDestinationAccountOutput.md) |  | [optional] 
**utxo_outputs** | [**TransactionAddressDestinationUtxoOutputs**](TransactionAddressDestinationUtxoOutputs.md) |  | [optional] 
**change_address** | **String** | The address used to receive the remaining funds or change from the transaction. | [optional] 
**address** | **String** | The destination address. | 
**value** | **String** | The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is &#x60;1.5&#x60;.  | 
**calldata** | **Blob** | The data that is used to invoke a specific function or method within the specified contract at the destination address.  | 
**message** | **String** | The raw data to be signed that are encoded in Base64. | [optional] 
**structured_data** | **String** | The structured data to be signed that are encoded in JSON. | [optional] 
**wallet_id** | **String** | The wallet ID. | 
**memo** | **String** | The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON. | [optional] 
**amount** | **String** | The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is &#x60;1.5&#x60;.  | 
**exchange_id** | [**ExchangeId**](ExchangeId.md) |  | 
**sub_wallet_id** | **String** | The exchange trading account or the sub-wallet ID. | [optional] 


