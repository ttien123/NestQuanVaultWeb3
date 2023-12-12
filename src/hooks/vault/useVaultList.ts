import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { VaultDetailDTO } from 'src/types/vault/vaultDetail.type';
import { ChainType } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import useFetchVaultTable from './useFetchVaultTable';
import { handleSetListVault } from 'src/ReducerStore/useVaultStore/useVaultStore';
// const typechain = require('nestquant-vault-eth-sdk');

export const useVaultList = (currentChain: ChainType) => {
    const disPatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<{ data: VaultDetailDTO[]; network: ChainType }>({
        data: [],
        network: currentChain,
    });
    const { content, stepEarly, handleRetrieveEarly, resetModalStep } = useFetchVaultTable();
    const { vaultId } = useParams();

    const account = useSelector((state: RootState) => state.Authentication.address);
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);

    const getVaultList = async (chainId?: ChainType) => {
        const curChainId = chainId || currentChain;
        const { listVault, detailVault } = await handleRetrieveEarly(curChainId, account, vaultId, vaultDetail);
        disPatch(handleSetListVault(listVault));
        // handleSetListVault({ listVault: listVault });
        // const mockVaultDetail = detailVault != null ? detailVault : listVault[0];
        // handleSetVaultDetail({ detailVault: mockVaultDetail });
        return {
            listVault,
            curChainId,
        };
    };

    useEffect(() => {
        setLoading(true);

        const fetch = (async () => {
            const { listVault: data, curChainId: network } = await getVaultList();
            setData({ data, network });
            setLoading(false);
        })();
    }, []); // currentChain

    return {
        getVaultList,
        data: data.data,
        network: data.network,
        loading,
        content,
        stepEarly,
        resetModalStep,
    };
};
