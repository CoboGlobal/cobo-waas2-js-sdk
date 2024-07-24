# CoboWaas2JsApi.CoboSafeDelegate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegateType** | **String** | The delegator subtype. Possible values include: - &#x60;Org-Controlled&#x60;: MPC Wallets (Organization-Controlled Wallets). - &#x60;User-Controlled&#x60;: MPC Wallets (User-Controlled Wallets).  | [default to &#39;Org-Controlled&#39;]
**walletId** | **String** | The wallet ID of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}). | 
**address** | **String** | The wallet address of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}). | 
**mpcUsedKeyShareHolderGroup** | [**MpcSigningGroup**](MpcSigningGroup.md) |  | [optional] 



## Enum: DelegateTypeEnum


* `Org-Controlled` (value: `"Org-Controlled"`)

* `User-Controlled` (value: `"User-Controlled"`)




