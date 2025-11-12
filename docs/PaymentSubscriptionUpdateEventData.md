# CoboWaas2.PaymentSubscriptionUpdateEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. - &#x60;Addresses&#x60;: The addresses event data. - &#x60;WalletInfo&#x60;: The wallet information event data. - &#x60;MPCVault&#x60;: The MPC vault event data. - &#x60;Chains&#x60;: The enabled chain event data. - &#x60;Tokens&#x60;: The enabled token event data. - &#x60;TokenListing&#x60;: The token listing event data.        - &#x60;PaymentOrder&#x60;: The payment order event data. - &#x60;PaymentRefund&#x60;: The payment refund event data. - &#x60;PaymentSettlement&#x60;: The payment settlement event data. - &#x60;PaymentTransaction&#x60;: The payment transaction event data. - &#x60;PaymentAddressUpdate&#x60;: The payment address update event data. - &#x60;BalanceUpdateInfo&#x60;: The balance update event data. - &#x60;SuspendedToken&#x60;: The suspended token event data. - &#x60;ComplianceDisposition&#x60;: The compliance disposition event data. - &#x60;ComplianceKytScreenings&#x60;: The compliance KYT screenings event data. | 
**plan_id** | **String** | The plan id in cobo. | 
**subscription_id** | **String** | The subscription id in cobo. | 
**merchant_id** | **String** | The merchant id in cobo. | 
**merchant_address** | **String** | The merchant address in cobo. | 
**user_address** | **String** | The user address in subscription. | 
**token_id** | **String** | The token_id in subscription. | 
**charge_amount** | **String** | The charge amount in subscription. | [optional] 
**start_time** | **Number** | The subscription start timestamp. | 
**expiration_time** | **Number** | The subscription expired timestamp. | 
**charges_made** | **Number** | The subscription charge times. | 
**period_type** | [**PaymentSubscriptionPeriodType**](PaymentSubscriptionPeriodType.md) |  | 
**periods** | **Number** |  | 
**interval** | **Number** | The subscription charge interval. | 
**status** | [**PaymentSubscriptionStatus**](PaymentSubscriptionStatus.md) |  | 
**created_timestamp** | **Number** | The created time of the subscription, represented as a UNIX timestamp in seconds. | 
**updated_timestamp** | **Number** | The updated time of the subscription, represented as a UNIX timestamp in seconds. | 



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

* `PaymentSubscriptionUpdate` (value: `"PaymentSubscriptionUpdate"`)

* `PaymentChargeUpdate` (value: `"PaymentChargeUpdate"`)

* `BalanceUpdateInfo` (value: `"BalanceUpdateInfo"`)

* `SuspendedToken` (value: `"SuspendedToken"`)

* `ComplianceDisposition` (value: `"ComplianceDisposition"`)

* `ComplianceKytScreenings` (value: `"ComplianceKytScreenings"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




