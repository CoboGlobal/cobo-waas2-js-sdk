# CoboWaas2.IsolateDisposition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | The UUID of the transaction to be isolated. This identifies the original transaction that requires isolation processing. | 
**destination_address** | **String** | The blockchain address where the isolated funds will be sent. | 
**disposition_amount** | **String** | The amount to be isolated from the original transaction, specified as a numeric string. This value cannot exceed the total amount of the original transaction.  | 
**category_names** | **[String]** | Custom categories to identify and track this isolate transaction. Used for transaction classification and reporting. | [optional] 
**description** | **String** | Additional notes or description for this isolate disposition. | [optional] 


