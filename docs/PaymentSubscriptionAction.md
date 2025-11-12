# CoboWaas2.PaymentSubscriptionAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The action request id. | 
**action_id** | **String** | The action id. | 
**plan_id** | **String** | The plan id in cobo. | 
**subscription_id** | **String** | The subscription id in cobo. | 
**merchant_id** | **String** | The merchant id in cobo. | 
**merchant_address** | **String** | The merchant address in cobo. | 
**data** | [**PaymentSubscriptionActionData**](PaymentSubscriptionActionData.md) |  | 
**transaction_ids** | **[String]** |  | [optional] 
**status** | [**PaymentSubscriptionActionStatus**](PaymentSubscriptionActionStatus.md) |  | 
**created_timestamp** | **Number** | The created time of the subscription action, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The updated time of the subscription action, represented as a UNIX timestamp in seconds. | [optional] 


