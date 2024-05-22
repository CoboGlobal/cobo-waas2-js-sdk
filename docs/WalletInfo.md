# CoboWaas2JsApi.WalletInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** |  | 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**name** | **String** |  | 
**orgId** | **String** | The owning custody organization id of the custodial wallet. | 
**vaultId** | **String** | The owning mpc vault id of the mpc wallet. | 
**apikey** | **String** | The API Key for the exchange. | 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | 
**parentWalletId** | **String** | The parent wallet id for this wallet if presented. | [optional] 
**subAccounts** | [**[ExchangeWalletInfoAllOfSubAccounts]**](ExchangeWalletInfoAllOfSubAccounts.md) |  | [optional] 


