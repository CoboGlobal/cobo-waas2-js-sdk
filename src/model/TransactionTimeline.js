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
import TransactionStatus from './TransactionStatus';

/**
 * The TransactionTimeline model module.
 * @module model/TransactionTimeline
 * @version 0.2.7
 */
class TransactionTimeline {
    /**
     * Constructs a new <code>TransactionTimeline</code>.
     * The data for transaction timeline information.
     * @alias module:model/TransactionTimeline
     */
    constructor() { 
        
        TransactionTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionTimeline} obj Optional instance to populate.
     * @return {module:model/TransactionTimeline} The populated <code>TransactionTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionTimeline();

            if (data.hasOwnProperty('status')) {
                obj['status'] = TransactionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('finished')) {
                obj['finished'] = ApiClient.convertToType(data['finished'], 'Boolean');
            }
            if (data.hasOwnProperty('finished_time')) {
                obj['finished_time'] = ApiClient.convertToType(data['finished_time'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionTimeline</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionTimeline</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/TransactionStatus} status
 */
TransactionTimeline.prototype['status'] = undefined;

/**
 * Whether the timeline status finished
 * @member {Boolean} finished
 */
TransactionTimeline.prototype['finished'] = undefined;

/**
 * Timeline status finished time
 * @member {Number} finished_time
 */
TransactionTimeline.prototype['finished_time'] = undefined;






export default TransactionTimeline;

