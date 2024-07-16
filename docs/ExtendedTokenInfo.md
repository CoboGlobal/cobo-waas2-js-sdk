# CoboWaas2JsApi.ExtendedTokenInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenId** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/developers/v2/api-references/wallets/list-enabled-tokens). | 
**chainId** | **String** | The ID of the chain on which the token operates. | 
**assetId** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | [optional] 
**symbol** | **String** | The token symbol, which is the abbreviated name of a token. | [optional] 
**name** | **String** | The token name, which is the full name of a token. | [optional] 
**decimal** | **Number** | The token decimal. | [optional] 
**iconUrl** | **String** | The URL of the token icon. | [optional] 
**tokenAddress** | **String** | The token address, if applicable. | [optional] 
**feeTokenId** | **String** | The fee token ID. A fee token is the token with which you pay transaction fees. | [optional] 
**canDeposit** | **Boolean** | Whether the token can be deposited.  - &#x60;true&#x60;: The token can be deposited.  - &#x60;false&#x60;: The token cannot be deposited.  | [optional] [default to false]
**canWithdraw** | **Boolean** | Whether the token can be withdrawn.  - &#x60;true&#x60;: The token can be withdrawn.  - &#x60;false&#x60;: The token cannot be withdrawn.  | [optional] [default to false]


