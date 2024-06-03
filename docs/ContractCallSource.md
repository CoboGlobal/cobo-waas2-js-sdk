# CoboWaas2JsApi.ContractCallSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | **String** |  | 
**walletId** | **String** | Unique id of the wallet to initiate contract call from. | 
**addressStr** | **String** | From address | 
**mpcUsedKeyGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | 
**delegate** | [**SafeContractCallSourceAllOfDelegate**](SafeContractCallSourceAllOfDelegate.md) |  | 



## Enum: SourceTypeEnum


* `Org-Controlled` (value: `"Org-Controlled"`)

* `User-Controlled` (value: `"User-Controlled"`)

* `Safe{Wallet}` (value: `"Safe{Wallet}"`)




