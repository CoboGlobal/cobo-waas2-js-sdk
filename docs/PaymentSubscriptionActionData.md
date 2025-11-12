# CoboWaas2.PaymentSubscriptionActionData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | [**PaymentSubscriptionActionType**](PaymentSubscriptionActionType.md) |  | 
**user_address** | **String** | The subscription user address. | 
**token_id** | **String** | The ID of the cryptocurrency you want to subscription. Supported values:  - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60; - USDT: &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
**charge_amount** | **String** | The subscription plan crypto amount with input token_id.  | 
**subscription_id** | **String** | The subscription id in cobo. | 
**signature** | **String** | The signature for transaction. charge action is not required. | 
**deadline** | **Number** | The signature deadline for transaction. charge action is not required. | 
**periods** | **Number** | The periods needed updated. | 
**new_plan_id** | **String** | The new plan id in cobo. | 


