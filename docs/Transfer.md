# CoboWaas2JsApi.Transfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | 
**source** | [**TransferSource**](TransferSource.md) |  | 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
**destination** | [**TransferDestination**](TransferDestination.md) |  | 
**category_names** | **[String]** | The custom category for you to identify your transactions. | [optional] 
**description** | **String** | The description of the transfer. | [optional] 
**fee** | [**TransactionTransferFee**](TransactionTransferFee.md) |  | [optional] 


