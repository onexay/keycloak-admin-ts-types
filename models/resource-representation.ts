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


import { ResourceOwnerRepresentation } from './resource-owner-representation';
import { ScopeRepresentation } from './scope-representation';

/**
 * 
 * @export
 * @interface ResourceRepresentation
 */
export interface ResourceRepresentation {
    /**
     * 
     * @type {string}
     * @memberof ResourceRepresentation
     */
    _id?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceRepresentation
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ResourceRepresentation
     */
    uris?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ResourceRepresentation
     */
    type?: string;
    /**
     * 
     * @type {Array<ScopeRepresentation>}
     * @memberof ResourceRepresentation
     */
    scopes?: Array<ScopeRepresentation>;
    /**
     * 
     * @type {string}
     * @memberof ResourceRepresentation
     */
    icon_uri?: string;
    /**
     * 
     * @type {ResourceOwnerRepresentation}
     * @memberof ResourceRepresentation
     */
    owner?: ResourceOwnerRepresentation;
    /**
     * 
     * @type {boolean}
     * @memberof ResourceRepresentation
     */
    ownerManagedAccess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ResourceRepresentation
     */
    displayName?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ResourceRepresentation
     */
    attributes?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {string}
     * @memberof ResourceRepresentation
     */
    uri?: string;
    /**
     * 
     * @type {Array<ScopeRepresentation>}
     * @memberof ResourceRepresentation
     */
    scopesUma?: Array<ScopeRepresentation>;
}

