/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
export type AssetRoiSeries = {
    asset_symbol: string;
    asset_name?: string;
    /**
     * Cumulative ROI (%) over time for this asset
     */
    series: Array<{
        timestamp: string;
        cumulative_roi_pct: number;
    }>;
};
