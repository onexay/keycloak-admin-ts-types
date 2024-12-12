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


import { ClientPolicyExecutorRepresentation } from './client-policy-executor-representation';

/**
 * 
 * @export
 * @interface ClientProfileRepresentation
 */
export interface ClientProfileRepresentation {
    /**
     * 
     * @type {string}
     * @memberof ClientProfileRepresentation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientProfileRepresentation
     */
    description?: string;
    /**
     * 
     * @type {Array<ClientPolicyExecutorRepresentation>}
     * @memberof ClientProfileRepresentation
     */
    executors?: Array<ClientPolicyExecutorRepresentation>;
}


