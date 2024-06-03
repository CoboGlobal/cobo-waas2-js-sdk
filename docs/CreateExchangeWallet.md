# CoboWaas2JsApi.CreateExchangeWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The wallet name. | 
**walletType** | **String** | The wallet type. | 
**walletSubtype** | **String** | The wallet subtype. | 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | 
**apikey** | **String** | The API key of your exchange account. | 
**secret** | **String** | The API secret of your exchange account. | 
**passphrase** | **String** | The passphrase of your exchange account. | [optional] 
**gaCode** | **String** | The ga_code for the exchange. | [optional] 
**subAccountIds** | **[String]** | The Sub Account ID. It can be an email address, a user name, or a custom account ID. | [optional] 



## Enum: WalletTypeEnum


* `Exchange` (value: `"Exchange"`)





## Enum: WalletSubtypeEnum


* `Main` (value: `"Main"`)

* `Sub` (value: `"Sub"`)




