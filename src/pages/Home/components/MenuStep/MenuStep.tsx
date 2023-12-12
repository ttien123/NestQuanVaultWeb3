import SubContent from './SubContent';
import { PropsMenuStep } from '../WithData/WithData';

interface Props {
    heading: string;
    bgLine: string;
    menuStep: PropsMenuStep[];
    borderIcon: string;
    extendsDescription: string;
}

const MenuStep = ({ bgLine, heading, menuStep, borderIcon, extendsDescription }: Props) => {
    return (
        <div className="relative">
            <div className="mb-0 lg:mb-[16px]">
                <h3 className="text-[16px] lg:text-[32px] font-semibold lg:font-bold">{heading}</h3>
                <span className={`block w-[48px] h-[4px] rounded mt-1 ${bgLine}`}></span>
            </div>
            <SubContent menuStep={menuStep} borderIcon={borderIcon} extendsDescription={extendsDescription} />
        </div>
    );
};

export default MenuStep;
