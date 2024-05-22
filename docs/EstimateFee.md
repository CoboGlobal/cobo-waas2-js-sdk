# CoboWaas2JsApi.EstimateFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | Unique id of the request. | 
**requestType** | **String** |  | 
**source** | [**TransferSource**](TransferSource.md) |  | 
**tokenId** | **String** | ID of the token. Unique in all chains scope. | 
**amount** | **String** | Transaction value (Note that this is an absolute value. If you trade 1.5 ETH, then the value is 1.5)  | 
**destination** | [**TransferDestination**](TransferDestination.md) |  | 
**categoryNames** | **[String]** | The category names for transfer. | [optional] 
**description** | **String** | The description for transfer. | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**fromWalletId** | **String** | Unique id of the wallet to transfer from. | 
**fromAddressStr** | **String** | From address | 
**chainId** | **String** | The blockchain on which the token operates. | 
**toAddressStr** | **String** | To address | 
**value** | **String** | Transaction value (Note that this is an absolute value. If you trade 1.5 ETH, then the value is 1.5)  | [optional] 
**calldata** | **Blob** | calldata for this transaction. Commonly used as part of contract interaction.  | 
**mpcUsedKeyGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `Call` (value: `"Call"`)

* `Sign` (value: `"Sign"`)




