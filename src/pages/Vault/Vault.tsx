import HeaderVault from './components/HeaderVault';
import SearchBar from './components/SearchBar';
import useScrollTop from 'src/hooks/useScrollTop';
import SearchTable from './components/SearchTable';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useState } from 'react';
import SearchContainer from './components/SearchContainer';

const Vault = () => {
    useScrollTop();
    const [searchVault, setSearchVault] = useState<string>('');
    const listVaults = useSelector((state: RootState) => state.vaultStore.listVault);
    console.log(searchVault);

    const data = {
        // total: listVaults.length || 0,
        dataSource: listVaults.filter((e) =>
            e.vault.name.toLocaleLowerCase().includes(searchVault?.toLocaleLowerCase() || ''),
        ),
        // isLoading: loading,
    };

    const { dataSource } = data;

    return (
        <div className="h-[5000px] py-[40px] px-4 md:px-6 lg:px-8 pt-0">
            <HeaderVault />
            <main className="mt-12">
                <SearchContainer searchVault={searchVault} setSearchVault={setSearchVault}>
                    <SearchBar />
                    <SearchTable dataSource={dataSource} />
                </SearchContainer>
            </main>
        </div>
    );
};

export default Vault;
