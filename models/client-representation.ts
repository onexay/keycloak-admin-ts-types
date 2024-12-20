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


import { ProtocolMapperRepresentation } from './protocol-mapper-representation';
import { ResourceServerRepresentation } from './resource-server-representation';

/**
 * 
 * @export
 * @interface ClientRepresentation
 */
export interface ClientRepresentation {
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    rootUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    adminUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    surrogateAuthRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    alwaysDisplayInConsole?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    clientAuthenticatorType?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    secret?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    registrationAccessToken?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRepresentation
     */
    defaultRoles?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRepresentation
     */
    redirectUris?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRepresentation
     */
    webOrigins?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ClientRepresentation
     */
    notBefore?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    bearerOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    consentRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    standardFlowEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    implicitFlowEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    directAccessGrantsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    serviceAccountsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    authorizationServicesEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    directGrantsOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    publicClient?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    frontchannelLogout?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    protocol?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ClientRepresentation
     */
    attributes?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ClientRepresentation
     */
    authenticationFlowBindingOverrides?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    fullScopeAllowed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ClientRepresentation
     */
    nodeReRegistrationTimeout?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ClientRepresentation
     */
    registeredNodes?: { [key: string]: number; };
    /**
     * 
     * @type {Array<ProtocolMapperRepresentation>}
     * @memberof ClientRepresentation
     */
    protocolMappers?: Array<ProtocolMapperRepresentation>;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    clientTemplate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    useTemplateConfig?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    useTemplateScope?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    useTemplateMappers?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRepresentation
     */
    defaultClientScopes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientRepresentation
     */
    optionalClientScopes?: Array<string>;
    /**
     * 
     * @type {ResourceServerRepresentation}
     * @memberof ClientRepresentation
     */
    authorizationSettings?: ResourceServerRepresentation;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof ClientRepresentation
     */
    access?: { [key: string]: boolean; };
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    origin?: string;
}


