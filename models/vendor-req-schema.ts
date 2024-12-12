// tslint:disable
/**
 * My Project
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Null } from './null';

/**
 * VendorReqSchema
 * @export
 * @interface VendorReqSchema
 */
export interface VendorReqSchema {
    /**
     * Name
     * @type {string}
     * @memberof VendorReqSchema
     */
    name: string;
    /**
     * Address
     * @type {string | Null}
     * @memberof VendorReqSchema
     */
    address: string | Null;
    /**
     * Tax Id
     * @type {string | Null}
     * @memberof VendorReqSchema
     */
    tax_id: string | Null;
    /**
     * Contact Fullname
     * @type {string}
     * @memberof VendorReqSchema
     */
    contact_fullname: string;
    /**
     * Contact Mobile
     * @type {string}
     * @memberof VendorReqSchema
     */
    contact_mobile: string;
    /**
     * Contact Email
     * @type {string | Null}
     * @memberof VendorReqSchema
     */
    contact_email: string | Null;
    /**
     * Active
     * @type {boolean}
     * @memberof VendorReqSchema
     */
    active?: boolean;
}


