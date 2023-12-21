import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import logoNestQuant from 'src/assets/images/vault/logo_icon.png';
import Button from 'src/components/Button';
import InputNumber from 'src/components/InputNumber';
import ListWallet from 'src/components/ListWallet';
import ModalStep from 'src/components/ModalStep';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { useModal } from 'src/hooks/useModal';
import { useVaultDetail } from 'src/hooks/vault/useVaultDetail';
import { useWithdraw } from 'src/hooks/vault/useWithdraw';
import { RootState } from 'src/store';
import { formatCurrency, getBlockScanUrl, isLessThanOrEqualTo } from 'src/utils';
import { Schema, schema } from 'src/utils/Rules';

type FormData = Pick<Schema, 'withdraw'>;
const registerSchema = schema.pick(['withdraw']);

const WithDraw = () => {
    const [localValue, setLocalValue] = useState<string>('');
    const { open: openSelect, onCloseModal: onCloseSelectModal, onOpenModal: onOpenModalSelect } = useModal();
    const currentChain = useSelector((state: RootState) => state.Authentication.currentChain);
    const address = useSelector((state: RootState) => state.Authentication.address);
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const { vaultId } = useParams();
    const vaultAddr = vaultId || vaultDetail?.address || '';
    const { handleWithdraw, loading, txHash, step, resetModalStep, content } = useWithdraw();
    const { getMyStakedByVault, getDepositWithdrawOrderByVault } = useVaultDetail(currentChain, vaultAddr);
    const myStakedAmount = useSelector((state: RootState) => state.vaultStore.staked);

    const methods = useForm<FormData>({
        resolver: yupResolver(registerSchema),
    });
    const {
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { errors },
    } = methods;

    const disabled = !!errors.withdraw?.message || isLessThanOrEqualTo(myStakedAmount, 0) || loading;

    const onSubmit = handleSubmit(async (data) => {
        const { withdraw: value = '0' } = data;
        let quantity = '0';
        const isLastDot = value.slice(value.length - 1);
        if (isLastDot === '.') {
            quantity = value.split('.')[0];
            setValue('withdraw', quantity);
        } else {
            quantity = value;
        }
        await handleWithdraw({ amount: quantity, address: vaultAddr }, reset);
        await getMyStakedByVault();
        await getDepositWithdrawOrderByVault();
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
                                    {formatCurrency(myStakedAmount, 2)} {'USDT'}
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
                                                myMoney={myStakedAmount}
                                                value={field.value}
                                                ref={field.ref}
                                                errorsMessage={errors.withdraw?.message}
                                            />
                                        );
                                    }}
                                />
                            </div>
                            <div className="mt-4">
                                {address ? (
                                    <Button
                                        type="submit"
                                        disabled={disabled}
                                        extendsClassName="block cursor-pointer w-full font-semibold text-white text-[16px] hover:opacity-80 transition-all duration-300"
                                    >
                                        WithDraw
                                    </Button>
                                ) : (
                                    <Button
                                        extendsClassName="block w-full text-white text-[16px]"
                                        onClick={onOpenModalSelect}
                                    >
                                        Connect Wallet
                                    </Button>
                                )}
                            </div>
                        </form>
                    </FormProvider>
                    <ListWallet openSelect={openSelect} onCloseSelectModal={onCloseSelectModal} />
                </div>
                <ModalStep
                    open={step !== MODAL_STEP.READY}
                    link={`${getBlockScanUrl(currentChain)}/${txHash}`}
                    step={step}
                    onClose={step !== MODAL_STEP.PROCESSING ? resetModalStep : undefined}
                    showClose={step !== MODAL_STEP.PROCESSING}
                    closable={step !== MODAL_STEP.PROCESSING}
                    content={content}
                />
            </div>
        </div>
    );
};

export default WithDraw;
