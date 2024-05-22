# CoboWaas2JsApi.TransactionFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeType** | [**FeeType**](FeeType.md) |  | 
**feeTokenId** | **String** | ID of the fee token. Unique in all chains scope. | [optional] 
**maxFee** | **String** | The highest Gas price paid for the transfer, unit GWei. | 
**maxPriorityFee** | **String** | The maximum Gas price paid to miners, the higher it is, the faster it is likely to be packaged into the block, unit GWei. | 
**baseFee** | **String** | The Base Fee of chain. | 
**gasLimit** | **String** | The Limit of gas. | [optional] [default to &#39;21000&#39;]
**feeAmount** | **String** | The estimated fee amount in fee_coin. | [optional] 
**gasPrice** | **String** | The Price of Gas, unit GWei. | 
**feeRate** | **String** | The fee rate, unit sat/vB. | 


