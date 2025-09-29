# CoboWaas2.DispositionEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | The transaction ID. | 
**disposition_type** | [**DispositionType**](DispositionType.md) |  | 
**disposition_status** | [**DispositionStatus**](DispositionStatus.md) |  | 
**destination_address** | **String** | The blockchain address where the refund/isolated funds will be sent. | [optional] 
**disposition_amount** | **String** | The amount to be refund/isolated from the original transaction, specified as a numeric string. This value cannot exceed the total amount of the original transaction.  | [optional] 
**updated_timestamp** | **Number** | The time when the disposition was updated, in Unix timestamp format, measured in milliseconds. | 


