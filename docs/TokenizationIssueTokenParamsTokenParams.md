# CoboWaas2.TokenizationIssueTokenParamsTokenParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**standard** | [**TokenizationTokenStandard**](TokenizationTokenStandard.md) |  | 
**name** | **String** | The name of the fund token. | 
**symbol** | **String** | The symbol of the fund token. | 
**decimals** | **Number** | The number of decimals for the token (0-18). | 
**token_access_activated** | **Boolean** | Whether the allowlist feature is activated for the token. When activated, only addresses in the allowlist can perform token operations. | [optional] [default to false]
**permissions** | [**TokenizationERC20FundTokenPermissionParams**](TokenizationERC20FundTokenPermissionParams.md) |  | [optional] 
**underlying_token** | **String** | The address of the underlying token that this tokenized asset represents. | 
**asset_token** | **String** | The address of the underlying asset token (e.g., XAUT, USDC). The fund will hold this token as collateral. | 
**initial_nav** | **String** | Initial net asset value (NAV) per share (optional). Default: &#39;1.0&#39; (standard for new funds). | [optional] [default to &#39;1.0&#39;]
**initial_annual_rate** | **String** | Initial annual rate (optional). Can be updated later via NAV updater. Default: &#39;0&#39;. | [optional] [default to &#39;0&#39;]
**min_deposit** | **String** | Minimum deposit amount (optional). Default: &#39;0&#39; (no minimum, accepts any amount &gt; 0). Admin can update this later. | [optional] [default to &#39;0&#39;]
**min_redemption** | **String** | Minimum redemption amount (optional). Default: &#39;0&#39; (no minimum, accepts any amount &gt; 0). Admin can update this later. | [optional] [default to &#39;0&#39;]
**max_annual_rate** | **String** | Maximum allowed annual rate (optional). Default: type(uint256).max (no limit). Set lower for conservative funds (e.g., &#39;0.2&#39; for 20%). | [optional] [default to &#39;115792089237316195423570985008687907853269984665640564039457584007913129639935&#39;]
**max_rate_change** | **String** | Maximum rate change per NAV update (optional). Default: type(uint256).max (no limit). Set lower to prevent volatility (e.g., &#39;0.05&#39; for 5%). | [optional] [default to &#39;115792089237316195423570985008687907853269984665640564039457584007913129639935&#39;]
**min_update_interval_seconds** | **Number** | Minimum interval between NAV updates in seconds (optional). Default: 0 (no minimum). Set higher to prevent frequent updates (e.g., 86400 for 1 day). | [optional] [default to 0]


