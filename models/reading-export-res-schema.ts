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


import { ReadingReqSchema } from './reading-req-schema';

/**
 * ReadingExportResSchema
 * @export
 * @interface ReadingExportResSchema
 */
export interface ReadingExportResSchema {
    /**
     * Count
     * @type {number}
     * @memberof ReadingExportResSchema
     */
    count: number;
    /**
     * Data
     * @type {Array<ReadingReqSchema>}
     * @memberof ReadingExportResSchema
     */
    data: Array<ReadingReqSchema>;
}


