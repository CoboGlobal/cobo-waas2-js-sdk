# CoboWaas2JsApi.TransactionTransferFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeType** | [**FeeType**](FeeType.md) |  | 
**tokenId** | **String** | The token ID of the transaction fee. | 
**maxPriorityFee** | **String** | The maximum priority fee, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction. | 
**baseFee** | **String** | The base fee price of the chain, in wei. | 
**gasLimit** | **String** | The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies. | [default to &#39;21000&#39;]
**gasPrice** | **String** | The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions. | 
**feeRate** | **String** | The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain. | 
**maxFeeAmount** | **String** | The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee. | 


