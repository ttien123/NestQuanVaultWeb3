import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ChainType, handleSetChain } from 'src/ReducerStore/useAuthenticationStore/useAuthenticationStore';
import BSCIcon from 'src/assets/svg/BSCIcon';
import EtherIcon from 'src/assets/svg/EtherIcon';
import ModalStep from 'src/components/ModalStep';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import path from 'src/constants/path';
import { useVaultList } from 'src/hooks/vault/useVaultList';
import { RootState } from 'src/store';

const SelectCurrentChain = () => {
    const disPatch = useDispatch();
    const navigate = useNavigate();
    const { vaultId } = useParams();
    const currentChain = useSelector((state: RootState) => state.Authentication.currentChain);
    // const { handleConnect } = useConnectWallet({});

    const {
        getVaultList,
        content: contentData,
        stepEarly: stepData,
        resetModalStep: rest,
    } = useVaultList(currentChain);

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
                            disPatch(handleSetChain(e.value));
                            getVaultList(e.value);
                            navigate(path.vault);
                        }}
                    >
                        {e.icon}
                    </div>
                );
            })}

            {vaultId === undefined && (
                <ModalStep
                    open={stepData !== MODAL_STEP.READY}
                    step={stepData}
                    onClose={stepData !== MODAL_STEP.PROCESSING ? rest : undefined}
                    showClose={stepData !== MODAL_STEP.PROCESSING}
                    closable={stepData !== MODAL_STEP.PROCESSING}
                    content={contentData}
                />
            )}
        </>
    );
};

export default SelectCurrentChain;
