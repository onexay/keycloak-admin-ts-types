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


import { UserResSchema } from './user-res-schema';

/**
 * TenantUsersExtResSchema
 * @export
 * @interface TenantUsersExtResSchema
 */
export interface TenantUsersExtResSchema {
    /**
     * Tenant Id
     * @type {string}
     * @memberof TenantUsersExtResSchema
     */
    tenant_id: string;
    /**
     * 
     * @type {UserResSchema}
     * @memberof TenantUsersExtResSchema
     */
    user: UserResSchema;
    /**
     * Active
     * @type {boolean}
     * @memberof TenantUsersExtResSchema
     */
    active: boolean;
    /**
     * Created Ts
     * @type {string}
     * @memberof TenantUsersExtResSchema
     */
    created_ts: string;
    /**
     * Updated Ts
     * @type {string}
     * @memberof TenantUsersExtResSchema
     */
    updated_ts: string;
}

