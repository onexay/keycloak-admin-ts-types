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


import { VendorResSchema } from './vendor-res-schema';

/**
 * TenantVendorsExtResSchema
 * @export
 * @interface TenantVendorsExtResSchema
 */
export interface TenantVendorsExtResSchema {
    /**
     * Tenant Id
     * @type {string}
     * @memberof TenantVendorsExtResSchema
     */
    tenant_id: string;
    /**
     * 
     * @type {VendorResSchema}
     * @memberof TenantVendorsExtResSchema
     */
    vendor: VendorResSchema;
    /**
     * Active
     * @type {boolean}
     * @memberof TenantVendorsExtResSchema
     */
    active: boolean;
    /**
     * Created Ts
     * @type {string}
     * @memberof TenantVendorsExtResSchema
     */
    created_ts: string;
    /**
     * Updated Ts
     * @type {string}
     * @memberof TenantVendorsExtResSchema
     */
    updated_ts: string;
}

