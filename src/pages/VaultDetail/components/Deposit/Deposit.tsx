import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import NoteIcon from 'src/assets/svg/NoteIcon';
import Button from 'src/components/Button';
import InputNumber from 'src/components/InputNumber';
import { RootState } from 'src/store';
import { formatCurrency } from 'src/utils';
const Deposit = () => {
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const {
        handleSubmit,
        control,
        register,
        trigger,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    console.log(watch('deposit'));
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className="pt-6">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center">
                    <div>
                        <NoteIcon />
                    </div>
                    &nbsp; &nbsp;
                    <div className="text-[14px] font-medium text-neutral_3">
                        You don’t have enough USDT to deposit. You need to swap tokens to USDT
                    </div>
                </div>
                <div>
                    <div className="text-white flex items-center justify-between text-[14px] mb-2 font-semibold">
                        <span>Deposit</span>
                        <div className="flex items-center justify-end text-neutral_3 font-medium text-[12px]">
                            <span>Available to deposit:&nbsp;</span>
                            <div className="flex items-center justify-center">
                                {/* <Image src={vaultDetail?.vault.img2} alt="icon token" preview={false} /> */}
                                <img src={vaultDetail?.vault.img2} alt="img" className="block w-[12px] h-[12px]" />
                                &nbsp;
                                <span className="text-neutral_1 font-medium text-[12px] ">
                                    {/* {formatCurrency(myUsdtBalance, 2)} {'USDT'} */}
                                    0.00 USDT
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <form onSubmit={onSubmit}>
                            <Controller
                                control={control}
                                name="price_min"
                                render={({ field }) => {
                                    return (
                                        <InputNumber
                                            type="text"
                                            className="grow"
                                            placeholder="₫ TỪ"
                                            classNameInput="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                                            onChange={(event) => {
                                                field.onChange(event);
                                                trigger('price_max');
                                            }}
                                            value={field.value}
                                            classNameError="hidden"
                                            ref={field.ref}
                                        />
                                    );
                                }}
                            />
                            <button
                                type="submit"
                                className="absolute top-[50%] translate-y-[-50%] right-4 text-[14px] rounded-2xl text-accent_3 font-semibold bg-transparent"
                            >
                                Max
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <Button extendsClassName="block w-full font-semibold text-white text-[16px] hover:opacity-80 transition-all duration-300">
                        Deposit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
