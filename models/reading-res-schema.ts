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
 * ReadingResSchema
 * @export
 * @interface ReadingResSchema
 */
export interface ReadingResSchema {
    /**
     * Current Value
     * @type {number}
     * @memberof ReadingResSchema
     */
    current_value: number;
    /**
     * Id
     * @type {string}
     * @memberof ReadingResSchema
     */
    id: string;
    /**
     * Tenant Id
     * @type {string | Null}
     * @memberof ReadingResSchema
     */
    tenant_id?: string | Null;
    /**
     * Vendor Id
     * @type {string | Null}
     * @memberof ReadingResSchema
     */
    vendor_id?: string | Null;
    /**
     * Meter Id
     * @type {string | Null}
     * @memberof ReadingResSchema
     */
    meter_id?: string | Null;
    /**
     * Created Ts
     * @type {string}
     * @memberof ReadingResSchema
     */
    created_ts: string;
    /**
     * Updated Ts
     * @type {string}
     * @memberof ReadingResSchema
     */
    updated_ts: string;
}

