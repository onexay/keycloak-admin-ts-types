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



/**
 * 
 * @export
 * @interface UserConsentRepresentation
 */
export interface UserConsentRepresentation {
    /**
     * 
     * @type {string}
     * @memberof UserConsentRepresentation
     */
    clientId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConsentRepresentation
     */
    grantedClientScopes?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof UserConsentRepresentation
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof UserConsentRepresentation
     */
    lastUpdatedDate?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserConsentRepresentation
     */
    grantedRealmRoles?: Array<string>;
}


