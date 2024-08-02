# CoboWaas2.TransactionFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. | [optional] 
**effective_gas_price** | **String** | The gas price (gas fee per gas unit) on the chain, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions. | [optional] 
**fee_used** | **String** | The transaction fee. | [optional] 
**gas_used** | **String** | The gas units used in the transaction. | [optional] 
**max_fee_per_gas** | **String** | The maximum gas fee per gas unit used on the chain, in wei. | [optional] 
**max_priority_fee_per_gas** | **String** | The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction. | [optional] 
**gas_limit** | **String** | The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies. | [optional] [default to &#39;21000&#39;]
**gas_price** | **String** | The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used. | [optional] 
**max_fee_amount** | **String** | The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee. | [optional] 
**fee_rate** | **String** | The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain. | [optional] 


