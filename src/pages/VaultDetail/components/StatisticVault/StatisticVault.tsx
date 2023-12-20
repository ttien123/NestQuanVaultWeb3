import { useSelector } from 'react-redux';
import ApyIcon from 'src/assets/svg/ApyIcon';
import DepositIcon from 'src/assets/svg/DepositIcon';
import MyBalanceIcon from 'src/assets/svg/MyBalanceIcon';
import TvlIcon from 'src/assets/svg/TvlIcon';
import { RootState } from 'src/store';
import { convertStatistics, formatCurrency } from 'src/utils';

interface IVaultDetail {
    apy?: string;
    tvl?: string;
    sharePrice?: string;
    myBalance?: string;
}

const StatisticVault = () => {
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const symbolKeysArr = vaultDetail?.vault?.name?.split('/');
    const keySymbol = symbolKeysArr?.pop() || '$';

    let vault: IVaultDetail = {
        apy: '',
        tvl: '',
        sharePrice: '',
        myBalance: '',
    };
    // console.log(vaultDetail);

    if (vaultDetail) {
        vault.apy = vaultDetail.apy;
        vault.tvl = vaultDetail.tvl;
        vault.sharePrice = vaultDetail.sharePrice;
        vault.myBalance = vaultDetail.myBalance;
    }
    //  else {
    //   vault.apy = data.apy;
    //   vault.tvl = data.tvl;
    //   vault.sharePrice = data.oneSharePrice;
    //   vault.myBalance = data.myBalance;
    // }

    const fmtTVL = convertStatistics(vault.tvl || '0');

    const listStatistic = [
        {
            name: 'APR',
            value: formatCurrency(vault.apy || vaultDetail?.apy || '0', 2) || '0',
            prefix: '',
            suffix: '%',
            className: 'apy',
            icon: <ApyIcon />,
            bgConic: 'bg-gradientConic1',
        },
        {
            name: 'TVL',
            value: fmtTVL.value,
            prefix: keySymbol + ' ',
            suffix: fmtTVL.suffix,
            className: 'tvl',
            icon: <TvlIcon />,
            bgConic: 'bg-gradientConic2',
        },
        {
            name: 'Share Price',
            value: vault.sharePrice || '0',
            prefix: keySymbol + ' ',
            suffix: '',
            className: 'deposit',
            icon: <DepositIcon />,
            bgConic: 'bg-gradientConic3',
        },
        {
            name: 'My Balance In Vault',
            value: vault.myBalance || vaultDetail?.myBalance || '0',
            prefix: keySymbol + ' ',
            suffix: '',
            className: 'balance',
            icon: <MyBalanceIcon />,
            bgConic: 'bg-gradientConic4',
        },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4">
            {listStatistic.map((item) => (
                <div
                    key={item.name}
                    className={`w-full min-w-[120px] rounded-[20px] py-[2px] px-[1.5px] opacity-[0.62] ${item.bgConic}`}
                >
                    <div className="w-full h-full flex flex-col gap-4 py-[14px] px-4 bg-background_2 rounded-[20px] ">
                        {item.icon}
                        <div className="mt-[18px] flex flex-col">
                            <span className="text-[14px] font-medium text-neutral_3">{item.name}</span>
                            <span className="text-[16px] font-semibold text-neutral_1">
                                {item.name != 'APR' ? Number(item.value).toFixed(2) : item.value}
                                {item.suffix} {item.prefix}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatisticVault;
