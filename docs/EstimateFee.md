# CoboWaas2JsApi.EstimateFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | 
**request_type** | **String** | The request type. Possible values include:   - &#x60;Transfer&#x60;: A request to transfer tokens.   - &#x60;ContractCall&#x60;: A request to interact with a smart contract.  | 
**source** | [**ContractCallSource**](ContractCallSource.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. You can retrieve token IDs by using the [Get fee rates](/api-references/v2/transactions/get-fee-rates) operation. | 
**destination** | [**ContractCallDestination**](ContractCallDestination.md) |  | 
**fee_type** | [**FeeType**](FeeType.md) |  | [optional] 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `ContractCall` (value: `"ContractCall"`)




