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


import { AuthDetailsRepresentation } from './auth-details-representation';

/**
 * 
 * @export
 * @interface AdminEventRepresentation
 */
export interface AdminEventRepresentation {
    /**
     * 
     * @type {number}
     * @memberof AdminEventRepresentation
     */
    time?: number;
    /**
     * 
     * @type {string}
     * @memberof AdminEventRepresentation
     */
    realmId?: string;
    /**
     * 
     * @type {AuthDetailsRepresentation}
     * @memberof AdminEventRepresentation
     */
    authDetails?: AuthDetailsRepresentation;
    /**
     * 
     * @type {string}
     * @memberof AdminEventRepresentation
     */
    operationType?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEventRepresentation
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEventRepresentation
     */
    resourcePath?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEventRepresentation
     */
    representation?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEventRepresentation
     */
    error?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AdminEventRepresentation
     */
    details?: { [key: string]: string; };
}


