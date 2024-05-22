# CoboWaas2JsApi.CreatedWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**walletType** | **String** |  | 
**walletSubtype** | **String** |  | 
**vaultId** | **String** | The owning mpc vault id of the mpc wallet. | 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | 
**apikey** | **String** | The API Key for the exchange. | 
**secret** | **String** | The API Secret for the exchange. | 
**passphrase** | **String** | The passphrase for the exchange. | [optional] 
**gaCode** | **String** | The ga_code for the exchange. | [optional] 
**subAccountIds** | **[String]** | The unique identifier associated with the exchange sub-account. It can be an email address, username, or a custom account ID. | [optional] 



## Enum: WalletTypeEnum


* `Exchange` (value: `"Exchange"`)





## Enum: WalletSubtypeEnum


* `Main` (value: `"Main"`)

* `Sub` (value: `"Sub"`)




