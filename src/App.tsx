import { ToastContainer } from 'react-toastify';
import useRouterElements from './useRouterElements';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const routeElements = useRouterElements();

    return (
        <div>
            {routeElements}
            <ToastContainer position="top-center" />
        </div>
    );
}

export default App;
