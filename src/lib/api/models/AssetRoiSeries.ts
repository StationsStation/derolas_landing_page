/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { TimeSeriesPoint } from './TimeSeriesPoint';
export type AssetRoiSeries = {
    asset_symbol: string;
    /**
     * Cumulative ROI (%) over time for this asset
     */
    series: Array<TimeSeriesPoint>;
};

