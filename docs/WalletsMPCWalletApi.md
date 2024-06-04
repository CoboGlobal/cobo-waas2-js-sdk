# CoboWaas2JsApi.WalletsMPCWalletApi

All URIs are relative to *https://api.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTssRequest**](WalletsMPCWalletApi.md#cancelTssRequest) | **PUT** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | Cancel a tss request
[**createKeyGroup**](WalletsMPCWalletApi.md#createKeyGroup) | **POST** /wallets/mpc/vaults/{vault_id}/key_groups | Create a mpc key group
[**createMpcProject**](WalletsMPCWalletApi.md#createMpcProject) | **POST** /wallets/mpc/projects | Create a mpc project
[**createMpcVault**](WalletsMPCWalletApi.md#createMpcVault) | **POST** /wallets/mpc/vaults | Create a mpc vault
[**createTssRequest**](WalletsMPCWalletApi.md#createTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests | Create a tss request to generate key secrets for a tss group
[**deleteKeyGroup**](WalletsMPCWalletApi.md#deleteKeyGroup) | **DELETE** /wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id} | Delete a mpc key group
[**getKeyGroup**](WalletsMPCWalletApi.md#getKeyGroup) | **GET** /wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id} | Get a mpc key group information by group id
[**getMpcProject**](WalletsMPCWalletApi.md#getMpcProject) | **GET** /wallets/mpc/projects/{project_id} | Get a mpc project information
[**getMpcVault**](WalletsMPCWalletApi.md#getMpcVault) | **GET** /wallets/mpc/vaults/{vault_id} | Get a mpc vault information
[**getTssRequest**](WalletsMPCWalletApi.md#getTssRequest) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | Get a tss request information
[**listCoboKeyHolder**](WalletsMPCWalletApi.md#listCoboKeyHolder) | **GET** /wallets/mpc/cobo_key_holders | List all cobo key holders
[**listKeyGroup**](WalletsMPCWalletApi.md#listKeyGroup) | **GET** /wallets/mpc/vaults/{vault_id}/key_groups | List all mpc key groups
[**listMpcProject**](WalletsMPCWalletApi.md#listMpcProject) | **GET** /wallets/mpc/projects | List all mpc projects
[**listMpcVault**](WalletsMPCWalletApi.md#listMpcVault) | **GET** /wallets/mpc/vaults | List all mpc vaults
[**listTssRequest**](WalletsMPCWalletApi.md#listTssRequest) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests | List tss request information by vault ID
[**modifyMpcVault**](WalletsMPCWalletApi.md#modifyMpcVault) | **PUT** /wallets/mpc/vaults/{vault_id} | Update a mpc vault information
[**updateKeyGroup**](WalletsMPCWalletApi.md#updateKeyGroup) | **PUT** /wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id} | Update a mpc key group information
[**updateMpcProject**](WalletsMPCWalletApi.md#updateMpcProject) | **PUT** /wallets/mpc/projects/{project_id} | Update a mpc project



## cancelTssRequest

> TSSRequest cancelTssRequest(vaultId, tssRequestId, tssRequestAction)

Cancel a tss request

Cancel a mpc tss request by its ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const tssRequestId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the tss request
const tssRequestAction = "cancel"; // String | The action of tss request.
apiInstance.cancelTssRequest(vaultId, tssRequestId, tssRequestAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 
 **tssRequestId** | **String**| Unique id of the tss request | 
 **tssRequestAction** | **String**| The action of tss request. | 

### Return type

[**TSSRequest**](TSSRequest.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createKeyGroup

> KeyGroup createKeyGroup(vaultId, opts)

Create a mpc key group

Create a mpc key group for vault ID with the provided information. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const opts = {
  'createKeyGroupRequest': new CoboWaas2JsApi.CreateKeyGroupRequest() // CreateKeyGroupRequest | The request body to create a mpc key group
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
 **vaultId** | **String**| Unique id of the mpc vault | 
 **createKeyGroupRequest** | [**CreateKeyGroupRequest**](CreateKeyGroupRequest.md)| The request body to create a mpc key group | [optional] 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMpcProject

> MPCProject createMpcProject(opts)

Create a mpc project

Create a mpc project with the provided information. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const opts = {
  'createMpcProjectRequest': new CoboWaas2JsApi.CreateMpcProjectRequest() // CreateMpcProjectRequest | The request body to create a mpc project
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
 **createMpcProjectRequest** | [**CreateMpcProjectRequest**](CreateMpcProjectRequest.md)| The request body to create a mpc project | [optional] 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMpcVault

> MPCVault createMpcVault(opts)

Create a mpc vault

Create a mpc vault with the provided information. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const opts = {
  'createMpcVaultRequest': new CoboWaas2JsApi.CreateMpcVaultRequest() // CreateMpcVaultRequest | The request body to create a mpc vault
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
 **createMpcVaultRequest** | [**CreateMpcVaultRequest**](CreateMpcVaultRequest.md)| The request body to create a mpc vault | [optional] 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTssRequest

> TSSRequest createTssRequest(vaultId, opts)

Create a tss request to generate key secrets for a tss group

Create a tss request to generate key secrets for a tss group. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const opts = {
  'createTssRequestRequest': new CoboWaas2JsApi.CreateTssRequestRequest() // CreateTssRequestRequest | The request body to create a tss request
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
 **vaultId** | **String**| Unique id of the mpc vault | 
 **createTssRequestRequest** | [**CreateTssRequestRequest**](CreateTssRequestRequest.md)| The request body to create a tss request | [optional] 

### Return type

[**TSSRequest**](TSSRequest.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteKeyGroup

> KeyGroup deleteKeyGroup(vaultId, keyGroupId)

Delete a mpc key group

Delete a key group by its unique ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const keyGroupId = "880311524363903326"; // String | Unique id of the tss group
apiInstance.deleteKeyGroup(vaultId, keyGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 
 **keyGroupId** | **String**| Unique id of the tss group | 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKeyGroup

> KeyGroup getKeyGroup(vaultId, keyGroupId)

Get a mpc key group information by group id

Get detailed information about a key group identified by its unique ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const keyGroupId = "880311524363903326"; // String | Unique id of the tss group
apiInstance.getKeyGroup(vaultId, keyGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 
 **keyGroupId** | **String**| Unique id of the tss group | 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMpcProject

> MPCProject getMpcProject(projectId)

Get a mpc project information

Get detailed information about a mpc project identified by its unique ID.   Get project ids by calling list_mpc_project. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const projectId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc project
apiInstance.getMpcProject(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique id of the mpc project | 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMpcVault

> MPCVault getMpcVault(vaultId)

Get a mpc vault information

Get detailed information about a mpc vault identified by its unique ID.  Get vault ids by calling list_mpc_vault. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
apiInstance.getMpcVault(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTssRequest

> TSSRequest getTssRequest(vaultId, tssRequestId)

Get a tss request information

Get detailed information about a tss request identified by its unique ID.  Get project ids by calling list_tss_request. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const tssRequestId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the tss request
apiInstance.getTssRequest(vaultId, tssRequestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 
 **tssRequestId** | **String**| Unique id of the tss request | 

### Return type

[**TSSRequest**](TSSRequest.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCoboKeyHolder

> [KeyHolder] listCoboKeyHolder()

List all cobo key holders

This endpoint allows users to query cobo key holders information.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
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

List all mpc key groups

Retrieves a list of all key groups.  This endpoint allows filtering by vault ID and key group type. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const opts = {
  'keyGroupType': new CoboWaas2JsApi.KeyGroupType() // KeyGroupType | The type of key group.
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
 **vaultId** | **String**| Unique id of the mpc vault | 
 **keyGroupType** | [**KeyGroupType**](.md)| The type of key group. | [optional] 

### Return type

[**[KeyGroup]**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMpcProject

> [MPCProject] listMpcProject()

List all mpc projects

Retrieves a list of mpc projects. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
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

List all mpc vaults

Retrieves a list of mpc vaults.  This endpoint allows filtering by project ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const opts = {
  'projectId': "f47ac10b-58cc-4372-a567-0e02b2c3d479" // String | Unique id of the mpc project
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
 **projectId** | **String**| Unique id of the mpc project | [optional] 

### Return type

[**[MPCVault]**](MPCVault.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTssRequest

> [TSSRequest] listTssRequest(vaultId, opts)

List tss request information by vault ID

Retrieving list of tss request information by vault ID. This endpoint allows filtering by key group ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const opts = {
  'targetKeyGroupId': "880311524363903326" // String | The target key group id of tss request.
};
apiInstance.listTssRequest(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 
 **targetKeyGroupId** | **String**| The target key group id of tss request. | [optional] 

### Return type

[**[TSSRequest]**](TSSRequest.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyMpcVault

> MPCVault modifyMpcVault(vaultId, opts)

Update a mpc vault information

Update a mpc vault name information by its ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const opts = {
  'modifyMpcVaultRequest': new CoboWaas2JsApi.ModifyMpcVaultRequest() // ModifyMpcVaultRequest | The request body to update a mpc vault
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
 **vaultId** | **String**| Unique id of the mpc vault | 
 **modifyMpcVaultRequest** | [**ModifyMpcVaultRequest**](ModifyMpcVaultRequest.md)| The request body to update a mpc vault | [optional] 

### Return type

[**MPCVault**](MPCVault.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateKeyGroup

> KeyGroup updateKeyGroup(vaultId, keyGroupId, updateKeyGroupAction)

Update a mpc key group information

Update a mpc key group type information by its ID.   Action: - UpgradeToMainKeyGroup: change group type to main key group 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const vaultId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc vault
const keyGroupId = "880311524363903326"; // String | Unique id of the tss group
const updateKeyGroupAction = "UpgradeToMainKeyGroup"; // String | The action of update key group
apiInstance.updateKeyGroup(vaultId, keyGroupId, updateKeyGroupAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| Unique id of the mpc vault | 
 **keyGroupId** | **String**| Unique id of the tss group | 
 **updateKeyGroupAction** | **String**| The action of update key group | 

### Return type

[**KeyGroup**](KeyGroup.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMpcProject

> MPCProject updateMpcProject(projectId, opts)

Update a mpc project

Update a mpc project name information by its ID. 

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2JsApi.WalletsMPCWalletApi();
const projectId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | Unique id of the mpc project
const opts = {
  'updateMpcProjectRequest': new CoboWaas2JsApi.UpdateMpcProjectRequest() // UpdateMpcProjectRequest | The request body to update a mpc project
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
 **projectId** | **String**| Unique id of the mpc project | 
 **updateMpcProjectRequest** | [**UpdateMpcProjectRequest**](UpdateMpcProjectRequest.md)| The request body to update a mpc project | [optional] 

### Return type

[**MPCProject**](MPCProject.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

