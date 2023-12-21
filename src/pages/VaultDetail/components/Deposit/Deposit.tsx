import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import NoteIcon from 'src/assets/svg/NoteIcon';
import Button from 'src/components/Button';
import InputNumber from 'src/components/InputNumber';
import ListWallet from 'src/components/ListWallet';
import ModalStep from 'src/components/ModalStep';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { useConnectWallet } from 'src/hooks/connectWallet/useConnectWallet';
import { useModal } from 'src/hooks/useModal';
import { useDeposit } from 'src/hooks/vault/useDeposit';
import { useVaultDetail } from 'src/hooks/vault/useVaultDetail';
import { changeChainId } from 'src/services/walletServices/walletServices';
import { RootState } from 'src/store';
import { formatCurrency, getBlockScanUrl, isLessThanOrEqualTo } from 'src/utils';
import { Schema, schema } from 'src/utils/Rules';

type FormData = Pick<Schema, 'deposit'>;
const registerSchema = schema.pick(['deposit']);

const Deposit = () => {
    const [localValue, setLocalValue] = useState<string>('');
    const { vaultId } = useParams();
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const myUsdtBalance = useSelector((state: RootState) => state.vaultStore.usdt);
    const address = useSelector((state: RootState) => state.Authentication.address);
    const currentChain = useSelector((state: RootState) => state.Authentication.currentChain);
    const vaultAddr = vaultId || vaultDetail?.address || '';

    const { open: openSelect, onCloseModal: onCloseSelectModal, onOpenModal: onOpenModalSelect } = useModal();

    const { getMyUSDTBalanceByVault, getDepositWithdrawOrderByVault } = useVaultDetail(currentChain, vaultAddr);

    const { handleDeposit, loading, txHash, step, resetModalStep, content } = useDeposit();

    const methods = useForm<FormData>({
        defaultValues: {
            deposit: '',
        },
        resolver: yupResolver(registerSchema),
    });

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = methods;

    const disabled = !!errors.deposit?.message || isLessThanOrEqualTo(myUsdtBalance, 0) || loading;

    const onSubmit = handleSubmit(async (data) => {
        const { deposit: value = '0' } = data;
        const isLastDot = value.slice(value.length - 1);
        let quantity = '0';
        if (isLastDot === '.') {
            quantity = value.split('.')[0];
            setValue('deposit', quantity);
        } else {
            quantity = value;
        }
        const isChain = await changeChainId(currentChain);
        if (isChain) {
            await handleDeposit({ amount: quantity, address: vaultAddr }, reset);
            await getMyUSDTBalanceByVault();
            await getDepositWithdrawOrderByVault();
        }
    });

    return (
        <div className="pt-6">
            <div className="flex flex-col gap-4">
                {isLessThanOrEqualTo(myUsdtBalance, 0) && (
                    <div className="flex items-center justify-center">
                        <div>
                            <NoteIcon />
                        </div>
                        &nbsp; &nbsp;
                        <div className="text-[14px] font-medium text-neutral_3">
                            You don’t have enough USDT to deposit. You need to swap tokens to USDT
                        </div>
                    </div>
                )}
                <div>
                    <div className="text-white flex items-center justify-between text-[14px] mb-2 font-semibold">
                        <span>Deposit</span>
                        <div className="flex items-center justify-end text-neutral_3 font-medium text-[12px]">
                            <span className="text-center">Available to deposit:&nbsp;</span>
                            <div className="flex items-center justify-center">
                                {/* <Image src={vaultDetail?.vault.img2} alt="icon token" preview={false} /> */}
                                <img src={vaultDetail?.vault.img2} alt="img" className="block w-[12px] h-[12px]" />
                                &nbsp;
                                <span className="text-neutral_1 font-medium text-[12px] ">
                                    {formatCurrency(myUsdtBalance, 2)} {'USDT'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <FormProvider {...methods}>
                        <form onSubmit={onSubmit} autoComplete="off">
                            <div className="relative">
                                <Controller
                                    control={control}
                                    name="deposit"
                                    render={({ field }) => {
                                        return (
                                            <InputNumber
                                                type="text"
                                                name="deposit"
                                                placeholder="0"
                                                setLocalValue={setLocalValue}
                                                localValue={localValue}
                                                onChange={field.onChange}
                                                myMoney={myUsdtBalance}
                                                value={field.value}
                                                ref={field.ref}
                                                errorsMessage={errors.deposit?.message}
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
                                        extendsClassName="disabled:cursor-not-allowed disabled:opacity-60 block w-full font-semibold text-white text-[16px] hover:opacity-80 transition-all duration-300"
                                    >
                                        Deposit
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
                </div>
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
    );
};

export default Deposit;
