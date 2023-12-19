import BigNumber from 'bignumber.js';
import { isNil } from 'lodash';
import { ChainList, ChainType } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';

export const isValidStringNumber = (value: number | string | undefined): value is number | string => {
    if (!value && value !== 0) {
        return false;
    }

    return true;
};

export const formatCurrency = (value: number | string, decimal?: number) => {
    if (isNil(value)) return 0;
    return new BigNumber(value).isLessThan(0) ? 0 : new BigNumber(value).toFormat(decimal);
};

// hàm lấy đơn vị tiền

export function getUnitValue(name: string) {
    if (name.includes('/')) {
        const arr = name.split('/');
        return arr[arr.length - 1];
    }
    return '$';
}

export const clearDotValue = (value: string) => {
    const splitValue = value.split('.');
    return splitValue?.[1] ? value : splitValue?.[0];
};

export const isLessThanOrEqualTo = (first?: number | string, second?: number | string) => {
    if (!isValidStringNumber(first) || !isValidStringNumber(second)) {
        return true;
    }
    return new BigNumber(first).isLessThanOrEqualTo(new BigNumber(second));
};

export const getBlockScanUrl = (chainId: ChainType) => {
    switch (chainId) {
        case ChainType.ETHER:
            return ChainList.ether.scan;

        case ChainType.BSC:
            return ChainList.bsc.scan;
    }
};
