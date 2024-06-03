# CoboWaas2JsApi.EstimateFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Unique id of the request. | 
**requestType** | **String** |  | 
**source** | [**ContractCallSource**](ContractCallSource.md) |  | 
**tokenId** | **String** | ID of the token. Unique in all chains scope. | 
**destination** | [**ContractCallDestination**](ContractCallDestination.md) |  | 
**categoryNames** | **[String]** | The category names for transfer. | [optional] 
**description** | **String** | The description for transfer. | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**chainId** | **String** | The blockchain on which the token operates. | 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `Call` (value: `"Call"`)

* `Sign` (value: `"Sign"`)




