# CoboWaas2JsApi.TransactionSafeWalletDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationType** | [**TransactionDestinationType**](TransactionDestinationType.md) |  | 
**walletId** | **String** | The wallet ID. | 
**tokenId** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List organization enabled tokens](/v2/api-references/wallets/list-organization-enabled-tokens). | 
**assetId** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | [optional] 
**address** | **String** | The destination address. | 
**memo** | **String** | The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON. | [optional] 
**amount** | **String** | The transaction amount. For example, if you trade 1.5 ETH, then the amount is &#x60;1.5&#x60;.  | 

