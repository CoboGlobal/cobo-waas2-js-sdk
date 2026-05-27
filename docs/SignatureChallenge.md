# CoboWaas2.SignatureChallenge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The self-custody wallet address that must sign this challenge. This is the counterparty address for the transaction: for deposits it is the sender&#39;s wallet, and for withdrawals it is the recipient&#39;s wallet.  | 
**challenge** | **String** | The human-readable, time-sensitive message to sign. Contains the wallet address, a unique nonce, and a timestamp.  | 
**expires_in** | **Number** | Number of seconds before the challenge expires. The signature must be submitted within this window. | 


