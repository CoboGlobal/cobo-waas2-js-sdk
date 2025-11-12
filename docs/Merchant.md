# CoboWaas2.Merchant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. | 
**name** | **String** | The merchant name. | 
**wallet_id** | **String** | The ID of the linked wallet. | 
**developer_fee_rate** | **String** | Developer fee rate for this token. For example, 0.01 represents a 1% fee.  | [optional] 
**subscription_developer_fee_rate** | **String** | The fee rate applied when subscribe the merchant account. Represented as a string percentage (e.g., \&quot;0.1\&quot; means 10%). | [optional] 
**wallet_setup** | [**WalletSetup**](WalletSetup.md) |  | [optional] 
**created_timestamp** | **Number** | The created time of the merchant, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The updated time of the merchant, represented as a UNIX timestamp in seconds. | [optional] 


