# CoboWaas2.TransactionSOLFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_fee** | **String** | A fixed fee charged per signature. The default is 5,000 lamports per signature. | [optional] 
**rent_amount** | **String** | The one-time rent required to create and initialize a Solana token Associated Token Account (ATA) — a token sub-address that must be activated before the token can be received or used. This rent is paid by the main (source) address. It is populated only when an ATA must be activated for the transaction; otherwise it is null.  | [optional] 
**compute_unit_price** | **String** | The price paid per compute unit. This value determines the priority fee for the transaction, allowing you to increase inclusion probability in congested conditions. | [optional] 
**compute_unit_limit** | **String** | The maximum number of compute units your transaction is allowed to consume. It sets an upper bound on computational resource usage to prevent overload. | [optional] 
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token used to pay the transaction fee. | [optional] 
**fee_used** | **String** | The actual on-chain network transaction fee charged for this Solana transaction. For Solana, this value covers the network fee only and does NOT include &#x60;rent_amount&#x60;. The total cost deducted from the transaction&#39;s source (withdrawal) address is &#x60;fee_used&#x60; + &#x60;rent_amount&#x60;, both paid by the same source address.  | [optional] 
**estimated_fee_used** | **String** | The estimated transaction fee. | [optional] 


