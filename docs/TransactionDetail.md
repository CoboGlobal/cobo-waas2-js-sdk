# CoboWaas2JsApi.TransactionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | The transaction ID. | 
**coboId** | **String** | The Cobo ID, which can be used to track a transaction. | [optional] 
**requestId** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | [optional] 
**walletId** | **String** | For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source. | [optional] 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**subStatus** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**failedReason** | **String** | The reason why the transaction failed. This property only applies to approval failures and signature failures. | [optional] 
**chainId** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
**tokenId** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
**assetId** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset is a digital representation of a valuable resource on a blockchain network. Exchange Wallets group your holdings by asset, even if the same asset exists on different blockchains. For example, if your Exchange Wallet has 1 USDT on Ethereum and 1 USDT on TRON, then your asset balance is 2 USDT. | [optional] 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**result** | [**TransactionResult**](TransactionResult.md) |  | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**initiator** | **String** | The transaction initiator. | [optional] 
**initiatorType** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | 
**confirmedNum** | **Number** | The number of confirmations this transaction has received. | [optional] 
**confirmingThreshold** | **Number** | The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction. | [optional] 
**blockInfo** | [**TransactionBlockInfo**](TransactionBlockInfo.md) |  | [optional] 
**nonce** | **Number** | The transaction nonce. | [optional] 
**transactionHash** | **String** | The transaction hash. | [optional] 
**replacement** | [**TransactionReplacement**](TransactionReplacement.md) |  | [optional] 
**category** | **[String]** | A custom transaction category for you to identify your transfers more easily. | [optional] 
**description** | **String** | The description for your transaction. | [optional] 
**isLoop** | **Boolean** | Whether the transaction is a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).  - &#x60;true&#x60;: The transaction is a Loop transfer. - &#x60;false&#x60;: The transaction is not a Loop transfer.  | [optional] 
**createdTime** | **Number** | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. | 
**updatedTime** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | 
**timeline** | [**[TransactionDetailAllOfTimeline]**](TransactionDetailAllOfTimeline.md) |  | [optional] 


