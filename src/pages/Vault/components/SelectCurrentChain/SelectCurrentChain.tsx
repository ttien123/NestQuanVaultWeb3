import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChainType, handleSetChain } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import BSCIcon from 'src/assets/svg/BSCIcon';
import EtherIcon from 'src/assets/svg/EtherIcon';
import ModalStep from 'src/components/ModalStep';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import path from 'src/constants/path';
import { useConnectWallet } from 'src/hooks/connectWallet/useConnectWallet';
import { useVaultList } from 'src/hooks/vault/useVaultList';
import { changeChainId } from 'src/services/walletServices/walletServices';
import { RootState } from 'src/store';

const SelectCurrentChain = () => {
    const navigate = useNavigate();
    const address = useSelector((state: RootState) => state.Authentication.address);
    const currentChain = useSelector((state: RootState) => state.Authentication.currentChain);
    const { handleConnect } = useConnectWallet({});

    const { content: contentData, stepEarly: stepData, resetModalStep: rest } = useVaultList(currentChain);

    const [content, setContent] = useState('');
    const [step, setStep] = useState(MODAL_STEP.READY);
    const handleStatus = (content: string, status: MODAL_STEP) => {
        setStep(status);
        setContent(content);
    };
    const resetModalStep = () => {
        setStep(MODAL_STEP.READY);
    };

    const LIST_CHAIN = [
        {
            value: ChainType.ETHER,
            icon: <EtherIcon />,
            key: ChainType.ETHER,
        },
        {
            value: ChainType.BSC,
            icon: <BSCIcon />,
            key: ChainType.BSC,
        },
    ];

    return (
        <>
            {LIST_CHAIN.map((e) => {
                return (
                    <div
                        key={e.key}
                        className={classNames(
                            'w-[40px] p-1 cursor-pointer rounded-xl opacity-40 flex items-center justify-center',
                            {
                                'bg-[#5e687c] !opacity-100': currentChain === e.value,
                            },
                        )}
                        onClick={async () => {
                            handleStatus('Please confirm the request...', MODAL_STEP.PROCESSING);
                            if (address) {
                                const isChangeChain = await changeChainId(e.value);
                                isChangeChain &&
                                    toast.success('Success', {
                                        autoClose: 1000,
                                    });

                                !isChangeChain &&
                                    toast.error('Fail', {
                                        autoClose: 1000,
                                    });
                            } else {
                                const isConnected = await handleConnect();
                                if (isConnected) {
                                    const isChangeChain = await changeChainId(e.value);
                                    isChangeChain &&
                                        toast.success('Success', {
                                            autoClose: 1000,
                                        });

                                    !isChangeChain &&
                                        toast.error('Fail', {
                                            autoClose: 1000,
                                        });
                                }
                            }
                            handleStatus('Retrieving data onchain...', MODAL_STEP.READY);
                            // handleSetChain(e.value);
                            // getVaultList(e.value);
                            // console.log(`current Chain: ${currentChain}`);
                            navigate(path.vault);
                        }}
                    >
                        {e.icon}
                    </div>
                );
            })}

            <ModalStep
                open={step !== MODAL_STEP.READY}
                step={step}
                onClose={step !== MODAL_STEP.PROCESSING ? resetModalStep : undefined}
                showClose={step !== MODAL_STEP.PROCESSING}
                closable={step !== MODAL_STEP.PROCESSING}
                content={content}
            />
            <ModalStep
                open={stepData !== MODAL_STEP.READY}
                step={stepData}
                onClose={stepData !== MODAL_STEP.PROCESSING ? rest : undefined}
                showClose={stepData !== MODAL_STEP.PROCESSING}
                closable={stepData !== MODAL_STEP.PROCESSING}
                content={contentData}
            />
        </>
    );
};

export default SelectCurrentChain;
