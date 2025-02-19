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
import SelectedEntityType from './SelectedEntityType';

/**
 * The TravelRuleWithdrawNaturalEntity model module.
 * @module model/TravelRuleWithdrawNaturalEntity
 */
class TravelRuleWithdrawNaturalEntity {
    /**
     * Constructs a new <code>TravelRuleWithdrawNaturalEntity</code>.
     * The required information of a natural person.
     * @alias module:model/TravelRuleWithdrawNaturalEntity
     * @param selected_entity_type {module:model/SelectedEntityType} 
     * @param first_name {String} The first name of the natural person.
     * @param last_name {String} The last name of the natural person.
     */
    constructor(selected_entity_type, first_name, last_name) { 
        
        TravelRuleWithdrawNaturalEntity.initialize(this, selected_entity_type, first_name, last_name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, selected_entity_type, first_name, last_name) { 
        obj['selected_entity_type'] = selected_entity_type;
        obj['first_name'] = first_name;
        obj['last_name'] = last_name;
    }

    /**
     * Constructs a <code>TravelRuleWithdrawNaturalEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TravelRuleWithdrawNaturalEntity} obj Optional instance to populate.
     * @return {module:model/TravelRuleWithdrawNaturalEntity} The populated <code>TravelRuleWithdrawNaturalEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TravelRuleWithdrawNaturalEntity();

            if (data.hasOwnProperty('selected_entity_type')) {
                obj['selected_entity_type'] = SelectedEntityType.constructFromObject(data['selected_entity_type']);
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('date_of_birth')) {
                obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Date');
            }
            if (data.hasOwnProperty('place_of_birth')) {
                obj['place_of_birth'] = ApiClient.convertToType(data['place_of_birth'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TravelRuleWithdrawNaturalEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TravelRuleWithdrawNaturalEntity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TravelRuleWithdrawNaturalEntity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['place_of_birth'] && !(typeof data['place_of_birth'] === 'string' || data['place_of_birth'] instanceof String)) {
            throw new Error("Expected the field `place_of_birth` to be a primitive type in the JSON string but got " + data['place_of_birth']);
        }

        return true;
    }


}

TravelRuleWithdrawNaturalEntity.RequiredProperties = ["selected_entity_type", "first_name", "last_name"];

/**
 * @member {module:model/SelectedEntityType} selected_entity_type
 */
TravelRuleWithdrawNaturalEntity.prototype['selected_entity_type'] = undefined;

/**
 * The first name of the natural person.
 * @member {String} first_name
 */
TravelRuleWithdrawNaturalEntity.prototype['first_name'] = undefined;

/**
 * The last name of the natural person.
 * @member {String} last_name
 */
TravelRuleWithdrawNaturalEntity.prototype['last_name'] = undefined;

/**
 * The date of birth of the natural person.
 * @member {Date} date_of_birth
 */
TravelRuleWithdrawNaturalEntity.prototype['date_of_birth'] = undefined;

/**
 * The place of birth of the natural person.
 * @member {String} place_of_birth
 */
TravelRuleWithdrawNaturalEntity.prototype['place_of_birth'] = undefined;






export default TravelRuleWithdrawNaturalEntity;

