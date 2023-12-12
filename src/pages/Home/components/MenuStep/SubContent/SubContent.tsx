import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PropsMenuStep } from '../../WithData/WithData';

interface Props {
    menuStep: PropsMenuStep[];
    borderIcon: string;
    extendsDescription: string;
}

const SubContent = ({ menuStep, borderIcon, extendsDescription }: Props) => {
    const [isOpen, setIsOpen] = useState(Array(menuStep.length).fill(false));
    const handleShowDes = (index: number) => {
        const updatedShowChild: boolean[] = [...isOpen];
        updatedShowChild[index] = !updatedShowChild[index];
        setIsOpen(updatedShowChild);
    };

    const rotateArrow: Variants = {
        open: {
            rotate: '-180deg',
        },
        closed: { rotate: 0 },
    };

    return (
        <div className="absolute w-full">
            {menuStep.map((step, index) => (
                <div className="flex w-full mt-6" key={index}>
                    <div className={`flex-center-cst mr-3 w-[32px] h-[32px] rounded-full border p-1 ${borderIcon}`}>
                        {step.icon}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div
                            onClick={(e) => handleShowDes(index)}
                            className="cursor-pointer flex items-center justify-between h-[32px] relative z-10"
                        >
                            <div className="text-[14px] lg:text-[18px] font-semibold">{step.nameStep}</div>
                            <motion.div
                                initial={'closed'}
                                animate={'open'}
                                variants={isOpen[index] ? rotateArrow : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.79289 8.54289C5.18342 8.15237 5.81658 8.15237 6.20711 8.54289L12 14.3358L17.7929 8.54289C18.1834 8.15237 18.8166 8.15237 19.2071 8.54289C19.5976 8.93341 19.5976 9.56658 19.2071 9.9571L13.4142 15.75C12.6332 16.531 11.3668 16.531 10.5858 15.75L4.79289 9.95711C4.40237 9.56658 4.40237 8.93342 4.79289 8.54289Z"
                                        fill="white"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {isOpen[index] && (
                                <motion.div
                                    className={`mt-3 p-3 border-[2px] rounded-xl ${extendsDescription}`}
                                    initial={{
                                        y: '-100%',
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        y: '-100%',
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                >
                                    {step.description}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubContent;
