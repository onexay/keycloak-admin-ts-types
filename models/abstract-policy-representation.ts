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


import { DecisionStrategy } from './decision-strategy';
import { Logic } from './logic';
import { ResourceRepresentation } from './resource-representation';
import { ScopeRepresentation } from './scope-representation';

/**
 * 
 * @export
 * @interface AbstractPolicyRepresentation
 */
export interface AbstractPolicyRepresentation {
    /**
     * 
     * @type {string}
     * @memberof AbstractPolicyRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractPolicyRepresentation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractPolicyRepresentation
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractPolicyRepresentation
     */
    type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AbstractPolicyRepresentation
     */
    policies?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AbstractPolicyRepresentation
     */
    resources?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AbstractPolicyRepresentation
     */
    scopes?: Array<string>;
    /**
     * 
     * @type {Logic}
     * @memberof AbstractPolicyRepresentation
     */
    logic?: Logic;
    /**
     * 
     * @type {DecisionStrategy}
     * @memberof AbstractPolicyRepresentation
     */
    decisionStrategy?: DecisionStrategy;
    /**
     * 
     * @type {string}
     * @memberof AbstractPolicyRepresentation
     */
    owner?: string;
    /**
     * 
     * @type {Array<ResourceRepresentation>}
     * @memberof AbstractPolicyRepresentation
     */
    resourcesData?: Array<ResourceRepresentation>;
    /**
     * 
     * @type {Array<ScopeRepresentation>}
     * @memberof AbstractPolicyRepresentation
     */
    scopesData?: Array<ScopeRepresentation>;
}


