import React from 'react';
import { Link } from 'react-router-dom';
import imgAuth from 'src/assets/images/auth/Crypto Illustration_Crypto Mobile App.png';
import logoName from 'src/assets/svg/logoName.svg';
import path from 'src/constants/path';
import useScrollTop from 'src/hooks/useScrollTop';
import { motion } from 'framer-motion';
interface Props {
    children: React.ReactNode;
}
const AuthLayout = ({ children }: Props) => {
    useScrollTop();
    return (
        <div>
            <motion.header
                className="fixed top-0 w-full z-10 "
                initial={{
                    y: '-100%',
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.75,
                }}
            >
                <div className="px-16 text-center md:text-left mx-auto mt-10">
                    <Link to={path.home} className="inline-block">
                        <img src={logoName} alt="Logo" />
                    </Link>
                </div>
            </motion.header>
            <div className="grid grid-cols-2 bg-background_2">
                <motion.div
                    className="hidden md:col-span-1 relative h-[100vh] md:flex items-center justify-center bg-[#273155;]"
                    initial={{
                        x: '-100%',
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
                    <img src={imgAuth} alt="img" className="w-[550px]" />
                    <div className="absolute w-[441.247px] h-[522.92px] rotate-[29.123deg] bg-[#B1A4FF] blur-[130.1132354736328px] opacity-30"></div>
                </motion.div>
                <motion.div
                    className="col-span-2 md:col-span-1 h-[100vh]"
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
                    <div className="h-full">
                        <div className="pt-[120px] md:pt-[50px] px-[16px] lg:px-[50px] xl:px-[150px] pb-[80px] h-full">
                            <h2 className="text-[25px] xl:text-[32px]  text-center font-bold">Welcome to NestQuant!</h2>
                            {children}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthLayout;
