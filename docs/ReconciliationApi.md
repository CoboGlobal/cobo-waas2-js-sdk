# CoboWaas2.ReconciliationApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReconciliationLedger**](ReconciliationApi.md#getReconciliationLedger) | **GET** /recon/ledger | Get reconciliation ledger
[**listReconciliationStatements**](ReconciliationApi.md#listReconciliationStatements) | **GET** /recon/statements | List reconciliation daily statements



## getReconciliationLedger

> GetReconciliationLedger200Response getReconciliationLedger(transaction_ids)

Get reconciliation ledger

This operation retrieves the post-transaction balance (running balance) for the specified transactions, used for stablecoin deposit and withdrawal reconciliation.  You need to provide the transaction IDs in &#x60;transaction_ids&#x60;. Each returned entry includes the signed amount and the resulting balance of the address after the transaction, expressed in the token&#39;s main unit.  &lt;Note&gt;This operation is available to selected customers only. To request access, please contact Cobo.&lt;/Note&gt;  &lt;Note&gt;This operation is applicable to MPC Wallets and Custodial Web3 Wallets only, and covers stablecoins only. To ensure accurate reconciliation results, do not use the contract call and message signing features. Currently, only stablecoins on the Ethereum and TRON chains are supported.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.ReconciliationApi();
const transaction_ids = "f47ac10b-58cc-4372-a567-0e02b2c3d479,557918d2-632a-4fe1-932f-315711f05fe3";
apiInstance.getReconciliationLedger(transaction_ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_ids** | **String**| A list of transaction IDs, separated by comma. You can specify 1 to 100 transaction IDs. | 

### Return type

[**GetReconciliationLedger200Response**](GetReconciliationLedger200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReconciliationStatements

> ListReconciliationStatements200Response listReconciliationStatements(start_date, end_date, opts)

List reconciliation daily statements

This operation retrieves daily reconciliation statements within a date range. Each statement contains the opening balance, total deposits, total withdrawals, and closing balance for a business date, wallet, and token.  You need to specify the date range with &#x60;start_date&#x60; and &#x60;end_date&#x60;. You can filter the results by wallets and tokens, and paginate the query results. All amounts are expressed in the token&#39;s main unit.  &lt;Note&gt;This operation is available to selected customers only. To request access, please contact Cobo.&lt;/Note&gt;  &lt;Note&gt;This operation is applicable to MPC Wallets and Custodial Web3 Wallets only, and covers stablecoins only. To ensure accurate reconciliation results, do not use the contract call and message signing features. Currently, only stablecoins on the Ethereum and TRON chains are supported.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.ReconciliationApi();
const start_date = new Date("2026-07-01");
const end_date = new Date("2026-07-28");
const opts = {
  'wallet_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,1ddca562-8434-41c9-8809-d437bad9c868",
  'token_ids': "ETH_USDT,ETH_USDC",
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listReconciliationStatements(start_date, end_date, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **Date**| The start date of the reconciliation period (inclusive), in YYYY-MM-DD format (UTC). The range between &#x60;start_date&#x60; and &#x60;end_date&#x60; must not exceed 366 days. | 
 **end_date** | **Date**| The end date of the reconciliation period (inclusive), in YYYY-MM-DD format (UTC). The range between &#x60;start_date&#x60; and &#x60;end_date&#x60; must not exceed 366 days. | 
 **wallet_ids** | **String**| A list of wallet IDs, separated by comma. | [optional] 
 **token_ids** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 

### Return type

[**ListReconciliationStatements200Response**](ListReconciliationStatements200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

