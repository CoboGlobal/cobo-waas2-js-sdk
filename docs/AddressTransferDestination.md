# CoboWaas2JsApi.AddressTransferDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationType** | [**TransferDestinationType**](TransferDestinationType.md) |  | 
**accountOutput** | [**AddressTransferDestinationAccountOutput**](AddressTransferDestinationAccountOutput.md) |  | [optional] 
**utxoOutputs** | [**[AddressTransferDestinationUtxoOutputsInner]**](AddressTransferDestinationUtxoOutputsInner.md) |  | [optional] 
**changeAddress** | **String** | The address used to receive the remaining funds or change from the transaction. | [optional] 
**forceInternal** | **Boolean** | Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request may not be executed as a Loop transfer.  | [optional] 
**forceExternal** | **Boolean** | Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must not be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request can be executed as a Loop transfer.  | [optional] 


