# CoboWaas2JsApi.EstimateFeeContractCall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | The request ID that is used to track a withdrawal request. The request ID is provided by you and must be unique within your organization. | 
**requestType** | **String** | The request type. Possible values include:   - &#x60;Transfer&#x60;: A request to transfer tokens.   - &#x60;ContractCall&#x60;: A request to interact with a smart contract.   - &#x60;MessageSign&#x60;: A request to sign a message.  | 
**chainId** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/developers/v2/api-references/wallets/list-enabled-chains). | 
**source** | [**ContractCallSource**](ContractCallSource.md) |  | 
**destination** | [**EstimateFeeContractCallDestination**](EstimateFeeContractCallDestination.md) |  | 
**feeType** | [**FeeType**](FeeType.md) |  | [optional] 



## Enum: RequestTypeEnum


* `Transfer` (value: `"Transfer"`)

* `ContractCall` (value: `"ContractCall"`)

* `MessageSign` (value: `"MessageSign"`)




