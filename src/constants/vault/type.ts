export enum VaultType {
    ALL = 'ALL',
    STABLE = 'STABLE',
    CRYPTO = 'CRYPTO',
    SINGLE = 'SINGLE',
    HOLDING = 'HOLDING',
    LP = 'LP',
}

export type HistoricalData = {
    nextTimeRebalance: string;
    // maxApr: string,
    // maxTvl: string,
    // maxSharePrice: string,
    aprData: {
        timestamp: string;
        value: string;
    }[];
    tvlData: {
        timestamp: string;
        value: string;
    }[];
    sharePriceData: {
        timestamp: string;
        value: string;
    }[];
};
