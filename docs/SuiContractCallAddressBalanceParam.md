# CoboWaas2.SuiContractCallAddressBalanceParam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_type** | [**SuiContractCallContractType**](SuiContractCallContractType.md) |  | 
**token_id** | **String** | The token ID, which is the unique identifier of a token. | 
**operation_type** | [**SuiContractCallAddressBalanceOperationType**](SuiContractCallAddressBalanceOperationType.md) |  | 
**txid** | **String** | The transaction hash of the deposit to return. Required when &#x60;operation_type&#x60; is &#x60;AddressBalanceRefund&#x60;, and must be omitted otherwise. The destination address is resolved from this deposit and cannot be specified.  | [optional] 


