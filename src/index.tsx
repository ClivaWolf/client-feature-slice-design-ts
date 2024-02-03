import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import { ConfigProvider } from "antd";
import { themeToken as token } from "features/themeSwitcher";

import { Provider as ReduxProvider } from "react-redux";
import { mainStore } from "app/mainStore";

import { ThemeProvider } from 'features/themeSwitcher';

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ReduxProvider store={mainStore}>
        {/* <ConfigProvider theme={{ token }}> */}
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#00b96b',
                    borderRadius: 2,

                    // Alias Token
                    colorBgContainer: '#f6ffed',
                },
            }}
        >
            <React.StrictMode>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </React.StrictMode>
            </ConfigProvider>
    </ReduxProvider>,
);