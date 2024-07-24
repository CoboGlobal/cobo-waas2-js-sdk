# CoboWaas2JsApi.TransactionDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationType** | [**TransactionDestinationType**](TransactionDestinationType.md) |  | 
**accountOutput** | [**TransactionTransferToAddressDestinationAccountOutput**](TransactionTransferToAddressDestinationAccountOutput.md) |  | [optional] 
**utxoOutputs** | [**[TransactionTransferToAddressDestinationUtxoOutputsInner]**](TransactionTransferToAddressDestinationUtxoOutputsInner.md) |  | [optional] 
**changeAddress** | **String** | The address used to receive the remaining funds or change from the transaction. | [optional] 
**forceInternal** | **Boolean** | Whether the transaction request must be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request may not be executed as a Loop transfer.  | [optional] 
**forceExternal** | **Boolean** | Whether the transaction request must not be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).   - &#x60;true&#x60;: The transaction request must not be executed as a Loop transfer.   - &#x60;false&#x60;: The transaction request can be executed as a Loop transfer.  | [optional] 
**walletId** | **String** | The wallet ID. | 
**subWalletId** | **String** | The exchange trading account or the sub-wallet ID. | [optional] 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | [optional] 
**amount** | **String** | The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is &#x60;1.5&#x60;.  | 
**address** | **String** | The destination address. | 
**value** | **String** | The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is &#x60;1.5&#x60;.  | [optional] 
**calldata** | **Blob** | The data that is used to invoke a specific function or method within the specified contract at the destination address.  | 
**message** | **String** | The raw data of the message to be signed, encoded in Base64 format. | 
**structuredData** | **{String: Object}** | The structured data of the message to be signed, encoded in JSON format. | 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**memo** | **String** | The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON. | [optional] 


