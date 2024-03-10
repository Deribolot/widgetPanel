import React from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import WidgetPanel from '@/components/WidgetPanel';

export default function () {
    return (
        <ConfigProvider locale={ruRU}>
            <WidgetPanel />
        </ConfigProvider>
    );
}