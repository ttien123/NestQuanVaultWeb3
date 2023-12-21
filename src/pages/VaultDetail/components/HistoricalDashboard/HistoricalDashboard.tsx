import classNames from 'classnames';
import { format } from 'date-fns';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { RootState } from 'src/store';
import { DATE_CHART_FORMAT, DATE_MONTH_FORMAT, formatCurrency } from 'src/utils';

const CustomTooltip: FC<any> = ({ active, payload, label, type }) => {
    if (label && active && payload && payload.length) {
        return (
            <div className="inline-flex p-2 flex-col items-start justify-center rounded-lg bg-background_2 border border-neutral_6 shadow-tooltip">
                <p className="font-semibold text-neutral_3">{`${format(
                    new Date(Number(label)),
                    DATE_CHART_FORMAT,
                )}`}</p>
                {type.value === 'apr' ? (
                    <p className="font-medium text-neutral_3 ">
                        {type.name}: {payload[0].value}%
                    </p>
                ) : (
                    <p className="font-medium text-neutral_3 ">
                        {type.name}: ${payload[0].value}
                    </p>
                )}
            </div>
        );
    }

    return null;
};

const HistoricalDashboard = () => {
    const [type, setType] = useState('price');
    const historicalData = useSelector((state: RootState) => state.vaultStore.historicalVaultData);
    const historicalType = [
        {
            name: 'Share Price',
            value: 'price',
        },
        {
            name: 'TVL',
            value: 'tvl',
        },
        {
            name: 'APR',
            value: 'apr',
        },
    ];
    return (
        <div className="mt-5">
            <div className="">
                <div className="flex gap-3">
                    {historicalType.map((e) => {
                        return (
                            <div
                                key={e.value}
                                className={classNames('text-white  cursor-pointer py-1 px-2 font-semibold rounded-lg', {
                                    'bg-primary_1': type === e.value,
                                })}
                                onClick={() => setType(e.value)}
                            >
                                {e.name}
                            </div>
                        );
                    })}
                </div>
                <div className="dashboard-content">
                    {historicalData && type === 'price' && (
                        <ResponsiveContainer height={250} width="100%">
                            <AreaChart
                                data={historicalData.sharePriceData}
                                margin={{
                                    top: 30,
                                    right: 0,
                                    left: -30,
                                    bottom: 10,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorUv"
                                        x1="100"
                                        y1="0"
                                        x2="100"
                                        y2="229.013"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#121856" stopOpacity="1" />
                                        <stop offset="1" stopColor="#181F38" stopOpacity="0.27" />
                                    </linearGradient>
                                </defs>

                                <XAxis
                                    dataKey="timestamp"
                                    tickFormatter={(data) => {
                                        return format(new Date(Number(data)), DATE_MONTH_FORMAT);
                                    }}
                                />
                                <YAxis
                                    tickLine={false}
                                    dataKey={'value'}
                                    domain={['dataMin - 1', 'dataMax + 1']}
                                    tickFormatter={(data) => {
                                        const value = formatCurrency(Number(data), 0);
                                        return `$${value}`;
                                    }}
                                />
                                <CartesianGrid horizontal vertical={false} stroke="#29384E" />

                                {historicalData.sharePriceData && historicalData.sharePriceData.length > 0 && (
                                    <Tooltip
                                        content={<CustomTooltip type={historicalType.find((x) => x.value == type)} />}
                                    />
                                )}
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#colorUv)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}

                    {historicalData && type === 'tvl' && (
                        <ResponsiveContainer height={250} width="100%">
                            <AreaChart
                                data={historicalData.tvlData}
                                margin={{
                                    top: 30,
                                    right: 0,
                                    left: -30,
                                    bottom: 20,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorUv"
                                        x1="100"
                                        y1="0"
                                        x2="100"
                                        y2="229.013"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#121856" stopOpacity="1" />
                                        <stop offset="1" stopColor="#181F38" stopOpacity="0.27" />
                                    </linearGradient>
                                </defs>

                                <XAxis
                                    dataKey="timestamp"
                                    tickFormatter={(data) => {
                                        return format(new Date(Number(data)), DATE_MONTH_FORMAT);
                                    }}
                                />
                                <YAxis
                                    tickLine={false}
                                    dataKey={'value'}
                                    domain={['dataMin - 1000', 'dataMax + 1000']}
                                    tickFormatter={(data) => {
                                        const value = formatCurrency(Number(data), 0);
                                        return `$${value}`;
                                    }}
                                />
                                <CartesianGrid horizontal vertical={false} stroke="#29384E" />

                                {historicalData.tvlData && historicalData.tvlData.length > 0 && (
                                    <Tooltip
                                        content={<CustomTooltip type={historicalType.find((x) => x.value == type)} />}
                                    />
                                )}
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#colorUv)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                    {historicalData && type === 'apr' && (
                        <ResponsiveContainer height={250} width="100%">
                            <AreaChart
                                data={historicalData.aprData}
                                margin={{
                                    top: 30,
                                    right: 0,
                                    left: -30,
                                    bottom: 20,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorUv"
                                        x1="100"
                                        y1="0"
                                        x2="100"
                                        y2="229.013"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#121856" stopOpacity="1" />
                                        <stop offset="1" stopColor="#181F38" stopOpacity="0.27" />
                                    </linearGradient>
                                </defs>

                                <XAxis
                                    dataKey="timestamp"
                                    tickFormatter={(data) => {
                                        return format(new Date(Number(data)), DATE_MONTH_FORMAT);
                                    }}
                                />
                                <YAxis
                                    tickLine={false}
                                    dataKey={'value'}
                                    allowDataOverflow={false}
                                    domain={[0, 'auto']}
                                    tickFormatter={(data) => {
                                        // console.log(data);

                                        const value = formatCurrency(Number(data), 2);
                                        // console.log(value);

                                        return `${value}%`;
                                    }}
                                />
                                <CartesianGrid horizontal vertical={false} stroke="#29384E" />

                                {historicalData.aprData && historicalData.aprData.length > 0 && (
                                    <Tooltip
                                        content={<CustomTooltip type={historicalType.find((x) => x.value == type)} />}
                                    />
                                )}
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#colorUv)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HistoricalDashboard;
