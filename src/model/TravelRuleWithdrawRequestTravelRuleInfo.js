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
import SelfCustodyWallet from './SelfCustodyWallet';
import TravelRuleWithdrawExchangesOrVASP from './TravelRuleWithdrawExchangesOrVASP';
import TravelRuleWithdrawExchangesOrVASPEntityInfo from './TravelRuleWithdrawExchangesOrVASPEntityInfo';

/**
 * The TravelRuleWithdrawRequestTravelRuleInfo model module.
 * @module model/TravelRuleWithdrawRequestTravelRuleInfo
 */
class TravelRuleWithdrawRequestTravelRuleInfo {
    /**
     * Constructs a new <code>TravelRuleWithdrawRequestTravelRuleInfo</code>.
     * @alias module:model/TravelRuleWithdrawRequestTravelRuleInfo
     * @param {(module:model/SelfCustodyWallet|module:model/TravelRuleWithdrawExchangesOrVASP)} instance The actual instance to initialize TravelRuleWithdrawRequestTravelRuleInfo.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["destination_wallet_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "EXCHANGES_OR_VASP":
                    this.actualInstance = TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance);
                    match++;
                    break;
                case "SELF_CUSTODY_WALLET":
                    this.actualInstance = SelfCustodyWallet.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof SelfCustodyWallet) {
                this.actualInstance = instance;
            } else if(!!SelfCustodyWallet.validateJSON && SelfCustodyWallet.validateJSON(instance)){
                // plain JS object
                // create SelfCustodyWallet from JS object
                this.actualInstance = SelfCustodyWallet.constructFromObject(instance);
            } else {
                if(SelfCustodyWallet.constructFromObject(instance)) {
                    if (!!SelfCustodyWallet.constructFromObject(instance).toJSON) {
                        if (SelfCustodyWallet.constructFromObject(instance).toJSON()) {
                            this.actualInstance = SelfCustodyWallet.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = SelfCustodyWallet.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SelfCustodyWallet
            errorMessages.push("Failed to construct SelfCustodyWallet: " + err)
        }

        try {
            if (instance instanceof TravelRuleWithdrawExchangesOrVASP) {
                this.actualInstance = instance;
            } else if(!!TravelRuleWithdrawExchangesOrVASP.validateJSON && TravelRuleWithdrawExchangesOrVASP.validateJSON(instance)){
                // plain JS object
                // create TravelRuleWithdrawExchangesOrVASP from JS object
                this.actualInstance = TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance);
            } else {
                if(TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance)) {
                    if (!!TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance).toJSON) {
                        if (TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TravelRuleWithdrawExchangesOrVASP.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TravelRuleWithdrawExchangesOrVASP
            errorMessages.push("Failed to construct TravelRuleWithdrawExchangesOrVASP: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TravelRuleWithdrawRequestTravelRuleInfo` with oneOf schemas SelfCustodyWallet, TravelRuleWithdrawExchangesOrVASP. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TravelRuleWithdrawRequestTravelRuleInfo` with oneOf schemas SelfCustodyWallet, TravelRuleWithdrawExchangesOrVASP. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TravelRuleWithdrawRequestTravelRuleInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TravelRuleWithdrawRequestTravelRuleInfo} obj Optional instance to populate.
     * @return {module:model/TravelRuleWithdrawRequestTravelRuleInfo} The populated <code>TravelRuleWithdrawRequestTravelRuleInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TravelRuleWithdrawRequestTravelRuleInfo(data);
    }

    /**
     * Gets the actual instance, which can be <code>SelfCustodyWallet</code>, <code>TravelRuleWithdrawExchangesOrVASP</code>.
     * @return {(module:model/SelfCustodyWallet|module:model/TravelRuleWithdrawExchangesOrVASP)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>SelfCustodyWallet</code>, <code>TravelRuleWithdrawExchangesOrVASP</code>.
     * @param {(module:model/SelfCustodyWallet|module:model/TravelRuleWithdrawExchangesOrVASP)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TravelRuleWithdrawRequestTravelRuleInfo.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TravelRuleWithdrawRequestTravelRuleInfo from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TravelRuleWithdrawRequestTravelRuleInfo} An instance of TravelRuleWithdrawRequestTravelRuleInfo.
     */
    static fromJSON = function(json_string){
        return TravelRuleWithdrawRequestTravelRuleInfo.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/DestinationWalletType} destination_wallet_type
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['destination_wallet_type'] = undefined;

/**
 * The message obtained from the `Retrieve transaction limitations` operation. This message is used to verify wallet ownership through signing.
 * @member {String} self_custody_wallet_challenge
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['self_custody_wallet_challenge'] = undefined;

/**
 * The address of the self-custody wallet.
 * @member {String} self_custody_wallet_address
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['self_custody_wallet_address'] = undefined;

/**
 * The signature created by signing the challenge message with the wallet's private key.
 * @member {String} self_custody_wallet_sign
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['self_custody_wallet_sign'] = undefined;

/**
 * The vendor code of the exchange or virtual asset service provider (VASP).
 * @member {String} vendor_code
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['vendor_code'] = undefined;

/**
 * The unique identifier of the VASP.
 * @member {String} vendor_vasp_id
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['vendor_vasp_id'] = undefined;

/**
 * @member {module:model/TravelRuleWithdrawExchangesOrVASPEntityInfo} entity_info
 */
TravelRuleWithdrawRequestTravelRuleInfo.prototype['entity_info'] = undefined;


TravelRuleWithdrawRequestTravelRuleInfo.OneOf = ["SelfCustodyWallet", "TravelRuleWithdrawExchangesOrVASP"];

export default TravelRuleWithdrawRequestTravelRuleInfo;

