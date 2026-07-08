# CoboWaas2.AutoSweepTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **String** | Auto-sweep task ID. | 
**wallet_id** | **String** | Wallet ID. | 
**token_id** | **String** | Token ID of the swept token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens). | 
**status** | [**AutoSweepTaskStatus**](AutoSweepTaskStatus.md) |  | 
**transaction_ids** | **[String]** | IDs of the transactions triggered by the task. This array is empty while the task &#x60;status&#x60; is &#x60;Submitted&#x60;, and is populated only after the status becomes &#x60;TransactionCreated&#x60;. Poll [Get auto-sweep task details](https://www.cobo.com/developers/v2/api-references/autosweep/get-auto-sweep-task-details) until the transaction IDs are available.  | [optional] 
**failed_reasons** | **[String]** | Reasons why the task creation failed. | [optional] 
**created_timestamp** | **Number** | The time when the task was created, in Unix timestamp format, measured in milliseconds. | 
**updated_timestamp** | **Number** | The time when the task was updated, in Unix timestamp format, measured in milliseconds. | [optional] 


