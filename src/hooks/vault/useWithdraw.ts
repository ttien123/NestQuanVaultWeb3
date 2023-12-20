import { useState } from 'react';
import { UseFormReset } from 'react-hook-form';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { withdrawStake } from 'src/services/walletServices/walletServices';
import { Schema } from 'src/utils/Rules';

type FormData = Pick<Schema, 'withdraw'>;

export const useWithdraw = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState<string>('');
    const [txHash, setTxHash] = useState('');
    const [step, setStep] = useState(MODAL_STEP.READY);

    const handleStatus = () => (content: string, status: MODAL_STEP) => {
        setStep(status);
        setContent(content);
    };

    const handleWithdraw = async (data: { amount: string; address: string }, reset: UseFormReset<FormData>) => {
        setLoading(true);
        const tx = await withdrawStake(data, handleStatus());
        setLoading(false);
        if (tx?.hash) {
            setTxHash(tx?.hash);
            handleStatus()(
                'Your withdraw order transaction had been successfully, wait for the next rebalance to own your profit!',
                MODAL_STEP.SUCCESS,
            );
            reset();
        }
    };

    const resetModalStep = () => {
        setStep(MODAL_STEP.READY);
    };
    return {
        handleWithdraw,
        loading,
        txHash,
        step,
        resetModalStep,
        content,
    };
};
