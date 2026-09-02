# CoboWaas2.MerchantKycSubmission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kyc_submission_id** | **String** | The KYC submission ID. | 
**merchant_id** | **String** | The merchant ID. | 
**status** | [**MerchantKycStatus**](MerchantKycStatus.md) |  | 
**merchant_type** | [**MerchantKycMerchantType**](MerchantKycMerchantType.md) |  | 
**country** | **String** | The country/region of the merchant, in ISO 3166-1 alpha-3 format. | 
**industry** | **[String]** | The industry categories of the merchant. | 
**company_info** | [**MerchantKycCompanyInfo**](MerchantKycCompanyInfo.md) |  | [optional] 
**individual_info** | [**MerchantKycPersonInfo**](MerchantKycPersonInfo.md) |  | [optional] 
**created_timestamp** | **Number** | The creation timestamp in Unix seconds. | 
**updated_timestamp** | **Number** | The last update timestamp in Unix seconds. | [optional] 


