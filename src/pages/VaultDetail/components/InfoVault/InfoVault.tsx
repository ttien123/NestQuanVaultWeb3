import { Tabs } from 'antd';
import React from 'react';
import { VaultInfoTabs } from 'src/constants/vault/type';
import AboutVault from '../AboutVault';
import HistoricalDashboard from '../HistoricalDashboard';

const InfoVault = () => {
    const items = [
        {
            label: VaultInfoTabs.about.name,
            key: VaultInfoTabs.about.key,
            children: <AboutVault />,
        },
        {
            label: VaultInfoTabs.historical.name,
            key: VaultInfoTabs.historical.key,
            children: <HistoricalDashboard />,
        },
    ];
    return (
        <div className="info-vault mt-[18px] bg-gradientConic1 rounded-[20px] p-[2px] opacity-[0.62]">
            <div className="bg-background_2 rounded-[20px]">
                <Tabs
                    //   activeKey={VaultInfoTabs.about.key}
                    items={items}
                    className="app-tabs"
                    // destroyInactiveTabPane
                />
            </div>
        </div>
    );
};

export default InfoVault;
