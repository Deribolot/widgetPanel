import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export default () => {
    return (
        <Text type="danger">
            Возникла ошибка при получении данных о погоде
        </Text>
    );
}