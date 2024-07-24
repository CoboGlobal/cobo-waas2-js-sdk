# CoboWaas2JsApi.TransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | The transaction ID. | 
**cobo_id** | **String** | The Cobo ID, which can be used to track a transaction. | [optional] 
**request_id** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | [optional] 
**wallet_id** | **String** | For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source. | [optional] 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**sub_status** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**failed_reason** | **String** | The reason why the transaction failed. This property only applies to approval failures and signature failures. | [optional] 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**fee** | [**TransactionTransferFee**](TransactionTransferFee.md) |  | [optional] 
**initiator** | **String** | Transaction initiator | [optional] 
**initiator_type** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | 
**confirmed_num** | **Number** | Transaction confirmed number | [optional] 
**confirming_threshold** | **Number** | Number of confirmations required for a transaction, such as 15 for ETH chain. | [optional] 
**block_number** | **Number** | The block number. | [optional] 
**block_time** | **Number** | The time when the block was created, in Unix timestamp format, measured in milliseconds. | [optional] 
**block_hash** | **String** | The block hash. | [optional] 
**nonce** | **Number** | Transaction nonce | [optional] 
**transaction_hash** | **String** | The transaction hash. | [optional] 
**replacement** | [**TransactionReplacement**](TransactionReplacement.md) |  | [optional] 
**category** | **[String]** | A custom transaction category for you to identify your transfers more easily. | [optional] 
**description** | **String** | The description for your transaction. | [optional] 
**force_internal** | **Boolean** | Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request may not be executed as a Loop transfer.  | [optional] 
**force_external** | **Boolean** | Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must not be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request can be executed as a Loop transfer.  | [optional] 
**is_loop** | **Boolean** | Whether the transaction is a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).  - &#x60;true&#x60;: The transaction is a Loop transfer. - &#x60;false&#x60;: The transaction is not a Loop transfer.  | [optional] 
**created_time** | **Number** | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. | 
**updated_time** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | 
**approvers** | [**[TransactionApprover]**](TransactionApprover.md) |  | [optional] 
**signers** | [**[TransactionSigner]**](TransactionSigner.md) |  | [optional] 
**replaced_by** | **String** | Replace by transaction hash | [optional] 
**fueled_by** | **String** | Fueled by address | [optional] 
**token_approval** | [**TransactionTokeApproval**](TransactionTokeApproval.md) |  | [optional] 
**message** | **String** | Transaction raw message | [optional] 
**algorithm** | **String** | Transaction message signing algorithm | [optional] 
**timeline** | [**[TransactionTimeline]**](TransactionTimeline.md) |  | [optional] 


