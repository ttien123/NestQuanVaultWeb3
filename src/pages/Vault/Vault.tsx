import HeaderVault from './components/HeaderVault';
import SearchBar from './components/SearchBar';
import useScrollTop from 'src/hooks/useScrollTop';
import SearchTable from './components/SearchTable';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import ModalStep from 'src/components/ModalStep';
import { useVaultList } from 'src/hooks/vault/useVaultList';
import { MODAL_STEP } from 'src/components/ModalStep/ModalStep';
import { useState } from 'react';
import { SorterResult } from 'antd/es/table/interface';

const Vault = () => {
    const [sort, setSort] = useState<SorterResult<any>>({});

    useScrollTop();
    const listVaults = useSelector((state: RootState) => state.vaultStore.listVault);

    return (
        <div className="h-[5000px] py-[40px] px-4 md:px-6 lg:px-8 pt-0">
            <HeaderVault />
            <main className="mt-12">
                <SearchBar />
                <SearchTable dataSource={listVaults} sort={sort} />
            </main>
        </div>
    );
};

export default Vault;
