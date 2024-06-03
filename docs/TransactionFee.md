# CoboWaas2JsApi.TransactionFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeType** | [**FeeType**](FeeType.md) |  | 
**feeTokenId** | **String** | The token ID of the transaction fee. Unique in all chains scope. | [optional] 
**maxPriorityFee** | **String** | The max priority fee, in gwei. The max priority fee represents the highest amount of miner tips you are willing to pay for your transaction. | 
**baseFee** | **String** | The base fee of chain. | 
**gasLimit** | **String** | The gas limit, which represents the max number of gas units you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. Different operations require varying quantities of gas units. | [optional] [default to &#39;21000&#39;]
**gasPrice** | **String** | The gas price, in gwei. The gas price represents the amount of ETH that must be paid to validators for processing transactions. | 
**feeRate** | **String** | The fee rate, in sats/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain. | 
**maxFeeAmount** | **String** | The max fee amount in fee_coin. | [optional] 


