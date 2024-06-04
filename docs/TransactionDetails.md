# CoboWaas2JsApi.TransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique transaction ID | 
**walletId** | **String** | Wallet ID | 
**requestId** | **String** | Request ID | [optional] 
**coboId** | **String** | Cobo ID | 
**initiator** | **String** | Transaction initiator | [optional] 
**transactionHash** | **String** | Transaction hash. | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**subStatus** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**type** | [**TransactionType**](TransactionType.md) |  | 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**chainId** | **String** | The blockchain on which the token operates. | [optional] 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | [optional] 
**tokens** | [**[TransactionToken]**](TransactionToken.md) |  | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**category** | **[String]** |  | [optional] 
**description** | **String** |  | [optional] 
**confirmedNum** | **Number** | Transaction confirmed number | [optional] 
**confirmingThreshold** | **Number** | Number of confirmations required for a transaction, such as 15 for ETH chain. | [optional] 
**createdTime** | **Number** | Transaction creation time | 
**updatedTime** | **Number** | Transaction update time | 
**approvers** | [**[TransactionApprover]**](TransactionApprover.md) |  | [optional] 
**signers** | [**[TransactionSigner]**](TransactionSigner.md) |  | [optional] 
**nonce** | **Number** | Transaction nonce | [optional] 
**replacedBy** | **String** | Replace by transaction hash | [optional] 
**fueledBy** | **String** | Fueled by address | [optional] 
**tokenApproval** | [**TransactionTokeApproval**](TransactionTokeApproval.md) |  | [optional] 
**message** | **String** | Transaction raw message | [optional] 
**algorithm** | **String** | Transaction message signing algorithm | [optional] 
**timeline** | [**[TransactionTimeline]**](TransactionTimeline.md) |  | [optional] 


