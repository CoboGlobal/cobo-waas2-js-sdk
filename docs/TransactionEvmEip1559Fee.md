# CoboWaas2JsApi.TransactionEvmEip1559Fee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_priority_fee** | **String** | The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction. | 
**base_fee** | **String** | The base fee price of the chain, in wei. | 
**gas_limit** | **String** | The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies. | [default to &#39;21000&#39;]
**fee_type** | [**FeeType**](FeeType.md) |  | 
**fee_used** | **String** | The transaction fee. | [optional] 
**gas_used** | **String** | The number of gas units used in the transaction. | [optional] 


