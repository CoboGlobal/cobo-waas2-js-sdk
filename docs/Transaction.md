# CoboWaas2Api.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique transaction ID | [optional] 
**walletId** | **String** | Wallet ID | [optional] 
**requestId** | **String** | Request ID | [optional] 
**coboId** | **String** | Cobo ID | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | [optional] 
**subStatus** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**fromType** | [**TransactionAddressType**](TransactionAddressType.md) |  | [optional] 
**fromAddress** | [**[TransactionAddress]**](TransactionAddress.md) |  | [optional] 
**fromInfo** | **String** | From wallet info | [optional] 
**toType** | [**TransactionAddressType**](TransactionAddressType.md) |  | [optional] 
**toAddress** | [**[TransactionAddress]**](TransactionAddress.md) |  | [optional] 
**toInfo** | **String** | To wallet info | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 
**txid** | **String** |  | [optional] 
**tokens** | [**[TransactionToken]**](TransactionToken.md) |  | [optional] 
**category** | **[String]** |  | [optional] 
**description** | **String** |  | [optional] 
**createdTime** | **Number** | Transaction creation time | [optional] 
**updatedTime** | **Number** | Transaction update time | [optional] 
**delegate** | **String** | Transaction delegate address | [optional] 


