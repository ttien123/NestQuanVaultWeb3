import ConnectedWallet from '../ConnectedWallet';
import Popover from 'src/components/Popover';
import NavVault from '../NavVault';
import { useModal } from 'src/hooks/useModal';
import AppModal from 'src/components/AppModal/AppModal';
import ConnectButton from 'src/components/ConnectButton/ConnectButton';

import OwalletIcon from 'src/assets/svg/ListWalletIcon/OwalletIcon';
import MetamaskIcon from 'src/assets/svg/ListWalletIcon/MetamaskIcon';
import TronLinkIcon from 'src/assets/svg/ListWalletIcon/TronLinkIcon';
import PhantomIcon from 'src/assets/svg/ListWalletIcon/PhantomIcon';
import KeplrIcon from 'src/assets/svg/ListWalletIcon/KeplrIcon';
import LedgeIcon from 'src/assets/svg/ListWalletIcon/LedgeIcon';
import ModalStep, { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { useEffect, useState } from 'react';
import { useConnectWallet } from 'src/hooks/connectWallet/useConnectWallet';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import SelectCurrentChain from '../SelectCurrentChain';

interface Props {
    isResponsive?: boolean;
    onClick?: () => void;
}
const ConnectWallet = ({ isResponsive }: Props) => {
    const { open: openSelect, onCloseModal: onCloseSelectModal, onOpenModal: onOpenModalSelect } = useModal();
    const { handleConnect, handleLogout, content, step, resetModalStep } = useConnectWallet({
        handleFailed: onCloseSelectModal,
        handleSuccess: onCloseSelectModal,
    });
    const currentAddress = useSelector((state: RootState) => state.Authentication.address);
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
        <div className="flex items-center justify-start lg:justify-center gap-0 lg:gap-2 translate-x-4 lg:translate-x-0">
            <div
                className={`flex items-center justify-center gap-2 bg-[#29384e] p-1 h-[40px] rounded-xl ${
                    isResponsive && 'hidden'
                }`}
            >
                <SelectCurrentChain />
            </div>
            <Popover
                isNavVault
                renderPopover={
                    <NavVault
                        isResponsive
                        currentAddress={currentAddress}
                        handleLogout={handleLogout}
                        onOpenModalSelect={onOpenModalSelect}
                    />
                }
            >
                <button
                    className={`${
                        isResponsive && 'hidden'
                    } mx-4 flex lg:hidden items-center justify-center p-[10px] w-[40px] h-[40px] rounded-xl bg-neutral_6 hover:opacity-80 transition-all duration-300`}
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_531_15433)">
                            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#E0E0E0" />
                        </g>
                        <defs>
                            <clipPath id="clip0_531_15433">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </Popover>
            {!currentAddress ? (
                <ConnectButton onClick={handleConnect} isResponsive={isResponsive}>
                    Connect Wallet
                </ConnectButton>
            ) : (
                <ConnectedWallet
                    onClick={() => handleLogout()}
                    extendsClassName={`${isResponsive ? '' : 'hidden lg:block'}`}
                    isResponsive={isResponsive}
                />
            )}
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

            {/* <ModalStep open={isConnecting} step={MODAL_STEP.SUCCESS} showClose={false} closable={false} /> */}
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

export default ConnectWallet;
