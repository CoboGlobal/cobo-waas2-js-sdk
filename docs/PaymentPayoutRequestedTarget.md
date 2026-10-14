# CoboWaas2.PaymentPayoutRequestedTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** | **String** | The type of the payout target. | 
**address** | **String** | The recipient address. | 
**chain_id** | **String** | The chain ID of the recipient address. | 
**bank_account_id** | **String** | The recipient bank account ID. | 
**account_alias** | **String** | The alias of the recipient bank account. | [optional] 
**bank_name** | **String** | The recipient bank name. | [optional] 
**currency** | **String** | The currency of the recipient bank account. | [optional] 



## Enum: TargetTypeEnum


* `BankAccount` (value: `"BankAccount"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




