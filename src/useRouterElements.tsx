import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import path from './constants/path';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import DataPage from './pages/DataPage';
import VaultLayout from './Layouts/VaultLayout';
import Vault from './pages/Vault';
import VaultDetail from './pages/VaultDetail';
import AuthLayout from './Layouts/AuthLayout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function ProtectedRoute() {
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
}
function RejectedRoute() {
    const isAuthenticated = false;

    return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
}

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
        {
            path: path.vaultDetail,
            element: (
                <VaultLayout>
                    <VaultDetail />
                </VaultLayout>
            ),
        },
        {
            path: '',
            element: <RejectedRoute />,
            children: [
                {
                    path: path.signUp,
                    element: (
                        <AuthLayout>
                            <SignUp />
                        </AuthLayout>
                    ),
                },
                {
                    path: path.signIn,
                    element: (
                        <AuthLayout>
                            <SignIn />
                        </AuthLayout>
                    ),
                },
            ],
        },
    ]);

    return routeElements;
};

export default useRouterElements;
