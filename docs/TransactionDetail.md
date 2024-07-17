# CoboWaas2JsApi.TransactionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | The transaction ID. | 
**coboId** | **String** | The Cobo ID, which can be used to track a transaction. | [optional] 
**requestId** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | [optional] 
**walletId** | **String** | The wallet ID of the transaction. | [optional] 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**subStatus** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**failedReason** | **String** | The reason why the transaction failed. This property only applies to approval failures and signature failures. | [optional] 
**chainId** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/developers/v2/api-references/wallets/list-enabled-chains). | [optional] 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**initiator** | **String** | The transaction initiator. | [optional] 
**initiatorType** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | 
**confirmedNum** | **Number** | The number of confirmations this transaction has received. | [optional] 
**confirmingThreshold** | **Number** | The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction. | [optional] 
**blockNumber** | **Number** | The block number. | [optional] 
**blockTime** | **Number** | The time when the block was created, in Unix timestamp format, measured in milliseconds. | [optional] 
**blockHash** | **String** | The block hash. | [optional] 
**nonce** | **Number** | The transaction nonce. | [optional] 
**transactionHash** | **String** | The transaction hash. | [optional] 
**replacement** | [**TransactionReplacement**](TransactionReplacement.md) |  | [optional] 
**category** | **[String]** | A custom transaction category for you to identify your transfers more easily. | [optional] 
**description** | **String** | The description for your transaction. | [optional] 
**forceInternal** | **Boolean** | Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request may not be executed as a Loop transfer.  | [optional] 
**forceExternal** | **Boolean** | Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must not be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request can be executed as a Loop transfer.  | [optional] 
**isLoop** | **Boolean** | Whether the transaction is a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).  - &#x60;true&#x60;: The transaction is a Loop transfer. - &#x60;false&#x60;: The transaction is not a Loop transfer.  | [optional] 
**createdTime** | **Number** | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. | 
**updatedTime** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | 
**timeline** | [**[TransactionDetailAllOfTimeline]**](TransactionDetailAllOfTimeline.md) |  | [optional] 


