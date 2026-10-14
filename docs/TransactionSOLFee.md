# CoboWaas2.TransactionSOLFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_fee** | **String** | A fixed fee, in lamports, charged per signature. The default is 5,000 per signature. | [optional] 
**rent_amount** | **String** | The one-time rent, in lamports, required to create the destination&#39;s Associated Token Account (ATA) for this token when it does not exist yet.  In fee estimate responses, this field returns the current on-chain rent if the destination address has no ATA for the token, and is empty otherwise. You can call [Estimate transaction fee](https://www.cobo.com/developers/v2/api-references/transactions/estimate-transaction-fee) before submitting a transaction to check whether it will incur ATA rent. The result reflects the destination at estimation time; if the ATA is closed before the transaction is built, the transaction still creates it and incurs the rent.  In transaction records, this field keeps the value estimated when the transaction was created and is not updated from on-chain data. &#x60;estimated_fee_used&#x60; includes this rent, while &#x60;fee_used&#x60; does not.  | [optional] 
**compute_unit_price** | **String** | The price paid per compute unit. This value determines the priority fee for the transaction, allowing you to increase inclusion probability in congested conditions. | [optional] 
**compute_unit_limit** | **String** | The maximum number of compute units your transaction is allowed to consume. It sets an upper bound on computational resource usage to prevent overload. | [optional] 
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token used to pay the transaction fee. | [optional] 
**fee_used** | **String** | The actual on-chain network transaction fee charged for this Solana transaction. This covers the network fee only and does not include ATA activation rent. | [optional] 
**estimated_fee_used** | **String** | The estimated transaction fee. | [optional] 


