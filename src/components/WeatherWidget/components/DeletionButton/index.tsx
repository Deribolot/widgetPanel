
import React from 'react';
import { Button, Tooltip } from 'antd';
import {
    DeleteOutlined
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

interface IProps {
    className?: string,
    onClick?(): void,
}

export default function ({
    className: customClassName,
    onClick,
}: React.PropsWithChildren<IProps>) {
    const className = classnames(
        styles.button,
        { ...(customClassName ? { [customClassName]: true } : {}) }
    );

    return (
        <Tooltip title="настройки">
            <Button
                className={className}
                type="primary"
                shape="circle"
                icon={ <DeleteOutlined />}
                ghost
                onClick={onClick}
            />
        </Tooltip>
    );
}