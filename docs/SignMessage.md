# CoboWaas2JsApi.SignMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | 
**chainId** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | 
**source** | [**MessageSignSource**](MessageSignSource.md) |  | 
**destination** | [**MessageSignDestination**](MessageSignDestination.md) |  | 
**description** | **String** | The description of the message sign transaction. | [optional] 
**categoryNames** | **[String]** | The custom category for you to identify your transactions. | [optional] 


