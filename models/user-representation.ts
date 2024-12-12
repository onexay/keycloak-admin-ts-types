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


import { CredentialRepresentation } from './credential-representation';
import { FederatedIdentityRepresentation } from './federated-identity-representation';
import { SocialLinkRepresentation } from './social-link-representation';
import { UserConsentRepresentation } from './user-consent-representation';
import { UserProfileMetadata } from './user-profile-metadata';

/**
 * 
 * @export
 * @interface UserRepresentation
 */
export interface UserRepresentation {
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserRepresentation
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof UserRepresentation
     */
    attributes?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {UserProfileMetadata}
     * @memberof UserRepresentation
     */
    userProfileMetadata?: UserProfileMetadata;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    origin?: string;
    /**
     * 
     * @type {number}
     * @memberof UserRepresentation
     */
    createdTimestamp?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserRepresentation
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserRepresentation
     */
    totp?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    federationLink?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    serviceAccountClientId?: string;
    /**
     * 
     * @type {Array<CredentialRepresentation>}
     * @memberof UserRepresentation
     */
    credentials?: Array<CredentialRepresentation>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRepresentation
     */
    disableableCredentialTypes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRepresentation
     */
    requiredActions?: Array<string>;
    /**
     * 
     * @type {Array<FederatedIdentityRepresentation>}
     * @memberof UserRepresentation
     */
    federatedIdentities?: Array<FederatedIdentityRepresentation>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRepresentation
     */
    realmRoles?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof UserRepresentation
     */
    clientRoles?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Array<UserConsentRepresentation>}
     * @memberof UserRepresentation
     */
    clientConsents?: Array<UserConsentRepresentation>;
    /**
     * 
     * @type {number}
     * @memberof UserRepresentation
     */
    notBefore?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof UserRepresentation
     */
    applicationRoles?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Array<SocialLinkRepresentation>}
     * @memberof UserRepresentation
     */
    socialLinks?: Array<SocialLinkRepresentation>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRepresentation
     */
    groups?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof UserRepresentation
     */
    access?: { [key: string]: boolean; };
}


