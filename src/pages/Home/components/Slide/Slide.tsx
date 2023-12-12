import BtnGetStarted from '../BtnGetStarted';
import slide from 'src/assets/images/home/slide.png';
import { motion } from 'framer-motion';

const Slide = () => {
    return (
        <div className="relative mt-8 lg:mt-[120px]">
            <div className="relative z-10 grid grid-cols-12 gap-4 py-[60px]">
                <motion.div
                    className="col-span-12 lg:col-span-7 mt-8"
                    initial={{
                        x: '-100%',
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <div className="flex items-center justify-center lg:justify-start">
                        <h2 className="flex-center-cst bg-rectangle shadow-rectangle text-[16px] lg:text-[20px] xl:text-[32px] lg:w-[274px] lg:h-[64px] py-[10px] px-3 font-semibold border border-[#3953DC] rounded-[44px]">
                            Predict & Win
                        </h2>
                        <span className="text-[16px] lg:text-[20px] xl:text-[32px] ml-3 font-semibold">
                            the Financial Market
                        </span>
                    </div>
                    <h1 className="uppercase mt-3 text-[18px] lg:text-[32px] xl:text-[40px] font-bold text-center lg:text-left">
                        NESTQUANT TOURNAMENT
                    </h1>
                    <h3 className="text-[14px] lg:text-[20px] xl:text-[24px] font-semibold mt-[12px] mb-[24px] text-center lg:text-left">
                        The ultimate data championship
                    </h3>
                    <p className="text-[12px] xl:text-[16px] font-normal text-neutral_2 mb-[40px] lg:max-w-[60%] text-center lg:text-left">
                        Dive in our rich crypto data sources, Build a model to predict the future, Compete and Win the
                        prize
                    </p>
                    <BtnGetStarted className="hidden lg:inline-block" />
                </motion.div>
                <motion.div
                    className="col-span-12 lg:col-span-5"
                    initial={{
                        x: '100%',
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <img
                        src={slide}
                        alt="Slide"
                        className="block mx-auto w-full translate-x-[12px] md:translate-x-[20px] lg:translate-x-0"
                    />
                    <BtnGetStarted className="mt-8 lg:hidden" isResponsive />
                </motion.div>
            </div>
        </div>
    );
};

export default Slide;
