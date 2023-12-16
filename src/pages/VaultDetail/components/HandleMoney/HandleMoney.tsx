import { Tabs } from 'antd';
import React from 'react';
import { SwapTabs } from 'src/constants/vault/type';
import Deposit from '../Deposit';
import WithDraw from '../WithDraw';

const HandleMoney = () => {
    const items = [
        {
            label: SwapTabs.deposit.name,
            key: SwapTabs.deposit.key,
            // children: <Deposit />,
            children: <Deposit />,
        },
        {
            label: SwapTabs.withdraw.name,
            key: SwapTabs.withdraw.key,
            children: <WithDraw />,
            // children: <Withdraw />,
        },
    ];
    return <Tabs items={items} className="app-tabs" centered destroyInactiveTabPane />;
};

export default HandleMoney;
