import { useState } from 'react';
import { UseFormReset } from 'react-hook-form';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { approveToken, depositBalance } from 'src/services/walletServices/walletServices';
import { Schema } from 'src/utils/Rules';
type FormData = Pick<Schema, 'deposit'>;

export const useDeposit = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState<string>('');
    const [txHash, setTxHash] = useState('');
    const [step, setStep] = useState(MODAL_STEP.READY);

    const handleStatus = () => (content: string, status: MODAL_STEP) => {
        setStep(status);
        setContent(content);
    };

    const handleDeposit = async (data: { amount: string; address: string }, reset: UseFormReset<FormData>) => {
        setLoading(true);
        const res = await approveToken(data, handleStatus());

        if (!res) {
            setLoading(false);
            return;
        }

        const tx = await depositBalance(data, handleStatus());
        setLoading(false);
        if (tx?.hash) {
            setTxHash(tx?.hash);
            handleStatus()(
                'Your deposit order transaction had been successfully, wait for the next rebalance to own your shares',
                MODAL_STEP.SUCCESS,
            );
            reset();
        }
    };

    const resetModalStep = () => {
        setStep(MODAL_STEP.READY);
    };

    return {
        handleDeposit,
        loading,
        txHash,
        step,
        content,
        resetModalStep,
    };
};
