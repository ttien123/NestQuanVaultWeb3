import React, { FC, PropsWithChildren } from 'react';
import Button from '../Button';

const ConnectButton: FC<
    PropsWithChildren<{
        isResponsive?: boolean;
        onClick: () => void;
    }>
> = ({ isResponsive, onClick, children }) => {
    return (
        <Button extendsClassName={`text-[16px]  ${isResponsive ? '' : 'hidden lg:flex'}`} onClick={onClick}>
            {children}
        </Button>
    );
};

export default ConnectButton;
