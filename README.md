# cobo-waas2-js-api

CoboWaas2JsApi - JavaScript client for cobo-waas2-js-api
Cobo WaaS 2.0 enables you to programmatically access Cobo's full suite of
crypto wallet technologies with powerful and flexible access controls.

# Wallet technologies
- Custodial Wallet
- MPC Wallet
- Smart Contract Wallet (Based on Safe{Wallet}, to be supported later)
- Exchange Wallet(To be supported later)

# Risk Control technologies
- Workflow
- Access Control List (ACL)

# Risk Control targets
- Wallet Management
  - User/team and their permission management
  - Risk control configurations, e.g. whitelist, blacklist, rate-limiting etc.
- Blockchain Interaction
  - Crypto transfer
  - Smart Contract Invocation

# Important
HTTPS only. RESTful, resource oriented

# Get Started
Set up your APIs or get authorization

# Authentication and Authorization
CoboAuth

# Request and Response
application/json

# Error Handling

### Common error codes
| Error Code | Description |
| -- | -- |
| `2000` | Internal error |
| `2002` | Unsupported HTTP method |
| `2003` | Missing required parameters |
| `2006` | Illegal parameter format or value |
| `2010` | Exceeded frequency limit |
| `2020` | Missing action |
| `2021` | Missing handler |
| `2022` | Missing required request header |
| `2023` | Verification failed |
| `2024` | Authentication failed |
| `2025` | Forbidden |
| `2026` | Too many requests |
| `2027` | Exceed quota limit |
| `2028` | Not found |
| `2029` | Invalid status |
| `2040` | Duplicated key |

### API-specific error codes
For error codes that are dedicated to a specific API, see the Error codes section in each API specification, for example, /v2/wallets.

# Rate and Usage Limiting

# Pagination
# Support
[Developer Hub](https://cobo.com/developers)

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.4.1
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.cobo.com/waas](https://www.cobo.com/waas)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cobo-waas2-js-api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your cobo-waas2-js-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/CoboGlobal/cobo-waas2-js-api
then install it via:

```shell
    npm install CoboGlobal/cobo-waas2-js-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const CoboWaas2JsApi = require('cobo-waas2-js-api');

// initial default api client
const apiClient = CoboWaas2JsApi.ApiClient.instance
// for dev env
//apiClient.setEnv(CoboWaas2JsApi.Env.DEV"));
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const api = new CoboWaas2JsApi.DevelopersWebhooksApi()
const opts = {
  'createWebhookEndpointRequest': new CoboWaas2JsApi.CreateWebhookEndpointRequest() // {CreateWebhookEndpointRequest} The request body to register a webhook endpoint.
};
api.createWebhookEndpoint(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.dev.cobo.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**createWebhookEndpoint**](docs/DevelopersWebhooksApi.md#createWebhookEndpoint) | **POST** /webhooks/endpoints | Register webhook endpoint
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**getWebhookEndpointById**](docs/DevelopersWebhooksApi.md#getWebhookEndpointById) | **GET** /webhooks/endpoints/{endpoint_id} | Get webhook endpoint information
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**getWebhookEventById**](docs/DevelopersWebhooksApi.md#getWebhookEventById) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id} | Retrieve event information
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**getWebhookEventLogsById**](docs/DevelopersWebhooksApi.md#getWebhookEventLogsById) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id}/logs | List event logs
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**listEvents**](docs/DevelopersWebhooksApi.md#listEvents) | **GET** /webhooks/endpoints/{endpoint_id}/events | List all events
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**listWebhookEndpoints**](docs/DevelopersWebhooksApi.md#listWebhookEndpoints) | **GET** /webhooks/endpoints | List webhook endpoints
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**listWebhookEventDefinitions**](docs/DevelopersWebhooksApi.md#listWebhookEventDefinitions) | **GET** /webhooks/events/definitions | Get webhook event types
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**retryWebhookEventById**](docs/DevelopersWebhooksApi.md#retryWebhookEventById) | **POST** /webhooks/endpoints/{endpoint_id}/events/{event_id}/retry | Retry event
*CoboWaas2JsApi.DevelopersWebhooksApi* | [**updateWebhookEndpointById**](docs/DevelopersWebhooksApi.md#updateWebhookEndpointById) | **PUT** /webhooks/endpoints/{endpoint_id} | Update webhook endpoint
*CoboWaas2JsApi.TransactionsApi* | [**cancelTransactionById**](docs/TransactionsApi.md#cancelTransactionById) | **POST** /transactions/{transaction_id}/cancel | Cancel transaction
*CoboWaas2JsApi.TransactionsApi* | [**createContractCallTransaction**](docs/TransactionsApi.md#createContractCallTransaction) | **POST** /transactions/contract_call | Call smart contract
*CoboWaas2JsApi.TransactionsApi* | [**createMessageSignTransaction**](docs/TransactionsApi.md#createMessageSignTransaction) | **POST** /transactions/message_sign | Sign message
*CoboWaas2JsApi.TransactionsApi* | [**createTransferTransaction**](docs/TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Transfer token
*CoboWaas2JsApi.TransactionsApi* | [**dropTransactionById**](docs/TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop transaction
*CoboWaas2JsApi.TransactionsApi* | [**estimateFee**](docs/TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
*CoboWaas2JsApi.TransactionsApi* | [**getTransactionById**](docs/TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information
*CoboWaas2JsApi.TransactionsApi* | [**listTransactions**](docs/TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
*CoboWaas2JsApi.TransactionsApi* | [**resendTransactionById**](docs/TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend transaction
*CoboWaas2JsApi.TransactionsApi* | [**speedupTransactionById**](docs/TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up transaction
*CoboWaas2JsApi.WalletsApi* | [**checkAddressValidity**](docs/WalletsApi.md#checkAddressValidity) | **GET** /wallets/check_address_validity | Check address validity
*CoboWaas2JsApi.WalletsApi* | [**createAddress**](docs/WalletsApi.md#createAddress) | **POST** /wallets/{wallet_id}/addresses | Create addresses in wallet
*CoboWaas2JsApi.WalletsApi* | [**createWallet**](docs/WalletsApi.md#createWallet) | **POST** /wallets | Create wallet
*CoboWaas2JsApi.WalletsApi* | [**deleteWalletById**](docs/WalletsApi.md#deleteWalletById) | **POST** /wallets/{wallet_id}/delete | Delete wallet
*CoboWaas2JsApi.WalletsApi* | [**getAddress**](docs/WalletsApi.md#getAddress) | **GET** /wallets/{wallet_id}/addresses/{address} | Get address information
*CoboWaas2JsApi.WalletsApi* | [**getChainById**](docs/WalletsApi.md#getChainById) | **GET** /wallets/chains/{chain_id} | Get chain information
*CoboWaas2JsApi.WalletsApi* | [**getMaxTransferableValue**](docs/WalletsApi.md#getMaxTransferableValue) | **GET** /wallets/{wallet_id}/max_transferable_value | Get maximum transferable value
*CoboWaas2JsApi.WalletsApi* | [**getTokenById**](docs/WalletsApi.md#getTokenById) | **GET** /wallets/tokens/{token_id} | Get token information
*CoboWaas2JsApi.WalletsApi* | [**getWalletById**](docs/WalletsApi.md#getWalletById) | **GET** /wallets/{wallet_id} | Get wallet information
*CoboWaas2JsApi.WalletsApi* | [**listAddresses**](docs/WalletsApi.md#listAddresses) | **GET** /wallets/{wallet_id}/addresses | List wallet addresses
*CoboWaas2JsApi.WalletsApi* | [**listEnabledChains**](docs/WalletsApi.md#listEnabledChains) | **GET** /wallets/enabled_chains | List enabled chains
*CoboWaas2JsApi.WalletsApi* | [**listEnabledTokens**](docs/WalletsApi.md#listEnabledTokens) | **GET** /wallets/enabled_tokens | List enabled tokens
*CoboWaas2JsApi.WalletsApi* | [**listSupportedChains**](docs/WalletsApi.md#listSupportedChains) | **GET** /wallets/chains | List supported chains
*CoboWaas2JsApi.WalletsApi* | [**listSupportedTokens**](docs/WalletsApi.md#listSupportedTokens) | **GET** /wallets/tokens | List supported tokens
*CoboWaas2JsApi.WalletsApi* | [**listTokenBalancesForAddress**](docs/WalletsApi.md#listTokenBalancesForAddress) | **GET** /wallets/{wallet_id}/addresses/{address}/tokens | List token balances by address
*CoboWaas2JsApi.WalletsApi* | [**listTokenBalancesForWallet**](docs/WalletsApi.md#listTokenBalancesForWallet) | **GET** /wallets/{wallet_id}/tokens | List token balances by wallet
*CoboWaas2JsApi.WalletsApi* | [**listUtxos**](docs/WalletsApi.md#listUtxos) | **GET** /wallets/{wallet_id}/utxos | List UTXOs
*CoboWaas2JsApi.WalletsApi* | [**listWallets**](docs/WalletsApi.md#listWallets) | **GET** /wallets | List all wallets
*CoboWaas2JsApi.WalletsApi* | [**lockUtxos**](docs/WalletsApi.md#lockUtxos) | **POST** /wallets/{wallet_id}/utxos/lock | Lock UTXOs
*CoboWaas2JsApi.WalletsApi* | [**unlockUtxos**](docs/WalletsApi.md#unlockUtxos) | **POST** /wallets/{wallet_id}/utxos/unlock | Unlock UTXOs
*CoboWaas2JsApi.WalletsApi* | [**updateWalletById**](docs/WalletsApi.md#updateWalletById) | **PUT** /wallets/{wallet_id} | Update wallet
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**cancelTssRequestById**](docs/WalletsMPCWalletsApi.md#cancelTssRequestById) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id}/cancel | Cancel TSS request
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**createKeyShareHolderGroup**](docs/WalletsMPCWalletsApi.md#createKeyShareHolderGroup) | **POST** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups | Create key share holder group
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**createMpcProject**](docs/WalletsMPCWalletsApi.md#createMpcProject) | **POST** /wallets/mpc/projects | Create project
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**createMpcVault**](docs/WalletsMPCWalletsApi.md#createMpcVault) | **POST** /wallets/mpc/vaults | Create vault
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**createTssRequest**](docs/WalletsMPCWalletsApi.md#createTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests | Create TSS request
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**deleteKeyShareHolderGroupById**](docs/WalletsMPCWalletsApi.md#deleteKeyShareHolderGroupById) | **POST** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id}/delete | Delete key share holder group
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**getKeyShareHolderGroupById**](docs/WalletsMPCWalletsApi.md#getKeyShareHolderGroupById) | **GET** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id} | Get key share holder group information
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**getMpcProjectById**](docs/WalletsMPCWalletsApi.md#getMpcProjectById) | **GET** /wallets/mpc/projects/{project_id} | Get project information
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**getMpcVaultById**](docs/WalletsMPCWalletsApi.md#getMpcVaultById) | **GET** /wallets/mpc/vaults/{vault_id} | Get vault information
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**getTssRequestById**](docs/WalletsMPCWalletsApi.md#getTssRequestById) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | Get TSS request
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**listCoboKeyHolders**](docs/WalletsMPCWalletsApi.md#listCoboKeyHolders) | **GET** /wallets/mpc/cobo_key_share_holders | List all Cobo key share holders
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**listKeyShareHolderGroups**](docs/WalletsMPCWalletsApi.md#listKeyShareHolderGroups) | **GET** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups | List all key share holder groups
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**listMpcProjects**](docs/WalletsMPCWalletsApi.md#listMpcProjects) | **GET** /wallets/mpc/projects | List all projects
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**listMpcVaults**](docs/WalletsMPCWalletsApi.md#listMpcVaults) | **GET** /wallets/mpc/vaults | List all vaults
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**listTssRequests**](docs/WalletsMPCWalletsApi.md#listTssRequests) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests | List TSS requests
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**updateKeyShareHolderGroupById**](docs/WalletsMPCWalletsApi.md#updateKeyShareHolderGroupById) | **PUT** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id} | Update key share holder group
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**updateMpcProjectById**](docs/WalletsMPCWalletsApi.md#updateMpcProjectById) | **PUT** /wallets/mpc/projects/{project_id} | Update project name
*CoboWaas2JsApi.WalletsMPCWalletsApi* | [**updateMpcVaultById**](docs/WalletsMPCWalletsApi.md#updateMpcVaultById) | **PUT** /wallets/mpc/vaults/{vault_id} | Update vault name


## Documentation for Models

 - [CoboWaas2JsApi.Activity](docs/Activity.md)
 - [CoboWaas2JsApi.ActivityInitiator](docs/ActivityInitiator.md)
 - [CoboWaas2JsApi.ActivityStatus](docs/ActivityStatus.md)
 - [CoboWaas2JsApi.ActivityType](docs/ActivityType.md)
 - [CoboWaas2JsApi.AddressEncoding](docs/AddressEncoding.md)
 - [CoboWaas2JsApi.AddressInfo](docs/AddressInfo.md)
 - [CoboWaas2JsApi.AddressTransferDestination](docs/AddressTransferDestination.md)
 - [CoboWaas2JsApi.AddressTransferDestinationAccountOutput](docs/AddressTransferDestinationAccountOutput.md)
 - [CoboWaas2JsApi.AddressTransferDestinationUtxoOutputs](docs/AddressTransferDestinationUtxoOutputs.md)
 - [CoboWaas2JsApi.AddressTransferDestinationUtxoOutputsOutputsInner](docs/AddressTransferDestinationUtxoOutputsOutputsInner.md)
 - [CoboWaas2JsApi.AddressTransferSource](docs/AddressTransferSource.md)
 - [CoboWaas2JsApi.AmountDetailsInner](docs/AmountDetailsInner.md)
 - [CoboWaas2JsApi.AmountStatus](docs/AmountStatus.md)
 - [CoboWaas2JsApi.AssetBalance](docs/AssetBalance.md)
 - [CoboWaas2JsApi.AssetInfo](docs/AssetInfo.md)
 - [CoboWaas2JsApi.BabylonStakeExtra](docs/BabylonStakeExtra.md)
 - [CoboWaas2JsApi.BabylonValidator](docs/BabylonValidator.md)
 - [CoboWaas2JsApi.BaseContractCallSource](docs/BaseContractCallSource.md)
 - [CoboWaas2JsApi.BaseEstimateStakingFee](docs/BaseEstimateStakingFee.md)
 - [CoboWaas2JsApi.BaseStakeExtra](docs/BaseStakeExtra.md)
 - [CoboWaas2JsApi.BaseTransferSource](docs/BaseTransferSource.md)
 - [CoboWaas2JsApi.ChainInfo](docs/ChainInfo.md)
 - [CoboWaas2JsApi.CheckAddressValidity200Response](docs/CheckAddressValidity200Response.md)
 - [CoboWaas2JsApi.ContractCall](docs/ContractCall.md)
 - [CoboWaas2JsApi.ContractCallSource](docs/ContractCallSource.md)
 - [CoboWaas2JsApi.CreateAddressRequest](docs/CreateAddressRequest.md)
 - [CoboWaas2JsApi.CreateCustodialWallet](docs/CreateCustodialWallet.md)
 - [CoboWaas2JsApi.CreateExchangeWallet](docs/CreateExchangeWallet.md)
 - [CoboWaas2JsApi.CreateKeyShareHolder](docs/CreateKeyShareHolder.md)
 - [CoboWaas2JsApi.CreateKeyShareHolderGroupRequest](docs/CreateKeyShareHolderGroupRequest.md)
 - [CoboWaas2JsApi.CreateMpcProjectRequest](docs/CreateMpcProjectRequest.md)
 - [CoboWaas2JsApi.CreateMpcVaultRequest](docs/CreateMpcVaultRequest.md)
 - [CoboWaas2JsApi.CreateMpcWallet](docs/CreateMpcWallet.md)
 - [CoboWaas2JsApi.CreateSafeWallet](docs/CreateSafeWallet.md)
 - [CoboWaas2JsApi.CreateSafeWalletAllOfInitiator](docs/CreateSafeWalletAllOfInitiator.md)
 - [CoboWaas2JsApi.CreateSmartContractWallet](docs/CreateSmartContractWallet.md)
 - [CoboWaas2JsApi.CreateStakeActivity](docs/CreateStakeActivity.md)
 - [CoboWaas2JsApi.CreateStakeActivityExtra](docs/CreateStakeActivityExtra.md)
 - [CoboWaas2JsApi.CreateTransferTransaction201Response](docs/CreateTransferTransaction201Response.md)
 - [CoboWaas2JsApi.CreateTssRequestRequest](docs/CreateTssRequestRequest.md)
 - [CoboWaas2JsApi.CreateTssRequestRequestDetailParams](docs/CreateTssRequestRequestDetailParams.md)
 - [CoboWaas2JsApi.CreateUnstakeActivity](docs/CreateUnstakeActivity.md)
 - [CoboWaas2JsApi.CreateWebhookEndpointRequest](docs/CreateWebhookEndpointRequest.md)
 - [CoboWaas2JsApi.CreateWithdrawActivity](docs/CreateWithdrawActivity.md)
 - [CoboWaas2JsApi.CreatedWallet](docs/CreatedWallet.md)
 - [CoboWaas2JsApi.CurveType](docs/CurveType.md)
 - [CoboWaas2JsApi.CustodialWalletInfo](docs/CustodialWalletInfo.md)
 - [CoboWaas2JsApi.DeleteKeyShareHolderGroupById201Response](docs/DeleteKeyShareHolderGroupById201Response.md)
 - [CoboWaas2JsApi.DeleteWalletById201Response](docs/DeleteWalletById201Response.md)
 - [CoboWaas2JsApi.EigenLayerLstStakeExtra](docs/EigenLayerLstStakeExtra.md)
 - [CoboWaas2JsApi.EigenLayerNativeStakeExtra](docs/EigenLayerNativeStakeExtra.md)
 - [CoboWaas2JsApi.EigenlayerValidator](docs/EigenlayerValidator.md)
 - [CoboWaas2JsApi.Endpoint](docs/Endpoint.md)
 - [CoboWaas2JsApi.EndpointStatus](docs/EndpointStatus.md)
 - [CoboWaas2JsApi.ErrorResponse](docs/ErrorResponse.md)
 - [CoboWaas2JsApi.EstimateFee](docs/EstimateFee.md)
 - [CoboWaas2JsApi.EstimateFeeContractCall](docs/EstimateFeeContractCall.md)
 - [CoboWaas2JsApi.EstimateFeeContractCallDestination](docs/EstimateFeeContractCallDestination.md)
 - [CoboWaas2JsApi.EstimateFeeTransfer](docs/EstimateFeeTransfer.md)
 - [CoboWaas2JsApi.EstimateStakeFee](docs/EstimateStakeFee.md)
 - [CoboWaas2JsApi.EstimateUnstakeFee](docs/EstimateUnstakeFee.md)
 - [CoboWaas2JsApi.EstimateWithdrawFee](docs/EstimateWithdrawFee.md)
 - [CoboWaas2JsApi.EstimationFee](docs/EstimationFee.md)
 - [CoboWaas2JsApi.EvmEip1559Fee](docs/EvmEip1559Fee.md)
 - [CoboWaas2JsApi.EvmEip1559FeeBasePrice](docs/EvmEip1559FeeBasePrice.md)
 - [CoboWaas2JsApi.EvmEip1559FeePrice](docs/EvmEip1559FeePrice.md)
 - [CoboWaas2JsApi.EvmEip1559FeeSlow](docs/EvmEip1559FeeSlow.md)
 - [CoboWaas2JsApi.EvmEip1559TransactionFee](docs/EvmEip1559TransactionFee.md)
 - [CoboWaas2JsApi.EvmLegacyFee](docs/EvmLegacyFee.md)
 - [CoboWaas2JsApi.EvmLegacyFeeBasePrice](docs/EvmLegacyFeeBasePrice.md)
 - [CoboWaas2JsApi.EvmLegacyFeePrice](docs/EvmLegacyFeePrice.md)
 - [CoboWaas2JsApi.EvmLegacyFeeSlow](docs/EvmLegacyFeeSlow.md)
 - [CoboWaas2JsApi.EvmLegacyTransactionFee](docs/EvmLegacyTransactionFee.md)
 - [CoboWaas2JsApi.ExchangeId](docs/ExchangeId.md)
 - [CoboWaas2JsApi.ExchangeTransferDestination](docs/ExchangeTransferDestination.md)
 - [CoboWaas2JsApi.ExchangeTransferSource](docs/ExchangeTransferSource.md)
 - [CoboWaas2JsApi.ExchangeWalletInfo](docs/ExchangeWalletInfo.md)
 - [CoboWaas2JsApi.ExchangeWalletInfoAllOfSubAccounts](docs/ExchangeWalletInfoAllOfSubAccounts.md)
 - [CoboWaas2JsApi.ExtendedTokenInfo](docs/ExtendedTokenInfo.md)
 - [CoboWaas2JsApi.FeeAmount](docs/FeeAmount.md)
 - [CoboWaas2JsApi.FeeData](docs/FeeData.md)
 - [CoboWaas2JsApi.FeeRate](docs/FeeRate.md)
 - [CoboWaas2JsApi.FeeType](docs/FeeType.md)
 - [CoboWaas2JsApi.FixedFee](docs/FixedFee.md)
 - [CoboWaas2JsApi.KeyShareHolder](docs/KeyShareHolder.md)
 - [CoboWaas2JsApi.KeyShareHolderGroup](docs/KeyShareHolderGroup.md)
 - [CoboWaas2JsApi.KeyShareHolderGroupStatus](docs/KeyShareHolderGroupStatus.md)
 - [CoboWaas2JsApi.KeyShareHolderGroupType](docs/KeyShareHolderGroupType.md)
 - [CoboWaas2JsApi.KeyShareHolderStatus](docs/KeyShareHolderStatus.md)
 - [CoboWaas2JsApi.KeyShareHolderType](docs/KeyShareHolderType.md)
 - [CoboWaas2JsApi.ListAddresses200Response](docs/ListAddresses200Response.md)
 - [CoboWaas2JsApi.ListEvents200Response](docs/ListEvents200Response.md)
 - [CoboWaas2JsApi.ListKeyShareHolderGroups200Response](docs/ListKeyShareHolderGroups200Response.md)
 - [CoboWaas2JsApi.ListMpcProjects200Response](docs/ListMpcProjects200Response.md)
 - [CoboWaas2JsApi.ListMpcVaults200Response](docs/ListMpcVaults200Response.md)
 - [CoboWaas2JsApi.ListSupportedChains200Response](docs/ListSupportedChains200Response.md)
 - [CoboWaas2JsApi.ListSupportedTokens200Response](docs/ListSupportedTokens200Response.md)
 - [CoboWaas2JsApi.ListTokenBalancesForAddress200Response](docs/ListTokenBalancesForAddress200Response.md)
 - [CoboWaas2JsApi.ListTransactions200Response](docs/ListTransactions200Response.md)
 - [CoboWaas2JsApi.ListTssRequests200Response](docs/ListTssRequests200Response.md)
 - [CoboWaas2JsApi.ListUtxos200Response](docs/ListUtxos200Response.md)
 - [CoboWaas2JsApi.ListWallets200Response](docs/ListWallets200Response.md)
 - [CoboWaas2JsApi.ListWebhookEndpoints200Response](docs/ListWebhookEndpoints200Response.md)
 - [CoboWaas2JsApi.ListWebhookEventDefinitions200ResponseInner](docs/ListWebhookEventDefinitions200ResponseInner.md)
 - [CoboWaas2JsApi.LockUtxos201Response](docs/LockUtxos201Response.md)
 - [CoboWaas2JsApi.LockUtxosRequest](docs/LockUtxosRequest.md)
 - [CoboWaas2JsApi.LockUtxosRequestUtxosInner](docs/LockUtxosRequestUtxosInner.md)
 - [CoboWaas2JsApi.MPCProject](docs/MPCProject.md)
 - [CoboWaas2JsApi.MPCVault](docs/MPCVault.md)
 - [CoboWaas2JsApi.MPCVaultType](docs/MPCVaultType.md)
 - [CoboWaas2JsApi.MPCWalletInfo](docs/MPCWalletInfo.md)
 - [CoboWaas2JsApi.MaxTransferableValue](docs/MaxTransferableValue.md)
 - [CoboWaas2JsApi.MpcContractCallSource](docs/MpcContractCallSource.md)
 - [CoboWaas2JsApi.MpcSigningGroup](docs/MpcSigningGroup.md)
 - [CoboWaas2JsApi.MpcTransferSource](docs/MpcTransferSource.md)
 - [CoboWaas2JsApi.MpcTransferSourceAllOfUtxoInputs](docs/MpcTransferSourceAllOfUtxoInputs.md)
 - [CoboWaas2JsApi.MpcTransferSourceAllOfUtxoInputsExcludedInputs](docs/MpcTransferSourceAllOfUtxoInputsExcludedInputs.md)
 - [CoboWaas2JsApi.MpcTransferSourceAllOfUtxoInputsIncludedInputs](docs/MpcTransferSourceAllOfUtxoInputsIncludedInputs.md)
 - [CoboWaas2JsApi.Pagination](docs/Pagination.md)
 - [CoboWaas2JsApi.PoolDetails](docs/PoolDetails.md)
 - [CoboWaas2JsApi.PoolDetailsAllOfValidatorsInfo](docs/PoolDetailsAllOfValidatorsInfo.md)
 - [CoboWaas2JsApi.PoolSummary](docs/PoolSummary.md)
 - [CoboWaas2JsApi.ReplaceType](docs/ReplaceType.md)
 - [CoboWaas2JsApi.RetryWebhookEventById201Response](docs/RetryWebhookEventById201Response.md)
 - [CoboWaas2JsApi.RootPubkey](docs/RootPubkey.md)
 - [CoboWaas2JsApi.SafeContractCallSource](docs/SafeContractCallSource.md)
 - [CoboWaas2JsApi.SafeContractCallSourceAllOfDelegate](docs/SafeContractCallSourceAllOfDelegate.md)
 - [CoboWaas2JsApi.SafeTransferSource](docs/SafeTransferSource.md)
 - [CoboWaas2JsApi.SafeTransferSourceAllOfDelegate](docs/SafeTransferSourceAllOfDelegate.md)
 - [CoboWaas2JsApi.SafeWallet](docs/SafeWallet.md)
 - [CoboWaas2JsApi.SafeWalletAllOfInitiator](docs/SafeWalletAllOfInitiator.md)
 - [CoboWaas2JsApi.SignMessage](docs/SignMessage.md)
 - [CoboWaas2JsApi.SignMessageDestination](docs/SignMessageDestination.md)
 - [CoboWaas2JsApi.SignMessageSource](docs/SignMessageSource.md)
 - [CoboWaas2JsApi.SmartContractWalletInfo](docs/SmartContractWalletInfo.md)
 - [CoboWaas2JsApi.SmartContractWalletOperationType](docs/SmartContractWalletOperationType.md)
 - [CoboWaas2JsApi.SmartContractWalletType](docs/SmartContractWalletType.md)
 - [CoboWaas2JsApi.StakingPoolType](docs/StakingPoolType.md)
 - [CoboWaas2JsApi.Stakings](docs/Stakings.md)
 - [CoboWaas2JsApi.StakingsValidatorInfo](docs/StakingsValidatorInfo.md)
 - [CoboWaas2JsApi.TSSGroups](docs/TSSGroups.md)
 - [CoboWaas2JsApi.TSSRequest](docs/TSSRequest.md)
 - [CoboWaas2JsApi.TSSRequestStatus](docs/TSSRequestStatus.md)
 - [CoboWaas2JsApi.TSSRequestType](docs/TSSRequestType.md)
 - [CoboWaas2JsApi.TokenBalance](docs/TokenBalance.md)
 - [CoboWaas2JsApi.TokenBalanceBalance](docs/TokenBalanceBalance.md)
 - [CoboWaas2JsApi.TokenInfo](docs/TokenInfo.md)
 - [CoboWaas2JsApi.Transaction](docs/Transaction.md)
 - [CoboWaas2JsApi.TransactionAddressDestination](docs/TransactionAddressDestination.md)
 - [CoboWaas2JsApi.TransactionAddressDestinationAccountOutput](docs/TransactionAddressDestinationAccountOutput.md)
 - [CoboWaas2JsApi.TransactionAddressDestinationUtxoOutputs](docs/TransactionAddressDestinationUtxoOutputs.md)
 - [CoboWaas2JsApi.TransactionAddressDestinationUtxoOutputsOutputsInner](docs/TransactionAddressDestinationUtxoOutputsOutputsInner.md)
 - [CoboWaas2JsApi.TransactionAddressSource](docs/TransactionAddressSource.md)
 - [CoboWaas2JsApi.TransactionAddressSourceAccountInput](docs/TransactionAddressSourceAccountInput.md)
 - [CoboWaas2JsApi.TransactionAddressSourceUtxoInputsInner](docs/TransactionAddressSourceUtxoInputsInner.md)
 - [CoboWaas2JsApi.TransactionAddressType](docs/TransactionAddressType.md)
 - [CoboWaas2JsApi.TransactionApprover](docs/TransactionApprover.md)
 - [CoboWaas2JsApi.TransactionContractCallDestination](docs/TransactionContractCallDestination.md)
 - [CoboWaas2JsApi.TransactionCustodialWalletDestination](docs/TransactionCustodialWalletDestination.md)
 - [CoboWaas2JsApi.TransactionCustodialWalletSource](docs/TransactionCustodialWalletSource.md)
 - [CoboWaas2JsApi.TransactionDestination](docs/TransactionDestination.md)
 - [CoboWaas2JsApi.TransactionDestinationType](docs/TransactionDestinationType.md)
 - [CoboWaas2JsApi.TransactionDetail](docs/TransactionDetail.md)
 - [CoboWaas2JsApi.TransactionDetailAllOfTimeline](docs/TransactionDetailAllOfTimeline.md)
 - [CoboWaas2JsApi.TransactionDetails](docs/TransactionDetails.md)
 - [CoboWaas2JsApi.TransactionEventData](docs/TransactionEventData.md)
 - [CoboWaas2JsApi.TransactionEvmEip1559Fee](docs/TransactionEvmEip1559Fee.md)
 - [CoboWaas2JsApi.TransactionEvmLegacyFee](docs/TransactionEvmLegacyFee.md)
 - [CoboWaas2JsApi.TransactionExchangeWalletDestination](docs/TransactionExchangeWalletDestination.md)
 - [CoboWaas2JsApi.TransactionExchangeWalletSource](docs/TransactionExchangeWalletSource.md)
 - [CoboWaas2JsApi.TransactionFee](docs/TransactionFee.md)
 - [CoboWaas2JsApi.TransactionFeeStationWalletSource](docs/TransactionFeeStationWalletSource.md)
 - [CoboWaas2JsApi.TransactionFixedFee](docs/TransactionFixedFee.md)
 - [CoboWaas2JsApi.TransactionInitiatorType](docs/TransactionInitiatorType.md)
 - [CoboWaas2JsApi.TransactionMPCWalletDestination](docs/TransactionMPCWalletDestination.md)
 - [CoboWaas2JsApi.TransactionMPCWalletSource](docs/TransactionMPCWalletSource.md)
 - [CoboWaas2JsApi.TransactionMPCWalletSourceAccountInput](docs/TransactionMPCWalletSourceAccountInput.md)
 - [CoboWaas2JsApi.TransactionMPCWalletSourceUtxoInputsInner](docs/TransactionMPCWalletSourceUtxoInputsInner.md)
 - [CoboWaas2JsApi.TransactionMessageSignDestination](docs/TransactionMessageSignDestination.md)
 - [CoboWaas2JsApi.TransactionRbf](docs/TransactionRbf.md)
 - [CoboWaas2JsApi.TransactionReplacement](docs/TransactionReplacement.md)
 - [CoboWaas2JsApi.TransactionResend](docs/TransactionResend.md)
 - [CoboWaas2JsApi.TransactionSafeWalletDestination](docs/TransactionSafeWalletDestination.md)
 - [CoboWaas2JsApi.TransactionSafeWalletSource](docs/TransactionSafeWalletSource.md)
 - [CoboWaas2JsApi.TransactionSafeWalletSourceDelegate](docs/TransactionSafeWalletSourceDelegate.md)
 - [CoboWaas2JsApi.TransactionSigner](docs/TransactionSigner.md)
 - [CoboWaas2JsApi.TransactionSource](docs/TransactionSource.md)
 - [CoboWaas2JsApi.TransactionSourceType](docs/TransactionSourceType.md)
 - [CoboWaas2JsApi.TransactionStatus](docs/TransactionStatus.md)
 - [CoboWaas2JsApi.TransactionSubStatus](docs/TransactionSubStatus.md)
 - [CoboWaas2JsApi.TransactionTimeline](docs/TransactionTimeline.md)
 - [CoboWaas2JsApi.TransactionTokeApproval](docs/TransactionTokeApproval.md)
 - [CoboWaas2JsApi.TransactionTokenAmount](docs/TransactionTokenAmount.md)
 - [CoboWaas2JsApi.TransactionTransferFee](docs/TransactionTransferFee.md)
 - [CoboWaas2JsApi.TransactionType](docs/TransactionType.md)
 - [CoboWaas2JsApi.TransactionUtxoFee](docs/TransactionUtxoFee.md)
 - [CoboWaas2JsApi.Transfer](docs/Transfer.md)
 - [CoboWaas2JsApi.TransferDestination](docs/TransferDestination.md)
 - [CoboWaas2JsApi.TransferDestinationType](docs/TransferDestinationType.md)
 - [CoboWaas2JsApi.TransferSource](docs/TransferSource.md)
 - [CoboWaas2JsApi.UTXO](docs/UTXO.md)
 - [CoboWaas2JsApi.UpdateKeyShareHolderGroupByIdRequest](docs/UpdateKeyShareHolderGroupByIdRequest.md)
 - [CoboWaas2JsApi.UpdateMpcProjectByIdRequest](docs/UpdateMpcProjectByIdRequest.md)
 - [CoboWaas2JsApi.UpdateMpcVaultByIdRequest](docs/UpdateMpcVaultByIdRequest.md)
 - [CoboWaas2JsApi.UpdateWalletByIdRequest](docs/UpdateWalletByIdRequest.md)
 - [CoboWaas2JsApi.UpdateWebhookEndpointByIdRequest](docs/UpdateWebhookEndpointByIdRequest.md)
 - [CoboWaas2JsApi.UtxoFee](docs/UtxoFee.md)
 - [CoboWaas2JsApi.UtxoFeeBasePrice](docs/UtxoFeeBasePrice.md)
 - [CoboWaas2JsApi.UtxoFeePrice](docs/UtxoFeePrice.md)
 - [CoboWaas2JsApi.UtxoFeeSlow](docs/UtxoFeeSlow.md)
 - [CoboWaas2JsApi.UtxoTransactionFee](docs/UtxoTransactionFee.md)
 - [CoboWaas2JsApi.WalletInfo](docs/WalletInfo.md)
 - [CoboWaas2JsApi.WalletSubtype](docs/WalletSubtype.md)
 - [CoboWaas2JsApi.WalletType](docs/WalletType.md)
 - [CoboWaas2JsApi.WebhookEvent](docs/WebhookEvent.md)
 - [CoboWaas2JsApi.WebhookEventData](docs/WebhookEventData.md)
 - [CoboWaas2JsApi.WebhookEventDataType](docs/WebhookEventDataType.md)
 - [CoboWaas2JsApi.WebhookEventLog](docs/WebhookEventLog.md)
 - [CoboWaas2JsApi.WebhookEventStatus](docs/WebhookEventStatus.md)
 - [CoboWaas2JsApi.WebhookEventType](docs/WebhookEventType.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### CoboAuth


- **Type**: API key
- **API key parameter name**: BIZ-API-KEY
- **Location**: HTTP header

### OAuth2


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.cobo.com/authorize
- **Scopes**: 
  - custodial_asset_wallet:create: Create access to custodial asset wallets
  - custodial_asset_wallet:add: Generate address access to custodial asset wallets
  - custodial_asset_wallet:edit: Change wallet name access to custodial asset wallets
  - custodial_asset_wallet:withdraw: Withdraw access to custodial asset wallets
  - mpc_organization_controlled_wallet:create: Create access to MPC organization-controlled wallets
  - mpc_organization_controlled_wallet:add: Generate address access to MPC organization-controlled wallets
  - mpc_organization_controlled_wallet:edit: Change wallet name access to MPC organization-controlled wallets
  - mpc_organization_controlled_wallet:withdraw: Withdraw access to MPC organization-controlled wallets
  - mpc_organization_controlled_wallet:contract_call: Contract call access to MPC organization-controlled wallets
  - mpc_organization_controlled_wallet:message_sign: Message sign access to MPC organization-controlled wallets
  - mpc_organization_controlled_vault:manage: Create/Edit access to MPC organization-controlled vaults
  - mpc_organization_controlled_key_group:manage: Create/Edit/Delete access to MPC organization-controlled key groups
  - mpc_organization_controlled_tss_request:manage: Create/Cancel access to MPC organization-controlled tss requests
  - mpc_user_controlled_wallet:create: Create access to MPC user-controlled wallets
  - mpc_user_controlled_wallet:add: Generate address access to MPC user-controlled wallets
  - mpc_user_controlled_wallet:edit: Change wallet name access to MPC user-controlled wallets
  - mpc_user_controlled_wallet:withdraw: Withdraw access to MPC user-controlled wallets
  - mpc_user_controlled_wallet:contract_call: Contract call access to MPC user-controlled wallets
  - mpc_user_controlled_wallet:message_sign: Message sign access to MPC user-controlled wallets
  - mpc_user_controlled_project:manage: Create/Edit access to MPC user-controlled projects
  - mpc_user_controlled_vault:manage: Create/Edit access to MPC user-controlled vaults
  - mpc_user_controlled_key_group:manage: Create/Edit/Delete access to MPC user-controlled key groups
  - mpc_user_controlled_tss_request:manage: Create/Cancel access to MPC user-controlled tss requests
  - webhook:resend: Resend access to webhook events
  - webhook_url:edit: Create/Edit access to webhook urls

