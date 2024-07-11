# CoboWaas2JsApi.TransactionEvmEip1559Fee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPriorityFee** | **String** | The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction. | 
**baseFee** | **String** | The base fee price of the chain, in wei. | 
**gasLimit** | **String** | The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies. | [default to &#39;21000&#39;]
**feeType** | [**FeeType**](FeeType.md) |  | 
**feeUsed** | **String** | The transaction fee. | [optional] 
**gasUsed** | **String** | The number of gas units used in the transaction. | [optional] 


