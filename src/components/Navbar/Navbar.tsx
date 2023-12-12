import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import path from 'src/constants/path';
import handleClick from 'src/hooks/useScrollTop';
interface Props {
    isCol?: boolean;
}

interface ItemNav {
    name: string;
    href: string;
}

const Navbar = ({ isCol }: Props) => {
    const listVariants: Variants = {
        open: {
            opacity: 1,
            scale: 1,
        },
        closed: { opacity: 0, scale: 0 },
    };
    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    };

    const ListItemsNav: ItemNav[] = [
        {
            name: 'Data',
            href: path.dataPage,
        },
        {
            name: 'Leaderboard',
            href: path.dataPage,
        },
        {
            name: 'Documents',
            href: path.dataPage,
        },
        {
            name: 'Vault',
            href: path.vault,
        },
        {
            name: 'Signal',
            href: path.dataPage,
        },
    ];

    return (
        <motion.ul
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            variants={isCol ? listVariants : {}}
            transition={{
                duration: 0.5,
                type: 'spring',
                delayChildren: 0.3,
                staggerChildren: 0.05,
            }}
            style={{
                transformOrigin: '5% 0%',
                background: '#181F38',
            }}
            className={` ${isCol ? 'flex-col w-full relative z-10' : 'hidden lg:flex flex-row'} gap-[24px]`}
        >
            {ListItemsNav.map((item, index) => (
                <Link key={index} to={item.href} className="px-2">
                    <motion.li
                        variants={isCol ? itemVariants : {}}
                        transition={{
                            duration: 0.05,
                        }}
                        className={`${
                            isCol ? 'container' : ''
                        } relative group font-medium  cursor-pointer flex gap-[8px] h-[48px] items-center`}
                    >
                        {item.name}
                        {!isCol && (
                            <span className="absolute bottom-0 w-0 h-[4px] bg-white transition-all duration-500 group-hover:w-full"></span>
                        )}
                    </motion.li>
                </Link>
            ))}
        </motion.ul>
    );
};
export default Navbar;
