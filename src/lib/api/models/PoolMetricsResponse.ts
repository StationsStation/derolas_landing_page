/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AssetRoiSeries } from './AssetRoiSeries';
import type { TimeSeriesPoint } from './TimeSeriesPoint';
export type PoolMetricsResponse = {
    pool_id: string;
    /**
     * Current APR (percentage, 0–100)
     */
    current_apr: number;
    fees_24h_usd: number;
    total_shares: number;
    /**
     * Current total value locked
     */
    tvl_usd: number;
    current_share_price_usd: number;
    /**
     * Current ROI in percent (may be negative)
     */
    current_roi_pct: number;
    /**
     * For "Derolas Share Price" chart
     */
    share_price_series: Array<TimeSeriesPoint>;
    /**
     * For "Cumulative ROI of Assets in Bundle" multi-line chart
     */
    asset_cumulative_roi_series: Array<AssetRoiSeries>;
    /**
     * TVL (USD) over previous 30 days
     */
    tvl_series: Array<TimeSeriesPoint>;
    /**
     * Fees (USD) over previous 30 days
     */
    fees_series: Array<TimeSeriesPoint>;
    /**
     * Derolas LP shares over previous 30 days
     */
    lp_shares_series: Array<TimeSeriesPoint>;
};

