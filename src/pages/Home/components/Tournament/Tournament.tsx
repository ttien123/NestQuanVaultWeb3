import TournamentIcon from './TournamentIcons/TournamentIconv';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import NumberCircle from 'src/components/NumberCircle';
import MenuStep from '../MenuStep';
import React from 'react';
import WithData from '../WithData';
import Modeling from '../Modeling';
import Competing from '../Competing';
import Stake from '../Stake';

const Tournament = () => {
    return (
        <Element name="getStarted">
            <div className="mt-4 lg:mt-[80px] relative z-10">
                <motion.div
                    className="text-center"
                    initial={{
                        y: '100%',
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <h2 className="text-[18px] lg:text-[40px] font-bold">
                        Guideline for
                        <span className="bg-primary_1 bg-clip-text text-transparent"> NestQuant Tournament</span>
                    </h2>
                    <p className="text-[14px] lg:text-[16px] font-normal mt-3 text-neutral_3">
                        The following steps will help you be mindful with the tournament
                    </p>
                </motion.div>
                <div className="grid grid-cols-12 mt-[60px] lg:mt-[100px]">
                    <div className="col-span-6"></div>
                    <div className="col-span-12 lg:col-span-6 text-center">
                        <motion.div
                            className="py-3 px-6 text-[20px] font-bold inline-flex items-center justify-center rounded-[40px] border border-neutral_3"
                            initial={{
                                y: '100%',
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <span className="mr-[6px]">
                                <TournamentIcon />
                            </span>
                            Getting Started!
                        </motion.div>
                        <div className="my-[20px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={13}
                                height={91}
                                viewBox="0 0 13 91"
                                fill="none"
                                className="mx-auto"
                            >
                                <line x1={6} y1={71} x2={6} y2={20} stroke="#677B9A" strokeDasharray="4 8" />
                                <circle
                                    cx="6.5"
                                    cy={6}
                                    r={5}
                                    transform="rotate(-90 6.5 6)"
                                    stroke="#677B9A"
                                    strokeWidth={2}
                                />
                                <circle
                                    cx="6.5"
                                    cy={85}
                                    r={5}
                                    transform="rotate(-90 6.5 85)"
                                    stroke="#677B9A"
                                    strokeWidth={2}
                                />
                            </svg>
                        </div>
                        <div className="inline-flex flex-col w-[314px] lg:w-[379px] backdrop-blur-[20px] gap-[10px] p-3 bg-tournamentDes rounded-2xl shadow-tournamentDes">
                            <div>
                                <div className="flex items-center text-[16px] lg:text-[18px] font-semibold">
                                    <span className="mr-[12px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={8}
                                            height={8}
                                            viewBox="0 0 8 8"
                                            fill="none"
                                        >
                                            <circle cx={4} cy={4} r={4} fill="url(#paint0_linear_146_2302)" />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_146_2302"
                                                    x1="0.235294"
                                                    y1="1.2"
                                                    x2="12.6808"
                                                    y2="2.52217"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#3953DC" />
                                                    <stop offset={1} stopColor="#9C9BE6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    Join our tournament:
                                </div>
                                <p className="ml-6 mt-[10px] text-left font-medium text-[14px] text-neutral_3">
                                    We welcome data scientists, financial investors, quantitative traders… or anyone who
                                    can beat the market!
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center text-[18px] font-semibold">
                                    <span className="mr-[12px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={8}
                                            height={8}
                                            viewBox="0 0 8 8"
                                            fill="none"
                                        >
                                            <circle cx={4} cy={4} r={4} fill="url(#paint0_linear_146_2302)" />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_146_2302"
                                                    x1="0.235294"
                                                    y1="1.2"
                                                    x2="12.6808"
                                                    y2="2.52217"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#3953DC" />
                                                    <stop offset={1} stopColor="#9C9BE6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    View documentation:
                                </div>
                                <p className="ml-6 mt-[10px] text-left font-medium text-[14px] text-neutral_3">
                                    Look at our documentation for in depth information
                                </p>
                            </div>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={129}
                                height={168}
                                viewBox="0 0 129 168"
                                fill="none"
                                className="mx-auto translate-x-[100px] "
                            >
                                <path
                                    d="M82.4468 1C65.0243 5.59856 33.4963 21.4176 46.7642 47.9053C63.349 81.0149 -17.2388 95.6193 6.05596 75.8908C26.0001 59 148.786 109 124.663 138.957C105.364 162.922 94.5085 167.599 91.4931 166.942"
                                    stroke="#677B9A"
                                    strokeWidth={2}
                                    strokeDasharray="4 4"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                className="mx-auto translate-x-[130px] translate-y-[-12px]"
                            >
                                <path
                                    d="M2.48859 21.9401C1.29514 22.0248 0.294857 21.0497 0.34909 19.8545L1.13747 2.47953C1.21573 0.754972 3.29533 -0.066981 4.53149 1.13806L21.0923 17.282C22.3285 18.487 21.5598 20.5869 19.8378 20.7091L2.48859 21.9401Z"
                                    fill="#677B9A"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <WithData />
                <Modeling />
                <Competing />
                <Stake />
                <div className="mt-[410px]">
                    <div className="mx-auto w-[188.35px] h-[125.83px] flex-center-cst bg-btnFinish backdrop-blur-[20px] rounded-[50%] shadow-btnFinish font-bold rotate-[1.7deg]">
                        Finished!
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Tournament;
