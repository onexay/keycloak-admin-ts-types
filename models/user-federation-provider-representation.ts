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
 * @interface UserFederationProviderRepresentation
 */
export interface UserFederationProviderRepresentation {
    /**
     * 
     * @type {string}
     * @memberof UserFederationProviderRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFederationProviderRepresentation
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFederationProviderRepresentation
     */
    providerName?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UserFederationProviderRepresentation
     */
    config?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof UserFederationProviderRepresentation
     */
    priority?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFederationProviderRepresentation
     */
    fullSyncPeriod?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFederationProviderRepresentation
     */
    changedSyncPeriod?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFederationProviderRepresentation
     */
    lastSync?: number;
}


