import { Empty, Table } from 'antd';
import type { ColumnsType, ColumnGroupType } from 'antd/es/table';
import BigNumber from 'bignumber.js';
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconTooltip from 'src/assets/svg/IconTooltip';
import NoData from 'src/assets/svg/NoData';
import { VaultDetailDTO, VaultKey } from 'src/types/vault/vaultDetail.type';
import { formatCurrency, getUnitValue, isValidStringNumber } from 'src/utils';
import { SortOrder } from 'antd/es/table/interface';
import path from 'src/constants/path';
import { useDispatch } from 'react-redux';
import { handleSetVaultDetail } from 'src/ReducerStore/useVaultStore/useVaultStore';

interface Props {
    dataSource?: VaultDetailDTO[];
}

const SearchTable = ({ dataSource }: Props) => {
    const disPatch = useDispatch();
    let unitValue = '';
    const navigate = useNavigate();
    const columns: ColumnsType<VaultDetailDTO> = useMemo(
        () =>
            [
                {
                    title: () => (
                        <span className="text-[18px] font-semibold bg-primary_2 bg-clip-text text-transparent py-[20px] pr-[30px]">
                            {'Vault'}
                        </span>
                    ),
                    width: '25%',
                    dataIndex: VaultKey.VAULT,
                    render: (_value: any, record: VaultDetailDTO) => {
                        const { address = '', vault } = record || {};
                        unitValue = getUnitValue(vault.name);
                        return (
                            <div className="flex items-center">
                                <div className="flex items-start w-[36px]">
                                    <img src={vault.img} alt="img1" className="w-[24px] h-[24px]" />
                                    {/* <Image src={vault.img} preview={false} alt='img1' className='img1' width={24} height={24} /> */}
                                    {/* {!vault.img2 ? null : (
                        <Image src={vault.img2} preview={false} alt='img2' className='img2' width={24} height={24} />
                      )} */}
                                </div>
                                <div className="name">{vault.name.split('/')[0]}</div>
                            </div>
                        );
                    },
                },
                {
                    title: () => (
                        <span className="text-[18px] font-semibold bg-primary_2 bg-clip-text text-transparent">
                            {'APR'}
                        </span>
                    ),
                    dataIndex: VaultKey.APY,
                    width: '22.5%',
                    sorter: {
                        compare: (a: any, b: any) =>
                            new BigNumber(a[VaultKey.APY] || 0).minus(new BigNumber(b[VaultKey.APY] || 0)).toNumber(),
                    },
                    defaultSortOrder: 'descend' as SortOrder,
                    render: (value: VaultDetailDTO[VaultKey.APY], _record: VaultDetailDTO) => {
                        return <span>{isValidStringNumber(value) ? `${formatCurrency(value, 2)}%` : '-'}</span>;
                    },
                },
                {
                    title: () => (
                        <span className="flex text-[18px] font-semibold bg-primary_2 bg-clip-text text-transparent">
                            {'TVL'}
                            <span className="ml-1 translate-y-[-10px]">
                                <IconTooltip />
                            </span>
                        </span>
                    ),
                    className: 'sorter-with-tooltip',
                    dataIndex: VaultKey.TVL,
                    width: '20%',
                    sorter: {
                        compare: (a: any, b: any) =>
                            new BigNumber(a[VaultKey.TVL] || 0).minus(new BigNumber(b[VaultKey.TVL] || 0)).toNumber(),
                    },
                    render: (value: VaultDetailDTO[VaultKey.TVL], _record: VaultDetailDTO) => (
                        <span>{isValidStringNumber(value) ? `${formatCurrency(value, 2)} ${unitValue}` : '-'}</span>
                    ),
                },
                {
                    title: () => (
                        <span className="text-[18px] font-semibold bg-primary_2 bg-clip-text text-transparent">
                            {'My Balance'}
                        </span>
                    ),
                    dataIndex: VaultKey.BALANCE,
                    width: '20%',
                    sorter: {
                        compare: (a: any, b: any) =>
                            new BigNumber(a[VaultKey.BALANCE] || 0)
                                .minus(new BigNumber(b[VaultKey.BALANCE] || 0))
                                .toNumber(),
                    },
                    render: (value: VaultDetailDTO[VaultKey.BALANCE], _record: VaultDetailDTO) => (
                        <span>{isValidStringNumber(value) ? `${formatCurrency(value, 2)} ${unitValue}` : '-'}</span>
                    ),
                },
            ].map(({ render, dataIndex, ...column }) => ({
                ...column,
                // ...(column?.sorter && { sortOrder: sort?.field === dataIndex ? sort.order : 'descend' }),
                // title: title || (
                //   <span className='title-tb-col'>{(VAULT_FIELDS_TEXT as { [key in VaultKey]?: string })[dataIndex]}</span>
                // ),
                dataIndex,
                key: dataIndex,
                render: (value: any, record: VaultDetailDTO) => (
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            navigate(`${path.vault}/${record.address}`);
                            disPatch(handleSetVaultDetail(record));
                        }}
                    >
                        {render(value, record)}
                    </div>
                ),
            })),
        [],
    );
    return (
        <div className="">
            <Table
                dataSource={dataSource}
                showSorterTooltip={false}
                columns={columns}
                pagination={false}
                rowKey={(record) => record.id}
                scroll={{ x: 1300 }}
                tableLayout="fixed"
                sortDirections={['ascend', 'descend', 'ascend']}
                locale={{ emptyText: <Empty image={<NoData />} description={'noData'} /> }}
            />
        </div>
    );
};

export default SearchTable;
