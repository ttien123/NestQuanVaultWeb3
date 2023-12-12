import React from 'react';

interface Props {
    extendsClassName?: string;
    number: string;
    textColor: string;
}

const NumberCircle = ({ extendsClassName, number, textColor }: Props) => {
    return (
        <div
            className={`w-[87px] h-[86px] lg:w-[155px] lg:h-[154px] flex flex-shrink-0 rounded-full border-[4px] items-center justify-center mx-auto ${
                extendsClassName ? extendsClassName : ''
            }`}
        >
            <span className={`text-[48px] font-bold ${textColor}`}>{number}</span>
        </div>
    );
};

export default NumberCircle;
