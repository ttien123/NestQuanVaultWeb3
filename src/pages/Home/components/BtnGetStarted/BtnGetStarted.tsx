import Button from 'src/components/Button';
import { Link } from 'react-scroll';

interface Props {
    className?: string;
    isResponsive?: boolean;
}

const BtnGetStarted = ({ className, isResponsive }: Props) => {
    return (
        <div className={className}>
            <Link to="getStarted" spy={true} smooth={true} duration={800} offset={-16}>
                <Button extendsClassName="w-[195px] h-[40px] mx-auto lg:mx-0">Getting Started</Button>
            </Link>
            <div className="mt-[15px]">
                <div className="text-center">
                    {isResponsive ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="8"
                            viewBox="0 0 16 8"
                            fill="none"
                            className="mx-auto"
                        >
                            <path
                                d="M8 7.65771L0.205772 0.157715L15.7942 0.157715L8 7.65771Z"
                                fill="url(#paint0_linear_538_9542)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_538_9542"
                                    x1="16.4706"
                                    y1="6.15771"
                                    x2="-10.8489"
                                    y2="0.933522"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3953DC" />
                                    <stop offset="1" stopColor="#9C9BE6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={10}
                            viewBox="0 0 16 10"
                            fill="none"
                            className="mx-auto"
                        >
                            <path
                                d="M8 9.65771L0.205772 0.657715L15.7942 0.657715L8 9.65771Z"
                                fill="url(#paint0_linear_538_9543)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_538_9543"
                                    x1="16.4706"
                                    y1="7.85771"
                                    x2="-11.1466"
                                    y2="3.45678"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3953DC" />
                                    <stop offset={1} stopColor="#9C9BE6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BtnGetStarted;
