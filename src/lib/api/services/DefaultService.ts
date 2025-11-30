/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { Parameter } from '../models/Parameter';
import type { ParameterUpdateRequest } from '../models/ParameterUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
	/**
	 * Get all parameters
	 * @returns Parameter List of parameters
	 * @throws ApiError
	 */
	public static getParameters(): CancelablePromise<Array<Parameter>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/parameters'
		});
	}
	/**
	 * Update a parameter
	 * @param requestBody
	 * @returns Parameter Parameter updated successfully
	 * @throws ApiError
	 */
	public static postParameters(requestBody: ParameterUpdateRequest): CancelablePromise<Parameter> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/parameters',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				404: `Parameter not found`
			}
		});
	}
}
