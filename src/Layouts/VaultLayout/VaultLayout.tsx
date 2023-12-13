import React from 'react';
import { Link } from 'react-router-dom';

import logoName from 'src/assets/svg/logoName.svg';
import path from 'src/constants/path';
import NavVault from 'src/pages/Vault/components/NavVault';

interface Props {
    children: React.ReactNode;
}

const VaultLayout = ({ children }: Props) => {
    return (
        <main className="bg-background_1 bg-lightBg bg-center bg-cover bg-no-repeat bg-fixed">
            <div className="relative z-10">
                <div className="hidden lg:block w-[310px] flex-[310px] flex-shrink-0 flex-grow-0 bg-[#070A14] h-[100vh] px-6 pt-10 pb-8 fixed z-10">
                    <div className="px-[26px] mb-[48px]">
                        <Link to={path.home}>
                            <img src={logoName} alt="Logo" />
                        </Link>
                    </div>
                    <div>
                        <NavVault />
                    </div>
                </div>
                <div className="lg:ml-[310px] min-h-[100vh]">{children}</div>
                {/* <div className="absolute z-[-1] origin-top-left top-[-800px] right-[-700px] w-[1104px] h-[1412px] rounded-[1412px] bg-vaultBgTop"></div>
                <div className="absolute z-[-1] origin-top-left top-[60px] left-[-600px] w-[1558px] h-[1851px] rounded-[1412px] bg-vaultBgBottom"></div> */}
            </div>
        </main>
    );
};

export default VaultLayout;
