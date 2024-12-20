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


import { ClaimRepresentation } from './claim-representation';
import { ProtocolMapperRepresentation } from './protocol-mapper-representation';
import { ResourceServerRepresentation } from './resource-server-representation';

/**
 * 
 * @export
 * @interface OAuthClientRepresentation
 */
export interface OAuthClientRepresentation {
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    rootUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    adminUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    surrogateAuthRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    alwaysDisplayInConsole?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    clientAuthenticatorType?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    secret?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    registrationAccessToken?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuthClientRepresentation
     */
    defaultRoles?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuthClientRepresentation
     */
    redirectUris?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuthClientRepresentation
     */
    webOrigins?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof OAuthClientRepresentation
     */
    notBefore?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    bearerOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    consentRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    standardFlowEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    implicitFlowEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    directAccessGrantsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    serviceAccountsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    authorizationServicesEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    directGrantsOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    publicClient?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    frontchannelLogout?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    protocol?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OAuthClientRepresentation
     */
    attributes?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OAuthClientRepresentation
     */
    authenticationFlowBindingOverrides?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    fullScopeAllowed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OAuthClientRepresentation
     */
    nodeReRegistrationTimeout?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof OAuthClientRepresentation
     */
    registeredNodes?: { [key: string]: number; };
    /**
     * 
     * @type {Array<ProtocolMapperRepresentation>}
     * @memberof OAuthClientRepresentation
     */
    protocolMappers?: Array<ProtocolMapperRepresentation>;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    clientTemplate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    useTemplateConfig?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    useTemplateScope?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OAuthClientRepresentation
     */
    useTemplateMappers?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuthClientRepresentation
     */
    defaultClientScopes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuthClientRepresentation
     */
    optionalClientScopes?: Array<string>;
    /**
     * 
     * @type {ResourceServerRepresentation}
     * @memberof OAuthClientRepresentation
     */
    authorizationSettings?: ResourceServerRepresentation;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof OAuthClientRepresentation
     */
    access?: { [key: string]: boolean; };
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    origin?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthClientRepresentation
     */
    name?: string;
    /**
     * 
     * @type {ClaimRepresentation}
     * @memberof OAuthClientRepresentation
     */
    claims?: ClaimRepresentation;
}


