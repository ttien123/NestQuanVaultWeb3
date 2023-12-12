import { useRoutes } from 'react-router-dom';
import path from './constants/path';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import DataPage from './pages/DataPage';
import VaultLayout from './Layouts/VaultLayout';
import Vault from './pages/Vault';

const useRouterElements = () => {
    const routeElements = useRoutes([
        {
            path: path.home,
            index: true,
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            ),
        },
        {
            path: path.dataPage,
            element: (
                <MainLayout>
                    <DataPage />
                </MainLayout>
            ),
        },
        {
            path: path.vault,
            element: (
                <VaultLayout>
                    <Vault />
                </VaultLayout>
            ),
        },
    ]);

    return routeElements;
};

export default useRouterElements;
