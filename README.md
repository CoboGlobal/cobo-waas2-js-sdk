# cobo-waas2-js-sdk

CoboWaas2 - JavaScript client for cobo-waas2-js-sdk
The Cobo Wallet-as-a-Service (WaaS) 2.0 API is the latest version of Cobo’s WaaS API offering. It enables you to access Cobo’s full suite of crypto wallet technologies with powerful and flexible access controls. By encapsulating complex security protocols and streamlining blockchain interactions, this API allows you to concentrate on your core business activities without worrying about the safety of your assets. The WaaS 2.0 API presents the following key features:

- A unified API for Cobo’s [all four wallet types](https://manuals.cobo.com/en/portal/introduction#an-all-in-one-wallet-platform)
- Support for 80+ chains and 3000+ tokens
- A comprehensive selection of webhook events
- Flexible usage models for MPC wallets, including [Organization-Controlled Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/introduction) and [User-Controlled Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/ucw/introduction)
- Programmatic control of smart contract wallets such as Safe{Wallet} with fine-grained access controls
- Seamlessly transfer funds across multiple exchanges, including Binance, OKX, Bybit, Deribit, and more

For more information about the WaaS 2.0 API, see [Introduction to WaaS 2.0](https://www.cobo.com/developers/v2/guides/overview/introduction).

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v2
- Package version: 1.2.3
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.cobo.com/waas](https://www.cobo.com/waas)

## Installation

```shell
npm install @cobo/cobo-waas2 --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.WalletsApi();
const opts = {
  'wallet_type': new CoboWaas2.WalletType().Custodial,
  'wallet_subtype': new CoboWaas2.WalletSubtype().Asset,
  'chain_ids': "BTC,ETH",
  'limit': 10,
  'before': "",
  'after': ""
};
apiInstance.listSupportedChains(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.dev.cobo.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoboWaas2.DevelopersWebhooksApi* | [**createWebhookEndpoint**](docs/DevelopersWebhooksApi.md#createWebhookEndpoint) | **POST** /webhooks/endpoints | Register webhook endpoint
*CoboWaas2.DevelopersWebhooksApi* | [**getWebhookEndpointById**](docs/DevelopersWebhooksApi.md#getWebhookEndpointById) | **GET** /webhooks/endpoints/{endpoint_id} | Get webhook endpoint information
*CoboWaas2.DevelopersWebhooksApi* | [**getWebhookEventById**](docs/DevelopersWebhooksApi.md#getWebhookEventById) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id} | Retrieve event information
*CoboWaas2.DevelopersWebhooksApi* | [**listWebhookEndpoints**](docs/DevelopersWebhooksApi.md#listWebhookEndpoints) | **GET** /webhooks/endpoints | List webhook endpoints
*CoboWaas2.DevelopersWebhooksApi* | [**listWebhookEventDefinitions**](docs/DevelopersWebhooksApi.md#listWebhookEventDefinitions) | **GET** /webhooks/events/definitions | Get webhook event types
*CoboWaas2.DevelopersWebhooksApi* | [**listWebhookEventLogs**](docs/DevelopersWebhooksApi.md#listWebhookEventLogs) | **GET** /webhooks/endpoints/{endpoint_id}/events/{event_id}/logs | List webhook event logs
*CoboWaas2.DevelopersWebhooksApi* | [**listWebhookEvents**](docs/DevelopersWebhooksApi.md#listWebhookEvents) | **GET** /webhooks/endpoints/{endpoint_id}/events | List all webhook events
*CoboWaas2.DevelopersWebhooksApi* | [**retryWebhookEventById**](docs/DevelopersWebhooksApi.md#retryWebhookEventById) | **POST** /webhooks/endpoints/{endpoint_id}/events/{event_id}/retry | Retry event
*CoboWaas2.DevelopersWebhooksApi* | [**updateWebhookEndpointById**](docs/DevelopersWebhooksApi.md#updateWebhookEndpointById) | **PUT** /webhooks/endpoints/{endpoint_id} | Update webhook endpoint
*CoboWaas2.OAuthApi* | [**getToken**](docs/OAuthApi.md#getToken) | **GET** /oauth/token | Get access token
*CoboWaas2.OAuthApi* | [**refreshToken**](docs/OAuthApi.md#refreshToken) | **POST** /oauth/token | Refresh access token
*CoboWaas2.TransactionsApi* | [**cancelTransactionById**](docs/TransactionsApi.md#cancelTransactionById) | **POST** /transactions/{transaction_id}/cancel | Cancel transaction
*CoboWaas2.TransactionsApi* | [**createContractCallTransaction**](docs/TransactionsApi.md#createContractCallTransaction) | **POST** /transactions/contract_call | Call smart contract
*CoboWaas2.TransactionsApi* | [**createMessageSignTransaction**](docs/TransactionsApi.md#createMessageSignTransaction) | **POST** /transactions/message_sign | Sign message
*CoboWaas2.TransactionsApi* | [**createTransferTransaction**](docs/TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Transfer token
*CoboWaas2.TransactionsApi* | [**dropTransactionById**](docs/TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop transaction
*CoboWaas2.TransactionsApi* | [**estimateFee**](docs/TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
*CoboWaas2.TransactionsApi* | [**getTransactionById**](docs/TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information
*CoboWaas2.TransactionsApi* | [**listTransactions**](docs/TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
*CoboWaas2.TransactionsApi* | [**resendTransactionById**](docs/TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend transaction
*CoboWaas2.TransactionsApi* | [**speedupTransactionById**](docs/TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up transaction
*CoboWaas2.WalletsApi* | [**checkAddressValidity**](docs/WalletsApi.md#checkAddressValidity) | **GET** /wallets/check_address_validity | Check address validity
*CoboWaas2.WalletsApi* | [**checkAddressesValidity**](docs/WalletsApi.md#checkAddressesValidity) | **GET** /wallets/check_addresses_validity | Check addresses validity
*CoboWaas2.WalletsApi* | [**checkLoopTransfers**](docs/WalletsApi.md#checkLoopTransfers) | **GET** /wallets/check_loop_transfers | Check Loop transfers
*CoboWaas2.WalletsApi* | [**createAddress**](docs/WalletsApi.md#createAddress) | **POST** /wallets/{wallet_id}/addresses | Create addresses in wallet
*CoboWaas2.WalletsApi* | [**createWallet**](docs/WalletsApi.md#createWallet) | **POST** /wallets | Create wallet
*CoboWaas2.WalletsApi* | [**deleteWalletById**](docs/WalletsApi.md#deleteWalletById) | **POST** /wallets/{wallet_id}/delete | Delete wallet
*CoboWaas2.WalletsApi* | [**getAddress**](docs/WalletsApi.md#getAddress) | **GET** /wallets/{wallet_id}/addresses/{address} | Get address information
*CoboWaas2.WalletsApi* | [**getChainById**](docs/WalletsApi.md#getChainById) | **GET** /wallets/chains/{chain_id} | Get chain information
*CoboWaas2.WalletsApi* | [**getMaxTransferableValue**](docs/WalletsApi.md#getMaxTransferableValue) | **GET** /wallets/{wallet_id}/max_transferable_value | Get maximum transferable value
*CoboWaas2.WalletsApi* | [**getTokenById**](docs/WalletsApi.md#getTokenById) | **GET** /wallets/tokens/{token_id} | Get token information
*CoboWaas2.WalletsApi* | [**getWalletById**](docs/WalletsApi.md#getWalletById) | **GET** /wallets/{wallet_id} | Get wallet information
*CoboWaas2.WalletsApi* | [**listAddresses**](docs/WalletsApi.md#listAddresses) | **GET** /wallets/{wallet_id}/addresses | List wallet addresses
*CoboWaas2.WalletsApi* | [**listEnabledChains**](docs/WalletsApi.md#listEnabledChains) | **GET** /wallets/enabled_chains | List enabled chains
*CoboWaas2.WalletsApi* | [**listEnabledTokens**](docs/WalletsApi.md#listEnabledTokens) | **GET** /wallets/enabled_tokens | List enabled tokens
*CoboWaas2.WalletsApi* | [**listSupportedChains**](docs/WalletsApi.md#listSupportedChains) | **GET** /wallets/chains | List supported chains
*CoboWaas2.WalletsApi* | [**listSupportedTokens**](docs/WalletsApi.md#listSupportedTokens) | **GET** /wallets/tokens | List supported tokens
*CoboWaas2.WalletsApi* | [**listTokenBalancesForAddress**](docs/WalletsApi.md#listTokenBalancesForAddress) | **GET** /wallets/{wallet_id}/addresses/{address}/tokens | List token balances by address
*CoboWaas2.WalletsApi* | [**listTokenBalancesForWallet**](docs/WalletsApi.md#listTokenBalancesForWallet) | **GET** /wallets/{wallet_id}/tokens | List token balances by wallet
*CoboWaas2.WalletsApi* | [**listUtxos**](docs/WalletsApi.md#listUtxos) | **GET** /wallets/{wallet_id}/utxos | List UTXOs
*CoboWaas2.WalletsApi* | [**listWallets**](docs/WalletsApi.md#listWallets) | **GET** /wallets | List all wallets
*CoboWaas2.WalletsApi* | [**lockUtxos**](docs/WalletsApi.md#lockUtxos) | **POST** /wallets/{wallet_id}/utxos/lock | Lock UTXOs
*CoboWaas2.WalletsApi* | [**unlockUtxos**](docs/WalletsApi.md#unlockUtxos) | **POST** /wallets/{wallet_id}/utxos/unlock | Unlock UTXOs
*CoboWaas2.WalletsApi* | [**updateWalletById**](docs/WalletsApi.md#updateWalletById) | **PUT** /wallets/{wallet_id} | Update wallet
*CoboWaas2.WalletsExchangeWalletApi* | [**listAssetBalancesForExchangeWallet**](docs/WalletsExchangeWalletApi.md#listAssetBalancesForExchangeWallet) | **GET** /wallets/{wallet_id}/exchanges/assets | List asset balances
*CoboWaas2.WalletsExchangeWalletApi* | [**listExchanges**](docs/WalletsExchangeWalletApi.md#listExchanges) | **GET** /wallets/exchanges | List supported exchanges
*CoboWaas2.WalletsExchangeWalletApi* | [**listSupportedAssetsForExchange**](docs/WalletsExchangeWalletApi.md#listSupportedAssetsForExchange) | **GET** /wallets/exchanges/{exchange_id}/assets | List supported assets
*CoboWaas2.WalletsExchangeWalletApi* | [**listSupportedChainsForExchange**](docs/WalletsExchangeWalletApi.md#listSupportedChainsForExchange) | **GET** /wallets/exchanges/{exchange_id}/assets/{asset_id}/chains | List supported chains
*CoboWaas2.WalletsMPCWalletsApi* | [**cancelTssRequestById**](docs/WalletsMPCWalletsApi.md#cancelTssRequestById) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id}/cancel | Cancel TSS request
*CoboWaas2.WalletsMPCWalletsApi* | [**createKeyShareHolderGroup**](docs/WalletsMPCWalletsApi.md#createKeyShareHolderGroup) | **POST** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups | Create key share holder group
*CoboWaas2.WalletsMPCWalletsApi* | [**createMpcProject**](docs/WalletsMPCWalletsApi.md#createMpcProject) | **POST** /wallets/mpc/projects | Create project
*CoboWaas2.WalletsMPCWalletsApi* | [**createMpcVault**](docs/WalletsMPCWalletsApi.md#createMpcVault) | **POST** /wallets/mpc/vaults | Create vault
*CoboWaas2.WalletsMPCWalletsApi* | [**createTssRequest**](docs/WalletsMPCWalletsApi.md#createTssRequest) | **POST** /wallets/mpc/vaults/{vault_id}/tss_requests | Create TSS request
*CoboWaas2.WalletsMPCWalletsApi* | [**deleteKeyShareHolderGroupById**](docs/WalletsMPCWalletsApi.md#deleteKeyShareHolderGroupById) | **POST** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id}/delete | Delete key share holder group
*CoboWaas2.WalletsMPCWalletsApi* | [**getKeyShareHolderGroupById**](docs/WalletsMPCWalletsApi.md#getKeyShareHolderGroupById) | **GET** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id} | Get key share holder group information
*CoboWaas2.WalletsMPCWalletsApi* | [**getMpcProjectById**](docs/WalletsMPCWalletsApi.md#getMpcProjectById) | **GET** /wallets/mpc/projects/{project_id} | Get project information
*CoboWaas2.WalletsMPCWalletsApi* | [**getMpcVaultById**](docs/WalletsMPCWalletsApi.md#getMpcVaultById) | **GET** /wallets/mpc/vaults/{vault_id} | Get vault information
*CoboWaas2.WalletsMPCWalletsApi* | [**getTssRequestById**](docs/WalletsMPCWalletsApi.md#getTssRequestById) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests/{tss_request_id} | Get TSS request
*CoboWaas2.WalletsMPCWalletsApi* | [**listCoboKeyHolders**](docs/WalletsMPCWalletsApi.md#listCoboKeyHolders) | **GET** /wallets/mpc/cobo_key_share_holders | List all Cobo key share holders
*CoboWaas2.WalletsMPCWalletsApi* | [**listKeyShareHolderGroups**](docs/WalletsMPCWalletsApi.md#listKeyShareHolderGroups) | **GET** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups | List all key share holder groups
*CoboWaas2.WalletsMPCWalletsApi* | [**listMpcProjects**](docs/WalletsMPCWalletsApi.md#listMpcProjects) | **GET** /wallets/mpc/projects | List all projects
*CoboWaas2.WalletsMPCWalletsApi* | [**listMpcVaults**](docs/WalletsMPCWalletsApi.md#listMpcVaults) | **GET** /wallets/mpc/vaults | List all vaults
*CoboWaas2.WalletsMPCWalletsApi* | [**listTssRequests**](docs/WalletsMPCWalletsApi.md#listTssRequests) | **GET** /wallets/mpc/vaults/{vault_id}/tss_requests | List TSS requests
*CoboWaas2.WalletsMPCWalletsApi* | [**updateKeyShareHolderGroupById**](docs/WalletsMPCWalletsApi.md#updateKeyShareHolderGroupById) | **PUT** /wallets/mpc/vaults/{vault_id}/key_share_holder_groups/{key_share_holder_group_id} | Update key share holder group
*CoboWaas2.WalletsMPCWalletsApi* | [**updateMpcProjectById**](docs/WalletsMPCWalletsApi.md#updateMpcProjectById) | **PUT** /wallets/mpc/projects/{project_id} | Update project name
*CoboWaas2.WalletsMPCWalletsApi* | [**updateMpcVaultById**](docs/WalletsMPCWalletsApi.md#updateMpcVaultById) | **PUT** /wallets/mpc/vaults/{vault_id} | Update vault name


## Documentation for Models

 - [CoboWaas2.Activity](docs/Activity.md)
 - [CoboWaas2.ActivityAction](docs/ActivityAction.md)
 - [CoboWaas2.ActivityInitiator](docs/ActivityInitiator.md)
 - [CoboWaas2.ActivityStatus](docs/ActivityStatus.md)
 - [CoboWaas2.ActivityTimeline](docs/ActivityTimeline.md)
 - [CoboWaas2.ActivityType](docs/ActivityType.md)
 - [CoboWaas2.AddressEncoding](docs/AddressEncoding.md)
 - [CoboWaas2.AddressInfo](docs/AddressInfo.md)
 - [CoboWaas2.AddressTransferDestination](docs/AddressTransferDestination.md)
 - [CoboWaas2.AddressTransferDestinationAccountOutput](docs/AddressTransferDestinationAccountOutput.md)
 - [CoboWaas2.AddressTransferDestinationUtxoOutputsInner](docs/AddressTransferDestinationUtxoOutputsInner.md)
 - [CoboWaas2.AmountDetailsInner](docs/AmountDetailsInner.md)
 - [CoboWaas2.AmountStatus](docs/AmountStatus.md)
 - [CoboWaas2.AssetBalance](docs/AssetBalance.md)
 - [CoboWaas2.AssetInfo](docs/AssetInfo.md)
 - [CoboWaas2.BabylonStakeExtra](docs/BabylonStakeExtra.md)
 - [CoboWaas2.BabylonValidator](docs/BabylonValidator.md)
 - [CoboWaas2.BaseContractCallSource](docs/BaseContractCallSource.md)
 - [CoboWaas2.BaseEstimateStakingFee](docs/BaseEstimateStakingFee.md)
 - [CoboWaas2.BaseStakeExtra](docs/BaseStakeExtra.md)
 - [CoboWaas2.ChainInfo](docs/ChainInfo.md)
 - [CoboWaas2.CheckAddressValidity200Response](docs/CheckAddressValidity200Response.md)
 - [CoboWaas2.CheckAddressesValidity200ResponseInner](docs/CheckAddressesValidity200ResponseInner.md)
 - [CoboWaas2.CheckLoopTransfers200ResponseInner](docs/CheckLoopTransfers200ResponseInner.md)
 - [CoboWaas2.CoboSafeDelegate](docs/CoboSafeDelegate.md)
 - [CoboWaas2.CoboSafeDelegateType](docs/CoboSafeDelegateType.md)
 - [CoboWaas2.ContractCallDestination](docs/ContractCallDestination.md)
 - [CoboWaas2.ContractCallDestinationType](docs/ContractCallDestinationType.md)
 - [CoboWaas2.ContractCallParams](docs/ContractCallParams.md)
 - [CoboWaas2.ContractCallSource](docs/ContractCallSource.md)
 - [CoboWaas2.ContractCallSourceType](docs/ContractCallSourceType.md)
 - [CoboWaas2.CreateAddressRequest](docs/CreateAddressRequest.md)
 - [CoboWaas2.CreateCustodialWalletParams](docs/CreateCustodialWalletParams.md)
 - [CoboWaas2.CreateExchangeWalletParams](docs/CreateExchangeWalletParams.md)
 - [CoboWaas2.CreateKeyShareHolder](docs/CreateKeyShareHolder.md)
 - [CoboWaas2.CreateKeyShareHolderGroupRequest](docs/CreateKeyShareHolderGroupRequest.md)
 - [CoboWaas2.CreateMpcProjectRequest](docs/CreateMpcProjectRequest.md)
 - [CoboWaas2.CreateMpcVaultRequest](docs/CreateMpcVaultRequest.md)
 - [CoboWaas2.CreateMpcWalletParams](docs/CreateMpcWalletParams.md)
 - [CoboWaas2.CreateSafeWalletParams](docs/CreateSafeWalletParams.md)
 - [CoboWaas2.CreateSmartContractWalletParams](docs/CreateSmartContractWalletParams.md)
 - [CoboWaas2.CreateStakeActivity](docs/CreateStakeActivity.md)
 - [CoboWaas2.CreateStakeActivityExtra](docs/CreateStakeActivityExtra.md)
 - [CoboWaas2.CreateTransferTransaction201Response](docs/CreateTransferTransaction201Response.md)
 - [CoboWaas2.CreateTssRequestRequest](docs/CreateTssRequestRequest.md)
 - [CoboWaas2.CreateUnstakeActivity](docs/CreateUnstakeActivity.md)
 - [CoboWaas2.CreateWalletParams](docs/CreateWalletParams.md)
 - [CoboWaas2.CreateWebhookEndpointRequest](docs/CreateWebhookEndpointRequest.md)
 - [CoboWaas2.CreateWithdrawActivity](docs/CreateWithdrawActivity.md)
 - [CoboWaas2.CreatedWalletInfo](docs/CreatedWalletInfo.md)
 - [CoboWaas2.CurveType](docs/CurveType.md)
 - [CoboWaas2.CustodialTransferSource](docs/CustodialTransferSource.md)
 - [CoboWaas2.CustodialWalletInfo](docs/CustodialWalletInfo.md)
 - [CoboWaas2.DeleteKeyShareHolderGroupById201Response](docs/DeleteKeyShareHolderGroupById201Response.md)
 - [CoboWaas2.DeleteWalletById201Response](docs/DeleteWalletById201Response.md)
 - [CoboWaas2.EigenLayerLstStakeExtra](docs/EigenLayerLstStakeExtra.md)
 - [CoboWaas2.EigenLayerNativeStakeExtra](docs/EigenLayerNativeStakeExtra.md)
 - [CoboWaas2.EigenlayerValidator](docs/EigenlayerValidator.md)
 - [CoboWaas2.ErrorResponse](docs/ErrorResponse.md)
 - [CoboWaas2.EstimateContractCallFeeParams](docs/EstimateContractCallFeeParams.md)
 - [CoboWaas2.EstimateFeeParams](docs/EstimateFeeParams.md)
 - [CoboWaas2.EstimateFeeRequestType](docs/EstimateFeeRequestType.md)
 - [CoboWaas2.EstimateStakeFee](docs/EstimateStakeFee.md)
 - [CoboWaas2.EstimateTransferFeeParams](docs/EstimateTransferFeeParams.md)
 - [CoboWaas2.EstimateUnstakeFee](docs/EstimateUnstakeFee.md)
 - [CoboWaas2.EstimateWithdrawFee](docs/EstimateWithdrawFee.md)
 - [CoboWaas2.EstimatedEvmEip1559Fee](docs/EstimatedEvmEip1559Fee.md)
 - [CoboWaas2.EstimatedEvmEip1559FeeSlow](docs/EstimatedEvmEip1559FeeSlow.md)
 - [CoboWaas2.EstimatedEvmLegacyFee](docs/EstimatedEvmLegacyFee.md)
 - [CoboWaas2.EstimatedEvmLegacyFeeSlow](docs/EstimatedEvmLegacyFeeSlow.md)
 - [CoboWaas2.EstimatedFee](docs/EstimatedFee.md)
 - [CoboWaas2.EstimatedFixedFee](docs/EstimatedFixedFee.md)
 - [CoboWaas2.EstimatedUtxoFee](docs/EstimatedUtxoFee.md)
 - [CoboWaas2.EstimatedUtxoFeeSlow](docs/EstimatedUtxoFeeSlow.md)
 - [CoboWaas2.EvmContractCallDestination](docs/EvmContractCallDestination.md)
 - [CoboWaas2.EvmEIP191MessageSignDestination](docs/EvmEIP191MessageSignDestination.md)
 - [CoboWaas2.EvmEIP712MessageSignDestination](docs/EvmEIP712MessageSignDestination.md)
 - [CoboWaas2.EvmEip1559FeeBasePrice](docs/EvmEip1559FeeBasePrice.md)
 - [CoboWaas2.EvmEip1559FeeRate](docs/EvmEip1559FeeRate.md)
 - [CoboWaas2.EvmLegacyFeeBasePrice](docs/EvmLegacyFeeBasePrice.md)
 - [CoboWaas2.EvmLegacyFeeRate](docs/EvmLegacyFeeRate.md)
 - [CoboWaas2.ExchangeId](docs/ExchangeId.md)
 - [CoboWaas2.ExchangeTransferDestination](docs/ExchangeTransferDestination.md)
 - [CoboWaas2.ExchangeTransferSource](docs/ExchangeTransferSource.md)
 - [CoboWaas2.ExchangeWalletInfo](docs/ExchangeWalletInfo.md)
 - [CoboWaas2.ExtendedTokenInfo](docs/ExtendedTokenInfo.md)
 - [CoboWaas2.FeeAmount](docs/FeeAmount.md)
 - [CoboWaas2.FeeGasLimit](docs/FeeGasLimit.md)
 - [CoboWaas2.FeeRate](docs/FeeRate.md)
 - [CoboWaas2.FeeType](docs/FeeType.md)
 - [CoboWaas2.FixedFeeRate](docs/FixedFeeRate.md)
 - [CoboWaas2.GetToken200Response](docs/GetToken200Response.md)
 - [CoboWaas2.GetToken4XXResponse](docs/GetToken4XXResponse.md)
 - [CoboWaas2.KeyShareHolder](docs/KeyShareHolder.md)
 - [CoboWaas2.KeyShareHolderGroup](docs/KeyShareHolderGroup.md)
 - [CoboWaas2.KeyShareHolderGroupStatus](docs/KeyShareHolderGroupStatus.md)
 - [CoboWaas2.KeyShareHolderGroupType](docs/KeyShareHolderGroupType.md)
 - [CoboWaas2.KeyShareHolderStatus](docs/KeyShareHolderStatus.md)
 - [CoboWaas2.KeyShareHolderType](docs/KeyShareHolderType.md)
 - [CoboWaas2.ListAddresses200Response](docs/ListAddresses200Response.md)
 - [CoboWaas2.ListAssetBalancesForExchangeWallet200Response](docs/ListAssetBalancesForExchangeWallet200Response.md)
 - [CoboWaas2.ListExchanges200ResponseInner](docs/ListExchanges200ResponseInner.md)
 - [CoboWaas2.ListKeyShareHolderGroups200Response](docs/ListKeyShareHolderGroups200Response.md)
 - [CoboWaas2.ListMpcProjects200Response](docs/ListMpcProjects200Response.md)
 - [CoboWaas2.ListMpcVaults200Response](docs/ListMpcVaults200Response.md)
 - [CoboWaas2.ListSupportedAssetsForExchange200Response](docs/ListSupportedAssetsForExchange200Response.md)
 - [CoboWaas2.ListSupportedChains200Response](docs/ListSupportedChains200Response.md)
 - [CoboWaas2.ListSupportedTokens200Response](docs/ListSupportedTokens200Response.md)
 - [CoboWaas2.ListTokenBalancesForAddress200Response](docs/ListTokenBalancesForAddress200Response.md)
 - [CoboWaas2.ListTransactions200Response](docs/ListTransactions200Response.md)
 - [CoboWaas2.ListTssRequests200Response](docs/ListTssRequests200Response.md)
 - [CoboWaas2.ListUtxos200Response](docs/ListUtxos200Response.md)
 - [CoboWaas2.ListWallets200Response](docs/ListWallets200Response.md)
 - [CoboWaas2.ListWebhookEndpoints200Response](docs/ListWebhookEndpoints200Response.md)
 - [CoboWaas2.ListWebhookEventDefinitions200ResponseInner](docs/ListWebhookEventDefinitions200ResponseInner.md)
 - [CoboWaas2.ListWebhookEventLogs200Response](docs/ListWebhookEventLogs200Response.md)
 - [CoboWaas2.ListWebhookEvents200Response](docs/ListWebhookEvents200Response.md)
 - [CoboWaas2.LockUtxos201Response](docs/LockUtxos201Response.md)
 - [CoboWaas2.LockUtxosRequest](docs/LockUtxosRequest.md)
 - [CoboWaas2.LockUtxosRequestUtxosInner](docs/LockUtxosRequestUtxosInner.md)
 - [CoboWaas2.MPCDelegate](docs/MPCDelegate.md)
 - [CoboWaas2.MPCProject](docs/MPCProject.md)
 - [CoboWaas2.MPCVault](docs/MPCVault.md)
 - [CoboWaas2.MPCVaultType](docs/MPCVaultType.md)
 - [CoboWaas2.MPCWalletInfo](docs/MPCWalletInfo.md)
 - [CoboWaas2.MaxFeeAmount](docs/MaxFeeAmount.md)
 - [CoboWaas2.MaxTransferableValue](docs/MaxTransferableValue.md)
 - [CoboWaas2.MessageSignDestination](docs/MessageSignDestination.md)
 - [CoboWaas2.MessageSignDestinationType](docs/MessageSignDestinationType.md)
 - [CoboWaas2.MessageSignParams](docs/MessageSignParams.md)
 - [CoboWaas2.MessageSignSource](docs/MessageSignSource.md)
 - [CoboWaas2.MessageSignSourceType](docs/MessageSignSourceType.md)
 - [CoboWaas2.MpcContractCallSource](docs/MpcContractCallSource.md)
 - [CoboWaas2.MpcMessageSignSource](docs/MpcMessageSignSource.md)
 - [CoboWaas2.MpcSigningGroup](docs/MpcSigningGroup.md)
 - [CoboWaas2.MpcTransferSource](docs/MpcTransferSource.md)
 - [CoboWaas2.Pagination](docs/Pagination.md)
 - [CoboWaas2.PoolDetails](docs/PoolDetails.md)
 - [CoboWaas2.PoolDetailsAllOfValidatorsInfo](docs/PoolDetailsAllOfValidatorsInfo.md)
 - [CoboWaas2.PoolSummary](docs/PoolSummary.md)
 - [CoboWaas2.RefreshToken200Response](docs/RefreshToken200Response.md)
 - [CoboWaas2.RefreshTokenRequest](docs/RefreshTokenRequest.md)
 - [CoboWaas2.ReplaceType](docs/ReplaceType.md)
 - [CoboWaas2.RetryWebhookEventById201Response](docs/RetryWebhookEventById201Response.md)
 - [CoboWaas2.RootPubkey](docs/RootPubkey.md)
 - [CoboWaas2.SafeContractCallSource](docs/SafeContractCallSource.md)
 - [CoboWaas2.SafeTransferSource](docs/SafeTransferSource.md)
 - [CoboWaas2.SafeWallet](docs/SafeWallet.md)
 - [CoboWaas2.SmartContractInitiator](docs/SmartContractInitiator.md)
 - [CoboWaas2.SmartContractWalletInfo](docs/SmartContractWalletInfo.md)
 - [CoboWaas2.SmartContractWalletOperationType](docs/SmartContractWalletOperationType.md)
 - [CoboWaas2.SmartContractWalletType](docs/SmartContractWalletType.md)
 - [CoboWaas2.SourceGroup](docs/SourceGroup.md)
 - [CoboWaas2.StakingPoolType](docs/StakingPoolType.md)
 - [CoboWaas2.StakingSource](docs/StakingSource.md)
 - [CoboWaas2.Stakings](docs/Stakings.md)
 - [CoboWaas2.StakingsValidatorInfo](docs/StakingsValidatorInfo.md)
 - [CoboWaas2.SubWalletAssetBalance](docs/SubWalletAssetBalance.md)
 - [CoboWaas2.TSSGroups](docs/TSSGroups.md)
 - [CoboWaas2.TSSRequest](docs/TSSRequest.md)
 - [CoboWaas2.TSSRequestStatus](docs/TSSRequestStatus.md)
 - [CoboWaas2.TSSRequestType](docs/TSSRequestType.md)
 - [CoboWaas2.TSSRequestWebhookEventData](docs/TSSRequestWebhookEventData.md)
 - [CoboWaas2.TokenBalance](docs/TokenBalance.md)
 - [CoboWaas2.TokenBalanceBalance](docs/TokenBalanceBalance.md)
 - [CoboWaas2.TokenInfo](docs/TokenInfo.md)
 - [CoboWaas2.Transaction](docs/Transaction.md)
 - [CoboWaas2.TransactionApprover](docs/TransactionApprover.md)
 - [CoboWaas2.TransactionBlockInfo](docs/TransactionBlockInfo.md)
 - [CoboWaas2.TransactionCustodialAssetWalletSource](docs/TransactionCustodialAssetWalletSource.md)
 - [CoboWaas2.TransactionDepositFromAddressSource](docs/TransactionDepositFromAddressSource.md)
 - [CoboWaas2.TransactionDepositFromLoopSource](docs/TransactionDepositFromLoopSource.md)
 - [CoboWaas2.TransactionDepositFromWalletSource](docs/TransactionDepositFromWalletSource.md)
 - [CoboWaas2.TransactionDepositToAddressDestination](docs/TransactionDepositToAddressDestination.md)
 - [CoboWaas2.TransactionDepositToWalletDestination](docs/TransactionDepositToWalletDestination.md)
 - [CoboWaas2.TransactionDestination](docs/TransactionDestination.md)
 - [CoboWaas2.TransactionDestinationType](docs/TransactionDestinationType.md)
 - [CoboWaas2.TransactionDetail](docs/TransactionDetail.md)
 - [CoboWaas2.TransactionDetails](docs/TransactionDetails.md)
 - [CoboWaas2.TransactionEvmContractDestination](docs/TransactionEvmContractDestination.md)
 - [CoboWaas2.TransactionEvmEip1559Fee](docs/TransactionEvmEip1559Fee.md)
 - [CoboWaas2.TransactionEvmLegacyFee](docs/TransactionEvmLegacyFee.md)
 - [CoboWaas2.TransactionExchangeWalletSource](docs/TransactionExchangeWalletSource.md)
 - [CoboWaas2.TransactionFee](docs/TransactionFee.md)
 - [CoboWaas2.TransactionFeeStationWalletSource](docs/TransactionFeeStationWalletSource.md)
 - [CoboWaas2.TransactionFixedFee](docs/TransactionFixedFee.md)
 - [CoboWaas2.TransactionInitiatorType](docs/TransactionInitiatorType.md)
 - [CoboWaas2.TransactionMPCWalletSource](docs/TransactionMPCWalletSource.md)
 - [CoboWaas2.TransactionMessageSignEIP191Destination](docs/TransactionMessageSignEIP191Destination.md)
 - [CoboWaas2.TransactionMessageSignEIP712Destination](docs/TransactionMessageSignEIP712Destination.md)
 - [CoboWaas2.TransactionRawTxInfo](docs/TransactionRawTxInfo.md)
 - [CoboWaas2.TransactionRbf](docs/TransactionRbf.md)
 - [CoboWaas2.TransactionRbfSource](docs/TransactionRbfSource.md)
 - [CoboWaas2.TransactionReplacement](docs/TransactionReplacement.md)
 - [CoboWaas2.TransactionRequestEvmEip1559Fee](docs/TransactionRequestEvmEip1559Fee.md)
 - [CoboWaas2.TransactionRequestEvmLegacyFee](docs/TransactionRequestEvmLegacyFee.md)
 - [CoboWaas2.TransactionRequestFee](docs/TransactionRequestFee.md)
 - [CoboWaas2.TransactionRequestFixedFee](docs/TransactionRequestFixedFee.md)
 - [CoboWaas2.TransactionRequestUtxoFee](docs/TransactionRequestUtxoFee.md)
 - [CoboWaas2.TransactionResend](docs/TransactionResend.md)
 - [CoboWaas2.TransactionResult](docs/TransactionResult.md)
 - [CoboWaas2.TransactionResultType](docs/TransactionResultType.md)
 - [CoboWaas2.TransactionSignatureResult](docs/TransactionSignatureResult.md)
 - [CoboWaas2.TransactionSigner](docs/TransactionSigner.md)
 - [CoboWaas2.TransactionSmartContractSafeWalletSource](docs/TransactionSmartContractSafeWalletSource.md)
 - [CoboWaas2.TransactionSource](docs/TransactionSource.md)
 - [CoboWaas2.TransactionSourceType](docs/TransactionSourceType.md)
 - [CoboWaas2.TransactionStatus](docs/TransactionStatus.md)
 - [CoboWaas2.TransactionSubStatus](docs/TransactionSubStatus.md)
 - [CoboWaas2.TransactionTimeline](docs/TransactionTimeline.md)
 - [CoboWaas2.TransactionTokeApproval](docs/TransactionTokeApproval.md)
 - [CoboWaas2.TransactionTokenAmount](docs/TransactionTokenAmount.md)
 - [CoboWaas2.TransactionTransferToAddressDestination](docs/TransactionTransferToAddressDestination.md)
 - [CoboWaas2.TransactionTransferToAddressDestinationAccountOutput](docs/TransactionTransferToAddressDestinationAccountOutput.md)
 - [CoboWaas2.TransactionTransferToAddressDestinationUtxoOutputsInner](docs/TransactionTransferToAddressDestinationUtxoOutputsInner.md)
 - [CoboWaas2.TransactionTransferToWalletDestination](docs/TransactionTransferToWalletDestination.md)
 - [CoboWaas2.TransactionType](docs/TransactionType.md)
 - [CoboWaas2.TransactionUtxo](docs/TransactionUtxo.md)
 - [CoboWaas2.TransactionUtxoFee](docs/TransactionUtxoFee.md)
 - [CoboWaas2.TransactionWebhookEventData](docs/TransactionWebhookEventData.md)
 - [CoboWaas2.TransferDestination](docs/TransferDestination.md)
 - [CoboWaas2.TransferDestinationType](docs/TransferDestinationType.md)
 - [CoboWaas2.TransferParams](docs/TransferParams.md)
 - [CoboWaas2.TransferSource](docs/TransferSource.md)
 - [CoboWaas2.UTXO](docs/UTXO.md)
 - [CoboWaas2.UpdateCustodialWalletParams](docs/UpdateCustodialWalletParams.md)
 - [CoboWaas2.UpdateExchangeWalletParams](docs/UpdateExchangeWalletParams.md)
 - [CoboWaas2.UpdateGroupAction](docs/UpdateGroupAction.md)
 - [CoboWaas2.UpdateKeyShareHolderGroupByIdRequest](docs/UpdateKeyShareHolderGroupByIdRequest.md)
 - [CoboWaas2.UpdateMpcProjectByIdRequest](docs/UpdateMpcProjectByIdRequest.md)
 - [CoboWaas2.UpdateMpcVaultByIdRequest](docs/UpdateMpcVaultByIdRequest.md)
 - [CoboWaas2.UpdateMpcWalletParams](docs/UpdateMpcWalletParams.md)
 - [CoboWaas2.UpdateSmartContractWalletParams](docs/UpdateSmartContractWalletParams.md)
 - [CoboWaas2.UpdateWalletParams](docs/UpdateWalletParams.md)
 - [CoboWaas2.UpdateWebhookEndpointByIdRequest](docs/UpdateWebhookEndpointByIdRequest.md)
 - [CoboWaas2.UtxoFeeBasePrice](docs/UtxoFeeBasePrice.md)
 - [CoboWaas2.UtxoFeeRate](docs/UtxoFeeRate.md)
 - [CoboWaas2.WalletInfo](docs/WalletInfo.md)
 - [CoboWaas2.WalletSubtype](docs/WalletSubtype.md)
 - [CoboWaas2.WalletType](docs/WalletType.md)
 - [CoboWaas2.WebhookEndpoint](docs/WebhookEndpoint.md)
 - [CoboWaas2.WebhookEndpointStatus](docs/WebhookEndpointStatus.md)
 - [CoboWaas2.WebhookEvent](docs/WebhookEvent.md)
 - [CoboWaas2.WebhookEventData](docs/WebhookEventData.md)
 - [CoboWaas2.WebhookEventDataType](docs/WebhookEventDataType.md)
 - [CoboWaas2.WebhookEventLog](docs/WebhookEventLog.md)
 - [CoboWaas2.WebhookEventStatus](docs/WebhookEventStatus.md)
 - [CoboWaas2.WebhookEventType](docs/WebhookEventType.md)


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

