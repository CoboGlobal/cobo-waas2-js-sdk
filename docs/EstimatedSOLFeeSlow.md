# CoboWaas2.EstimatedSOLFeeSlow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_unit_price** | **String** | The price paid per compute unit. This value determines the priority fee for the transaction, allowing you to increase inclusion probability in congested conditions. | 
**compute_unit_limit** | **String** | The maximum number of compute units your transaction is allowed to consume. It sets an upper bound on computational resource usage to prevent overload. | 
**base_fee** | **String** | A fixed fee charged per signature. The default is 5,000 lamports per signature. | 
**rent_amount** | **String** | The one-time rent required to create and initialize a Solana token Associated Token Account (ATA) — a token sub-address that must be activated before the token can be received or used. This rent is paid by the main (source) address. It is populated only when an ATA must be activated for the transaction; otherwise it is null.  | [optional] 


