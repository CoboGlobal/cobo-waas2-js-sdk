# CoboWaas2JsApi.WalletsMPCWalletsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTssRequest**](WalletsMPCWalletsApi.md#cancelTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id}/cancel | Cancel TSS request
[**createKeyGroup**](WalletsMPCWalletsApi.md#createKeyGroup) | **POST** /wallets/mpc/vaults/{vault_id}/key_groups | Create key share group
[**createMpcProject**](WalletsMPCWalletsApi.md#createMpcProject) | **POST** /wallets/mpc/projects | Create project
[**createMpcVault**](WalletsMPCWalletsApi.md#createMpcVault) | **POST** /wallets/mpc/vaults | Create vault
[**createTssRequest**](WalletsMPCWalletsApi.md#createTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests | Create TSS request
[**deleteKeyGroup**](WalletsMPCWalletsApi.md#deleteKeyGroup) | **DELETE** /wallets/mpc/vaults/{vault_id}/key_groups/{key_share_group_id} | Delete key share group
[**getKeyGroup**](WalletsMPCWalletsApi.md#getKeyGroup) | **GET** /wallets/mpc/vaults/{vault_id}/key_groups/{key_share_group_id} | Get key share group information
[**getMpcProject**](WalletsMPCWalletsApi.md#getMpcProject) | **GET** /wallets/mpc/projects/{project_id} | Get project information
[**getMpcVault**](WalletsMPCWalletsApi.md#getMpcVault) | **GET** /wallets/mpc/vaults/{vault_id} | Get vault information
[**getTssRequest**](WalletsMPCWalletsApi.md#getTssRequest) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | Get TSS request
[**listCoboKeyHolder**](WalletsMPCWalletsApi.md#listCoboKeyHolder) | **GET** /wallets/mpc/cobo_key_holders | List all Cobo key share holders
[**listKeyGroup**](WalletsMPCWalletsApi.md#listKeyGroup) | **GET** /wallets/mpc/vaults/{vault_id}/key_groups | List all key share groups
[**listMpcProject**](WalletsMPCWalletsApi.md#listMpcProject) | **GET** /wallets/mpc/projects | List all projects
[**listMpcVault**](WalletsMPCWalletsApi.md#listMpcVault) | **GET** /wallets/mpc/vaults | List all vaults
[**listTssRequest**](WalletsMPCWalletsApi.md#listTssRequest) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests | List TSS requests
[**modifyMpcVault**](WalletsMPCWalletsApi.md#modifyMpcVault) | **PUT** /wallets/mpc/vaults/{vault_id} | Update vault name
[**updateKeyGroup**](WalletsMPCWalletsApi.md#updateKeyGroup) | **PUT** /wallets/mpc/vaults/{vault_id}/key_groups/{key_share_group_id} | Update key share group
[**updateMpcProject**](WalletsMPCWalletsApi.md#updateMpcProject) | **PUT** /wallets/mpc/projects/{project_id} | Update project name



## cancelTssRequest

> TSSRequest cancelTssRequest(vaultId, tssRequestId)

Cancel TSS request

This operation cancels a TSS request. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const tssRequestId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The TSS request ID, which you can retrieve by calling [List TSS requests](/v2/api-references/wallets--mpc-wallets/list-tss-requests).
apiInstance.cancelTssRequest(vaultId, tssRequestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **tssRequestId** | **String**| The TSS request ID, which you can retrieve by calling [List TSS requests](/v2/api-references/wallets--mpc-wallets/list-tss-requests). | 

### Return type

[**TSSRequest**](TSSRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createKeyGroup

> KeyGroup createKeyGroup(vaultId, opts)

Create key share group

This operation creates a key share group for a specified vault. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const opts = {
  'createKeyGroupRequest': new CoboWaas2JsApi.CreateKeyGroupRequest() // CreateKeyGroupRequest | The request body to create a key share group.
};
apiInstance.createKeyGroup(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **createKeyGroupRequest** | [**CreateKeyGroupRequest**](CreateKeyGroupRequest.md)| The request body to create a key share group. | [optional] 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMpcProject

> MPCProject createMpcProject(opts)

Create project

This operation creates a project. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const opts = {
  'createMpcProjectRequest': new CoboWaas2JsApi.CreateMpcProjectRequest() // CreateMpcProjectRequest | The request body to create a project.
};
apiInstance.createMpcProject(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMpcProjectRequest** | [**CreateMpcProjectRequest**](CreateMpcProjectRequest.md)| The request body to create a project. | [optional] 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMpcVault

> MPCVault createMpcVault(opts)

Create vault

This operation creates a vault. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const opts = {
  'createMpcVaultRequest': new CoboWaas2JsApi.CreateMpcVaultRequest() // CreateMpcVaultRequest | The request body to create a vault.
};
apiInstance.createMpcVault(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMpcVaultRequest** | [**CreateMpcVaultRequest**](CreateMpcVaultRequest.md)| The request body to create a vault. | [optional] 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTssRequest

> TSSRequest createTssRequest(vaultId, opts)

Create TSS request

This operation creates a TSS request under a specified vault. You can use this operation to perform actions such as key generation and recovery. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const opts = {
  'createTssRequestRequest': new CoboWaas2JsApi.CreateTssRequestRequest() // CreateTssRequestRequest | The request body to create a TSS request.
};
apiInstance.createTssRequest(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **createTssRequestRequest** | [**CreateTssRequestRequest**](CreateTssRequestRequest.md)| The request body to create a TSS request. | [optional] 

### Return type

[**TSSRequest**](TSSRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteKeyGroup

> deleteKeyGroup(vaultId, keyShareGroupId)

Delete key share group

This operation deletes a specified key share group.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const keyShareGroupId = "880311524363903326"; // String | The key share group ID.
apiInstance.deleteKeyGroup(vaultId, keyShareGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareGroupId** | **String**| The key share group ID. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKeyGroup

> KeyGroup getKeyGroup(vaultId, keyShareGroupId)

Get key share group information

This operation retrieves detailed information about a specified key share group. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const keyShareGroupId = "880311524363903326"; // String | The key share group ID.
apiInstance.getKeyGroup(vaultId, keyShareGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareGroupId** | **String**| The key share group ID. | 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMpcProject

> MPCProject getMpcProject(projectId)

Get project information

This operation retrieves detailed information about a project. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const projectId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects).
apiInstance.getMpcProject(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). | 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMpcVault

> MPCVault getMpcVault(vaultId)

Get vault information

This operation retrieves detailed information about a vault. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
apiInstance.getMpcVault(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTssRequest

> TSSRequest getTssRequest(vaultId, tssRequestId)

Get TSS request

This operation retrieves detailed information about a TSS request. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const tssRequestId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The TSS request ID, which you can retrieve by calling [List TSS requests](/v2/api-references/wallets--mpc-wallets/list-tss-requests).
apiInstance.getTssRequest(vaultId, tssRequestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **tssRequestId** | **String**| The TSS request ID, which you can retrieve by calling [List TSS requests](/v2/api-references/wallets--mpc-wallets/list-tss-requests). | 

### Return type

[**TSSRequest**](TSSRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCoboKeyHolder

> [KeyHolder] listCoboKeyHolder()

List all Cobo key share holders

This operation retrieves a list of all Cobo key share holders and their information.   &lt;Note&gt;When using this operation, &#x60;type&#x60; will only return &#x60;Cobo&#x60; and will never return &#x60;Mobile&#x60; or &#x60;API&#x60;.&lt;/Note&gt; 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
apiInstance.listCoboKeyHolder().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[KeyHolder]**](KeyHolder.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listKeyGroup

> [KeyGroup] listKeyGroup(vaultId, opts)

List all key share groups

This operation retrieves all key share groups under a specified vault. You can filter the result by group type. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const opts = {
  'keyGroupType': new CoboWaas2JsApi.KeyGroupType() // KeyGroupType | The selected key share group type to retrieve. Possible values include: - `MainKeyGroup`: Only [Main Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - `SigningKeyGroup`: Only [Signing Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - `RecoveryKeyGroup`: Only [Recovery Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  **Note:** If there's no value selected for `key_group_type`, all key share group types will be retrieved. 
};
apiInstance.listKeyGroup(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyGroupType** | [**KeyGroupType**](.md)| The selected key share group type to retrieve. Possible values include: - &#x60;MainKeyGroup&#x60;: Only [Main Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - &#x60;SigningKeyGroup&#x60;: Only [Signing Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - &#x60;RecoveryKeyGroup&#x60;: Only [Recovery Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  **Note:** If there&#39;s no value selected for &#x60;key_group_type&#x60;, all key share group types will be retrieved.  | [optional] 

### Return type

[**[KeyGroup]**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMpcProject

> [MPCProject] listMpcProject()

List all projects

This operation retrieves a list of all projects. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
apiInstance.listMpcProject().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MPCProject]**](MPCProject.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMpcVault

> [MPCVault] listMpcVault(opts)

List all vaults

This operation retrieves a list of all vaults.  &lt;Note&gt;By optionally specifying a project ID, you can retrieve a list of all vaults under a single project.&lt;/Note&gt; 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const opts = {
  'projectId': "f47ac10b-58cc-4372-a567-0e02b2c3d479" // String | The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects).
};
apiInstance.listMpcVault(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). | [optional] 

### Return type

[**[MPCVault]**](MPCVault.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTssRequest

> [TSSRequest] listTssRequest(vaultId, targetKeyGroupId)

List TSS requests

This operation retrieves a list of TSS requests and their details. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const targetKeyGroupId = "880311524363903326"; // String | The target key share group ID of the TSS request, which you can retrieve by calling [List all key share groups](/v2/api-references/wallets--mpc-wallets/list-all-key-share-groups).
apiInstance.listTssRequest(vaultId, targetKeyGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **targetKeyGroupId** | **String**| The target key share group ID of the TSS request, which you can retrieve by calling [List all key share groups](/v2/api-references/wallets--mpc-wallets/list-all-key-share-groups). | 

### Return type

[**[TSSRequest]**](TSSRequest.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyMpcVault

> MPCVault modifyMpcVault(vaultId, opts)

Update vault name

This operation updates a vault&#39;s name. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const opts = {
  'modifyMpcVaultRequest': new CoboWaas2JsApi.ModifyMpcVaultRequest() // ModifyMpcVaultRequest | The request body to update a vault's name.
};
apiInstance.modifyMpcVault(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **modifyMpcVaultRequest** | [**ModifyMpcVaultRequest**](ModifyMpcVaultRequest.md)| The request body to update a vault&#39;s name. | [optional] 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateKeyGroup

> KeyGroup updateKeyGroup(vaultId, keyShareGroupId, opts)

Update key share group

This operation updates a specified active [Signing Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups). For example, you can use this operation to upgrade a Signing Group to the [Main Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups). 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults).
const keyShareGroupId = "880311524363903326"; // String | The key share group ID.
const opts = {
  'updateKeyGroupRequest': new CoboWaas2JsApi.UpdateKeyGroupRequest() // UpdateKeyGroupRequest | 
};
apiInstance.updateKeyGroup(vaultId, keyShareGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareGroupId** | **String**| The key share group ID. | 
 **updateKeyGroupRequest** | [**UpdateKeyGroupRequest**](UpdateKeyGroupRequest.md)|  | [optional] 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMpcProject

> MPCProject updateMpcProject(projectId, opts)

Update project name

This operation updates a project&#39;s name. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletsApi();
const projectId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects).
const opts = {
  'updateMpcProjectRequest': new CoboWaas2JsApi.UpdateMpcProjectRequest() // UpdateMpcProjectRequest | The request body to update a project's name.
};
apiInstance.updateMpcProject(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). | 
 **updateMpcProjectRequest** | [**UpdateMpcProjectRequest**](UpdateMpcProjectRequest.md)| The request body to update a project&#39;s name. | [optional] 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

