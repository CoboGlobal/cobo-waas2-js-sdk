# CoboWaas2JsApi.TransferDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationType** | [**TransferDestinationType**](TransferDestinationType.md) |  | 
**accountOutput** | [**AddressTransferDestinationAccountOutput**](AddressTransferDestinationAccountOutput.md) |  | [optional] 
**utxoOutputs** | [**AddressTransferDestinationUtxoOutputs**](AddressTransferDestinationUtxoOutputs.md) |  | [optional] 
**walletId** | **String** | Unique id of the wallet to transfer to. | 
**subWalletId** | **String** | Exchange trading account or any sub wallet info for transfer. | 
**amount** | **String** | Transaction value (Note that this is an absolute value. If you trade 1.5 ETH, then the value is 1.5)  | [optional] 


