import { useState } from 'react';
import { ChainType } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { getListVaultFromContract } from 'src/services/walletServices/walletServices';
import { VaultDetailDTO } from 'src/types/vault/vaultDetail.type';

const useFetchVaultTable = () => {
    const [content, setContent] = useState('');
    const [step, setStep] = useState(MODAL_STEP.READY);
    const [stepEarly, setStepEarly] = useState(MODAL_STEP.READY);

    const handleStatus = (content: string, status: MODAL_STEP) => {
        setStep(status);
        setContent(content);
    };

    const handleStatusEarly = (content: string, status: MODAL_STEP) => {
        setStepEarly(status);
        setContent(content);
    };

    const handleRetrieve = async (
        currentChain: ChainType,
        address: string,
        vaultId: string | undefined,
        vaultDetail: VaultDetailDTO | null,
    ): Promise<{ listVault: VaultDetailDTO[]; detailVault: VaultDetailDTO | null }> => {
        handleStatus('Retrieving data onchain...', MODAL_STEP.PROCESSING);
        const { data, network } = await getListVaultFromContract(currentChain, address);

        if (data.length == 0) {
            handleStatus('No vault found in this network!', MODAL_STEP.FAILED);
            return {
                listVault: [],
                detailVault: null,
            };
        }

        const vaultAddr = vaultId || vaultDetail?.address || '';
        const newVaultDetail =
            data.find((e) => e.address.toLowerCase().trim() === vaultAddr.toLowerCase().trim()) || null;
        handleStatus('Retrieving data onchain...', MODAL_STEP.READY);
        return {
            listVault: data,
            detailVault: newVaultDetail,
        };
    };

    const handleRetrieveEarly = async (
        currentChain: ChainType,
        address: string,
        vaultId: string | undefined,
        vaultDetail: VaultDetailDTO | null,
    ): Promise<{ listVault: VaultDetailDTO[]; detailVault: VaultDetailDTO | null }> => {
        handleStatusEarly('Retrieving data onchain...', MODAL_STEP.PROCESSING);
        const { data, network } = await getListVaultFromContract(currentChain, address);
        if (data.length == 0) {
            handleStatusEarly('No vault found in this network!', MODAL_STEP.FAILED);
            return {
                listVault: [],
                detailVault: null,
            };
        }

        const vaultAddr = vaultId || vaultDetail?.address || '';
        const newVaultDetail =
            data.find((e) => e.address.toLowerCase().trim() === vaultAddr.toLowerCase().trim()) || null;
        handleStatusEarly('Retrieving data onchain...', MODAL_STEP.READY);
        return {
            listVault: data,
            detailVault: newVaultDetail,
        };
    };

    const resetModalStep = () => {
        setStep(MODAL_STEP.READY);
        setStepEarly(MODAL_STEP.READY);
    };

    return {
        content,
        step,
        stepEarly,
        handleRetrieve,
        resetModalStep,
        handleRetrieveEarly,
    };
};

export default useFetchVaultTable;
