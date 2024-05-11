# CoboWaas2Api.TransactionTokeApproval

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
**amount** | **Number** | Transaction value (Note that this is an absolute value. If you trade 1.5 BTC, then the value is 1.5)  | [optional] 
**spender** | **String** | Spender address | [optional] 


