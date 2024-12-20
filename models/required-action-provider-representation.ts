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
 * @interface RequiredActionProviderRepresentation
 */
export interface RequiredActionProviderRepresentation {
    /**
     * 
     * @type {string}
     * @memberof RequiredActionProviderRepresentation
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof RequiredActionProviderRepresentation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequiredActionProviderRepresentation
     */
    providerId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RequiredActionProviderRepresentation
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RequiredActionProviderRepresentation
     */
    defaultAction?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RequiredActionProviderRepresentation
     */
    priority?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RequiredActionProviderRepresentation
     */
    config?: { [key: string]: string; };
}


