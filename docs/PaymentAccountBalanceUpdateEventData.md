# CoboWaas2.PaymentAccountBalanceUpdateEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. - &#x60;Addresses&#x60;: The addresses event data. - &#x60;WalletInfo&#x60;: The wallet information event data. - &#x60;MPCVault&#x60;: The MPC vault event data. - &#x60;Chains&#x60;: The enabled chain event data. - &#x60;Tokens&#x60;: The enabled token event data. - &#x60;TokenListing&#x60;: The token listing event data.        - &#x60;PaymentOrder&#x60;: The payment order event data. - &#x60;PaymentRefund&#x60;: The payment refund event data. - &#x60;PaymentSettlement&#x60;: The payment settlement event data. - &#x60;PaymentTransaction&#x60;: The payment transaction event data. - &#x60;PaymentAddressUpdate&#x60;: The top-up address update event data. - &#x60;PaymentPayout&#x60;: The payment payout event data. - &#x60;PaymentBulkSend&#x60;: The payment bulk send event data. - &#x60;PaymentAccountBalanceUpdate&#x60;: The Payments account balance updated event data, including account information and balance change details. - &#x60;BalanceUpdateInfo&#x60;: The balance update event data. - &#x60;SuspendedToken&#x60;: The token suspension event data. - &#x60;ComplianceDisposition&#x60;: The compliance disposition event data. - &#x60;ComplianceKytScreenings&#x60;: The compliance KYT screenings event data. - &#x60;ComplianceKyaScreenings&#x60;: The compliance KYA screenings event data. - &#x60;Organization&#x60;: The organization event data. - &#x60;FiatTransaction&#x60;: The fiat transaction event data. | 
**source_account** | **String** | The source account of the balance change. This field uses the same semantics as &#x60;source_account&#x60; in [List balance changes](https://www.cobo.com/developers/v2/api-references/payment/list-balance-changes). - When the account is a merchant account, this is the merchant ID (merchant code), which you can retrieve by calling [List all merchants](https://www.cobo.com/developers/v2/api-references/payment/list-all-merchants). - When the account is the developer account, use &#x60;developer&#x60;.  | 
**source_id** | **String** | The source ID of the balance change. | 
**source_type** | [**PaymentBalanceChangeSourceType**](PaymentBalanceChangeSourceType.md) |  | 
**token_id** | **String** | The token ID of the balance change. | 
**amount** | **String** | The balance change amount, truncated to two decimal places and represented as a numeric string. | 
**amount_raw** | **String** | The balance change amount in the token&#39;s decimal precision, represented as a numeric string. | 
**balance_before** | **String** | The account balance before the balance change, truncated to two decimal places and represented as a numeric string. | 
**balance_before_raw** | **String** | The account balance before the balance change in the token&#39;s decimal precision, represented as a numeric string. | 
**balance_after** | **String** | The account balance after the balance change, truncated to two decimal places and represented as a numeric string. | 
**balance_after_raw** | **String** | The account balance after the balance change in the token&#39;s decimal precision, represented as a numeric string. | 
**flow_direction** | [**PaymentBalanceFlowDirection**](PaymentBalanceFlowDirection.md) |  | 
**update_time** | **Number** | The time when the balance was updated, represented as a UNIX timestamp in seconds. | 



## Enum: DataTypeEnum


* `Transaction` (value: `"Transaction"`)

* `TSSRequest` (value: `"TSSRequest"`)

* `Addresses` (value: `"Addresses"`)

* `WalletInfo` (value: `"WalletInfo"`)

* `MPCVault` (value: `"MPCVault"`)

* `Chains` (value: `"Chains"`)

* `Tokens` (value: `"Tokens"`)

* `TokenListing` (value: `"TokenListing"`)

* `PaymentOrder` (value: `"PaymentOrder"`)

* `PaymentRefund` (value: `"PaymentRefund"`)

* `PaymentSettlement` (value: `"PaymentSettlement"`)

* `PaymentTransaction` (value: `"PaymentTransaction"`)

* `PaymentAddressUpdate` (value: `"PaymentAddressUpdate"`)

* `PaymentPayout` (value: `"PaymentPayout"`)

* `PaymentBulkSend` (value: `"PaymentBulkSend"`)

* `PaymentAccountBalanceUpdate` (value: `"PaymentAccountBalanceUpdate"`)

* `BalanceUpdateInfo` (value: `"BalanceUpdateInfo"`)

* `SuspendedToken` (value: `"SuspendedToken"`)

* `ComplianceDisposition` (value: `"ComplianceDisposition"`)

* `ComplianceKytScreenings` (value: `"ComplianceKytScreenings"`)

* `ComplianceKyaScreenings` (value: `"ComplianceKyaScreenings"`)

* `Organization` (value: `"Organization"`)

* `FiatTransaction` (value: `"FiatTransaction"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




