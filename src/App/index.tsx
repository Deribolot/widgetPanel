import React from 'react';
import { Space, ConfigProvider } from 'antd';
import WeatherWidget from '@/components/WeatherWidget';
import ruRU from 'antd/locale/ru_RU';

export default function () {
    return (
        <ConfigProvider locale={ruRU}>
            <Space>
                <WeatherWidget />
            </Space>
        </ConfigProvider>
    );
}