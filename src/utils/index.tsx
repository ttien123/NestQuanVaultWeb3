import BigNumber from 'bignumber.js';
import { isNil } from 'lodash';

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
