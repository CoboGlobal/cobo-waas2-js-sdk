# CoboWaas2JsApi.EstimationFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeType** | [**FeeType**](FeeType.md) |  | 
**tokenId** | **String** | The token ID of the transaction fee. | 
**slow** | [**UtxoFeeSlow**](UtxoFeeSlow.md) |  | [optional] 
**recommended** | [**UtxoFeeSlow**](UtxoFeeSlow.md) |  | 
**fast** | [**UtxoFeeSlow**](UtxoFeeSlow.md) |  | [optional] 
**maxFeeAmount** | **String** | The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee. | 


