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


import { EnforcementMode } from './enforcement-mode';
import { PathCacheConfig } from './path-cache-config';
import { PathConfig } from './path-config';

/**
 * 
 * @export
 * @interface PolicyEnforcerConfig
 */
export interface PolicyEnforcerConfig {
    /**
     * 
     * @type {EnforcementMode}
     * @memberof PolicyEnforcerConfig
     */
    enforcement_mode?: EnforcementMode;
    /**
     * 
     * @type {Array<PathConfig>}
     * @memberof PolicyEnforcerConfig
     */
    paths?: Array<PathConfig>;
    /**
     * 
     * @type {PathCacheConfig}
     * @memberof PolicyEnforcerConfig
     */
    path_cache?: PathCacheConfig;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyEnforcerConfig
     */
    lazy_load_paths?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyEnforcerConfig
     */
    on_deny_redirect_to?: string;
    /**
     * 
     * @type {object}
     * @memberof PolicyEnforcerConfig
     */
    user_managed_access?: object;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof PolicyEnforcerConfig
     */
    claim_information_point?: { [key: string]: { [key: string]: string; }; };
    /**
     * 
     * @type {boolean}
     * @memberof PolicyEnforcerConfig
     */
    http_method_as_scope?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyEnforcerConfig
     */
    realm?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEnforcerConfig
     */
    auth_server_url?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PolicyEnforcerConfig
     */
    credentials?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PolicyEnforcerConfig
     */
    resource?: string;
}

