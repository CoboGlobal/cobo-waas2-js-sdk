# CoboWaas2JsApi.TransactionReplacement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacedByType** | [**ReplacedType**](ReplacedType.md) |  | [optional] 
**replacedByTransactionId** | **String** | The ID of the replacement transaction that this transaction was replaced by. | [optional] 
**replacedByTransactionHash** | **String** | The hash of the replacement transaction that this transaction was replaced by. | [optional] 
**replacedType** | **String** | The transaction replacement type. Possible values include:    - &#x60;Cancel&#x60;: To cancel a transaction.   - &#x60;Drop&#x60;: To drop a transaction.   - &#x60;Resend&#x60;: To resend a transaction.   - &#x60;SpeedUp&#x60;: To speed up a transaction.  | [optional] 
**replacedTransactionId** | **String** | The ID of the transaction that this transaction replaced. | [optional] 
**replacedTransactionHash** | **String** | The hash of the transaction that this transaction replaced. | [optional] 



## Enum: ReplacedTypeEnum


* `Cancel` (value: `"Cancel"`)

* `Drop` (value: `"Drop"`)

* `Resend` (value: `"Resend"`)

* `SpeedUp` (value: `"SpeedUp"`)




