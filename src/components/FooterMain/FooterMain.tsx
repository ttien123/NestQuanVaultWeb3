import logo from 'src/assets/images/general/logo.png';
import Button from '../Button';

const FooterMain = () => {
    return (
        <div className="mt-[80px] py-[40px] bg-background_2">
            <div className="container">
                <div className="grid grid-cols-12 mb-8">
                    <div className="col-span-12 lg:col-span-4">
                        <div>
                            <img src={logo} alt="" className="block w-[160px] h-[32px]" />
                        </div>
                        <p className="mt-4 mb-6 text-[12px] text-neutral_3 font-normal">
                            Today's Cryptocurrency Price Prediction Tournament aims to combine the strengths of all data
                            scientists to build a super model that can win the market
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="flex-center-cst w-[48px] h-[48px] p-3 bg-accent_5 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={22}
                                    viewBox="0 0 14 22"
                                    fill="none"
                                >
                                    <path
                                        d="M4.03153 22L4 12H0V8H4V5.5C4 1.7886 6.29832 0 9.60914 0C11.1951 0 12.5581 0.11807 12.9553 0.17085V4.04948L10.6591 4.05052C8.85845 4.05052 8.50981 4.90614 8.50981 6.16171V8H13.75L11.75 12H8.50981V22H4.03153Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <button className="flex-center-cst w-[48px] h-[48px] p-3 bg-accent_5 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={20}
                                    viewBox="0 0 24 20"
                                    fill="none"
                                >
                                    <path
                                        d="M24 2.60005C23.1 3.00005 22.2 3.30005 21.2 3.40005C22.2 2.80005 23 1.80005 23.4 0.700049C22.4 1.30005 21.4 1.70005 20.3 1.90005C19.4 0.900049 18.1 0.300049 16.7 0.300049C14 0.300049 11.8 2.50005 11.8 5.20005C11.8 5.60005 11.8 6.00005 11.9 6.30005C7.7 6.10005 4.1 4.10005 1.7 1.10005C1.2 1.90005 1 2.70005 1 3.60005C1 5.30005 1.9 6.80005 3.2 7.70005C2.4 7.70005 1.6 7.50005 1 7.10005C1 7.10005 1 7.10005 1 7.20005C1 9.60005 2.7 11.6 4.9 12C4.5 12.1 4.1 12.2 3.6 12.2C3.3 12.2 3 12.2 2.7 12.1C3.3 14.1 5.1 15.5 7.3 15.5C5.6 16.8 3.5 17.6 1.2 17.6C0.8 17.6 0.4 17.6 0 17.5C2.2 18.9 4.8 19.7001 7.5 19.7001C16.6 19.7001 21.5 12.2 21.5 5.70005C21.5 5.50005 21.5 5.30005 21.5 5.10005C22.5 4.40005 23.3 3.50005 24 2.60005Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <button className="flex-center-cst w-[48px] h-[48px] p-3 bg-accent_5 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_4853_9475)">
                                        <path
                                            d="M20.3171 4.3697C18.7874 3.66784 17.1471 3.15072 15.4319 2.85451C15.4007 2.8488 15.3695 2.86309 15.3534 2.89164C15.1424 3.26687 14.9088 3.75634 14.7451 4.14109C12.9005 3.8649 11.0652 3.8649 9.25836 4.14109C9.09468 3.74781 8.85252 3.26687 8.6406 2.89164C8.62452 2.86403 8.5933 2.84973 8.56208 2.85451C6.84796 3.14973 5.20761 3.66686 3.67696 4.3697C3.66369 4.37542 3.65235 4.38494 3.6448 4.39731C0.533426 9.04567 -0.318949 13.5798 0.0991759 18.0577C0.101051 18.0796 0.113379 18.1005 0.130395 18.1139C2.18319 19.6214 4.17172 20.5366 6.12327 21.1433C6.15449 21.1528 6.18758 21.1414 6.20746 21.1157C6.66908 20.4852 7.0806 19.8205 7.43343 19.1215C7.45424 19.0805 7.43436 19.0319 7.3918 19.0157C6.73907 18.7682 6.11755 18.4662 5.51966 18.1234C5.47236 18.0958 5.46857 18.0282 5.51211 17.9958C5.63793 17.9015 5.76379 17.8034 5.88393 17.7044C5.90568 17.6863 5.93596 17.6825 5.9615 17.6939C9.88925 19.4872 14.1415 19.4872 18.0229 17.6939C18.0485 17.6815 18.0787 17.6853 18.1014 17.7034C18.2216 17.8024 18.3474 17.9015 18.4742 17.9957C18.5177 18.0281 18.5148 18.0958 18.4676 18.1234C17.8697 18.4729 17.2482 18.7681 16.5945 19.0148C16.5519 19.0309 16.533 19.0805 16.5538 19.1214C16.9143 19.8195 17.3258 20.4842 17.7789 21.1147C17.7978 21.1413 17.8318 21.1528 17.8631 21.1432C19.8241 20.5366 21.8126 19.6214 23.8654 18.1138C23.8834 18.1005 23.8948 18.0805 23.8966 18.0586C24.3971 12.8817 23.0585 8.38473 20.3482 4.39825C20.3416 4.38494 20.3303 4.37542 20.3171 4.3697ZM8.02007 15.3311C6.83755 15.3311 5.86316 14.2455 5.86316 12.9122C5.86316 11.5789 6.81861 10.4932 8.02007 10.4932C9.23089 10.4932 10.1959 11.5884 10.1769 12.9122C10.1769 14.2455 9.22143 15.3311 8.02007 15.3311ZM15.9948 15.3311C14.8123 15.3311 13.8379 14.2455 13.8379 12.9122C13.8379 11.5789 14.7934 10.4932 15.9948 10.4932C17.2056 10.4932 18.1706 11.5884 18.1517 12.9122C18.1517 14.2455 17.2057 15.3311 15.9948 15.3311Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4853_9475">
                                            <rect width={24} height={24} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button className="flex-center-cst w-[48px] h-[48px] p-3 bg-accent_5 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={12}
                                    viewBox="0 0 22 12"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.32995 0C9.64355 0 12.33 2.6864 12.33 6.00001C12.33 9.31361 9.64355 12 6.32995 12C3.01697 12 0.330566 9.31361 0.330566 6.00001C0.330566 2.6864 3.01697 0 6.32995 0ZM20.6115 0.94763C21.1958 0.94763 21.669 3.2099 21.669 6.00001C21.669 8.79011 21.1958 11.0524 20.6115 11.0524C20.0278 11.0524 19.5539 8.79011 19.5539 6.00001C19.5539 3.2099 20.0278 0.94763 20.6115 0.94763ZM15.9305 0.473815C17.6071 0.473815 18.9659 2.94784 18.9659 6.00001C18.9659 9.05217 17.6071 11.5262 15.9305 11.5262C14.2538 11.5262 12.8944 9.05217 12.8944 6.00001C12.8944 2.94784 14.2538 0.473815 15.9305 0.473815Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <button className="flex-center-cst w-[48px] h-[48px] p-3 bg-accent_5 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_4853_9487)">
                                        <path
                                            d="M9.41693 15.1809L9.01993 20.7649C9.58793 20.7649 9.83393 20.5209 10.1289 20.2279L12.7919 17.6829L18.3099 21.7239C19.3219 22.2879 20.0349 21.9909 20.3079 20.7929L23.9299 3.82092L23.9309 3.81992C24.2519 2.32392 23.3899 1.73892 22.4039 2.10592L1.11393 10.2569C-0.339066 10.8209 -0.317066 11.6309 0.866934 11.9979L6.30993 13.6909L18.9529 5.77992C19.5479 5.38592 20.0889 5.60392 19.6439 5.99792L9.41693 15.1809Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4853_9487">
                                            <rect width={24} height={24} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 lg:grid-cols-3 gap-5 mt-6 lg:mt-0">
                        <div className="col-span-2 lg:col-span-1">
                            <h5 className="text-[18px] font-semibold">Useful links</h5>
                            <div className="mt-4">
                                <p className="text-[14px] font-medium text-neutral_3">Overview</p>
                                <p className="text-[14px] font-medium text-neutral_3">Documents</p>
                                <p className="text-[14px] font-medium text-neutral_3">Contact us</p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <h5 className="text-[18px] font-semibold">Tournaments</h5>
                            <div className="mt-4">
                                <p className="text-[14px] font-medium text-neutral_3">Rounds</p>
                                <p className="text-[14px] font-medium text-neutral_3">Roadmap</p>
                            </div>
                        </div>
                        <div className="col-span-4 lg:col-span-1">
                            <div>
                                <h5 className="text-[18px] font-semibold">Subscribe</h5>
                                <div className="mt-4">
                                    <p className="text-[14px] font-medium text-neutral_3">
                                        Join our tournaments today!
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-[20px]">
                                <Button extendsClassName="w-full">Sign up now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FooterMain;
