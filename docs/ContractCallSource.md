# CoboWaas2JsApi.ContractCallSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | **String** | The type of the wallet. Possible values include: - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled). - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled). - &#x60;Safe{Wallet}&#x60;: Smart Contract Wallets (Safe{Wallet}).  | 
**walletId** | **String** | The wallet ID. | 
**address** | **String** | The wallet address. | 
**mpcUsedKeyShareHolderGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 
**delegate** | [**SafeContractCallSourceAllOfDelegate**](SafeContractCallSourceAllOfDelegate.md) |  | 



## Enum: SourceTypeEnum


* `Org-Controlled` (value: `"Org-Controlled"`)

* `User-Controlled` (value: `"User-Controlled"`)

* `Safe{Wallet}` (value: `"Safe{Wallet}"`)




