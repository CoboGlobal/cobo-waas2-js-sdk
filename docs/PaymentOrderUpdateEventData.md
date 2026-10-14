# CoboWaas2.PaymentOrderUpdateEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. - &#x60;Addresses&#x60;: The addresses event data. - &#x60;WalletInfo&#x60;: The wallet information event data. - &#x60;MPCVault&#x60;: The MPC vault event data. - &#x60;Chains&#x60;: The enabled chain event data. - &#x60;Tokens&#x60;: The enabled token event data. - &#x60;TokenListing&#x60;: The token listing event data.        - &#x60;PaymentOrder&#x60;: The payment order event data. - &#x60;PaymentRefund&#x60;: The payment refund event data. - &#x60;PaymentSettlement&#x60;: The payment settlement event data. - &#x60;PaymentTransaction&#x60;: The payment transaction event data. - &#x60;PaymentAddressUpdate&#x60;: The top-up address update event data. - &#x60;PaymentPayout&#x60;: The payment payout event data. - &#x60;PaymentBankWithdrawal&#x60;: The payment bank withdrawal event data. - &#x60;PaymentBulkSend&#x60;: The payment bulk send event data. - &#x60;PaymentBulkSendItem&#x60;: The payment bulk send item event data. - &#x60;PaymentTopUpUpdate&#x60;: The payment top-up update event data. - &#x60;PaymentOrderUpdate&#x60;: The payment order update event data. - &#x60;PaymentRefundUpdate&#x60;: The payment refund update event data. - &#x60;PaymentPayoutUpdate&#x60;: The payment payout update event data. - &#x60;PaymentBulkSendUpdate&#x60;: The payment bulk send update event data. - &#x60;PaymentBulkSendItemUpdate&#x60;: The payment bulk send item update event data. - &#x60;PaymentAccountBalanceUpdate&#x60;: The Payments account balance updated event data, including account information and balance change details. - &#x60;BalanceUpdateInfo&#x60;: The balance update event data. - &#x60;SuspendedToken&#x60;: The token suspension event data. - &#x60;ComplianceDisposition&#x60;: The compliance disposition event data. - &#x60;ComplianceKytScreenings&#x60;: The compliance KYT screenings event data. - &#x60;ComplianceKyaScreenings&#x60;: The compliance KYA screenings event data. - &#x60;Organization&#x60;: The organization event data. - &#x60;FiatTransaction&#x60;: The fiat transaction event data. | 
**order_id** | **String** |  The order ID to be included in this settlement.  - If provided: Settles merchant funds received from this specific order - If empty: Settles merchant funds received from all unsettled orders of the specified merchant  **Usage conditions** - Only applicable when &#x60;settlement_type&#x60; is set to &#x60;Merchant&#x60; - Cannot be used together with &#x60;amount&#x60; parameter        | 
**psp_order_code** | **String** | A unique reference code assigned by the developer to identify this order in their system. | 
**merchant_id** | **String** | The merchant ID associated with the order. | 
**merchant_order_code** | **String** | A unique reference code assigned by the merchant to identify this order in their system. | 
**status** | [**OrderStatus**](OrderStatus.md) |  | 
**notice_type** | [**PaymentOrderNoticeType**](PaymentOrderNoticeType.md) |  | 
**receive_address** | **String** | The recipient wallet address for the payment transaction. | 
**expired_at** | **Number** | The expiration time of the pay-in order, represented as a UNIX timestamp in seconds. | 
**requested_amount** | [**PaymentAssetAmount**](PaymentAssetAmount.md) | The requested amount. | 
**credited_amount** | [**PaymentAssetAmount**](PaymentAssetAmount.md) | The credited amount. | 
**outstanding_amount** | [**PaymentAssetAmount**](PaymentAssetAmount.md) | The outstanding amount. | 
**transactions** | [**[PaymentOrderDeposit]**](PaymentOrderDeposit.md) | The incoming transactions associated with the order. | 
**created_timestamp** | **Number** | The created time of the order, represented as a UNIX timestamp in seconds. | 
**updated_timestamp** | **Number** | The updated time of the order, represented as a UNIX timestamp in seconds. | 



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

* `PaymentBankWithdrawal` (value: `"PaymentBankWithdrawal"`)

* `PaymentBulkSend` (value: `"PaymentBulkSend"`)

* `PaymentBulkSendItem` (value: `"PaymentBulkSendItem"`)

* `PaymentTopUpUpdate` (value: `"PaymentTopUpUpdate"`)

* `PaymentOrderUpdate` (value: `"PaymentOrderUpdate"`)

* `PaymentRefundUpdate` (value: `"PaymentRefundUpdate"`)

* `PaymentPayoutUpdate` (value: `"PaymentPayoutUpdate"`)

* `PaymentBulkSendUpdate` (value: `"PaymentBulkSendUpdate"`)

* `PaymentBulkSendItemUpdate` (value: `"PaymentBulkSendItemUpdate"`)

* `PaymentAccountBalanceUpdate` (value: `"PaymentAccountBalanceUpdate"`)

* `BalanceUpdateInfo` (value: `"BalanceUpdateInfo"`)

* `SuspendedToken` (value: `"SuspendedToken"`)

* `ComplianceDisposition` (value: `"ComplianceDisposition"`)

* `ComplianceKytScreenings` (value: `"ComplianceKytScreenings"`)

* `ComplianceKyaScreenings` (value: `"ComplianceKyaScreenings"`)

* `Organization` (value: `"Organization"`)

* `FiatTransaction` (value: `"FiatTransaction"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




