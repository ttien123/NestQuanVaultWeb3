import React from 'react';
import AppModal from '../AppModal/AppModal';
import OwalletIcon from 'src/assets/svg/ListWalletIcon/OwalletIcon';
import MetamaskIcon from 'src/assets/svg/ListWalletIcon/MetamaskIcon';
import TronLinkIcon from 'src/assets/svg/ListWalletIcon/TronLinkIcon';
import PhantomIcon from 'src/assets/svg/ListWalletIcon/PhantomIcon';
import KeplrIcon from 'src/assets/svg/ListWalletIcon/KeplrIcon';
import LedgeIcon from 'src/assets/svg/ListWalletIcon/LedgeIcon';
import { useConnectWallet } from 'src/hooks/connectWallet/useConnectWallet';

interface Props {
    openSelect: boolean;
    onCloseSelectModal: () => void;
}

const ListWallet = ({ onCloseSelectModal, openSelect }: Props) => {
    const { handleConnect, handleLogout, content, step, resetModalStep } = useConnectWallet({
        handleFailed: onCloseSelectModal,
        handleSuccess: onCloseSelectModal,
    });
    const LIST_WALLETS = [
        {
            name: 'Owallet',
            icon: <OwalletIcon />,
            disabled: true,
        },
        {
            name: 'Metamask',
            icon: <MetamaskIcon />,
            disabled: false,
        },
        {
            name: 'TronLink',
            icon: <TronLinkIcon />,
            disabled: true,
        },
        {
            name: 'Phantom',
            icon: <PhantomIcon />,
            disabled: true,
        },
        {
            name: 'Keplr',
            icon: <KeplrIcon />,
            disabled: true,
        },
        {
            name: 'Ledger',
            icon: <LedgeIcon />,
            disabled: true,
        },
    ];
    return (
        <AppModal
            title="Connect wallet"
            open={openSelect}
            maskClosable
            showCloseIcon
            onClose={onCloseSelectModal}
            width={500}
            centered
            classNameIconClose="ml-auto cursor-pointer"
            classNameTitle="!text-[18px] !text-white !text-center !font-Montserrat !font-semibold"
        >
            <div className="grid mt-5 gap-4 grid-cols-2 lg:grid-cols-3">
                {LIST_WALLETS.map((e) => {
                    return (
                        <div
                            className={`${
                                e.disabled
                                    ? 'opacity-30 cursor-not-allowed'
                                    : 'hover:bg-accent_5 transition-all duration-300 cursor-pointer rounded-lg'
                            } col-span-1 flex flex-col gap-6 items-center justify-center pt-[23.1px] pr-[31.5px] pb-[23.9px] pl-[32.5px]`}
                            key={e.name}
                            onClick={(e) => handleConnect()}
                        >
                            {e.icon}
                            <p className="text-[14px] font-semibold text-white">{e.name}</p>
                        </div>
                    );
                })}
            </div>
            <div className="text-center underline text-[#798fff]">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#798fff] text-[14px] font-medium hover:opacity-60 hover:text-[#798fff]"
                >
                    I don’t have a wallet?
                </a>
            </div>
        </AppModal>
    );
};

export default ListWallet;
