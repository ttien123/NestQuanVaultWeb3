import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import logoNestQuant from 'src/assets/images/vault/logo_icon.png';
import Button from 'src/components/Button';
import InputNumber from 'src/components/InputNumber';
import { Schema, schema } from 'src/utils/Rules';

type FormData = Pick<Schema, 'withdraw'>;
const registerSchema = schema.pick(['withdraw']);

const WithDraw = () => {
    const [localValue, setLocalValue] = useState<string>('');

    const methods = useForm<FormData>({
        resolver: yupResolver(registerSchema),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    const onSubmit = handleSubmit((data) => {
        // const deposit = data.deposit.replace(/^0+/g, '');
        const { withdraw } = data;
        setLocalValue(Number(withdraw).toLocaleString());
        console.log(data);

        // if (deposit.slice(deposit.length - 1) === '.') {
        //     // setNewLocalValue(`${formattedNumber}.`);
        //     // console.log(`${formattedNumber}.`);
        //     setValue('deposit', deposit.split('.')?.[0]);
        // }

        // console.log(quantity);
    });
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
                    <FormProvider {...methods}>
                        <form onSubmit={onSubmit}>
                            <div className="relative">
                                <Controller
                                    control={control}
                                    name="withdraw"
                                    render={({ field }) => {
                                        return (
                                            <InputNumber
                                                type="text"
                                                name="withdraw"
                                                placeholder="0"
                                                setLocalValue={setLocalValue}
                                                localValue={localValue}
                                                onChange={field.onChange}
                                                value={field.value}
                                                ref={field.ref}
                                                errorsMessage={errors.withdraw?.message}
                                            />
                                        );
                                    }}
                                />

                                <button className="absolute top-[50%] translate-y-[-50%] right-4 text-[14px] rounded-2xl text-accent_3 font-semibold bg-transparent">
                                    Max
                                </button>
                            </div>
                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    extendsClassName="block w-full font-semibold text-white text-[16px] hover:opacity-80 transition-all duration-300"
                                >
                                    WithDraw
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default WithDraw;
