import React from 'react';
import { Space, Col } from 'antd';

export default function ({ children } : React.PropsWithChildren) {
    return (
        <Col className="gutter-row" span={8}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                {children}
            </Space>
        </Col>
    );
}