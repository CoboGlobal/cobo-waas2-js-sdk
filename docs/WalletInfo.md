# CoboWaas2JsApi.WalletInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** | The wallet ID. | 
**walletType** | [**WalletType**](WalletType.md) |  | 
**walletSubtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**name** | **String** | The wallet name. | 
**orgId** | **String** | The ID of the owning organization. | 
**projectId** | **String** | The project ID. | [optional] 
**vaultId** | **String** | The ID of the owning vault. | 
**apikey** | **String** | The API key of your exchange account. | 
**exchangeId** | [**ExchangeId**](ExchangeId.md) |  | 
**parentWalletId** | **String** | The wallet ID of the Main Account associated with the Sub Account. This property is returned only if you are creating or querying an Exchange Wallet (Sub Account). | [optional] 
**subAccounts** | [**[ExchangeWalletInfoAllOfSubAccounts]**](ExchangeWalletInfoAllOfSubAccounts.md) |  | [optional] 


