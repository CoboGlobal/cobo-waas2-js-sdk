# CoboWaas2JsApi.EstimateFeeTransfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | 
**requestType** | **String** | The request type. Possible values include:   - &#x60;Transfer&#x60;: A request to transfer tokens.   - &#x60;ContractCall&#x60;: A request to interact with a smart contract.   - &#x60;MessageSign&#x60;: A request to sign a message.  | 
**source** | [**TransferSource**](TransferSource.md) |  | 
**tokenId** | **String** | The token ID of the transaction fee. You can retrieve token IDs by using the [Get fee rates](/api-references/v2/transactions/get-fee-rates) operation. | 
**destination** | [**TransferDestination**](TransferDestination.md) |  | 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `ContractCall` (value: `"ContractCall"`)

* `MessageSign` (value: `"MessageSign"`)




