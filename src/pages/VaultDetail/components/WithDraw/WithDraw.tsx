import logoNestQuant from 'src/assets/images/vault/logo_icon.png';
import Button from 'src/components/Button';
import InputNumber from 'src/components/InputNumber';

const WithDraw = () => {
    return (
        <div className="pt-6">
            <div className="flex flex-col gap-4">
                <div>
                    <div className="text-white flex items-center justify-between text-[14px] mb-2 font-semibold">
                        <span>Unstake</span>
                        <div className="flex items-center justify-end text-neutral_3 font-medium text-[12px]">
                            <span>Staked:&nbsp;</span>
                            <div className="flex items-center justify-center">
                                {/* <Image src={vaultDetail?.vault.img2} alt="icon token" preview={false} /> */}
                                <img src={logoNestQuant} alt="img" className="block w-[12px] h-[12px]" />
                                &nbsp;
                                <span className="text-neutral_1 font-medium text-[12px] ">
                                    {/* {formatCurrency(myUsdtBalance, 2)} {'USDT'} */}
                                    0.00 USDT
                                </span>
                            </div>
                        </div>
                    </div>
                    <InputNumber />
                </div>
                <div>
                    <Button extendsClassName="block w-full font-semibold text-white text-[16px] hover:opacity-80 transition-all duration-300">
                        WithDraw
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WithDraw;
