import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DocsIcon from 'src/assets/svg/DocsIcon';
import HomeIcon from 'src/assets/svg/HomeIcon';
import path from 'src/constants/path';
import { motion, Variants } from 'framer-motion';
import ConnectWallet from '../ConnectWallet';
import ConnectButton from 'src/components/ConnectButton';
import { useConnectWallet } from 'src/hooks/connectWallet/useConnectWallet';
import { useModal } from 'src/hooks/useModal';
import ConnectedWallet from '../ConnectedWallet';

interface Props {
    isResponsive?: boolean;
    currentAddress?: string;
    handleLogout?: () => void;
    onOpenModalSelect?: () => void;
}

const NavVault = ({ isResponsive, currentAddress, handleLogout, onOpenModalSelect }: Props) => {
    // const { open: openSelect, onCloseModal: onCloseSelectModal, onOpenModal: onOpenModalSelect } = useModal();

    const listVariants: Variants = {
        open: {
            opacity: 1,
            scale: 1,
        },
        closed: { opacity: 0, scale: 0 },
    };
    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    };
    const menuList = [
        {
            text: 'Home',
            isActive: true,
            link: path.vault,
            key: 'home',
            icon: <HomeIcon />,
        },
        {
            text: 'Docs',
            link: path.docs,
            key: 'docs',
            target: '_blank',
            icon: <DocsIcon />,
        },
    ];

    return (
        <nav className={`${isResponsive ? '' : ''} relative z-20`}>
            <motion.ul
                initial={'closed'}
                animate={'open'}
                exit={'closed'}
                variants={isResponsive ? listVariants : {}}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                }}
                style={{
                    transformOrigin: '95% 0%',
                }}
                className={`${
                    isResponsive
                        ? 'border border-[#29384e] backdrop-blur-[8px] p-6 lg:px-0 lg:py-4 lg:p-8 bg-bgMenuVault'
                        : '#181F38'
                }`}
            >
                {/* {isResponsive && <ConnectWallet isResponsive />} */}
                {isResponsive &&
                    (!currentAddress ? (
                        <div className="ml-4">
                            <ConnectButton
                                onClick={() => {
                                    onOpenModalSelect && onOpenModalSelect();
                                }}
                                isResponsive={isResponsive}
                            >
                                Connect Wallet
                            </ConnectButton>
                        </div>
                    ) : (
                        <ConnectedWallet
                            onClick={() => {
                                handleLogout && handleLogout();
                            }}
                            extendsClassName={`${isResponsive ? '' : 'hidden lg:block'}`}
                            isResponsive={isResponsive}
                        />
                    ))}
                {menuList.map((item) => {
                    return (
                        <motion.li
                            variants={isResponsive ? itemVariants : {}}
                            transition={{
                                duration: 0.05,
                            }}
                            key={item.key}
                            className={`py-[14px] cursor-pointer group px-[16px] flex items-center rounded-2xl my-5 ${
                                item.isActive && !isResponsive && 'bg-background_2'
                            }`}
                        >
                            {item.icon}
                            <Link to={item.link} key={item.key} target={item.target} className="ml-3">
                                <span
                                    className={`text-base font-bold ${
                                        !item.isActive
                                            ? 'text-neutral_4 group-hover:text-neutral_1 transition-all duration-300'
                                            : ''
                                    }`}
                                >
                                    {item.text}
                                </span>
                            </Link>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </nav>
    );
};

export default NavVault;
