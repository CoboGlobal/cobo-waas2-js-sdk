# CoboWaas2.TransactionReceiptLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_index** | **Number** | The index position of the log within the block. | 
**address** | **String** | The address of the contract that emitted the log. | 
**topics** | **[String]** | The indexed log arguments. The first topic is the hash of the event signature, and the remaining topics are the indexed event parameters, with a maximum of three. | 
**data** | **String** | The non-indexed log arguments, encoded as a hexadecimal string. | 
**block_number** | **Number** | The number of the block that contains the log. | [optional] 
**block_hash** | **String** | The hash of the block that contains the log. | [optional] 
**transaction_hash** | **String** | The hash of the transaction that emitted the log. | [optional] 
**transaction_index** | **Number** | The index position within the block of the transaction that emitted the log. | [optional] 
**removed** | **Boolean** | Whether the log was removed due to a chain reorganization. - &#x60;true&#x60;: The log was removed because the block that contains it was reorganized out of the canonical chain. - &#x60;false&#x60;: The log is still valid.  | [optional] 


