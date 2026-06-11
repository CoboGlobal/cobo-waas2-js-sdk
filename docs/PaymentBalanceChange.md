# CoboWaas2.PaymentBalanceChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **String** | The source ID of the balance change. | 
**source_type** | [**PaymentBalanceChangeSourceType**](PaymentBalanceChangeSourceType.md) |  | 
**token_id** | **String** | The token ID of the balance change. | 
**amount** | **String** | The balance change amount, truncated to two decimal places and represented as a numeric string. | 
**amount_raw** | **String** | The balance change amount in the token&#39;s decimal precision, represented as a numeric string. | 
**balance_before** | **String** | The account balance before the balance change, truncated to two decimal places and represented as a numeric string. | 
**balance_before_raw** | **String** | The account balance before the balance change in the token&#39;s decimal precision, represented as a numeric string. | 
**balance_after** | **String** | The account balance after the balance change, truncated to two decimal places and represented as a numeric string. | 
**balance_after_raw** | **String** | The account balance after the balance change in the token&#39;s decimal precision, represented as a numeric string. | 
**flow_direction** | [**PaymentBalanceFlowDirection**](PaymentBalanceFlowDirection.md) |  | 
**created_timestamp** | **Number** | The time when the balance change was created, represented as a UNIX timestamp in seconds. | 


