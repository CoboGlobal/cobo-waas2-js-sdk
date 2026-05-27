# CoboWaas2.SatoshiTestChallenge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge_id** | **String** | The unique identifier of the Satoshi Test challenge. | 
**from_address** | **String** | The counterparty (self-custody) wallet address that must transfer the micro-deposit. | 
**to_address** | **String** | The Cobo-generated verification address that will receive the micro-deposit. | 
**amount** | **String** | The exact amount (in the token&#39;s smallest unit) that must be transferred. The amount is unique per challenge and is used together with &#x60;to_address&#x60; to identify a matching on-chain transfer.  | 
**token_id** | **String** | The ID of the token used for the micro-deposit (typically the chain&#39;s native asset). | 
**chain_id** | **String** | The chain on which the micro-deposit is expected. | 
**status** | [**SatoshiTestChallengeStatus**](SatoshiTestChallengeStatus.md) |  | 
**remaining_seconds** | **Number** | Remaining time (in seconds) before the challenge expires. &#x60;0&#x60; when the challenge is not yet submitted or has already completed/expired.  | 
**matched_txid** | **String** | The on-chain transaction hash of the matching transfer, once matched. | [optional] 
**started_at** | **Number** | Timestamp (milliseconds) when the challenge was submitted and the countdown started. | [optional] 
**expires_at** | **Number** | Timestamp (milliseconds) when the challenge will expire if not matched. | [optional] 


