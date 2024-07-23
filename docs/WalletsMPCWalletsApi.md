# CoboWaas2JsApi.WalletsMPCWalletsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTssRequestById**](WalletsMPCWalletsApi.md#cancelTssRequestById) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id}/cancel | Cancel TSS request
[**createKeyShareHolderGroup**](WalletsMPCWalletsApi.md#createKeyShareHolderGroup) | **POST** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups | Create key share holder group
[**createMpcProject**](WalletsMPCWalletsApi.md#createMpcProject) | **POST** /wallets/mpc/projects | Create project
[**createMpcVault**](WalletsMPCWalletsApi.md#createMpcVault) | **POST** /wallets/mpc/vaults | Create vault
[**createTssRequest**](WalletsMPCWalletsApi.md#createTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests | Create TSS request
[**deleteKeyShareHolderGroupById**](WalletsMPCWalletsApi.md#deleteKeyShareHolderGroupById) | **POST** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id}/delete | Delete key share holder group
[**getKeyShareHolderGroupById**](WalletsMPCWalletsApi.md#getKeyShareHolderGroupById) | **GET** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id} | Get key share holder group information
[**getMpcProjectById**](WalletsMPCWalletsApi.md#getMpcProjectById) | **GET** /wallets/mpc/projects/{project_id} | Get project information
[**getMpcVaultById**](WalletsMPCWalletsApi.md#getMpcVaultById) | **GET** /wallets/mpc/vaults/{vault_id} | Get vault information
[**getTssRequestById**](WalletsMPCWalletsApi.md#getTssRequestById) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | Get TSS request
[**listCoboKeyHolders**](WalletsMPCWalletsApi.md#listCoboKeyHolders) | **GET** /wallets/mpc/cobo_key_share_holders | List all Cobo key share holders
[**listKeyShareHolderGroups**](WalletsMPCWalletsApi.md#listKeyShareHolderGroups) | **GET** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups | List all key share holder groups
[**listMpcProjects**](WalletsMPCWalletsApi.md#listMpcProjects) | **GET** /wallets/mpc/projects | List all projects
[**listMpcVaults**](WalletsMPCWalletsApi.md#listMpcVaults) | **GET** /wallets/mpc/vaults | List all vaults
[**listTssRequests**](WalletsMPCWalletsApi.md#listTssRequests) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests | List TSS requests
[**updateKeyShareHolderGroupById**](WalletsMPCWalletsApi.md#updateKeyShareHolderGroupById) | **PUT** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id} | Update key share holder group
[**updateMpcProjectById**](WalletsMPCWalletsApi.md#updateMpcProjectById) | **PUT** /wallets/mpc/projects/{project_id} | Update project name
[**updateMpcVaultById**](WalletsMPCWalletsApi.md#updateMpcVaultById) | **PUT** /wallets/mpc/vaults/{vault_id} | Update vault name



## cancelTssRequestById

> TSSRequest cancelTssRequestById(vaultId, tssRequestId)

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
const tssRequestId = "20240711114129000132315000003970"; // String | The TSS request ID, which you can retrieve by calling [List TSS requests](/v2/api-references/wallets--mpc-wallets/list-tss-requests).
apiInstance.cancelTssRequestById(vaultId, tssRequestId).then((data) => {
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


## createKeyShareHolderGroup

> KeyShareHolderGroup createKeyShareHolderGroup(vaultId, opts)

Create key share holder group

This operation creates a key share holder group for a specified vault. 

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
  'createKeyShareHolderGroupRequest': new CoboWaas2JsApi.CreateKeyShareHolderGroupRequest() // CreateKeyShareHolderGroupRequest | The request body to create a key share holder group.
};
apiInstance.createKeyShareHolderGroup(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **createKeyShareHolderGroupRequest** | [**CreateKeyShareHolderGroupRequest**](CreateKeyShareHolderGroupRequest.md)| The request body to create a key share holder group. | [optional] 

### Return type

[**KeyShareHolderGroup**](KeyShareHolderGroup.md)

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


## deleteKeyShareHolderGroupById

> DeleteKeyShareHolderGroupById201Response deleteKeyShareHolderGroupById(vaultId, keyShareHolderGroupId)

Delete key share holder group

This operation deletes a specified key share holder group.

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
const keyShareHolderGroupId = "e8257ac8-76b8-4d1e-a1f9-eec4cb931dce"; // String | The key share holder group ID.
apiInstance.deleteKeyShareHolderGroupById(vaultId, keyShareHolderGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareHolderGroupId** | **String**| The key share holder group ID. | 

### Return type

[**DeleteKeyShareHolderGroupById201Response**](DeleteKeyShareHolderGroupById201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKeyShareHolderGroupById

> KeyShareHolderGroup getKeyShareHolderGroupById(vaultId, keyShareHolderGroupId)

Get key share holder group information

This operation retrieves detailed information about a specified key share holder group. 

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
const keyShareHolderGroupId = "e8257ac8-76b8-4d1e-a1f9-eec4cb931dce"; // String | The key share holder group ID.
apiInstance.getKeyShareHolderGroupById(vaultId, keyShareHolderGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareHolderGroupId** | **String**| The key share holder group ID. | 

### Return type

[**KeyShareHolderGroup**](KeyShareHolderGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMpcProjectById

> MPCProject getMpcProjectById(projectId)

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
apiInstance.getMpcProjectById(projectId).then((data) => {
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


## getMpcVaultById

> MPCVault getMpcVaultById(vaultId)

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
apiInstance.getMpcVaultById(vaultId).then((data) => {
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


## getTssRequestById

> TSSRequest getTssRequestById(vaultId, tssRequestId)

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
const tssRequestId = "20240711114129000132315000003970"; // String | The TSS request ID, which you can retrieve by calling [List TSS requests](/v2/api-references/wallets--mpc-wallets/list-tss-requests).
apiInstance.getTssRequestById(vaultId, tssRequestId).then((data) => {
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


## listCoboKeyHolders

> [KeyShareHolder] listCoboKeyHolders()

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
apiInstance.listCoboKeyHolders().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[KeyShareHolder]**](KeyShareHolder.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listKeyShareHolderGroups

> ListKeyShareHolderGroups200Response listKeyShareHolderGroups(vaultId, opts)

List all key share holder groups

This operation retrieves all key share holder groups under a specified vault. You can filter the result by group type. 

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
  'keyShareHolderGroupType': new CoboWaas2JsApi.KeyShareHolderGroupType(), // KeyShareHolderGroupType | The selected key share holder group type to retrieve. Possible values include: - `MainGroup`: Only [Main Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - `SigningGroup`: Only [Signing Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - `RecoveryGroup`: Only [Recovery Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  **Note:** If there's no value selected for `key_share_holder_group_type`, all key share holder group types will be retrieved. 
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listKeyShareHolderGroups(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareHolderGroupType** | [**KeyShareHolderGroupType**](.md)| The selected key share holder group type to retrieve. Possible values include: - &#x60;MainGroup&#x60;: Only [Main Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - &#x60;SigningGroup&#x60;: Only [Signing Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  - &#x60;RecoveryGroup&#x60;: Only [Recovery Group](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/create-key-share-groups) will be retrieved.  **Note:** If there&#39;s no value selected for &#x60;key_share_holder_group_type&#x60;, all key share holder group types will be retrieved.  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListKeyShareHolderGroups200Response**](ListKeyShareHolderGroups200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMpcProjects

> ListMpcProjects200Response listMpcProjects(opts)

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
const opts = {
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listMpcProjects(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListMpcProjects200Response**](ListMpcProjects200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMpcVaults

> ListMpcVaults200Response listMpcVaults(vaultType, opts)

List all vaults

This operation retrieves a list of all vaults. By optionally specifying a project ID, you can retrieve a list of all vaults under a single project.  **Notes for query parameters**: 1. &#x60;project_id&#x60; is required when &#x60;vault_type&#x60; is set to &#x60;User-Controlled&#x60;. 2. &#x60;project_id&#x60; must be left blank when &#x60;vault_type&#x60; is set to &#x60;Org-Controlled&#x60;. 

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
const vaultType = new CoboWaas2JsApi.MPCVaultType(); // MPCVaultType | The vault type. Possible values include: - `Org-Controlled`: This vault is a collection of [Organization-Controlled Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#organization-controlled-wallets).  - `User-Controlled`: This vault is a collection of [User-Controlled Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#user-controlled-wallets). 
const opts = {
  'projectId': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). 
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listMpcVaults(vaultType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultType** | [**MPCVaultType**](.md)| The vault type. Possible values include: - &#x60;Org-Controlled&#x60;: This vault is a collection of [Organization-Controlled Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#organization-controlled-wallets).  - &#x60;User-Controlled&#x60;: This vault is a collection of [User-Controlled Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#user-controlled-wallets).  | 
 **projectId** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects).  | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListMpcVaults200Response**](ListMpcVaults200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTssRequests

> ListTssRequests200Response listTssRequests(vaultId, keyShareHolderGroupId, opts)

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
const keyShareHolderGroupId = "a3a45e99-5a12-444f-867a-ffe0ebb1bb30"; // String | The key share holder group ID of the TSS request, which you can retrieve by calling [List all key share holder groups](/v2/api-references/wallets--mpc-wallets/list-all-key-share-holder-groups).
const opts = {
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listTssRequests(vaultId, keyShareHolderGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareHolderGroupId** | **String**| The key share holder group ID of the TSS request, which you can retrieve by calling [List all key share holder groups](/v2/api-references/wallets--mpc-wallets/list-all-key-share-holder-groups). | 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListTssRequests200Response**](ListTssRequests200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateKeyShareHolderGroupById

> KeyShareHolderGroup updateKeyShareHolderGroupById(vaultId, keyShareHolderGroupId, opts)

Update key share holder group

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
const keyShareHolderGroupId = "e8257ac8-76b8-4d1e-a1f9-eec4cb931dce"; // String | The key share holder group ID.
const opts = {
  'updateKeyShareHolderGroupByIdRequest': new CoboWaas2JsApi.UpdateKeyShareHolderGroupByIdRequest() // UpdateKeyShareHolderGroupByIdRequest | 
};
apiInstance.updateKeyShareHolderGroupById(vaultId, keyShareHolderGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **keyShareHolderGroupId** | **String**| The key share holder group ID. | 
 **updateKeyShareHolderGroupByIdRequest** | [**UpdateKeyShareHolderGroupByIdRequest**](UpdateKeyShareHolderGroupByIdRequest.md)|  | [optional] 

### Return type

[**KeyShareHolderGroup**](KeyShareHolderGroup.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMpcProjectById

> MPCProject updateMpcProjectById(projectId, opts)

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
  'updateMpcProjectByIdRequest': new CoboWaas2JsApi.UpdateMpcProjectByIdRequest() // UpdateMpcProjectByIdRequest | The request body to update a project's name.
};
apiInstance.updateMpcProjectById(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). | 
 **updateMpcProjectByIdRequest** | [**UpdateMpcProjectByIdRequest**](UpdateMpcProjectByIdRequest.md)| The request body to update a project&#39;s name. | [optional] 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMpcVaultById

> MPCVault updateMpcVaultById(vaultId, opts)

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
  'updateMpcVaultByIdRequest': new CoboWaas2JsApi.UpdateMpcVaultByIdRequest() // UpdateMpcVaultByIdRequest | The request body to update a vault's name.
};
apiInstance.updateMpcVaultById(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallet/list-all-mpc-vaults). | 
 **updateMpcVaultByIdRequest** | [**UpdateMpcVaultByIdRequest**](UpdateMpcVaultByIdRequest.md)| The request body to update a vault&#39;s name. | [optional] 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

