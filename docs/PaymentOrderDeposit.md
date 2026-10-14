# CoboWaas2.PaymentOrderDeposit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | The incoming Payment transaction ID. | 
**tx_hash** | **String** | The blockchain transaction hash. | 
**amount** | [**PaymentAssetAmount**](PaymentAssetAmount.md) |  | 
**source_address** | **String** | The source address of the incoming transaction. | 
**status** | [**PaymentPayInStatus**](PaymentPayInStatus.md) |  | 
**screening_mode** | [**PaymentScreeningMode**](PaymentScreeningMode.md) |  | 
**is_late** | **Boolean** | Whether the incoming transaction completed after the order reached a terminal status. | 
**message** | **String** | The action prompt for an &#x60;ActionRequired&#x60; status. | 
**failed_reason** | [**PaymentFailedReason**](PaymentFailedReason.md) |  | 


