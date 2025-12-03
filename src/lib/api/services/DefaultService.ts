/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { PoolMetricsResponse } from '../models/PoolMetricsResponse';
import type { PoolSummary } from '../models/PoolSummary';
import type { VolumesResponse } from '../models/VolumesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Volume by exchange and Derolas share
     * @returns VolumesResponse Time series volume data and derived exchange share metrics
     * @throws ApiError
     */
    public static getVolumes(): CancelablePromise<VolumesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/volumes',
        });
    }
    /**
     * List pools
     * @returns PoolSummary All pools
     * @throws ApiError
     */
    public static listPools(): CancelablePromise<Array<PoolSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pools',
        });
    }
    /**
     * Metrics and time series for a pool
     * @param poolId
     * @param start Start of lookback window (inclusive)
     * @param end End of lookback window (exclusive)
     * @param resolution Aggregation granularity for charts
     * @returns PoolMetricsResponse Metrics for charts on the pool dashboard
     * @throws ApiError
     */
    public static getPoolMetrics(
        poolId: string,
        start: string,
        end: string,
        resolution: '1h' | '4h' | '1d' = '1d',
    ): CancelablePromise<PoolMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pools/{poolId}/metrics',
            path: {
                'poolId': poolId,
            },
            query: {
                'start': start,
                'end': end,
                'resolution': resolution,
            },
        });
    }
}
