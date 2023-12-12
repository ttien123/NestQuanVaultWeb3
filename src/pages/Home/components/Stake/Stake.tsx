import { motion } from 'framer-motion';
import MenuStep from '../MenuStep';
import vector7 from 'src/assets/images/home/Vector7.png';
import vector8 from 'src/assets/images/home/Vector8.png';

import NumberCircle from 'src/components/NumberCircle';

export interface PropsMenuStep {
    icon: React.ReactElement;
    nameStep: string;
    description: string;
}
const Stake = () => {
    const menuStep: PropsMenuStep[] = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} viewBox="0 0 18 16" fill="none">
                    <path
                        d="M14.8333 14.6666H3.16667C2.72464 14.6666 2.30072 14.491 1.98816 14.1784C1.67559 13.8659 1.5 13.4419 1.5 12.9999V5.49992C1.5 5.05789 1.67559 4.63397 1.98816 4.32141C2.30072 4.00885 2.72464 3.83325 3.16667 3.83325H14.8333C15.2754 3.83325 15.6993 4.00885 16.0118 4.32141C16.3244 4.63397 16.5 5.05789 16.5 5.49992V12.9999C16.5 13.4419 16.3244 13.8659 16.0118 14.1784C15.6993 14.491 15.2754 14.6666 14.8333 14.6666Z"
                        stroke="#726BD3"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M12.7499 9.66658C12.6394 9.66658 12.5334 9.62269 12.4553 9.54455C12.3772 9.46641 12.3333 9.36043 12.3333 9.24992C12.3333 9.13941 12.3772 9.03343 12.4553 8.95529C12.5334 8.87715 12.6394 8.83325 12.7499 8.83325C12.8604 8.83325 12.9664 8.87715 13.0445 8.95529C13.1227 9.03343 13.1666 9.13941 13.1666 9.24992C13.1666 9.36043 13.1227 9.46641 13.0445 9.54455C12.9664 9.62269 12.8604 9.66658 12.7499 9.66658Z"
                        fill="#726BD3"
                        stroke="#726BD3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14 3.8333V2.66913C13.9999 2.41372 13.9412 2.16174 13.8282 1.93265C13.7153 1.70356 13.5512 1.50349 13.3487 1.34789C13.1461 1.1923 12.9105 1.08533 12.66 1.03527C12.4096 0.985197 12.151 0.993363 11.9042 1.05913L2.7375 3.5033C2.38254 3.59789 2.06878 3.8071 1.84499 4.0984C1.6212 4.38971 1.49992 4.74679 1.5 5.11413V5.49997"
                        stroke="#726BD3"
                        strokeWidth="1.5"
                    />
                </svg>
            ),
            nameStep: 'Stake tokens',
            description: "Stake tokens based on the degree of certainty you have in your model's predictions.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} viewBox="0 0 18 16" fill="none">
                    <path
                        d="M14.8333 14.6666H3.16667C2.72464 14.6666 2.30072 14.491 1.98816 14.1784C1.67559 13.8659 1.5 13.4419 1.5 12.9999V5.49992C1.5 5.05789 1.67559 4.63397 1.98816 4.32141C2.30072 4.00885 2.72464 3.83325 3.16667 3.83325H14.8333C15.2754 3.83325 15.6993 4.00885 16.0118 4.32141C16.3244 4.63397 16.5 5.05789 16.5 5.49992V12.9999C16.5 13.4419 16.3244 13.8659 16.0118 14.1784C15.6993 14.491 15.2754 14.6666 14.8333 14.6666Z"
                        stroke="#726BD3"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M12.7499 9.66658C12.6394 9.66658 12.5334 9.62269 12.4553 9.54455C12.3772 9.46641 12.3333 9.36043 12.3333 9.24992C12.3333 9.13941 12.3772 9.03343 12.4553 8.95529C12.5334 8.87715 12.6394 8.83325 12.7499 8.83325C12.8604 8.83325 12.9664 8.87715 13.0445 8.95529C13.1227 9.03343 13.1666 9.13941 13.1666 9.24992C13.1666 9.36043 13.1227 9.46641 13.0445 9.54455C12.9664 9.62269 12.8604 9.66658 12.7499 9.66658Z"
                        fill="#726BD3"
                        stroke="#726BD3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14 3.8333V2.66913C13.9999 2.41372 13.9412 2.16174 13.8282 1.93265C13.7153 1.70356 13.5512 1.50349 13.3487 1.34789C13.1461 1.1923 12.9105 1.08533 12.66 1.03527C12.4096 0.985197 12.151 0.993363 11.9042 1.05913L2.7375 3.5033C2.38254 3.59789 2.06878 3.8071 1.84499 4.0984C1.6212 4.38971 1.49992 4.74679 1.5 5.11413V5.49997"
                        stroke="#726BD3"
                        strokeWidth="1.5"
                    />
                </svg>
            ),
            nameStep: 'Earns',
            description: 'Your token will either be gained or burned depending on how well your model performs.',
        },
    ];
    return (
        <div className="grid grid-cols-12 mt-[460px] lg:mt-[400px] xl:mt-[520px] relative">
            <motion.div
                className="col-span-9 lg:col-span-6 xl:col-span-8 xl:mr-32 order-2 mt-[100px]"
                initial={{
                    x: '100%',
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.75,
                }}
            >
                <MenuStep
                    heading={'Staking'}
                    bgLine={'bg-accent_4'}
                    menuStep={menuStep}
                    borderIcon="border-accent_4"
                    extendsDescription="border-accent_4 bg-[#141145]"
                />
            </motion.div>
            <div className="col-span-3 lg:col-span-6 xl:col-span-4 order-1">
                <NumberCircle
                    extendsClassName="md:translate-x-[120px] lg:translate-x-[-150px] lg:translate-y-0 xl:translate-x-[-100px] xl:translate-y-[-12px] translate-y-[-12px] mx-0 border-accent_4 bg-[#141145]"
                    number="04"
                    textColor="text-accent_4"
                />
            </div>
            <div className="absolute top-[70px] lg:top-[150px] lg:left-[0px] xl:left-[60px]">
                <img src={vector7} alt="vector" className="hidden lg:block ml-auto" />
                <img src={vector8} alt="vector" className="lg:hidden translate-x-2 md:translate-x-[160px]" />
                <div className="translate-x-[-5px] md:translate-x-[150px] lg:translate-x-[90px] translate-y-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={19}
                        viewBox="0 0 28 19"
                        fill="none"
                        className="mx-auto"
                    >
                        <path
                            d="M15.557 17.4636C14.7818 18.3749 13.3852 18.4062 12.5699 17.5306L0.717686 4.80125C-0.458707 3.5378 0.410692 1.47758 2.13659 1.43887L25.2584 0.920301C26.9843 0.881594 27.9452 2.90077 26.8266 4.21569L15.557 17.4636Z"
                            fill="#677B9A"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Stake;
