import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import HeaderVault from '../Vault/components/HeaderVault';

const VaultDetail = () => {
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    console.log(vaultDetail);

    return (
        <div className="h-[5000px]">
            <HeaderVault />
        </div>
    );
};

export default VaultDetail;
