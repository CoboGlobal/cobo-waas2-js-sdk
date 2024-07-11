# CoboWaas2JsApi.KeyGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **String** | The key share group ID. | [optional] 
**type** | [**KeyGroupType**](KeyGroupType.md) |  | [optional] 
**tssGroupIds** | [**[TSSGroupId]**](TSSGroupId.md) |  | [optional] 
**keyHolders** | [**[KeyHolder]**](KeyHolder.md) |  | [optional] 
**nodeCount** | **Number** | The number of key share holders in this key share group. | [optional] 
**threshold** | **Number** | The number of key share holders required to approve each operation in this key share group. | [optional] 
**status** | [**KeyGroupStatus**](KeyGroupStatus.md) |  | [optional] 
**createTimestamp** | **Number** | The key share group&#39;s creation time in Unix timestamp format, measured in milliseconds. | [optional] 


