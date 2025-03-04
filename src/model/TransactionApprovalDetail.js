/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TransactionRoleApprovalDetail from './TransactionRoleApprovalDetail';

/**
 * The TransactionApprovalDetail model module.
 * @module model/TransactionApprovalDetail
 */
class TransactionApprovalDetail {
    /**
     * Constructs a new <code>TransactionApprovalDetail</code>.
     * The approval detail data for transaction.
     * @alias module:model/TransactionApprovalDetail
     */
    constructor() { 
        
        TransactionApprovalDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionApprovalDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionApprovalDetail} obj Optional instance to populate.
     * @return {module:model/TransactionApprovalDetail} The populated <code>TransactionApprovalDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionApprovalDetail();

            if (data.hasOwnProperty('spender')) {
                obj['spender'] = TransactionRoleApprovalDetail.constructFromObject(data['spender']);
            }
            if (data.hasOwnProperty('approver')) {
                obj['approver'] = TransactionRoleApprovalDetail.constructFromObject(data['approver']);
            }
            if (data.hasOwnProperty('address_owner')) {
                obj['address_owner'] = TransactionRoleApprovalDetail.constructFromObject(data['address_owner']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionApprovalDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionApprovalDetail</code>.
     */
    static validateJSON(data) {
        // validate the optional field `spender`
        if (data['spender']) { // data not null
          if (!!TransactionRoleApprovalDetail.validateJSON) {
            TransactionRoleApprovalDetail.validateJSON(data['spender']);
          }
        }
        // validate the optional field `approver`
        if (data['approver']) { // data not null
          if (!!TransactionRoleApprovalDetail.validateJSON) {
            TransactionRoleApprovalDetail.validateJSON(data['approver']);
          }
        }
        // validate the optional field `address_owner`
        if (data['address_owner']) { // data not null
          if (!!TransactionRoleApprovalDetail.validateJSON) {
            TransactionRoleApprovalDetail.validateJSON(data['address_owner']);
          }
        }

        return true;
    }


}



/**
 * @member {module:model/TransactionRoleApprovalDetail} spender
 */
TransactionApprovalDetail.prototype['spender'] = undefined;

/**
 * @member {module:model/TransactionRoleApprovalDetail} approver
 */
TransactionApprovalDetail.prototype['approver'] = undefined;

/**
 * @member {module:model/TransactionRoleApprovalDetail} address_owner
 */
TransactionApprovalDetail.prototype['address_owner'] = undefined;






export default TransactionApprovalDetail;

