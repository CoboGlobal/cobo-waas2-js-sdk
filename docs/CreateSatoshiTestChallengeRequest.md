# CoboWaas2.CreateSatoshiTestChallengeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**SatoshiTestChallengeAction**](SatoshiTestChallengeAction.md) |  | 
**chain_id** | **String** | The chain ID of the counterparty address. See the operation description for supported chains. | 
**from_address** | **String** | The counterparty (self-custody) wallet address that will transfer the micro-deposit. | 
**transaction_id** | **String** | The Cobo transaction ID that this Satoshi Test is verifying for. | 
**transaction_type** | [**TravelRuleTransactionType**](TravelRuleTransactionType.md) |  | 
**challenge_id** | **String** | The &#x60;challenge_id&#x60; returned by a previous &#x60;PREPARE&#x60; call. - When &#x60;action&#x3D;SUBMIT&#x60;: if provided, activates that specific challenge by id (recommended when you cached the id client-side after &#x60;PREPARE&#x60;). If omitted, the server activates the latest matching challenge identified by &#x60;(chain_id, from_address)&#x60;. - When &#x60;action&#x3D;PREPARE&#x60;: **must be omitted**. A new challenge is always generated; passing a &#x60;challenge_id&#x60; here will cause the request to be rejected.  | [optional] 


