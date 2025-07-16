# CoboWaas2.CustodialWeb3TransferSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_type** | [**WalletSubtype**](WalletSubtype.md) |  | 
**wallet_id** | **String** | The wallet ID. | 
**address** | **String** | Indicates the wallet address to be used as the source of funds. - For UTXO-based chains: both &#x60;address&#x60; and &#x60;included_utxos&#x60; are optional. If both &#x60;address&#x60; and &#x60;included_utxos&#x60; are provided, the UTXOs must belong to the specified address. If neither &#x60;address&#x60; nor &#x60;included_utxos&#x60; is provided, the system will select UTXOs from the wallet associated with &#x60;wallet_id&#x60;.   For RBF transactions, please note the following:     - If the original transaction did not specify &#x60;included_utxos&#x60;, the RBF transaction may omit &#x60;address&#x60;, &#x60;included_utxos&#x60;, or both.     - If the original transaction specified &#x60;included_utxos&#x60;, the RBF transaction must specify either &#x60;address&#x60; or &#x60;included_utxos&#x60;, or both.     - The &#x60;address&#x60; or &#x60;included_utxos&#x60; in the RBF transaction may differ from those in the original transaction.  - For account-based chains: You need to provide &#x60;address&#x60; otherwise the token transfer will fail. However, when estimating fees for a transfer, &#x60;address&#x60; is not required.  | [optional] 
**included_utxos** | [**[TransactionUtxo]**](TransactionUtxo.md) |  | [optional] 
**excluded_utxos** | [**[TransactionUtxo]**](TransactionUtxo.md) |  | [optional] 


