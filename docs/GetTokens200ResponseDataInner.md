# CoboWaas2JsApi.GetTokens200ResponseDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenId** | **String** | ID of the token. Unique in all chains scope. | 
**chainId** | **String** | The blockchain on which the token operates. | 
**symbol** | **String** | Symbol for the token. | [optional] 
**description** | **String** | The description of the token. | [optional] 
**iconUrl** | **String** | URL of the icon image. | [optional] 
**tokenAddress** | **String** | Address for token, if applicable. | [optional] 
**assetId** | **String** | ID of the asset. Used to group token balance when needed. | [optional] 
**canDeposit** | **Boolean** | Ture if the token can be deposited, False otherwise | [optional] [default to false]
**canWithdraw** | **Boolean** | Ture if the token can be withdrawn, False otherwise | [optional] [default to false]

