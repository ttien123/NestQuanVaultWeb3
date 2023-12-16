import SearchBar from './components/SearchBar';
import useScrollTop from 'src/hooks/useScrollTop';
import SearchTable from './components/SearchTable';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useState } from 'react';
import SearchContainer from './components/SearchContainer';
import HeaderVault from './components/HeaderVault';

const Vault = () => {
    useScrollTop();
    const [searchVault, setSearchVault] = useState<string>('');
    const listVaults = useSelector((state: RootState) => state.vaultStore.listVault);
    const data = {
        // total: listVaults.length || 0,
        dataSource: listVaults.filter((e) =>
            e.vault.name.toLocaleLowerCase().includes(searchVault?.toLocaleLowerCase() || ''),
        ),
        // isLoading: loading,
    };

    const { dataSource } = data;

    return (
        <div>
            <div className="mt-12">
                <SearchContainer searchVault={searchVault} setSearchVault={setSearchVault}>
                    <SearchBar />
                    <SearchTable dataSource={dataSource} />
                </SearchContainer>
            </div>
        </div>
    );
};

export default Vault;
