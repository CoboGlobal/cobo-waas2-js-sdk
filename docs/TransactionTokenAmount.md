# CoboWaas2JsApi.TransactionTokenAmount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenId** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/developers/v2/api-references/wallets/list-enabled-tokens). | [optional] 
**assetId** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | 
**amount** | **Number** | Transaction value (Note that this is an absolute value. If you trade 1.5 BTC, then the value is 1.5)  | 


