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


import { ConfigPropertyRepresentation } from './config-property-representation';

/**
 * 
 * @export
 * @interface AuthenticatorConfigInfoRepresentation
 */
export interface AuthenticatorConfigInfoRepresentation {
    /**
     * 
     * @type {string}
     * @memberof AuthenticatorConfigInfoRepresentation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticatorConfigInfoRepresentation
     */
    providerId?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticatorConfigInfoRepresentation
     */
    helpText?: string;
    /**
     * 
     * @type {Array<ConfigPropertyRepresentation>}
     * @memberof AuthenticatorConfigInfoRepresentation
     */
    properties?: Array<ConfigPropertyRepresentation>;
}

