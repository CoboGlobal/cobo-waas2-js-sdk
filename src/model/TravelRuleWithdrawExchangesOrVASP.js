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
import DestinationWalletType from './DestinationWalletType';
import TravelRuleWithdrawExchangesOrVASPEntityInfo from './TravelRuleWithdrawExchangesOrVASPEntityInfo';

/**
 * The TravelRuleWithdrawExchangesOrVASP model module.
 * @module model/TravelRuleWithdrawExchangesOrVASP
 */
class TravelRuleWithdrawExchangesOrVASP {
    /**
     * Constructs a new <code>TravelRuleWithdrawExchangesOrVASP</code>.
     * Required fields for &#x60;EXCHANGES_OR_VASP&#x60;.
     * @alias module:model/TravelRuleWithdrawExchangesOrVASP
     * @param destination_wallet_type {module:model/DestinationWalletType} 
     * @param vendor_code {String} The vendor code for exchanges or VASPs.
     * @param vendor_vasp_id {String} The unique identifier of the VASP.
     * @param entity_info {module:model/TravelRuleWithdrawExchangesOrVASPEntityInfo} 
     */
    constructor(destination_wallet_type, vendor_code, vendor_vasp_id, entity_info) { 
        
        TravelRuleWithdrawExchangesOrVASP.initialize(this, destination_wallet_type, vendor_code, vendor_vasp_id, entity_info);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_wallet_type, vendor_code, vendor_vasp_id, entity_info) { 
        obj['destination_wallet_type'] = destination_wallet_type;
        obj['vendor_code'] = vendor_code;
        obj['vendor_vasp_id'] = vendor_vasp_id;
        obj['entity_info'] = entity_info;
    }

    /**
     * Constructs a <code>TravelRuleWithdrawExchangesOrVASP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TravelRuleWithdrawExchangesOrVASP} obj Optional instance to populate.
     * @return {module:model/TravelRuleWithdrawExchangesOrVASP} The populated <code>TravelRuleWithdrawExchangesOrVASP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TravelRuleWithdrawExchangesOrVASP();

            if (data.hasOwnProperty('destination_wallet_type')) {
                obj['destination_wallet_type'] = DestinationWalletType.constructFromObject(data['destination_wallet_type']);
            }
            if (data.hasOwnProperty('vendor_code')) {
                obj['vendor_code'] = ApiClient.convertToType(data['vendor_code'], 'String');
            }
            if (data.hasOwnProperty('vendor_vasp_id')) {
                obj['vendor_vasp_id'] = ApiClient.convertToType(data['vendor_vasp_id'], 'String');
            }
            if (data.hasOwnProperty('entity_info')) {
                obj['entity_info'] = TravelRuleWithdrawExchangesOrVASPEntityInfo.constructFromObject(data['entity_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TravelRuleWithdrawExchangesOrVASP</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TravelRuleWithdrawExchangesOrVASP</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TravelRuleWithdrawExchangesOrVASP.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['vendor_code'] && !(typeof data['vendor_code'] === 'string' || data['vendor_code'] instanceof String)) {
            throw new Error("Expected the field `vendor_code` to be a primitive type in the JSON string but got " + data['vendor_code']);
        }
        // ensure the json data is a string
        if (data['vendor_vasp_id'] && !(typeof data['vendor_vasp_id'] === 'string' || data['vendor_vasp_id'] instanceof String)) {
            throw new Error("Expected the field `vendor_vasp_id` to be a primitive type in the JSON string but got " + data['vendor_vasp_id']);
        }
        // validate the optional field `entity_info`
        if (data['entity_info']) { // data not null
          if (!!TravelRuleWithdrawExchangesOrVASPEntityInfo.validateJSON) {
            TravelRuleWithdrawExchangesOrVASPEntityInfo.validateJSON(data['entity_info']);
          }
        }

        return true;
    }


}

TravelRuleWithdrawExchangesOrVASP.RequiredProperties = ["destination_wallet_type", "vendor_code", "vendor_vasp_id", "entity_info"];

/**
 * @member {module:model/DestinationWalletType} destination_wallet_type
 */
TravelRuleWithdrawExchangesOrVASP.prototype['destination_wallet_type'] = undefined;

/**
 * The vendor code for exchanges or VASPs.
 * @member {String} vendor_code
 */
TravelRuleWithdrawExchangesOrVASP.prototype['vendor_code'] = undefined;

/**
 * The unique identifier of the VASP.
 * @member {String} vendor_vasp_id
 */
TravelRuleWithdrawExchangesOrVASP.prototype['vendor_vasp_id'] = undefined;

/**
 * @member {module:model/TravelRuleWithdrawExchangesOrVASPEntityInfo} entity_info
 */
TravelRuleWithdrawExchangesOrVASP.prototype['entity_info'] = undefined;






export default TravelRuleWithdrawExchangesOrVASP;

