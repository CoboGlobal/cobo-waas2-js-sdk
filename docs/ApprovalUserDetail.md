# CoboWaas2.ApprovalUserDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the user who approved the transaction. | [optional] 
**email** | **String** | The email address of the user who approved the transaction. | [optional] 
**pubkey** | **String** | The public key of the user who approved the transaction. | [optional] 
**signature** | **String** | The signature of the transaction approval. | [optional] 
**statement_uuid** | **String** | The UUID of the statement associated with the transaction approval. | [optional] 
**result** | [**ApprovalResult**](ApprovalResult.md) |  | [optional] 
**approval_result_code** | **Number** | The integer value representing the result of the approval. | [optional] 
**created_time** | **Number** | The timestamp when the approval was created. | [optional] 
**template_version** | **String** | The version of the template used for the transaction approval. | [optional] 
**header_title** | **String** | The title of the header for the transaction approval. | [optional] 
**is_for_sign** | **Boolean** | Indicates whether the approval is for signing. | [optional] 
**show_info** | **String** | Additional information to show for the transaction approval. | [optional] 
**language** | **String** | The language used for the transaction approval. | [optional] 
**message_version** | **String** | The version of the message format used for the transaction approval. | [optional] 
**message** | **String** | The message associated with the transaction approval. | [optional] 
**extra_message** | **String** | Any additional message or information related to the transaction approval. | [optional] 


