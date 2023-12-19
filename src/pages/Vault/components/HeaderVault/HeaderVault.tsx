import BackIcon from 'src/assets/svg/BackIcon';
import ConnectWallet from '../ConnectWallet';
import { Link, useParams } from 'react-router-dom';
import path from 'src/constants/path';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useEffect, useState } from 'react';
import { VaultDetailDTO } from 'src/types/vault/vaultDetail.type';

export interface vaultLogo {
    img?: string | undefined;
    img2?: string | undefined;
    name: string;
}

interface Props {
    vault?: vaultLogo;
}

const HeaderVault = ({}: Props) => {
    const [vault, setVault] = useState<vaultLogo>({
        name: '',
        img: '',
        img2: '',
    });
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const { vaultId } = useParams();

    useEffect(() => {
        vaultDetail && setVault(vaultDetail.vault);
    }, [vaultId, vaultDetail]);
    return (
        <header className="sticky z-[100] left-0 top-[0] right-0 w-full pt-[40px] backdrop-blur-[8px]">
            <div className="flex items-center justify-between">
                <div className="text-[32px] font-semibold">
                    {vaultId ? (
                        <div className="flex items-center justify-center gap-6">
                            <Link to={path.vault}>
                                <BackIcon />
                            </Link>
                            <div className="flex items-center justify-center gap-2">
                                <img src={vault?.img} alt="Logo" className="hidden md:block w-[40px] h-[40px]" />
                                <div className="text-[23px] md:text-[32px]">{vault?.name.split('/')[0]}</div>
                            </div>
                        </div>
                    ) : (
                        'Vaults'
                    )}
                </div>
                {/* <div className="text-[32px] font-semibold"></div> */}
                <ConnectWallet />
            </div>
        </header>
    );
};

export default HeaderVault;
