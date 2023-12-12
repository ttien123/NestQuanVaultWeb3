import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/base.css';
import './styles/component.css';
import './styles/Modal.css';
import './styles/table.css';
import './styles/responsive.css';
import App from 'src/App';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ConfigProvider theme={{ hashed: false }}>
                        <App />
                    </ConfigProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
