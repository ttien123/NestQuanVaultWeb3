import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useParams } from 'react-router-dom';
import { useFetchHistoryData } from 'src/hooks/vault/useFetchHistoryData';
import { useEffect } from 'react';
import ModalStep from 'src/components/ModalStep';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import InfoVaultDetail from './components/InfoVaultDetail';
import HandleMoney from './components/HandleMoney';
// import HandleMoney from './components/HandleMoney';

const VaultDetail = () => {
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const currentChain = useSelector((state: RootState) => state.Authentication.currentChain);
    const { vaultId = '' } = useParams();
    const { vault } = vaultDetail || {};
    const { content, step, handleRetrieve, resetModalStep } = useFetchHistoryData();

    useEffect(() => {
        handleRetrieve(vaultId, currentChain);
    }, [vaultId]);

    return (
        <div className="h-[5000px] pt-[30px]">
            <div className="grid grid-cols-8 gap-4">
                <div className="col-span-8 lg:col-span-5 h-[500px] order-2 lg:order-1">
                    <InfoVaultDetail />
                </div>
                <div className="col-span-8 lg:col-span-3 order-1 lg:order-2">
                    <HandleMoney />
                </div>
            </div>
            <ModalStep
                open={step !== MODAL_STEP.READY}
                step={step}
                onClose={step !== MODAL_STEP.PROCESSING ? resetModalStep : undefined}
                showClose={step !== MODAL_STEP.PROCESSING}
                closable={step !== MODAL_STEP.PROCESSING}
                content={content}
            />
        </div>
    );
};

export default VaultDetail;
