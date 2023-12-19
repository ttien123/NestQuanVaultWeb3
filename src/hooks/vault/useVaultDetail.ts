import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChainType } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import { RootState } from 'src/store';
import { getDepositWithdrawPendingAmount, getStaked, getUSDTBalance } from 'src/services/walletServices/walletServices';
import {
    handleSetDepositOrder,
    handleSetStakedAmount,
    handleSetWithdrawOrder,
    handleSetUSDTBalance,
} from 'src/ReducerStore/useVaultStore/useVaultStore';

export const useVaultDetail = (currentChain: ChainType, vaultAddress: string) => {
    const disPatch = useDispatch();
    const account = useSelector((state: RootState) => state.Authentication.address);
    const [loading, setLoading] = useState(false);
    const [usdtBalance, setUsdtBalance] = useState('0');
    const [stakedAmount, setStakeAmount] = useState('0');
    const [depositWithdrawOrder, setDepositWithdrawOrder] = useState({ depositOrder: '0', withdrawOrder: '0' });

    const getMyUSDTBalanceByVault = async (acc?: string) => {
        const curAcc = acc || account;
        const usdtAmount = await getUSDTBalance({ acc: curAcc, address: vaultAddress, currentChain: currentChain });
        if (usdtAmount) {
            disPatch(handleSetUSDTBalance(usdtAmount));
        }

        return usdtAmount || '0';
    };

    const getMyStakedByVault = async (acc?: string) => {
        const curAcc = acc || account;
        const staked = await getStaked({ acc: curAcc, address: vaultAddress, currentChain: currentChain });

        if (staked) {
            disPatch(handleSetStakedAmount(staked));
        } else {
        }
        return staked || '0';
    };

    const getDepositWithdrawOrderByVault = async (acc?: string) => {
        const curAcc = acc || account;
        const depositWithdraw = await getDepositWithdrawPendingAmount({
            acc: curAcc,
            address: vaultAddress,
            currentChain: currentChain,
        });
        if (depositWithdraw) {
            disPatch(handleSetDepositOrder(depositWithdraw.depositFmt));
            disPatch(handleSetWithdrawOrder(depositWithdraw.withdrawFmt));
        }

        return { depositOrder: depositWithdraw?.depositFmt || '0', withdrawOrder: depositWithdraw?.withdrawFmt || '0' };
    };

    useEffect(() => {
        setLoading(true);

        const fetch = (async () => {
            const [usdtAmount, stakedAm, depositWithdrawAm] = await Promise.all([
                getMyUSDTBalanceByVault(),
                getMyStakedByVault(),
                getDepositWithdrawOrderByVault(),
            ]);

            setUsdtBalance(usdtAmount);
            setStakeAmount(stakedAm);
            setDepositWithdrawOrder(depositWithdrawAm);
            setLoading(false);
        })();
    }, [currentChain, vaultAddress, account]);

    return {
        usdtBalance,
        stakedAmount,
        loading,
        depositWithdrawOrder,
        getMyStakedByVault,
        getMyUSDTBalanceByVault,
        getDepositWithdrawOrderByVault,
    };
};
