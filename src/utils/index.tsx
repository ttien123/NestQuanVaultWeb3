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

export const trimTrailingZero = (value: string) => {
    return value.replace(/\.0*$|(\.\d*[1-9])0+$/, '$1');
};

export const convertStatistics = (number: number | string): { value: string; suffix: string; fullValue?: string } => {
    const value = new BigNumber(number);

    if (!number || value.isLessThan(0))
        return {
            value: '0',
            suffix: '',
        };

    if (value.isGreaterThan(0) && value.isLessThan(1000))
        // 0.01
        return {
            value: trimTrailingZero(value.toFixed(2).toString()),
            suffix: '',
        };

    if (value.isGreaterThanOrEqualTo(1000)) {
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        const suffixNum = Math.floor(value.integerValue().toString().length / 3);
        const shortValue = (suffixNum != 0 ? value.div(Math.pow(1000, suffixNum)) : value).toPrecision(2);

        return {
            value: shortValue,
            suffix: suffixes[suffixNum],
        };
    }

    return {
        value: trimTrailingZero(value.toString()),
        suffix: '',
        fullValue: value.toString(),
    };
};

export const DEFAULT_SEARCH_DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_TIME_FORMAT = 'dd-MM-yyyy hh:mm:ss';
export const DATE_CHART_FORMAT = 'MMM dd, yyyy';
export const DATE_MONTH_FORMAT = 'M/dd';
export const DATE_FORMAT = 'dd-MM-yyyy';
export const TIME_FORMAT = 'hh:mm:ss';
