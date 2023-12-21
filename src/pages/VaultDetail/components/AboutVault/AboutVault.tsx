import { useSelector } from 'react-redux';
import useGetTime from 'src/hooks/useGetTime';
import { listDescriptionVault } from 'src/mock/listDescriptionVault';
import { RootState } from 'src/store';
import { formatCurrency } from 'src/utils';

const AboutVault = () => {
    const getVaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const depositOrder = useSelector((state: RootState) => state.vaultStore.depositOrder);
    const withdrawOrder = useSelector((state: RootState) => state.vaultStore.withdrawOrder);
    const historicalData = useSelector((state: RootState) => state.vaultStore.historicalVaultData);
    const { vault, url, address } = getVaultDetail || {};
    const { remainingHours, remainingSeconds, remainingMinutes } = useGetTime(historicalData?.nextTimeRebalance);

    return (
        <div className="mt-[29px] text-white">
            <div>
                <p className="text-[16px] text-white mb-3 font-semibold">{`Next time to rebalance: ${remainingHours}:${remainingMinutes}:${remainingSeconds}`}</p>
                <p className="text-[13px] text-white mb-3 font-normal italic">
                    My pending deposit amount: {formatCurrency(depositOrder, 2)} {vault?.name.split('/')[1]}
                </p>
                <p className="text-[13px] text-white mb-3 font-normal italic">
                    My pending withdraw amount: {formatCurrency(withdrawOrder, 2)} shares
                </p>
                <p className="text-[16px] text-neutral_1 mb-1 font-semibold ">Description</p>
                {listDescriptionVault.map((value) => {
                    if (vault && vault.name === value.name) {
                        return (
                            <p className="font-medium text-neutral_3" key={value.name}>
                                {value.description}
                            </p>
                        );
                    }
                })}
            </div>

            <div className="mt-[29px]">
                <span className="text-neutral_1 font-semibold ml-3 text-[16px]">More Info</span>
                <div className="mt-[10px] flex flex-col gap-[14px]">
                    <div className="about-from">
                        {/* {tokens[0]}&nbsp;{vaultDetail.apy} */}
                        <a
                            href={`${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block py-[6px] px-3 bg-[#29384e] text-[16px] rounded-[40px] font-semibold text-[#1890ff] hover:bg-primary_1"
                        >
                            View Contract
                        </a>
                    </div>
                    <div className="">
                        <a
                            href="https://nestquant.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block py-[6px] px-3 bg-[#29384e] text-[16px] rounded-[40px] font-semibold text-[#1890ff] hover:bg-primary_1"
                        >
                            Tournament Leaderboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutVault;
