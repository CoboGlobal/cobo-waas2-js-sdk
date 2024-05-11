# CoboWaas2Api.TransactionFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeType** | [**FeeType**](FeeType.md) |  | 
**feeTokenId** | **String** | ID of the fee token. Unique in all chains scope. | [optional] 
**maxFee** | **String** | The highest Gas price paid for the transfer, unit GWei. | 
**maxPriorityFee** | **Number** | The maximum Gas price paid to miners, the higher it is, the faster it is likely to be packaged into the block, unit GWei. | 
**baseFee** | **Number** | The Base Fee of chain. | 
**gasLimit** | **Number** | The Limit of gas. | [optional] [default to 21000]
**feeAmount** | **String** | The estimated fee amount in fee_coin. | [optional] 
**gasPrice** | **String** | The Price of Gas, unit GWei. | 
**feeRate** | **String** | The fee rate, unit sat/vB. | 


