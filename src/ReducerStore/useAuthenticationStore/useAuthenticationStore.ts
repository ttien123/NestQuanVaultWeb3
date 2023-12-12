import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum ChainType {
    ETHER = import.meta.env.VITE_ETHER_CHAINID,
    BSC = import.meta.env.VITE_BINANCE_CHAINID,
}

export const ChainList = {
    ether: {
        chainId: import.meta.env.VITE_ETHER_CHAINID,
        name: import.meta.env.VITE_ETHER_NAME,
        rpc: [import.meta.env.VITE_ETHER_RPC],
        controller: import.meta.env.VITE_ETHER_CONTROLLER,
        scan: import.meta.env.VITE_ETHER_SCAN,
    },
    bsc: {
        chainId: import.meta.env.VITE_BINANCE_CHAINID,
        name: import.meta.env.VITE_BINANCE_NAME,
        rpc: [import.meta.env.VITE_BINANCE_RPC],
        controller: import.meta.env.VITE_BINANCE_CONTROLLER,
        scan: import.meta.env.VITE_BINANCE_SCAN,
    },
};

interface Authentication {
    address: string;
    listAddress: any;
    authenticationToken: string;
    currentChain: ChainType;
    currentWallet: string;
}

const initialState: Authentication = {
    address: '',
    listAddress: {},
    authenticationToken: '',
    currentChain: ChainType.BSC,
    currentWallet: '',
};

export const authenticationSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        handleSetAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        handleRemoveAddress: (state) => {
            state.address = '';
        },
        handleSetChain: (state, action: PayloadAction<ChainType>) => {
            state.currentChain = action.payload;
        },
    },
});

export const { handleSetAddress, handleRemoveAddress, handleSetChain } = authenticationSlice.actions;
const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
