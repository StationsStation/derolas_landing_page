/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { ExchangesResponse } from '../models/ExchangesResponse';
import type { PoolMetricsResponse } from '../models/PoolMetricsResponse';
import type { PoolsResponse } from '../models/PoolsResponse';
import type { VolumesResponse } from '../models/VolumesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * List exchanges / venues
     * @returns ExchangesResponse All exchanges / venues available in metrics
     * @throws ApiError
     */
    public static listExchanges(): CancelablePromise<ExchangesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/exchanges',
        });
    }
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
     * @returns PoolsResponse All pools
     * @throws ApiError
     */
    public static listPools(): CancelablePromise<PoolsResponse> {
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
