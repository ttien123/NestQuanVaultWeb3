import React, { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Prop extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isNormal?: boolean;
    extendsClassName?: string;
    className?: string;
    to?: string;
    href?: string;
}

const Button = ({
    children,
    isNormal,
    extendsClassName,
    to,
    href,
    className = 'flex items-center justify-center h-[40px] py-[10px] px-[16px] text-[14px] xl:text-[16px] font-semibold rounded-[16px] ',
    ...rest
}: Prop) => {
    let newClassName = extendsClassName ? className + extendsClassName : className;

    return (
        <button
            className={
                isNormal
                    ? newClassName + 'bg-[#2F4C78] hover:bg-primary_1'
                    : newClassName + ' bg-primary_1 hover:bg-primary_2'
            }
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
