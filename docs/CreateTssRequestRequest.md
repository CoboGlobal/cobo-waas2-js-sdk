# CoboWaas2JsApi.CreateTssRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TSSRequestType**](TSSRequestType.md) |  | 
**targetKeyShareHolderGroupId** | **String** | The target key share holder group ID. | 
**sourceKeyShareHolderGroupId** | **String** | The source key share holder group ID.  **Note:** &#x60;source_key_share_holder_group_id&#x60; is used only when &#x60;type&#x60; is set to either &#x60;KeyGenfromKeyGroup&#x60; or &#x60;Recovery&#x60;. This is to specify the key share holder group to be used as the source key share holder group to create key shares for the &#x60;target_key_share_holder_group&#x60;.  | [optional] 
**detailParams** | [**CreateTssRequestRequestDetailParams**](CreateTssRequestRequestDetailParams.md) |  | [optional] 


