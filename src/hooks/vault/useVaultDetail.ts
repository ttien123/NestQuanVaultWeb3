import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChainType } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import { RootState } from 'src/store';
import { VaultDetailDTO } from 'src/types/vault/vaultDetail.type';
import useFetchVaultTable from './useFetchVaultTable';
import { useParams } from 'react-router-dom';
import { getDepositWithdrawPendingAmount, getStaked, getUSDTBalance } from 'src/services/walletServices/walletServices';
import {
    handleSetDepositOrder,
    handleSetListVault,
    handleSetStakedAmount,
    handleSetVaultDetail,
    handleSetWithdrawOrder,
} from 'src/ReducerStore/useVaultStore/useVaultStore';
// import { getDepositWithdrawPendingAmount, getListVaultFromContract, getStaked, getUSDTBalance } from 'services/walletService';
// import { ChainType } from 'store/authentication/useAuthenticationStore';
// import { useGetVaultDetail, useVaultActions } from 'store/vault/selector';
// import { VaultDetailDTO } from '../constants';
// import { useAuthAddress } from 'store/authentication/selector';
// import useVaultStore from 'store/vault/useVaultStore';
// import { useFetchVaultTable } from 'components/pages/vault/hooks/useFetchVaultTable';
// import { useParams } from 'react-router-dom';

export const useVaultDetail = (currentChain: ChainType, vaultAddress: string) => {
    // const {
    //     handleSetVaultDetail,
    //     handleSetListVault,
    //     handleSetStakedAmount,
    //     handleSetUSDTBalance,
    //     handleSetDepositOrder,
    //     handleSetWithdrawOrder,
    // } = useVaultActions();
    const disPatch = useDispatch();
    const account = useSelector((state: RootState) => state.Authentication.address);
    const [loading, setLoading] = useState(false);
    const [usdtBalance, setUsdtBalance] = useState('0');
    const [stakedAmount, setStakeAmount] = useState('0');
    const [depositWithdrawOrder, setDepositWithdrawOrder] = useState({ depositOrder: '0', withdrawOrder: '0' });

    const [data, setData] = useState<VaultDetailDTO | null>(null);
    const { content, step, handleRetrieve, resetModalStep } = useFetchVaultTable();
    const { vaultId } = useParams();
    // const vault = useGetVaultDetail();
    const vault = useSelector((state: RootState) => state.vaultStore.detailVault);
    const getVaultDetail = async (chainId?: ChainType) => {
        const curChainId = chainId || currentChain;
        const { listVault, detailVault } = await handleRetrieve(curChainId, account, vaultId, null);
        // handleSetListVault({ listVault: listVault });
        disPatch(handleSetListVault(listVault));

        const vaultDetail =
            listVault.find((e) => e.address.toLowerCase().trim() === vaultAddress.toLowerCase().trim()) || null;

        if (vaultDetail) {
            // handleSetListVault({ listVault: listVault });
            // handleSetVaultDetail({ detailVault: vaultDetail });
            disPatch(handleSetListVault(listVault));
            disPatch(handleSetVaultDetail(vaultDetail));
        } else {
            // handleSetListVault({ listVault: [] });
            // handleSetVaultDetail({ detailVault: null });
        }

        return vaultDetail;
    };

    const getMyUSDTBalanceByVault = async (acc?: string) => {
        const curAcc = acc || account;
        const usdtAmount = await getUSDTBalance({ acc: curAcc, address: vaultAddress });

        if (usdtAmount) {
            // handleSetUSDTBalance({ usdt: usdtAmount });
            disPatch(handleSetDepositOrder(usdtAmount));
        } else {
            // handleSetUSDTBalance({ usdt: '0' });
        }

        // console.log('first', usdtAmount);

        return usdtAmount || '0';
    };

    const getMyStakedByVault = async (acc?: string) => {
        const curAcc = acc || account;
        const staked = await getStaked({ acc: curAcc, address: vaultAddress });

        if (staked) {
            // handleSetStakedAmount({ staked });
            disPatch(handleSetStakedAmount(staked));
        } else {
            // handleSetStakedAmount({ staked: '0' });
        }
        return staked || '0';
    };

    const getDepositWithdrawOrderByVault = async (acc?: string) => {
        const curAcc = acc || account;
        const depositWithdraw = await getDepositWithdrawPendingAmount({ acc: curAcc, address: vaultAddress });

        if (depositWithdraw) {
            // handleSetDepositOrder({ depositOrder: depositWithdraw.depositFmt });
            // handleSetWithdrawOrder({ withdrawOrder: depositWithdraw.withdrawFmt });
            disPatch(handleSetDepositOrder(depositWithdraw.depositFmt));
            disPatch(handleSetWithdrawOrder(depositWithdraw.withdrawFmt));
        }

        return { depositOrder: depositWithdraw?.depositFmt || '0', withdrawOrder: depositWithdraw?.withdrawFmt || '0' };
    };

    useEffect(() => {
        setLoading(true);

        const fetch = (async () => {
            const [detail, usdtAmount, stakedAm, depositWithdrawAm] = await Promise.all([
                getVaultDetail(),
                getMyUSDTBalanceByVault(),
                getMyStakedByVault(),
                getDepositWithdrawOrderByVault(),
            ]);

            setData(detail);
            setUsdtBalance(usdtAmount);
            setStakeAmount(stakedAm);
            setDepositWithdrawOrder(depositWithdrawAm);

            setLoading(false);
        })();
    }, [currentChain, vaultAddress, account]);

    return {
        data,
        usdtBalance,
        stakedAmount,
        loading,
        depositWithdrawOrder,

        getVaultDetail,
        getMyStakedByVault,
        getMyUSDTBalanceByVault,
        getDepositWithdrawOrderByVault,
    };
};
