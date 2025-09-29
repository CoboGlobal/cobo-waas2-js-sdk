# CoboWaas2.ComplianceApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDispositionStatus**](ComplianceApi.md#getDispositionStatus) | **GET** /compliance/funds/disposition | Query disposition status
[**getKytScreeningStatus**](ComplianceApi.md#getKytScreeningStatus) | **GET** /compliance/kyt/screenings/status | Retrieve KYT screening status
[**isolateFunds**](ComplianceApi.md#isolateFunds) | **POST** /compliance/funds/disposition/isolate | Create fund isolate disposition
[**refundFunds**](ComplianceApi.md#refundFunds) | **POST** /compliance/funds/disposition/refund | Create fund refund disposition
[**submitKytManualReview**](ComplianceApi.md#submitKytManualReview) | **POST** /compliance/kyt/screenings/manual_review | Submit KYT manual review result
[**submitKytScreeningDecisions**](ComplianceApi.md#submitKytScreeningDecisions) | **POST** /compliance/kyt/screenings/decisions | Submit KYT screening decision
[**unfreezeFunds**](ComplianceApi.md#unfreezeFunds) | **POST** /compliance/funds/disposition/unfreeze | Unfreeze frozen funds



## getDispositionStatus

> DispositionQueryResponse getDispositionStatus(transaction_id)

Query disposition status

This operation retrieves the current status of a disposition request for a specific transaction.  You can use this endpoint to check the status of any disposition operation (Refund, Isolate, or Unfreeze)  that has been initiated for a transaction. The response includes the disposition type, current status,  and the disposition transaction ID if applicable.  &lt;Note&gt;Use this endpoint to monitor the progress of disposition operations and verify their completion.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.getDispositionStatus(transaction_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The unique identifier (UUID) of the transaction to retrieve KYT screening status information for. | 

### Return type

[**DispositionQueryResponse**](DispositionQueryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKytScreeningStatus

> KytScreeningsTransaction getKytScreeningStatus(transaction_id)

Retrieve KYT screening status

This operation retrieves the current KYT (Know Your Transaction) screening status and compliance information for a specific transaction.  Use this endpoint to monitor the real-time screening status, review decisions, and funds disposition status for transactions that have been processed through the KYT compliance system. The response includes detailed screening results, risk assessment outcomes, and current funds status.  &lt;Note&gt;This endpoint provides comprehensive compliance monitoring capabilities to help maintain AML (Anti-Money Laundering) regulatory compliance and audit trail requirements.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.getKytScreeningStatus(transaction_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The unique identifier (UUID) of the transaction to retrieve KYT screening status information for. | 

### Return type

[**KytScreeningsTransaction**](KytScreeningsTransaction.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## isolateFunds

> DispositionResponse isolateFunds(opts)

Create fund isolate disposition

This operation creates an isolate disposition request for a specific transaction.  The isolated funds will be sent to a designated isolation address for compliance purposes.  You need to specify the transaction ID to be isolated and the destination address.  Optional parameters include custom categories for tracking purposes.  &lt;Note&gt;The isolate process will initiate a withdrawal transaction from the compliance-managed address to the specified isolation address.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const opts = {
  'IsolateDisposition': new CoboWaas2.IsolateDisposition()
};
apiInstance.isolateFunds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **IsolateDisposition** | [**IsolateDisposition**](IsolateDisposition.md)| The request body to create an isolate disposition | [optional] 

### Return type

[**DispositionResponse**](DispositionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refundFunds

> DispositionResponse refundFunds(opts)

Create fund refund disposition

This operation creates a refund disposition request for a specific transaction.  The refunded funds will be sent to the specified destination address.  You need to specify the transaction ID to be refunded and the destination address.  Optional parameters include custom categories for tracking purposes.  &lt;Note&gt;The refund process will initiate a withdrawal transaction from the compliance-managed address to the specified destination.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const opts = {
  'RefundDisposition': new CoboWaas2.RefundDisposition()
};
apiInstance.refundFunds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RefundDisposition** | [**RefundDisposition**](RefundDisposition.md)| The request body to create a refund disposition | [optional] 

### Return type

[**DispositionResponse**](DispositionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitKytManualReview

> SubmitKytResponse submitKytManualReview(opts)

Submit KYT manual review result

This operation submits manual review results for KYT (Know Your Transaction) screening cases that require human intervention and analysis.  Use this endpoint when transactions flagged for manual review have been analyzed by compliance officers and require submission of review outcomes with detailed comments and justifications. This endpoint is specifically designed for submitting comprehensive manual review findings rather than automated screening decisions.  &lt;Note&gt;Submitting manual review results will update the KYT screening status and initiate appropriate compliance workflow actions based on the review outcome.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const opts = {
  'SubmitKytScreeningsReviewBody': new CoboWaas2.SubmitKytScreeningsReviewBody()
};
apiInstance.submitKytManualReview(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SubmitKytScreeningsReviewBody** | [**SubmitKytScreeningsReviewBody**](SubmitKytScreeningsReviewBody.md)| The request body to submit manual review results for KYT screening cases requiring human analysis | [optional] 

### Return type

[**SubmitKytResponse**](SubmitKytResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitKytScreeningDecisions

> SubmitKytResponse submitKytScreeningDecisions(opts)

Submit KYT screening decision

This operation submits the final KYT (Know Your Transaction) screening decision for a specific transaction based on external compliance review results.  Use this endpoint to provide screening decisions (Approve, ApproveWithAlert, Reject, or ManualReview) after completing the external KYT screening process. The submitted decision will be recorded for compliance audit purposes and regulatory reporting requirements.  &lt;Note&gt;Submitting a screening decision will update the transaction&#39;s KYT status and may automatically trigger downstream compliance workflows or notifications based on the decision type.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const opts = {
  'SubmitKytScreeningsDecisionsBody': new CoboWaas2.SubmitKytScreeningsDecisionsBody()
};
apiInstance.submitKytScreeningDecisions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SubmitKytScreeningsDecisionsBody** | [**SubmitKytScreeningsDecisionsBody**](SubmitKytScreeningsDecisionsBody.md)| The request body to submit a KYT screening decision result based on external compliance review | [optional] 

### Return type

[**SubmitKytResponse**](SubmitKytResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unfreezeFunds

> DispositionResponse unfreezeFunds(opts)

Unfreeze frozen funds

This operation creates an unfreeze request for a previously frozen transaction.  The unfreeze operation will release the frozen funds back to their original state.  You only need to specify the transaction ID to be unfrozen. Once unfrozen, the funds  will be available for normal operations.  &lt;Note&gt;The unfreeze process will release the compliance hold on the transaction, allowing it to proceed normally.&lt;/Note&gt; 

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
const apiInstance = new CoboWaas2.ComplianceApi();
const opts = {
  'UnfreezeDisposition': new CoboWaas2.UnfreezeDisposition()
};
apiInstance.unfreezeFunds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UnfreezeDisposition** | [**UnfreezeDisposition**](UnfreezeDisposition.md)| The request body to create an unfreeze disposition | [optional] 

### Return type

[**DispositionResponse**](DispositionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

