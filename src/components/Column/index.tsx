import React from 'react';
import { Space, Col, theme } from 'antd';
import { useDroppable } from '@dnd-kit/core';
import styles from './index.less';

const { useToken } = theme;

export default function ({ children, id }: React.PropsWithChildren<{ id: number }>) {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });

    const { token } = useToken();

    const style = {
        borderColor: isOver ? token.colorPrimary : token.colorBgBase,
    };

    return (
        <Col
            className={styles.col}
            span={8}
            ref={setNodeRef}
            style={style}
        >
            <Space
                className={styles.space}
                direction="vertical"
            >
                {children}
            </Space>
        </Col>
    );
}