import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HistoricalData } from 'src/constants/vault/type';
import { VaultDetailDTO } from 'src/types/vault/vaultDetail.type';

interface IVaultState {
    listVault: VaultDetailDTO[];
    detailVault: VaultDetailDTO | null;
    usdt: string;
    staked: string;
    depositOrder: string;
    withdrawOrder: string;
    historicalVaultData: HistoricalData | null;
}

const initialState: IVaultState = {
    listVault: [],
    detailVault: null,
    usdt: '0',
    staked: '0',
    depositOrder: '0',
    withdrawOrder: '0',
    historicalVaultData: null,
};

export const vaultStoreSlice = createSlice({
    name: 'vaultStore',
    initialState,
    reducers: {
        handleSetListVault: (state, action: PayloadAction<VaultDetailDTO[]>) => {
            state.listVault = action.payload;
        },
        handleSetVaultDetail: (state, action: PayloadAction<VaultDetailDTO>) => {
            state.detailVault = action.payload;
        },
    },
});

export const { handleSetListVault, handleSetVaultDetail } = vaultStoreSlice.actions;
const vaultStoreReducer = vaultStoreSlice.reducer;

export default vaultStoreReducer;
