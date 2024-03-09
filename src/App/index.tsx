import React, { useState } from 'react';
import { ConfigProvider, notification, Row, Button, Space } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';
import ruRU from 'antd/locale/ru_RU';
import Column from '@/components/Column';
import WeatherWidget from '@/components/WeatherWidget';
import styles from './index.less';

export default function () {
    const [api, contextHolder] = notification.useNotification();
    const [widgets, setWidgets] = useState([[<WeatherWidget api={api} />], [], []]);

    return (
        <>
            <ConfigProvider locale={ruRU}>
                <Space
                    className={styles.main}
                    direction="vertical"
                    size="small"
                >
                    {contextHolder}
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        ghost
                        onClick={() => {
                            setWidgets((oldWidgets) => [
                                [...oldWidgets[0], <WeatherWidget api={api} />],
                                oldWidgets[1],
                                oldWidgets[2]
                            ]);
                        }}
                    />
                    <Row gutter={16}>
                        <Column>
                            {widgets[0]}
                        </Column>
                        <Column>
                            {widgets[1]}
                        </Column>
                        <Column>
                            {widgets[2]}
                        </Column>
                    </Row>
                </Space>
            </ConfigProvider>
        </>
    );
}