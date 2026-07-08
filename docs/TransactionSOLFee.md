# CoboWaas2.TransactionSOLFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_fee** | **String** | A fixed fee charged per signature. The default is 5,000 lamports per signature. | [optional] 
**rent_amount** | **String** | The one-time rent required to activate a Solana token Associated Token Account (ATA) before the token can be received or used. **This field is reserved for future use and is currently not populated.** | [optional] 
**compute_unit_price** | **String** | The price paid per compute unit. This value determines the priority fee for the transaction, allowing you to increase inclusion probability in congested conditions. | [optional] 
**compute_unit_limit** | **String** | The maximum number of compute units your transaction is allowed to consume. It sets an upper bound on computational resource usage to prevent overload. | [optional] 
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token used to pay the transaction fee. | [optional] 
**fee_used** | **String** | The actual on-chain network transaction fee charged for this Solana transaction. This covers the network fee only and does not include ATA activation rent. | [optional] 
**estimated_fee_used** | **String** | The estimated transaction fee. | [optional] 


