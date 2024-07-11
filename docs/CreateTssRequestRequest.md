# CoboWaas2JsApi.CreateTssRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TSSRequestType**](TSSRequestType.md) |  | 
**targetKeyGroupId** | **String** | The target key share group ID. | 
**sourceKeyGroupId** | **String** | The source key share group ID.  **Note:** &#x60;source_key_share_group_id&#x60; is used only when &#x60;type&#x60; is set to either &#x60;KeyGenfromKeyGroup&#x60; or &#x60;Recovery&#x60;. This is to specify the key share group to be used as the source key share group to create key shares for the &#x60;target_key_share_group&#x60;.  | [optional] 
**detailParams** | [**CreateTssRequestRequestDetailParams**](CreateTssRequestRequestDetailParams.md) |  | [optional] 


