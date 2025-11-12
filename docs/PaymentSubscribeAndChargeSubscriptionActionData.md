# CoboWaas2.PaymentSubscribeAndChargeSubscriptionActionData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | [**PaymentSubscriptionActionType**](PaymentSubscriptionActionType.md) |  | 
**subscription_id** | **String** | The subscription id in cobo. | 
**charge_amount** | **String** | The subscription crypto amount, less than subscription plan amount.  | 
**signature** | **String** | The signature for transaction. charge action is not required. | 
**deadline** | **Number** | The signature deadline for transaction. charge action is not required. | 


