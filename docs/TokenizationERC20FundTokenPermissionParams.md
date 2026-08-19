# CoboWaas2.TokenizationERC20FundTokenPermissionParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **[String]** | List of addresses for the owner/admin role. Have full administrative control over the fund contract. | [optional] 
**manager** | **[String]** | List of addresses for the fund manager role. Can manage fund configurations and operational parameters. | [optional] 
**nav_updater** | **[String]** | List of addresses for the NAV updater role. Can update the net asset value (NAV) per share price. | [optional] 
**redemption_approver** | **[String]** | List of addresses for the redemption approver role. Can approve or reject investor redemption requests. | [optional] 
**settlement_operator** | **[String]** | List of addresses for the settlement operator role. Can execute investment and redemption settlement operations. | [optional] 
**emergency_guardian** | **[String]** | List of addresses for the emergency guardian role. Can trigger emergency actions such as pausing the fund. | [optional] 


