import ConnectWallet from '../ConnectWallet';

const HeaderVault = () => {
    return (
        <header className="sticky z-[100] left-0 top-[0] right-0 w-full pt-[40px] backdrop-blur-[8px]">
            <div className="flex items-center justify-between">
                <div className="text-[32px] font-semibold">Vaults</div>
                <ConnectWallet />
            </div>
        </header>
    );
};

export default HeaderVault;
