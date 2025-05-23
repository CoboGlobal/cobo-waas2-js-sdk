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
import AddressInfo from './AddressInfo';
import KeyShareHolderGroup from './KeyShareHolderGroup';
import MPCProject from './MPCProject';
import MPCVault from './MPCVault';
import MPCWalletInfo from './MPCWalletInfo';
import OrgInfo from './OrgInfo';
import Transaction from './Transaction';

/**
 * The TSSKeySignExtra model module.
 * @module model/TSSKeySignExtra
 */
class TSSKeySignExtra {
    /**
     * Constructs a new <code>TSSKeySignExtra</code>.
     * @alias module:model/TSSKeySignExtra
     */
    constructor() { 
        
        TSSKeySignExtra.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TSSKeySignExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TSSKeySignExtra} obj Optional instance to populate.
     * @return {module:model/TSSKeySignExtra} The populated <code>TSSKeySignExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TSSKeySignExtra();

            if (data.hasOwnProperty('org')) {
                obj['org'] = OrgInfo.constructFromObject(data['org']);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = MPCProject.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('vault')) {
                obj['vault'] = MPCVault.constructFromObject(data['vault']);
            }
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = MPCWalletInfo.constructFromObject(data['wallet']);
            }
            if (data.hasOwnProperty('signer_key_share_holder_group')) {
                obj['signer_key_share_holder_group'] = KeyShareHolderGroup.constructFromObject(data['signer_key_share_holder_group']);
            }
            if (data.hasOwnProperty('source_addresses')) {
                obj['source_addresses'] = ApiClient.convertToType(data['source_addresses'], [AddressInfo]);
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = Transaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TSSKeySignExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TSSKeySignExtra</code>.
     */
    static validateJSON(data) {
        // validate the optional field `org`
        if (data['org']) { // data not null
          if (!!OrgInfo.validateJSON) {
            OrgInfo.validateJSON(data['org']);
          }
        }
        // validate the optional field `project`
        if (data['project']) { // data not null
          if (!!MPCProject.validateJSON) {
            MPCProject.validateJSON(data['project']);
          }
        }
        // validate the optional field `vault`
        if (data['vault']) { // data not null
          if (!!MPCVault.validateJSON) {
            MPCVault.validateJSON(data['vault']);
          }
        }
        // validate the optional field `wallet`
        if (data['wallet']) { // data not null
          if (!!MPCWalletInfo.validateJSON) {
            MPCWalletInfo.validateJSON(data['wallet']);
          }
        }
        // validate the optional field `signer_key_share_holder_group`
        if (data['signer_key_share_holder_group']) { // data not null
          if (!!KeyShareHolderGroup.validateJSON) {
            KeyShareHolderGroup.validateJSON(data['signer_key_share_holder_group']);
          }
        }
        if (data['source_addresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['source_addresses'])) {
                throw new Error("Expected the field `source_addresses` to be an array in the JSON data but got " + data['source_addresses']);
            }
            // validate the optional field `source_addresses` (array)
            for (const item of data['source_addresses']) {
                AddressInfo.validateJSON(item);
            };
        }
        // validate the optional field `transaction`
        if (data['transaction']) { // data not null
          if (!!Transaction.validateJSON) {
            Transaction.validateJSON(data['transaction']);
          }
        }

        return true;
    }


}



/**
 * @member {module:model/OrgInfo} org
 */
TSSKeySignExtra.prototype['org'] = undefined;

/**
 * @member {module:model/MPCProject} project
 */
TSSKeySignExtra.prototype['project'] = undefined;

/**
 * @member {module:model/MPCVault} vault
 */
TSSKeySignExtra.prototype['vault'] = undefined;

/**
 * @member {module:model/MPCWalletInfo} wallet
 */
TSSKeySignExtra.prototype['wallet'] = undefined;

/**
 * @member {module:model/KeyShareHolderGroup} signer_key_share_holder_group
 */
TSSKeySignExtra.prototype['signer_key_share_holder_group'] = undefined;

/**
 * @member {Array.<module:model/AddressInfo>} source_addresses
 */
TSSKeySignExtra.prototype['source_addresses'] = undefined;

/**
 * @member {module:model/Transaction} transaction
 */
TSSKeySignExtra.prototype['transaction'] = undefined;






export default TSSKeySignExtra;

