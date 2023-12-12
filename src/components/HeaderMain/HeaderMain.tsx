import Button from '../Button';
import Navbar from '../Navbar';
import logo from 'src/assets/images/general/logo.png';
import Popover from '../Popover';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import path from 'src/constants/path';

const HeaderMain = () => {
    const [isHiddenHeader, setIsHiddenHeader] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 250) {
            setIsHiddenHeader(true);
        } else {
            setIsHiddenHeader(false);
        }
    });

    const handleClickLogo = () => {
        scroll.scrollToTop({
            duration: 800,
            smooth: true,
        });
    };

    return (
        <motion.header
            variants={{
                visible: {
                    y: 0,
                },
                hidden: {
                    y: '-100%',
                },
            }}
            animate={isHiddenHeader ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-background_2 lg:h-[82px] py-4 backdrop-blur-[10px] flex items-center fixed top-0 left-0 right-0 z-[100]"
        >
            <div className="container flex flex-wrap lg:gap-[24px] items-center justify-between flex-1">
                <div className="flex items-center">
                    <Popover className="flex" renderPopover={<Navbar isCol />}>
                        <button className="lg:hidden mr-4 md:mr-8 mx-auto h-[100%]">
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
                                    d="M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </Popover>
                    <Link to={path.home} onClick={handleClickLogo}>
                        <img src={logo} alt="" className="block w-[119.02px] h-[24px] lg:w-[198.421px] lg:h-[40px]" />
                    </Link>
                </div>
                <div className="flex items-centerp">
                    <Navbar />
                    <div className="flex !flex-1 ml-4 lg:ml-[24px] flex-shrink-0 items-center">
                        <Button isNormal>Sign in</Button>
                        <Button extendsClassName="ml-2 lg:ml-4">Sign up</Button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default HeaderMain;
