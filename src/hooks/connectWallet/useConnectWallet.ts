import {
    changeChainId,
    handleConnectWallet,
    handleConnectWalletEarly,
} from 'src/services/walletServices/walletServices';
import { useDispatch, useSelector } from 'react-redux';
import {
    ChainType,
    handleRemoveAddress,
    handleSetAddress,
    handleSetChain,
} from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import useFetchVaultTable from '../vault/useFetchVaultTable';
import { RootState } from 'src/store';
import { useParams } from 'react-router-dom';
import { handleSetListVault } from 'src/ReducerStore/useVaultStore/useVaultStore';
interface Props {
    handleFailed?: () => void;
    handleSuccess?: () => void;
}

export const useConnectWallet = ({ handleFailed, handleSuccess }: Props) => {
    const dispatch = useDispatch();
    const currentChain = useSelector((state: RootState) => state.Authentication.currentChain);
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const { vaultId } = useParams();

    const { content, step, handleRetrieve, resetModalStep } = useFetchVaultTable();

    const handleConnect = async () => {
        const address = await handleConnectWallet();
        await changeChainId(currentChain);
        if (address) {
            dispatch(handleSetAddress(address));
            handleSuccess && handleSuccess();
            const { listVault, detailVault } = await handleRetrieve(currentChain, address, vaultId, vaultDetail);
            dispatch(handleSetListVault(listVault));
            return true;
        } else {
            handleFailed && handleFailed();
            dispatch(handleSetAddress(''));
            toast.error('Cannot connect wallet!', {
                autoClose: 1000,
            });
            return false;
        }
    };
    const handleConnectEarly = async () => {
        const address = await handleConnectWalletEarly();
        if (address) {
            dispatch(handleSetAddress(address));
            handleSuccess && handleSuccess();
        } else {
            dispatch(handleRemoveAddress());

            //   showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'Cannot connect wallet!');
        }
    };

    const handleLogout = async () => {
        dispatch(handleRemoveAddress());
    };

    const handleChangeChain = async (chainId: ChainType) => {
        const address = await handleConnectWalletEarly();
        const { listVault, detailVault } = await handleRetrieve(chainId, address, vaultId, vaultDetail);
        dispatch(handleSetListVault(listVault));
        dispatch(handleSetChain(chainId));

        // window.location.reload();
    };

    useEffect(() => {
        const { ethereum } = window;
        if (ethereum && ethereum.on) {
            // ethereum.on('connect', handleConnect);
            ethereum.on('accountsChanged', handleConnectEarly);
            // ethereum.on('disconnect', handleLogout);
            ethereum.on('chainChanged', (chainId: ChainType) => handleChangeChain(chainId));
            return () => {
                if (ethereum.removeListener) {
                    // ethereum.removeListener('connect', handleConnectEarly);
                    ethereum.removeListener('accountsChanged', handleConnectEarly);
                    // ethereum.removeListener('disconnect', handleLogout);
                    ethereum.removeListener('chainChanged', (chainId: ChainType) => handleChangeChain(chainId));
                }
            };
        }
    }, []);
    return {
        handleConnect,
        handleLogout,
        handleConnectEarly,
        content,
        step,
        resetModalStep,
    };
};
