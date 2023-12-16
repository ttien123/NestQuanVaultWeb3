import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChainType } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import { handleSetHistoricalData } from 'src/ReducerStore/useVaultStore/useVaultStore';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { HistoricalData } from 'src/constants/vault/type';
import { getHistoricalData } from 'src/services/walletServices/walletServices';
import { RootState } from 'src/store';

export const useFetchHistoryData = () => {
    const [content, setContent] = useState('');
    const [step, setStep] = useState(MODAL_STEP.READY);
    const disPatch = useDispatch();
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);

    const handleStatus = (content: string, status: MODAL_STEP) => {
        setStep(status);
        setContent(content);
    };

    const handleRetrieve = async (
        vaultAdd: string,
        currentChain: ChainType,
    ): Promise<{ historicalData: HistoricalData }> => {
        handleStatus('Retrieving historical data of vault...', MODAL_STEP.PROCESSING);
        const { historicalData } = await getHistoricalData(vaultAdd, currentChain);
        disPatch(handleSetHistoricalData(historicalData));
        handleStatus('Retrieving historical data of vault...', MODAL_STEP.READY);
        return { historicalData: historicalData };
    };

    const resetModalStep = () => {
        setStep(MODAL_STEP.READY);
    };

    return {
        content,
        step,
        handleRetrieve,
        resetModalStep,
    };
};
