import { VaultType } from 'src/constants/vault/type';
import { Radio } from 'antd';
import SearchIcon from 'src/assets/svg/SearchIcon';
import { SearchContainerType } from '../SearchContainer/SearchContainer';
import useDebounce from 'src/hooks/useDebounce';
import { useEffect, useState } from 'react';

interface Props extends SearchContainerType {}

const SearchBar = ({ searchVault, setSearchVault }: Props) => {
    const [valueSearch, setValueSearch] = useState('');
    const debouncedValue = useDebounce(valueSearch, 500);

    const vaultTypeList = [
        {
            label: 'All',
            value: VaultType.ALL,
        },
        {
            label: 'Swap',
            value: VaultType.STABLE,
        },
        {
            label: 'LP',
            value: VaultType.LP,
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setValueSearch(e.target.value);
        }
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchVault('');
            return;
        } else {
            setSearchVault(debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div className="mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4 lg:justify-between">
            <div className="flex gap-4 items-center justify-start">
                <Radio.Group defaultValue={'ALL'} optionType="button" options={vaultTypeList} />
            </div>
            <div className="flex items-center justify-start rounded-[100px] w-full md:w-[314px] py-2 px-4 bg-[#29384e]">
                <div className="mr-2">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={valueSearch}
                    onChange={handleChange}
                    className="bg-transparent text-[14px] font-normal outline-none text-[#9da7ba] w-full"
                />
            </div>
        </div>
    );
};

export default SearchBar;
