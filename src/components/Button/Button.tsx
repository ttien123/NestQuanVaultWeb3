import { Omit } from 'lodash';
import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

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
    onClick,
    type = 'button',
    className = 'flex items-center justify-center h-[40px] py-[10px] px-[16px] text-[14px] xl:text-[16px] font-semibold rounded-[16px] ',
    ...rest
}: Prop) => {
    let Comp: any = 'button';
    const props: Omit<Prop, 'children'> = {
        onClick,
        ...rest,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    let newClassName = extendsClassName ? className + extendsClassName : className;
    return (
        <Comp
            type={type}
            className={
                isNormal
                    ? newClassName + ' bg-[#2F4C78] hover:bg-accent_4 transition-all duration-300'
                    : newClassName + ' bg-primary_1 hover:bg-primary_2'
            }
            {...props}
        >
            {children}
        </Comp>
    );
};

export default Button;
