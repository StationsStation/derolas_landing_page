/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Exchange = {
    /**
     * Stable identifier for the exchange (used as map key)
     */
    id: string;
    name: string;
    kind: Exchange.kind;
    /**
     * Chain if on-chain, null for off-chain venues
     */
    chain?: string | null;
    website?: string | null;
};
export namespace Exchange {
    export enum kind {
        CEX = 'cex',
        DEX = 'dex',
        PERP = 'perp',
        OPTIONS = 'options',
        AGGREGATOR = 'aggregator',
        OTHER = 'other',
    }
}

