# CoboWaas2JsApi.SignMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Unique id of the request. | 
**requestType** | **String** |  | 
**fromWalletId** | **String** | Unique id of the wallet to sign message. | [optional] 
**fromAddressStr** | **String** | signing address | [optional] 
**chainId** | **String** | The blockchain on which the token operates. | 
**message** | **String** | Raw data to be signed, Base 64 encoded | [optional] 
**structuredData** | **String** | Structured data to be signed, JSON encoded | [optional] 
**mpcUsedKeyGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `Call` (value: `"Call"`)

* `Sign` (value: `"Sign"`)




