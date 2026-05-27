# CoboWaas2.AddressVerification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_id** | **String** | The unique identifier of this verification record. | 
**address** | **String** | The counterparty (self-custody) wallet address being verified. | 
**chain_id** | **String** | The chain on which this address is verified. | 
**status** | [**AddressVerificationStatus**](AddressVerificationStatus.md) |  | 
**verification_method** | [**AddressVerificationMethod**](AddressVerificationMethod.md) |  | 
**verified_at** | **Number** | Timestamp (milliseconds) when verification completed. &#x60;null&#x60; while &#x60;status&#x3D;PENDING&#x60; or &#x60;FAILED&#x60;. | [optional] 


