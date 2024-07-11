# CoboWaas2JsApi.CreateKeyGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupType** | [**KeyGroupType**](KeyGroupType.md) |  | 
**nodeCount** | **Number** | The number of key share holders in this key share group.  **Notes:** 1. Currently, the available [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) are 2-2, 2-3, and 3-3 schemes (in the \&quot;threshold - node count\&quot; format), so you can only set &#x60;node_count&#x60; to 2 or 3.   2. Threshold must be less than or equal to node count.  | 
**threshold** | **Number** | The number of key share holders required to sign an operation.  **Notes:** 1. Currently, the available [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) are 2-2, 2-3, and 3-3 schemes (in the \&quot;threshold - node count\&quot; format), so you can only set &#x60;threshold&#x60; to 2 or 3.   2. Threshold must be less than or equal to node count.  | 
**keyHolders** | [**[CreateKeyGroupRequestKeyHoldersInner]**](CreateKeyGroupRequestKeyHoldersInner.md) |  | 


