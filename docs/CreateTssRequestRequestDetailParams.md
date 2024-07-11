# CoboWaas2JsApi.CreateTssRequestRequestDetailParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodeIds** | **[String]** | The TSS Node IDs participating in creating a new key share group when &#x60;type&#x60; is set to either &#x60;KeyGenFromKeyGroup&#x60; or &#x60;Recovery&#x60;.   **Note:** In any [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) such as the 2-2, 2-3, and 3-3 schemes (in the \&quot;threshold - node count\&quot; format), for &#x60;node_ids&#x60;, you only need to fill in 1 Cobo TSS Node ID and enough non-Cobo TSS Node IDs to satisfy the number of approvers specified in &#x60;threshold&#x60;. To obtain the Cobo TSS Node ID, run [List all Cobo key share holders](/v2/api-references/wallets--mpc-wallets/list-all-cobo-key-share-holders).  | [optional] 


