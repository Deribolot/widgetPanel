
import React from 'react';
import { Button, Tooltip } from 'antd';
import {
    SettingOutlined,
    CloseOutlined
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

interface IProps {
    className?: string,
    isSettingMode: boolean,
    onClick?(): void,
}

export default function ({
    className: customClassName,
    onClick,
    isSettingMode
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
                icon={isSettingMode ? <CloseOutlined /> : <SettingOutlined />}
                ghost
                onClick={onClick}
            />
        </Tooltip>
    );
}