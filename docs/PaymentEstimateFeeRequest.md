# CoboWaas2.PaymentEstimateFeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_type** | [**PaymentFeeType**](PaymentFeeType.md) |  | [optional] 
**estimate_fees** | [**[PaymentEstimateFee]**](PaymentEstimateFee.md) | A list of token IDs and amounts for which fees will be calculated. | 
**recipient_token_id** | **String** | The token ID that the recipient will receive. Required only when &#x60;fee_type&#x60; is &#x60;CryptoPayoutBridge&#x60;. | [optional] 


