# CoboWaas2Api.TransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique transaction ID | [optional] 
**walletId** | **String** | Wallet ID | [optional] 
**requestId** | **String** | Request ID | [optional] 
**coboId** | **String** | Cobo ID | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | [optional] 
**subStatus** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**fromType** | [**TransactionAddressType**](TransactionAddressType.md) |  | [optional] 
**fromAddress** | [**[TransactionAddress]**](TransactionAddress.md) |  | [optional] 
**fromInfo** | **String** | From wallet info | [optional] 
**toType** | [**TransactionAddressType**](TransactionAddressType.md) |  | [optional] 
**toAddress** | [**[TransactionAddress]**](TransactionAddress.md) |  | [optional] 
**toInfo** | **String** | To wallet info | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 
**txid** | **String** |  | [optional] 
**tokens** | [**[TransactionToken]**](TransactionToken.md) |  | [optional] 
**category** | **[String]** |  | [optional] 
**description** | **String** |  | [optional] 
**createdTime** | **Number** | Transaction creation time | [optional] 
**updatedTime** | **Number** | Transaction update time | [optional] 
**delegate** | **String** | Transaction delegate address | [optional] 
**initiator** | **String** | Transaction initiator | [optional] 
**approvers** | [**[TransactionApprover]**](TransactionApprover.md) |  | [optional] 
**signers** | [**[TransactionSigner]**](TransactionSigner.md) |  | [optional] 
**nonce** | **Number** | Transaction nonce | [optional] 
**replacedBy** | **String** | Replace by transaction hash | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**fueledBy** | **String** | Fueled by address | [optional] 
**confirmedNum** | **Number** | Transaction confirmed number | [optional] 
**confirmingThreshold** | **Number** | Number of confirmations required for a transaction, such as 15 for ETH chain. | [optional] 
**tokenApproval** | [**TransactionTokeApproval**](TransactionTokeApproval.md) |  | [optional] 
**message** | **String** | Transaction raw message | [optional] 
**algorithm** | **String** | Transaction message signing algorithm | [optional] 
**timeline** | [**[TransactionTimeline]**](TransactionTimeline.md) |  | [optional] 


