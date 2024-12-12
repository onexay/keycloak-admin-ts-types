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


import { ClientMappingsRepresentation } from './client-mappings-representation';
import { RoleRepresentation } from './role-representation';

/**
 * 
 * @export
 * @interface MappingsRepresentation
 */
export interface MappingsRepresentation {
    /**
     * 
     * @type {Array<RoleRepresentation>}
     * @memberof MappingsRepresentation
     */
    realmMappings?: Array<RoleRepresentation>;
    /**
     * 
     * @type {{ [key: string]: ClientMappingsRepresentation; }}
     * @memberof MappingsRepresentation
     */
    clientMappings?: { [key: string]: ClientMappingsRepresentation; };
}

