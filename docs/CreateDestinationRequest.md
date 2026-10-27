# CoboWaas2.CreateDestinationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_name** | **String** | The destination name. | 
**destination_type** | [**DestinationType**](DestinationType.md) |  | 
**wallet_addresses** | [**[CreateWalletAddress]**](CreateWalletAddress.md) | The wallet addresses of the destination. | [optional] 
**bank_accounts** | [**[CreateDestinationBankAccount]**](CreateDestinationBankAccount.md) | The bank accounts of the destination. | [optional] 
**merchant_id** | **String** | The ID of the merchant linked to the destination. | [optional] 
**fiat_entry_kyc_id** | **String** | The fiat entry KYC ID linked to the destination, which you can retrieve by calling [List all fiat entry KYC](https://www.cobo.com/developers/v2/api-references/payment/list-all-fiat-entry-kyc).  | [optional] 
**country** | **String** | The country of the destination, in ISO 3166-1 alpha-3 format. | [optional] 
**email** | **String** | The email of the destination. | [optional] 
**contact_address** | **String** | The contact address of the destination. | [optional] 


