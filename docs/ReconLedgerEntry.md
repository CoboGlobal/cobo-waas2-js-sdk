# CoboWaas2.ReconLedgerEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | The transaction ID (the Cobo transaction ID you provided in &#x60;transaction_ids&#x60;). | 
**block_time** | **Number** | The time when the block containing the transaction was created, in Unix timestamp format, measured in milliseconds. | [optional] 
**wallet_id** | **String** | The wallet ID. | 
**address** | **String** | The wallet address involved in this entry. | 
**token_id** | **String** | The token ID, which is the unique identifier of a token. | 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. | 
**amount** | **String** | The transaction amount for this entry, expressed in the token&#39;s main unit (already divided by the token&#39;s decimals). The value is signed - positive for deposits and negative for withdrawals. | 
**balance_after** | **String** | The running balance of the address for this token after this transaction, expressed in the token&#39;s main unit. | 
**transaction_hash** | **String** | The transaction hash on the blockchain. | [optional] 
**block_number** | **Number** | The number of the block containing the transaction. | [optional] 


