# CoboWaas2JsApi.ContractCall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Unique id of the request. | 
**requestType** | **String** |  | 
**chainId** | **String** | The blockchain on which the token operates. | 
**source** | [**ContractCallSource**](ContractCallSource.md) |  | 
**destination** | [**ContractCallDestination**](ContractCallDestination.md) |  | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `Call` (value: `"Call"`)

* `Sign` (value: `"Sign"`)




