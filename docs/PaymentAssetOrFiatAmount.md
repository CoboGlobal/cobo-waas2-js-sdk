# CoboWaas2.PaymentAssetOrFiatAmount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_type** | **String** | The amount representation type. | 
**amount** | **String** | The amount, represented as a decimal string. | 
**token_id** | **String** | The token ID of the asset. This field is present when &#x60;amount_type&#x60; is &#x60;Crypto&#x60;. | [optional] 
**chain_id** | **String** | The chain ID of the asset. This field is present when &#x60;amount_type&#x60; is &#x60;Crypto&#x60;. | [optional] 
**currency** | **String** | The fiat currency code. This field is present when &#x60;amount_type&#x60; is &#x60;Fiat&#x60;. | [optional] 



## Enum: AmountTypeEnum


* `Crypto` (value: `"Crypto"`)

* `Fiat` (value: `"Fiat"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




