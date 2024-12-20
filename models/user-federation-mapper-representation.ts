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
 * @interface UserFederationMapperRepresentation
 */
export interface UserFederationMapperRepresentation {
    /**
     * 
     * @type {string}
     * @memberof UserFederationMapperRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFederationMapperRepresentation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFederationMapperRepresentation
     */
    federationProviderDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFederationMapperRepresentation
     */
    federationMapperType?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UserFederationMapperRepresentation
     */
    config?: { [key: string]: string; };
}


