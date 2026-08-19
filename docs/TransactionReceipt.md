# CoboWaas2.TransactionReceipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains). | 
**transaction_hash** | **String** | The transaction hash, returned with the &#x60;0x&#x60; prefix. | 
**status** | **Number** | The execution result of the transaction. - &#x60;1&#x60;: The transaction was executed successfully. - &#x60;0&#x60;: The transaction failed, for example, because it was reverted by the contract or ran out of gas.  | 
**block_number** | **Number** | The number of the block that contains the transaction. | 
**block_hash** | **String** | The hash of the block that contains the transaction. | 
**transaction_index** | **Number** | The index position of the transaction within the block. | 
**from_address** | **String** | The address that sent the transaction. | 
**to_address** | **String** | The address that received the transaction. The value is &#x60;null&#x60; if the transaction created a contract. | [optional] 
**contract_address** | **String** | The address of the contract created by the transaction. The value is &#x60;null&#x60; if the transaction did not create a contract. | [optional] 
**gas_used** | **String** | The number of gas units consumed by the transaction. | 
**cumulative_gas_used** | **String** | The total number of gas units consumed by all the transactions up to and including this transaction in the block. | [optional] 
**effective_gas_price** | **String** | The gas price actually paid for each gas unit consumed by the transaction, in the smallest unit of the chain&#39;s native token. For example, the value is in wei for Ethereum. | [optional] 
**evm_transaction_type** | **Number** | The transaction envelope type defined by the chain. This property describes the on-chain transaction format, not the Cobo transaction type returned by [Get transaction information](https://www.cobo.com/developers/v2/api-references/transactions/get-transaction-information). - &#x60;0&#x60;: A legacy transaction. - &#x60;1&#x60;: An access list transaction, as defined in EIP-2930. - &#x60;2&#x60;: A dynamic fee transaction, as defined in EIP-1559.  | [optional] 
**logs_bloom** | **String** | The bloom filter of the event logs emitted during the execution of the transaction, which can be used to quickly check whether the transaction emitted a specific log. The value is a 256-byte hexadecimal string. | [optional] 
**logs** | [**[TransactionReceiptLog]**](TransactionReceiptLog.md) | The event logs emitted during the execution of the transaction, in the order in which they were emitted. The array is empty if the transaction emitted no logs. A maximum of 1,000 logs are returned. If the transaction emitted more logs, only the first 1,000 are returned and &#x60;logs_truncated&#x60; is &#x60;true&#x60;. | 
**logs_truncated** | **Boolean** | Whether the event logs returned in &#x60;logs&#x60; were truncated. - &#x60;true&#x60;: The transaction emitted more than 1,000 logs and only the first 1,000 are returned. - &#x60;false&#x60;: All the logs emitted by the transaction are returned.  | 


