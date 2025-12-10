# CoboWaas2.CreatePayoutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a settlement request. The request ID is provided by you and must be unique. | 
**payout_channel** | [**PayoutChannel**](PayoutChannel.md) |  | 
**source_type** | [**PaymentSourceType**](PaymentSourceType.md) |  | 
**payout_params** | [**[PaymentPayoutParam]**](PaymentPayoutParam.md) |  | 
**bank_account_id** | **String** | ｜ Only used in OffRamp payout channel. The ID of the bank account where the settled funds will be deposited. | [optional] 
**currency** | **String** | The fiat currency for the create payouts. | [optional] 
**remark** | **String** | The remark for the create payouts. | [optional] 


