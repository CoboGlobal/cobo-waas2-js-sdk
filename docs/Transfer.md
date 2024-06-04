# CoboWaas2JsApi.Transfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Unique id of the request. | 
**requestType** | **String** |  | 
**source** | [**TransferSource**](TransferSource.md) |  | 
**tokenId** | **String** | The token ID. | 
**destination** | [**TransferDestination**](TransferDestination.md) |  | 
**categoryNames** | **[String]** | The category names for transfer. | [optional] 
**description** | **String** | The description for transfer. | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `Call` (value: `"Call"`)

* `Sign` (value: `"Sign"`)




