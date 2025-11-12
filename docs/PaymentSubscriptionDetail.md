# CoboWaas2.PaymentSubscriptionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **String** | The plan id in cobo. | 
**subscription_id** | **String** | The subscription id in cobo. | 
**merchant_id** | **String** | The merchant id in cobo. | 
**merchant_address** | **String** | The merchant address in cobo. | 
**user_address** | **String** | The user address in subscription. | 
**token_id** | **String** | The token_id in subscription. | 
**charge_amount** | **String** | The charge amount in subscription. | [optional] 
**start_time** | **Number** | The subscription start timestamp. | 
**expiration_time** | **Number** | The subscription expired timestamp. | 
**charges_made** | **Number** | The subscription charge times. | 
**period_type** | [**PaymentSubscriptionPeriodType**](PaymentSubscriptionPeriodType.md) |  | 
**periods** | **Number** |  | 
**interval** | **Number** | The subscription charge interval. | 
**status** | [**PaymentSubscriptionStatus**](PaymentSubscriptionStatus.md) |  | 
**created_timestamp** | **Number** | The created time of the subscription, represented as a UNIX timestamp in seconds. | 
**updated_timestamp** | **Number** | The updated time of the subscription, represented as a UNIX timestamp in seconds. | 
**actions** | [**[PaymentSubscriptionAction]**](PaymentSubscriptionAction.md) | An array of subscription actions. | [optional] 
**transactions** | [**[Transaction]**](Transaction.md) | An array of subscription transactions. | [optional] 


