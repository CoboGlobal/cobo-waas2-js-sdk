# CoboWaas2JsApi.WalletsMPCWalletApi

All URIs are relative to *https://api.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTssRequest**](WalletsMPCWalletApi.md#cancelTssRequest) | **PUT** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | cancel tss request
[**createKeyGroup**](WalletsMPCWalletApi.md#createKeyGroup) | **POST** /wallets/mpc/vaults/{vault_id}/key_groups | create a mpc key group
[**createMpcProject**](WalletsMPCWalletApi.md#createMpcProject) | **POST** /wallets/mpc/projects | Create a mpc project
[**createMpcVault**](WalletsMPCWalletApi.md#createMpcVault) | **POST** /wallets/mpc/vaults | Create a mpc vault
[**createTssRequest**](WalletsMPCWalletApi.md#createTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests | Create a tss request to generate key secrets for a tss group
[**deleteKeyGroup**](WalletsMPCWalletApi.md#deleteKeyGroup) | **DELETE** /wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id} | delete a mpc key group
[**getKeyGroup**](WalletsMPCWalletApi.md#getKeyGroup) | **GET** /wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id} | get a mpc key group
[**getMpcProject**](WalletsMPCWalletApi.md#getMpcProject) | **GET** /wallets/mpc/projects/{project_id} | get a mpc project
[**getMpcVault**](WalletsMPCWalletApi.md#getMpcVault) | **GET** /wallets/mpc/vaults/{vault_id} | get a mpc vault
[**getTssRequest**](WalletsMPCWalletApi.md#getTssRequest) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | get a tss request
[**listCoboKeyHolder**](WalletsMPCWalletApi.md#listCoboKeyHolder) | **GET** /wallets/mpc/cobo_key_holders | List all cobo key holders
[**listKeyGroup**](WalletsMPCWalletApi.md#listKeyGroup) | **GET** /wallets/mpc/vaults/{vault_id}/key_groups | List all mpc key groups
[**listMpcProject**](WalletsMPCWalletApi.md#listMpcProject) | **GET** /wallets/mpc/projects | List all mpc projects
[**listMpcVault**](WalletsMPCWalletApi.md#listMpcVault) | **GET** /wallets/mpc/vaults | List all mpc vaults
[**listTssRequest**](WalletsMPCWalletApi.md#listTssRequest) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests | List tss request information of a vault
[**modifyMpcVault**](WalletsMPCWalletApi.md#modifyMpcVault) | **PUT** /wallets/mpc/vaults/{vault_id} | Modify a mpc vault
[**updateKeyGroup**](WalletsMPCWalletApi.md#updateKeyGroup) | **PUT** /wallets/mpc/vaults/{vault_id}/key_groups/{key_group_id} | update a mpc key group
[**updateMpcProject**](WalletsMPCWalletApi.md#updateMpcProject) | **PUT** /wallets/mpc/projects/{project_id} | update a mpc project



## cancelTssRequest

> TSSRequest cancelTssRequest(vaultId, tssRequestId, tssRequestAction)

cancel tss request

cancel tss request.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

create a mpc key group

create a mpc key group.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

create a mpc project

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

create a mpc vault

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

Create a tss request to generate key secrets for a tss group

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

delete a mpc key group

delete a mpc key group.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

get a mpc key group

get a mpc key group.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

get a mpc project

get a mpc vault

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

get a mpc vault

get a mpc vault

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

get a tss request

get a tss request.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

Retrieve a list of key holders.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

Retrieve a list of mpc key groups.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

Retrieve a list of mpc project.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

Retrieve a list of mpc vault.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

> TSSRequest listTssRequest(vaultId, opts)

List tss request information of a vault

Detailed description on retrieving list of tss request information

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

[**TSSRequest**](TSSRequest.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyMpcVault

> MPCVault modifyMpcVault(vaultId, opts)

Modify a mpc vault

modify a mpc vault

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

update a mpc key group

update a mpc key group.

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

update a mpc project

update a mpc vault

### Example

```javascript
import CoboWaas2JsApi from 'cobo-waas2-js-api';
// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
apiClient.setEnv(new CoboWaas2JsApi.Env("https://api[.sandbox].cobo.com/v2"));
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

