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
 * UserListResSchema
 * @export
 * @interface UserListResSchema
 */
export interface UserListResSchema {
    /**
     * Count
     * @type {number}
     * @memberof UserListResSchema
     */
    count: number;
    /**
     * Data
     * @type {Array<UserResSchema>}
     * @memberof UserListResSchema
     */
    data: Array<UserResSchema>;
}

