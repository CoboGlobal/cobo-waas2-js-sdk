/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MpcContractCallSource from './MpcContractCallSource';
import MpcSigningGroup from './MpcSigningGroup';
import SafeContractCallSource from './SafeContractCallSource';
import SafeContractCallSourceAllOfDelegate from './SafeContractCallSourceAllOfDelegate';

/**
 * The ContractCallSource model module.
 * @module model/ContractCallSource
 * @version 0.2.7
 */
class ContractCallSource {
    /**
     * Constructs a new <code>ContractCallSource</code>.
     * @alias module:model/ContractCallSource
     * @param {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} instance The actual instance to initialize ContractCallSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "MpcContractCallSource") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                MpcContractCallSource.validateJSON(instance); // throw an exception if no match
                // create MpcContractCallSource from JS object
                this.actualInstance = MpcContractCallSource.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcContractCallSource
            errorMessages.push("Failed to construct MpcContractCallSource: " + err)
        }

        try {
            if (typeof instance === "SafeContractCallSource") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SafeContractCallSource.validateJSON(instance); // throw an exception if no match
                // create SafeContractCallSource from JS object
                this.actualInstance = SafeContractCallSource.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeContractCallSource
            errorMessages.push("Failed to construct SafeContractCallSource: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ContractCallSource` with oneOf schemas MpcContractCallSource, SafeContractCallSource. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ContractCallSource` with oneOf schemas MpcContractCallSource, SafeContractCallSource. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ContractCallSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractCallSource} obj Optional instance to populate.
     * @return {module:model/ContractCallSource} The populated <code>ContractCallSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ContractCallSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>MpcContractCallSource</code>, <code>SafeContractCallSource</code>.
     * @return {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>MpcContractCallSource</code>, <code>SafeContractCallSource</code>.
     * @param {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ContractCallSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ContractCallSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ContractCallSource} An instance of ContractCallSource.
     */
    static fromJSON = function(json_string){
        return ContractCallSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The type of the wallet. Possible values include: - `Org-Controlled`: MPC Wallets (Organization-Controlled). - `User-Controlled`: MPC Wallets (User-Controlled). - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}). 
 * @member {module:model/ContractCallSource.SourceTypeEnum} source_type
 */
ContractCallSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
ContractCallSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
ContractCallSource.prototype['address'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_share_holder_group
 */
ContractCallSource.prototype['mpc_used_key_share_holder_group'] = undefined;

/**
 * @member {module:model/SafeContractCallSourceAllOfDelegate} delegate
 */
ContractCallSource.prototype['delegate'] = undefined;


ContractCallSource.OneOf = ["MpcContractCallSource", "SafeContractCallSource"];

export default ContractCallSource;

