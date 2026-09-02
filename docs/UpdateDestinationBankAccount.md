# CoboWaas2.UpdateDestinationBankAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_alias** | **String** | The alias of the bank account. | 
**account_number** | **String** | The bank account number. | 
**swift_code** | **String** | The SWIFT or BIC code of the bank. | 
**currency** | **String** | The currency of the bank account. | 
**beneficiary_name** | **String** | The name of the account holder. | 
**beneficiary_address** | **String** | The address of the account holder. | 
**bank_name** | **String** | The name of the bank. | 
**bank_address** | **String** | The address of the bank. | 
**iban_code** | **String** | The IBAN code of the bank account. | [optional] 
**further_credit** | **String** | The further credit of the bank account. | [optional] 
**intermediary_bank_info** | [**IntermediaryBankInfo**](IntermediaryBankInfo.md) |  | [optional] 
**country** | **String** | The country, in ISO 3166-1 alpha-3 format. | [optional] 
**city** | **String** | Beneficiary&#39;s city. | [optional] 
**payment_method** | [**BankAccountPaymentMethod**](BankAccountPaymentMethod.md) |  | [optional] 
**holder_type** | [**BankAccountHolderType**](BankAccountHolderType.md) |  | [optional] 
**beneficiary_province** | **String** | The province or state of the beneficiary. Required when &#x60;payment_method&#x60; is &#x60;Swift&#x60;. Cannot be a pure number or contain Chinese characters.  | [optional] 
**beneficiary_post_code** | **String** | The postal code of the beneficiary. Required when &#x60;payment_method&#x60; is &#x60;Swift&#x60;.  | [optional] 
**bank_account_name** | **String** | The bank account name. Cannot contain Chinese characters.  | [optional] 
**bank_branch_code** | **String** | The branch code. Required when &#x60;payment_method&#x60; is &#x60;Local&#x60; (HK only).  | [optional] 
**bank_country** | **String** | The country, in ISO 3166-1 alpha-3 format. | [optional] 
**bank_province** | **String** | The province or state of the bank. Cannot be a pure number or contain Chinese characters.  | [optional] 
**bank_city** | **String** | The city of the bank. | [optional] 
**routing_value** | **String** | The routing value of the bank account. | [optional] 
**contract_file_id** | **String** | The file ID of the contract document (e.g., cooperation agreement) that proves the business relationship between you and the beneficiary, which you can retrieve by calling [Upload file](https://www.cobo.com/developers/v2/api-references/payment/upload-file).  | [optional] 


