export type VaultDetailDTO = {
    id: string;
    vault: {
        img?: string;
        img2?: string;
        name: string;
    };
    apy?: string;
    riskEstimation?: string;
    tvl?: string;
    myBalance?: string;
    address: string;
    sharePrice: string;
    url: string;
};

export enum VaultKey {
    KEYWORD = 'keyword',
    TYPE = 'type',
    VAULT = 'vault',
    APY = 'apy',
    RISK = 'riskEstimation',
    TVL = 'tvl',
    BALANCE = 'myBalance',
}
