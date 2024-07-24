# CoboWaas2JsApi.EstimateFeeTransfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | 
**request_type** | **String** | The request type. Possible values include:   - &#x60;Transfer&#x60;: A request to transfer tokens.   - &#x60;ContractCall&#x60;: A request to interact with a smart contract.  | 
**source** | [**TransferSource**](TransferSource.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. You can retrieve token IDs by using the [Get fee rates](/api-references/v2/transactions/get-fee-rates) operation. | 
**destination** | [**TransferDestination**](TransferDestination.md) |  | 
**fee_type** | [**FeeType**](FeeType.md) |  | [optional] 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `ContractCall` (value: `"ContractCall"`)




