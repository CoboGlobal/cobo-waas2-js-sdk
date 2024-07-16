# CoboWaas2JsApi.TransactionDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationType** | [**TransactionDestinationType**](TransactionDestinationType.md) |  | 
**tokenId** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/developers/v2/api-references/wallets/list-enabled-tokens). | 
**assetId** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | 
**accountOutput** | [**TransactionAddressDestinationAccountOutput**](TransactionAddressDestinationAccountOutput.md) |  | [optional] 
**utxoOutputs** | [**TransactionAddressDestinationUtxoOutputs**](TransactionAddressDestinationUtxoOutputs.md) |  | [optional] 
**address** | **String** | The destination address. | 
**value** | **String** | The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is &#x60;1.5&#x60;.  | 
**calldata** | **Blob** | The data that is used to invoke a specific function or method within the specified contract at the destination address.  | 
**message** | **String** | The raw data to be signed that are encoded in Base64. | [optional] 
**structuredData** | **String** | The structured data to be signed that are encoded in JSON. | [optional] 
**walletId** | **String** | The wallet ID. | 
**memo** | **String** | The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON. | [optional] 
**amount** | **String** | The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is &#x60;1.5&#x60;.  | 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | 
**subWalletId** | **String** | The exchange trading account or the sub-wallet ID. | [optional] 


