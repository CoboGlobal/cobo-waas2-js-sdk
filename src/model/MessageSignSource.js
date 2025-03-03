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
import MessageSignSourceType from './MessageSignSourceType';
import MpcMessageSignSource from './MpcMessageSignSource';
import MpcSigningGroup from './MpcSigningGroup';

/**
 * The MessageSignSource model module.
 * @module model/MessageSignSource
 */
class MessageSignSource {
    /**
     * Constructs a new <code>MessageSignSource</code>.
     * @alias module:model/MessageSignSource
     * @param {(module:model/MpcMessageSignSource)} instance The actual instance to initialize MessageSignSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["source_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Org-Controlled":
                    this.actualInstance = MpcMessageSignSource.constructFromObject(instance);
                    match++;
                    break;
                case "User-Controlled":
                    this.actualInstance = MpcMessageSignSource.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof MpcMessageSignSource) {
                this.actualInstance = instance;
            } else if(!!MpcMessageSignSource.validateJSON && MpcMessageSignSource.validateJSON(instance)){
                // plain JS object
                // create MpcMessageSignSource from JS object
                this.actualInstance = MpcMessageSignSource.constructFromObject(instance);
            } else {
                if(MpcMessageSignSource.constructFromObject(instance)) {
                    if (!!MpcMessageSignSource.constructFromObject(instance).toJSON) {
                        if (MpcMessageSignSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = MpcMessageSignSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = MpcMessageSignSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcMessageSignSource
            errorMessages.push("Failed to construct MpcMessageSignSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `MessageSignSource` with oneOf schemas MpcMessageSignSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `MessageSignSource` with oneOf schemas MpcMessageSignSource. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>MessageSignSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageSignSource} obj Optional instance to populate.
     * @return {module:model/MessageSignSource} The populated <code>MessageSignSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new MessageSignSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>MpcMessageSignSource</code>.
     * @return {(module:model/MpcMessageSignSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>MpcMessageSignSource</code>.
     * @param {(module:model/MpcMessageSignSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = MessageSignSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of MessageSignSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/MessageSignSource} An instance of MessageSignSource.
     */
    static fromJSON = function(json_string){
        return MessageSignSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/MessageSignSourceType} source_type
 */
MessageSignSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
MessageSignSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
MessageSignSource.prototype['address'] = undefined;

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_share_holder_group
 */
MessageSignSource.prototype['mpc_used_key_share_holder_group'] = undefined;


MessageSignSource.OneOf = ["MpcMessageSignSource"];

export default MessageSignSource;

