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
import BTCEIP191MessageSignDestination from './BTCEIP191MessageSignDestination';
import EvmEIP191MessageSignDestination from './EvmEIP191MessageSignDestination';
import EvmEIP712MessageSignDestination from './EvmEIP712MessageSignDestination';
import MessageSignDestinationType from './MessageSignDestinationType';

/**
 * The MessageSignDestination model module.
 * @module model/MessageSignDestination
 */
class MessageSignDestination {
    /**
     * Constructs a new <code>MessageSignDestination</code>.
     * @alias module:model/MessageSignDestination
     * @param {(module:model/BTCEIP191MessageSignDestination|module:model/EvmEIP191MessageSignDestination|module:model/EvmEIP712MessageSignDestination)} instance The actual instance to initialize MessageSignDestination.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["destination_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "BTC_EIP_191_Signature":
                    this.actualInstance = BTCEIP191MessageSignDestination.constructFromObject(instance);
                    match++;
                    break;
                case "EVM_EIP_191_Signature":
                    this.actualInstance = EvmEIP191MessageSignDestination.constructFromObject(instance);
                    match++;
                    break;
                case "EVM_EIP_712_Signature":
                    this.actualInstance = EvmEIP712MessageSignDestination.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof EvmEIP191MessageSignDestination) {
                this.actualInstance = instance;
            } else if(!!EvmEIP191MessageSignDestination.validateJSON && EvmEIP191MessageSignDestination.validateJSON(instance)){
                // plain JS object
                // create EvmEIP191MessageSignDestination from JS object
                this.actualInstance = EvmEIP191MessageSignDestination.constructFromObject(instance);
            } else {
                if(EvmEIP191MessageSignDestination.constructFromObject(instance)) {
                    if (!!EvmEIP191MessageSignDestination.constructFromObject(instance).toJSON) {
                        if (EvmEIP191MessageSignDestination.constructFromObject(instance).toJSON()) {
                            this.actualInstance = EvmEIP191MessageSignDestination.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = EvmEIP191MessageSignDestination.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmEIP191MessageSignDestination
            errorMessages.push("Failed to construct EvmEIP191MessageSignDestination: " + err)
        }

        try {
            if (instance instanceof EvmEIP712MessageSignDestination) {
                this.actualInstance = instance;
            } else if(!!EvmEIP712MessageSignDestination.validateJSON && EvmEIP712MessageSignDestination.validateJSON(instance)){
                // plain JS object
                // create EvmEIP712MessageSignDestination from JS object
                this.actualInstance = EvmEIP712MessageSignDestination.constructFromObject(instance);
            } else {
                if(EvmEIP712MessageSignDestination.constructFromObject(instance)) {
                    if (!!EvmEIP712MessageSignDestination.constructFromObject(instance).toJSON) {
                        if (EvmEIP712MessageSignDestination.constructFromObject(instance).toJSON()) {
                            this.actualInstance = EvmEIP712MessageSignDestination.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = EvmEIP712MessageSignDestination.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmEIP712MessageSignDestination
            errorMessages.push("Failed to construct EvmEIP712MessageSignDestination: " + err)
        }

        try {
            if (instance instanceof BTCEIP191MessageSignDestination) {
                this.actualInstance = instance;
            } else if(!!BTCEIP191MessageSignDestination.validateJSON && BTCEIP191MessageSignDestination.validateJSON(instance)){
                // plain JS object
                // create BTCEIP191MessageSignDestination from JS object
                this.actualInstance = BTCEIP191MessageSignDestination.constructFromObject(instance);
            } else {
                if(BTCEIP191MessageSignDestination.constructFromObject(instance)) {
                    if (!!BTCEIP191MessageSignDestination.constructFromObject(instance).toJSON) {
                        if (BTCEIP191MessageSignDestination.constructFromObject(instance).toJSON()) {
                            this.actualInstance = BTCEIP191MessageSignDestination.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = BTCEIP191MessageSignDestination.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BTCEIP191MessageSignDestination
            errorMessages.push("Failed to construct BTCEIP191MessageSignDestination: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `MessageSignDestination` with oneOf schemas BTCEIP191MessageSignDestination, EvmEIP191MessageSignDestination, EvmEIP712MessageSignDestination. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `MessageSignDestination` with oneOf schemas BTCEIP191MessageSignDestination, EvmEIP191MessageSignDestination, EvmEIP712MessageSignDestination. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>MessageSignDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageSignDestination} obj Optional instance to populate.
     * @return {module:model/MessageSignDestination} The populated <code>MessageSignDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        return new MessageSignDestination(data);
    }

    /**
     * Gets the actual instance, which can be <code>BTCEIP191MessageSignDestination</code>, <code>EvmEIP191MessageSignDestination</code>, <code>EvmEIP712MessageSignDestination</code>.
     * @return {(module:model/BTCEIP191MessageSignDestination|module:model/EvmEIP191MessageSignDestination|module:model/EvmEIP712MessageSignDestination)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BTCEIP191MessageSignDestination</code>, <code>EvmEIP191MessageSignDestination</code>, <code>EvmEIP712MessageSignDestination</code>.
     * @param {(module:model/BTCEIP191MessageSignDestination|module:model/EvmEIP191MessageSignDestination|module:model/EvmEIP712MessageSignDestination)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = MessageSignDestination.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of MessageSignDestination from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/MessageSignDestination} An instance of MessageSignDestination.
     */
    static fromJSON = function(json_string){
        return MessageSignDestination.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/MessageSignDestinationType} destination_type
 */
MessageSignDestination.prototype['destination_type'] = undefined;

/**
 * The raw data of the message to be signed, encoded in Base64 format.
 * @member {String} message
 */
MessageSignDestination.prototype['message'] = undefined;

/**
 * The structured data to be signed, formatted as a JSON object according to the EIP-712 standard.
 * @member {Object.<String, Object>} structured_data
 */
MessageSignDestination.prototype['structured_data'] = undefined;


MessageSignDestination.OneOf = ["BTCEIP191MessageSignDestination", "EvmEIP191MessageSignDestination", "EvmEIP712MessageSignDestination"];

export default MessageSignDestination;

