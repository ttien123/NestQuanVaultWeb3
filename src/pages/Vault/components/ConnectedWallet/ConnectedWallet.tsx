import ConnectedWalletIcon from 'src/assets/svg/ConnectedWalletIcon';
import ConnectedWalletIconRe from 'src/assets/svg/ConnectedWalletIconRe';
import CopyIcon from 'src/assets/svg/CopyIcon';
import LogoutIcon from 'src/assets/svg/LogoutIcon';
import DropDown from 'src/components/DropDown';

interface Props {
    isResponsive?: boolean;
    onClick: () => void;
    extendsClassName?: string;
}

const ConnectedWallet = ({ isResponsive, onClick, extendsClassName }: Props) => {
    return (
        <DropDown
            renderPopover={
                <div className="w-[172px] hidden lg:flex flex-col items-start rounded-xl p-2 shadow-dropDown bg-accent_5">
                    <div className="flex items-start px-[10px] py-2 gap-[10px]">
                        <div>
                            <CopyIcon />
                        </div>
                        <p className="text-[14px] font-semibold">Copy address</p>
                    </div>
                    <button onClick={onClick} className="flex items-start px-[10px] py-2 gap-[10px]">
                        <div>
                            <LogoutIcon />
                        </div>
                        <p className="text-[14px] font-semibold text-semantic_1">Logout</p>
                    </button>
                </div>
            }
            classNameWrapper="w-full translate-x-[-16px] lg:translate-x-0"
        >
            <div
                className={`cursor-pointer mx-4 lg:mx-0 ${extendsClassName}`}
                onClick={isResponsive ? onClick : undefined}
            >
                <div
                    className={`flex items-center py-1 px-2 bg-neutral_6 rounded-[40px] gap-5 ${
                        isResponsive ? ' justify-between' : ' justify-center'
                    }`}
                >
                    <div className="flex items-center justify-center gap-5">
                        <div>{!isResponsive ? <ConnectedWalletIcon /> : <ConnectedWalletIconRe />}</div>
                        <div>
                            <p className="text-xs font-medium text-neutral_2">0x9d84...d6bf</p>
                            <p className="text-[14px] font-semibold mt-[2px]">Connected</p>
                        </div>
                    </div>
                    <button>
                        {!isResponsive ? (
                            <svg
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.99408 7.61908C4.31951 7.29364 4.84715 7.29364 5.17259 7.61908L10 12.4465L14.8274 7.61908C15.1528 7.29364 15.6805 7.29364 16.0059 7.61908C16.3314 7.94451 16.3314 8.47215 16.0059 8.79759L11.1785 13.625C10.5276 14.2759 9.47236 14.2759 8.82149 13.625L3.99408 8.79759C3.66864 8.47215 3.66864 7.94451 3.99408 7.61908Z"
                                    fill="white"
                                />
                            </svg>
                        ) : (
                            <LogoutIcon />
                        )}
                    </button>
                </div>
            </div>
        </DropDown>
    );
};

export default ConnectedWallet;
